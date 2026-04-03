import Image from "next/image";

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-[#060b11] py-20 sm:py-24">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Content */}
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-teal-300 backdrop-blur sm:text-sm">
              Founder & Brand Owner
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Adel Yasser
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Adel Yasser is the founder of Joystick Repair, a brand focused on
              professional PlayStation controller repair, premium customization,
              and performance-driven upgrades for serious gamers.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              With strong hands-on experience in controller maintenance,
              hardware troubleshooting, stick replacement, Hall Effect upgrades,
              and cosmetic customization, he has built a reputation for clean
              work, attention to detail, and reliable repair quality.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              His approach combines technical precision with a deep
              understanding of what gamers actually need: smooth control,
              durable components, and a controller that feels premium in both
              performance and design.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-2xl border border-cyan-400/20 bg-white/5 px-4 py-5 text-center backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,182,196,0.30)]">
                <span className="mb-2 block text-4xl text-cyan-300">⚙️</span>
                <span className="block text-xl font-bold text-white sm:text-2xl">
                  Pro Repair
                </span>
                <span className="text-xs text-slate-300 sm:text-sm">
                  Quality diagnostics, expert soldering and tested outcomes.
                </span>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-white/5 px-4 py-5 text-center backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,182,196,0.30)]">
                <span className="mb-2 block text-4xl text-cyan-300">🎛️</span>
                <span className="block text-xl font-bold text-white sm:text-2xl">
                  Custom Mods
                </span>
                <span className="text-xs text-slate-300 sm:text-sm">
                  Tailored builds, aesthetics and performance tuning.
                </span>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-white/5 px-4 py-5 text-center backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,182,196,0.30)]">
                <span className="mb-2 block text-4xl text-cyan-300">🔧</span>
                <span className="block text-xl font-bold text-white sm:text-2xl">
                  Precision
                </span>
                <span className="text-xs text-slate-300 sm:text-sm">
                  Electronics work with micron-level accuracy and stable circuits.
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/201000000000"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-teal-400"
              >
                Contact on WhatsApp
              </a>

              <a
                href="#gallery"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Custom Work
              </a>
            </div>
          </div>

          {/* Right Media */}
          <div className="space-y-5">
            {/* Founder Image */}
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="relative overflow-hidden rounded-[22px]">
                <Image
                  src="/images/founder.jpg"
                  alt="Adel Yasser"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Founder Video */}
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#081019]">
                <video
                  src="/videos/founder.mp4"
                  controls
                  playsInline
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}