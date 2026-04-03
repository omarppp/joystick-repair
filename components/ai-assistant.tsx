"use client";

import { FormEvent, useState } from "react";

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
  summary?: string;
};

const deviceOptions = [
  "PS5 controller",
  "PS4 controller",
  "Xbox controller",
  "Nintendo Switch",
  "Console",
  "أخرى",
];

const examples = [
  "العصا تتحرك لوحدها",
  "الزر R2 عالق",
  "اليد لا تشحن",
  "الجهاز يسخن بسرعة",
  "بيفصل لوحده",
  "الأزرار مش شغالة",
];

export default function AIAssistant() {
  const [deviceType, setDeviceType] = useState("PS5 controller");
  const [symptoms, setSymptoms] = useState("");
  const [startedWhen, setStartedWhen] = useState("");
  const [dropped, setDropped] = useState("No");
  const [liquid, setLiquid] = useState("No");
  const [repaired, setRepaired] = useState("No");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TroubleshootResponse | null>(null);
  const [followUps, setFollowUps] = useState<string[]>([]);
  const [error, setError] = useState("");

  const runSuggestion = (example: string) => {
    setSymptoms(example);
    setResult(null);
    setFollowUps([]);
    setError("");
  };

  const submitProblem = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!symptoms.trim()) {
      setError("يرجى وصف المشكلة أو اختيار مثال.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/troubleshoot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deviceType,
          symptoms,
          startedWhen,
          dropped,
          liquid,
          repaired,
          additionalInfo,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        let message = "AI assistant service failed. Please try again later.";

        try {
          const parsedError = JSON.parse(errorBody);
          message = parsedError?.error || message;
        } catch {
          message = errorBody || message;
        }

        throw new Error(message);
      }

      const data = (await response.json()) as TroubleshootResponse;

      if (!data || !data.summary) {
        throw new Error("Invalid response from AI assistant.");
      }

      setResult(data);
      setFollowUps(data.follow_up_questions || []);
    } catch (err) {
      setError((err as Error).message || "Could not get AI assistant results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="relative overflow-hidden bg-gradient-to-br from-[#0a0f1a] via-[#0f1419] to-[#0a0f1a] py-20 sm:py-28" dir="rtl">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan-500/8 blur-3xl md:h-80 md:w-80" aria-hidden="true" />
        <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-teal-500/8 blur-3xl md:h-80 md:w-80" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-r from-cyan-500/5 to-teal-500/5 blur-3xl" aria-hidden="true" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Premium header section */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 px-6 py-3 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse" />
            <span className="text-sm font-semibold text-cyan-300 tracking-wide">محرك تشخيص ذكي متقدم</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse" />
          </div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            اسأل الذكاء الاصطناعي عن
            <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              مشكلة جهازك
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl leading-relaxed">
            احصل على تشخيص تقني احترافي وأسباب محتملة وخطوات الإصلاح المناسبة قبل التواصل مع Joystick Repair.
            <span className="block mt-2 text-cyan-300 font-medium">محرك تشخيص محلي سريع ودقيق - لا يعتمد على الإنترنت</span>
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Enhanced form section */}
          <form
            onSubmit={submitProblem}
            className="group relative rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-white/8 via-white/5 to-white/8 p-8 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/40 hover:shadow-cyan-500/10 hover:shadow-2xl"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative grid gap-6">
              {/* Device type with enhanced styling */}
              <label className="space-y-3 text-sm text-slate-200">
                <span className="block font-bold text-white text-lg">نوع الجهاز</span>
                <div className="relative">
                  <select
                    value={deviceType}
                    onChange={(e) => setDeviceType(e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-slate-600/50 bg-gradient-to-r from-[#0b1626] to-[#0f1a2a] px-4 py-4 text-base text-slate-100 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-300/20 focus:shadow-lg focus:shadow-cyan-500/20 hover:border-slate-500/70"
                  >
                    {deviceOptions.map((device) => (
                      <option key={device} value={device} className="bg-[#0f1a2a] text-slate-100">
                        {device}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </label>

              {/* Enhanced symptoms input */}
              <label className="space-y-3 text-sm text-slate-200">
                <span className="block font-bold text-white text-lg">المشكلة / الأعراض</span>
                <textarea
                  required
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  rows={5}
                  placeholder="مثال: العصا تتحرك لوحدها، الزر R2 عالق، الجهاز بيفصل لوحده..."
                  className="w-full resize-none rounded-2xl border border-slate-600/50 bg-gradient-to-r from-[#0b1626] to-[#0f1a2a] px-4 py-4 text-base text-slate-100 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-300/20 focus:shadow-lg focus:shadow-cyan-500/20 hover:border-slate-500/70 placeholder:text-slate-500"
                />
              </label>

              {/* Enhanced condition inputs */}
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-3 text-sm text-slate-200">
                  <span className="block font-semibold text-white">متى بدأت المشكلة؟</span>
                  <input
                    value={startedWhen}
                    onChange={(e) => setStartedWhen(e.target.value)}
                    type="text"
                    placeholder="مثال: من أسبوعين، فجأة، تدريجياً..."
                    className="w-full rounded-2xl border border-slate-600/50 bg-gradient-to-r from-[#0b1626] to-[#0f1a2a] px-4 py-4 text-base text-slate-100 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-300/20 focus:shadow-lg focus:shadow-cyan-500/20 hover:border-slate-500/70 placeholder:text-slate-500"
                  />
                </label>
                <label className="space-y-3 text-sm text-slate-200">
                  <span className="block font-semibold text-white">هل الجهاز وقع؟</span>
                  <div className="relative">
                    <select
                      value={dropped}
                      onChange={(e) => setDropped(e.target.value)}
                      className="w-full appearance-none rounded-2xl border border-slate-600/50 bg-gradient-to-r from-[#0b1626] to-[#0f1a2a] px-4 py-4 text-base text-slate-100 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-300/20 focus:shadow-lg focus:shadow-cyan-500/20 hover:border-slate-500/70"
                    >
                      <option value="No" className="bg-[#0f1a2a] text-slate-100">لا</option>
                      <option value="Yes" className="bg-[#0f1a2a] text-slate-100">نعم</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </label>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-3 text-sm text-slate-200">
                  <span className="block font-semibold text-white">هل تعرض لسائل؟</span>
                  <div className="relative">
                    <select
                      value={liquid}
                      onChange={(e) => setLiquid(e.target.value)}
                      className="w-full appearance-none rounded-2xl border border-slate-600/50 bg-gradient-to-r from-[#0b1626] to-[#0f1a2a] px-4 py-4 text-base text-slate-100 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-300/20 focus:shadow-lg focus:shadow-cyan-500/20 hover:border-slate-500/70"
                    >
                      <option value="No" className="bg-[#0f1a2a] text-slate-100">لا</option>
                      <option value="Yes" className="bg-[#0f1a2a] text-slate-100">نعم</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </label>
                <label className="space-y-3 text-sm text-slate-200">
                  <span className="block font-semibold text-white">هل تم إصلاحه من قبل؟</span>
                  <div className="relative">
                    <select
                      value={repaired}
                      onChange={(e) => setRepaired(e.target.value)}
                      className="w-full appearance-none rounded-2xl border border-slate-600/50 bg-gradient-to-r from-[#0b1626] to-[#0f1a2a] px-4 py-4 text-base text-slate-100 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-300/20 focus:shadow-lg focus:shadow-cyan-500/20 hover:border-slate-500/70"
                    >
                      <option value="No" className="bg-[#0f1a2a] text-slate-100">لا</option>
                      <option value="Yes" className="bg-[#0f1a2a] text-slate-100">نعم</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </label>
              </div>

              {/* Enhanced additional info */}
              <label className="space-y-3 text-sm text-slate-200">
                <span className="block font-semibold text-white">ملاحظات إضافية (اختياري)</span>
                <textarea
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  rows={3}
                  placeholder="أي تفاصيل إضافية تساعد في تحسين دقة التشخيص..."
                  className="w-full resize-none rounded-2xl border border-slate-600/50 bg-gradient-to-r from-[#0b1626] to-[#0f1a2a] px-4 py-4 text-base text-slate-100 outline-none transition-all duration-300 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-300/20 focus:shadow-lg focus:shadow-cyan-500/20 hover:border-slate-500/70 placeholder:text-slate-500"
                />
              </label>

              {/* Enhanced submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 px-8 py-5 text-lg font-bold text-white shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-400/50 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-cyan-500/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-center gap-3">
                    {loading ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        <span>جاري التشخيص المتقدم...</span>
                      </>
                    ) : (
                      <>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span>احصل على التشخيص المتقدم</span>
                      </>
                    )}
                  </div>
                </button>
              </div>

              {/* Enhanced error display */}
              {error && (
                <div className="rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-600/10 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-red-300 text-lg">حدثت مشكلة</p>
                      <p className="mt-1 text-red-100">{error}</p>
                      <p className="mt-3 text-sm text-red-200">إذا استمرت المشكلة، تواصل معنا عبر واتساب للمساعدة الفورية.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>

          {/* Enhanced right panel */}
          <div className="group relative rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-white/8 via-white/5 to-white/8 p-8 shadow-2xl shadow-black/50 backdrop-blur-xl">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              {/* Premium Examples Section */}
              <div className="mb-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse" />
                  <h3 className="text-xl font-bold text-white">أمثلة شائعة للمشاكل</h3>
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse" />
                </div>

                <div className="grid gap-4">
                  {examples.map((example, index) => (
                    <button
                      key={example}
                      onClick={() => runSuggestion(example)}
                      className="group relative overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-[#0f1f34] via-[#1a2a3a] to-[#0f1f34] p-5 text-right text-base font-semibold text-cyan-100 shadow-xl shadow-cyan-500/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/60 hover:shadow-cyan-500/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {/* Circuit pattern overlay */}
                      <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3C/g%3E%3Cpath d='M15 15l7.5-7.5M15 15l-7.5 7.5M15 15l7.5 7.5M15 15l-7.5-7.5' stroke='%23ffffff' stroke-width='0.3' stroke-opacity='0.1'/%3E%3C/svg%3E")`
                      }} />

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 transition-colors duration-300" />
                          <span className="text-cyan-300/70 text-sm font-medium">اضغط للتشخيص التلقائي</span>
                        </div>
                        <span className="text-white group-hover:text-cyan-100 transition-colors duration-300">{example}</span>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Premium Advanced Diagnostic Results */}
              {result && (
                <div className="mt-8 space-y-8">
                  {/* Diagnostic Status Header */}
                  <div className="relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-[#0a1628] via-[#0f1a2a] to-[#0a1628] p-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
                    {/* Circuit pattern overlay */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`
                    }} />

                    {/* Status indicator bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500" />

                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                            <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '0.5s' }} />
                            <div className="h-3 w-3 rounded-full bg-teal-400 animate-pulse shadow-lg shadow-teal-400/50" style={{ animationDelay: '1s' }} />
                          </div>
                          <h3 className="text-3xl font-bold text-white tracking-wide">نتيجة التشخيص المتقدم</h3>
                        </div>
                        <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 px-4 py-2 border border-cyan-400/30">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse" />
                          <span className="text-sm font-bold text-cyan-300">دقة التشخيص</span>
                          <span className="text-lg font-bold text-white">{result.confidence || 85}%</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-600/30">
                        <p className="text-slate-200 leading-relaxed text-lg font-medium">{result.summary}</p>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Diagnostic Cards Grid */}
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Critical Issue Card */}
                    <div className="group relative overflow-hidden rounded-3xl border border-red-400/40 bg-gradient-to-br from-red-500/15 via-red-600/10 to-red-500/15 p-6 shadow-xl shadow-red-500/10 backdrop-blur-xl transition-all duration-500 hover:border-red-400/60 hover:shadow-red-400/20 hover:shadow-2xl hover:scale-[1.02]">
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/30 to-transparent rounded-bl-3xl" />
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-400/20 to-transparent rounded-bl-3xl" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-red-400 to-red-500 animate-pulse shadow-lg shadow-red-400/50" />
                          <h4 className="text-lg font-bold text-red-300 tracking-wide">المشكلة المحتملة</h4>
                          <div className="flex-1 h-px bg-gradient-to-r from-red-400/50 to-transparent" />
                        </div>
                        <p className="text-white font-semibold leading-relaxed text-lg">{result.likely_issue}</p>
                      </div>
                    </div>

                    {/* Urgency Level Card */}
                    <div className="group relative overflow-hidden rounded-3xl border border-amber-400/40 bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-amber-500/15 p-6 shadow-xl shadow-amber-500/10 backdrop-blur-xl transition-all duration-500 hover:border-amber-400/60 hover:shadow-amber-400/20 hover:shadow-2xl hover:scale-[1.02]">
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/30 to-transparent rounded-bl-3xl" />
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-bl-3xl" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 animate-pulse shadow-lg shadow-amber-400/50" />
                          <h4 className="text-lg font-bold text-amber-300 tracking-wide">مستوى الاستعجالية</h4>
                          <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent" />
                        </div>
                        <p className="text-white font-semibold leading-relaxed text-lg">{result.urgency}</p>
                      </div>
                    </div>

                    {/* Repair Complexity Card */}
                    <div className="group relative overflow-hidden rounded-3xl border border-blue-400/40 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-blue-500/15 p-6 shadow-xl shadow-blue-500/10 backdrop-blur-xl transition-all duration-500 hover:border-blue-400/60 hover:shadow-blue-400/20 hover:shadow-2xl hover:scale-[1.02]">
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/30 to-transparent rounded-bl-3xl" />
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-bl-3xl" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 animate-pulse shadow-lg shadow-blue-400/50" />
                          <h4 className="text-lg font-bold text-blue-300 tracking-wide">تعقيد الإصلاح</h4>
                          <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent" />
                        </div>
                        <p className="text-white font-semibold leading-relaxed text-lg">{result.repair_difficulty}</p>
                      </div>
                    </div>

                    {/* Recommended Action Card */}
                    <div className="group relative overflow-hidden rounded-3xl border border-green-400/40 bg-gradient-to-br from-green-500/15 via-emerald-500/10 to-green-500/15 p-6 shadow-xl shadow-green-500/10 backdrop-blur-xl transition-all duration-500 hover:border-green-400/60 hover:shadow-green-400/20 hover:shadow-2xl hover:scale-[1.02]">
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-500/30 to-transparent rounded-bl-3xl" />
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-400/20 to-transparent rounded-bl-3xl" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg shadow-green-400/50" />
                          <h4 className="text-lg font-bold text-green-300 tracking-wide">الإجراء الموصى به</h4>
                          <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent" />
                        </div>
                        <p className="text-white font-semibold leading-relaxed text-lg">{result.recommended_next_step}</p>
                      </div>
                    </div>
                  </div>

                  {/* Technical Analysis Section */}
                  <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-800/60 via-slate-900/40 to-slate-800/60 p-8 backdrop-blur-xl shadow-xl shadow-cyan-500/5">
                    {/* Circuit pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3Cpath d='M30 30l15-15M30 30l-15 15M30 30l15 15M30 30l-15-15' stroke='%2300ffff' stroke-width='0.5' stroke-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`
                    }} />

                    <div className="relative">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse shadow-lg shadow-cyan-400/50" />
                        <h4 className="text-2xl font-bold text-cyan-300 tracking-wide">التحليل الفني التفصيلي</h4>
                        <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        {/* Possible Causes */}
                        <div className="space-y-4">
                          <h5 className="text-lg font-bold text-white flex items-center gap-2">
                            <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            الأسباب المحتملة
                          </h5>
                          <ul className="space-y-3">
                            {result.possible_causes.map((cause, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-200 bg-slate-800/30 rounded-xl p-3 border border-slate-600/20">
                                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-cyan-400 mt-2 shadow-lg shadow-cyan-400/50" />
                                <span className="leading-relaxed font-medium">{cause}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Warning Notes */}
                        {result.warning_notes && result.warning_notes.length > 0 && (
                          <div className="space-y-4">
                            <h5 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                              <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                              تحذيرات تقنية مهمة
                            </h5>
                            <ul className="space-y-3">
                              {result.warning_notes.map((note, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-amber-100 bg-amber-500/10 rounded-xl p-3 border border-amber-400/20">
                                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-amber-400 mt-2 shadow-lg shadow-amber-400/50" />
                                  <span className="leading-relaxed font-medium">{note}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Professional Support CTA */}
                  <div className="relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-[#0a1628] via-[#0f1a2a] to-[#0a1628] p-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 animate-pulse" />

                    <div className="relative text-center">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 px-6 py-3 mb-4 border border-cyan-400/30">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse" />
                          <span className="text-sm font-bold text-cyan-300 tracking-wide">دعم فني متخصص</span>
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3">فريق Joystick Repair المتخصص</h4>
                        <p className="text-slate-200 leading-relaxed text-lg max-w-3xl mx-auto">
                          {result.support_message}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                          target="_blank"
                          href="https://wa.me/201000000000"
                          className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 via-green-600 to-green-500 px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-green-500/30 transition-all duration-300 hover:shadow-green-400/50 hover:shadow-2xl hover:scale-105 active:scale-95"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="relative flex items-center justify-center gap-3">
                            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            <span>تواصل فوري عبر واتساب</span>
                          </div>
                        </a>

                        <button className="rounded-2xl border-2 border-cyan-400/50 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 px-10 py-5 text-xl font-bold text-cyan-300 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/20 hover:shadow-cyan-400/30 hover:scale-105">
                          احجز فحص تقني شامل
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Technical Disclaimer */}
                  <div className="rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-800/40 to-slate-900/30 p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">{result.disclaimer}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Follow-up questions */}
              {followUps.length > 0 && (
                <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-800/50 to-slate-900/30 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-lg font-bold text-cyan-300">أسئلة إضافية لتحسين التشخيص</h4>
                  </div>
                  <ul className="space-y-3 pr-5">
                    {followUps.map((q, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-200">
                        <div className="flex-shrink-0 h-2 w-2 rounded-full bg-cyan-400 mt-2" />
                        <span className="leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
