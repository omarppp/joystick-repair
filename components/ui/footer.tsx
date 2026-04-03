import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className={`relative bg-[#050711] px-4 py-12 text-slate-300 sm:px-6 lg:px-8 ${border ? "border-t border-teal-500/20" : ""}`}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#070b13] via-[#04070d] to-[#02050a]" />
      <div className="absolute -top-24 left-1/2 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 right-16 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="mb-4 flex items-center gap-2 text-teal-300">
            <Logo />
            <span className="text-lg font-bold tracking-tight">Joystick Repair</span>
          </div>
          <p className="text-sm text-slate-400">
            Premium controller repair and custom mods built for gamers who demand precision and durability.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p>✦ 24h diagnosis</p>
            <p>✦ Genuine parts, premium seals</p>
            <p>✦ On-site and remote support</p>
          </div>
        </div>

        <div className="space-y-3 text-sm lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">Services</h3>
          <Link className="block transition hover:text-cyan-300" href="#services">Drift Repair</Link>
          <Link className="block transition hover:text-cyan-300" href="#services">Analog Replacement</Link>
          <Link className="block transition hover:text-cyan-300" href="#services">Hall Effect Upgrades</Link>
          <Link className="block transition hover:text-cyan-300" href="#services">Controller Cleaning</Link>
        </div>

        <div className="space-y-3 text-sm lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">Quick Links</h3>
          <Link className="block transition hover:text-cyan-300" href="#gallery">Gallery</Link>
          <Link className="block transition hover:text-cyan-300" href="#reviews">Custom Builds</Link>
          <Link className="block transition hover:text-cyan-300" href="#">FAQs</Link>
          <Link className="block transition hover:text-cyan-300" href="#">Terms</Link>
        </div>

        <div className="space-y-3 text-sm lg:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">Contact</h3>
          <p>📍 Cairo, Egypt</p>
          <p>📞 +20 100 000 0000</p>
          <p>✉️ support@joystickrepair.example</p>
          <div className="mt-3 flex items-center gap-3">
            <Link
              href="https://wa.me/201000000000"
              className="rounded-lg bg-cyan-500/20 px-3 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/30"
              target="_blank"
            >
              WhatsApp
            </Link>
            <Link
              href="#"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-teal-500/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Joystick Repair. Built with precision, designed for performance.
      </div>
    </footer>
  );
}
