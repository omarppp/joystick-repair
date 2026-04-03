import { NextRequest, NextResponse } from "next/server";
import { findBestMatch, diagnosticDataset } from "@/lib/diagnostic-engine";

type TroubleshootPayload = {
  deviceType: string;
  symptoms: string;
  startedWhen?: string;
  dropped?: string;
  liquid?: string;
  repaired?: string;
  additionalInfo?: string;
};

type TroubleshootResponse = {
  title: string;
  confidence: number;
  likely_issue: string;
  possible_causes: string[];
  urgency: string;
  repair_difficulty: string;
  recommended_next_step: string;
  warning_notes?: string[];
  disclaimer: string;
  support_message: string;
  follow_up_questions?: string[];
};

export async function POST(request: NextRequest) {
  try {
    const body: TroubleshootPayload = await request.json();

    // Validate required fields
    if (!body.deviceType || !body.symptoms?.trim()) {
      return NextResponse.json(
        { error: "نوع الجهاز والأعراض مطلوبة" },
        { status: 400 }
      );
    }

    // Find the best matching diagnostic case
    const bestMatch = findBestMatch(
      body.deviceType,
      body.symptoms + (body.additionalInfo ? ` ${body.additionalInfo}` : ""),
      {
        dropped: body.dropped,
        liquid: body.liquid,
        repaired: body.repaired,
        startedWhen: body.startedWhen,
      }
    );

    if (!bestMatch) {
      // Return low confidence fallback
      const fallbackCase = diagnosticDataset.find(c => c.id === "unclear_issue");
      if (fallbackCase) {
        return NextResponse.json({
          ...fallbackCase.diagnosis,
          summary: `بناءً على وصفك للمشكلة في ${body.deviceType}: "${body.symptoms}"، لا يمكن تحديد السبب الدقيق من المعلومات المتاحة. يُفضل الفحص الفعلي.`,
        });
      }
    }

    // Return the matched diagnosis
    const diagnosis = bestMatch!.diagnosis;
    return NextResponse.json({
      ...diagnosis,
      summary: `بناءً على وصفك للمشكلة في ${body.deviceType}: "${body.symptoms}"، إليك التشخيص الأولي:`,
    });

  } catch (error) {
    console.error("Diagnostic engine error:", error);
    return NextResponse.json(
      { error: "حدث خطأ في محرك التشخيص. يرجى المحاولة مرة أخرى." },
      { status: 500 }
    );
  }
}
