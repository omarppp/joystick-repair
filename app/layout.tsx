import "./css/style.css";

import { Inter } from "next/font/google";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Joystick Repair",
  description:
    "Joystick Repair - Premium controller service, mods, and precision electronics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-[#04080e] text-slate-100 font-inter tracking-tight antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
