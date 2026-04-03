import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060b11] via-[#05090f] to-[#02050a] text-white">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl sm:h-[420px] sm:w-[420px]" />
        <div className="absolute -left-16 top-28 h-44 w-44 rounded-full bg-teal-500/20 blur-3xl sm:-left-24 sm:top-40 sm:h-80 sm:w-80" />
        <div className="absolute -right-16 bottom-10 h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl sm:-right-24 sm:bottom-0 sm:h-80 sm:w-80" />
      </div>

      {/* Floating gaming icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-24 text-xl text-teal-300/30 animate-pulse sm:text-3xl">
          ✕
        </span>
        <span className="absolute right-[10%] top-28 text-xl text-white/20 animate-bounce sm:text-3xl">
          ○
        </span>
        <span className="absolute left-[12%] bottom-44 text-xl text-cyan-300/20 animate-pulse sm:text-3xl">
          △
        </span>
        <span className="absolute right-[14%] bottom-32 text-lg text-white/20 animate-bounce sm:text-3xl">
          □
        </span>
        <span className="absolute right-[38%] top-20 text-sm text-teal-200/20 animate-pulse sm:text-xl">
          ✕
        </span>
        <span className="absolute left-[42%] bottom-24 text-sm text-cyan-200/20 animate-bounce sm:text-xl">
          ○
        </span>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pt-36">
        {/* Content */}
        <div className="order-1 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-200 backdrop-blur sm:mb-5 sm:px-4 sm:text-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            Precision controller lab
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Joystick Repair
            <span className="block text-transparent bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text">
              Premium Mod & Service Studio
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0">
            Expert joystick and controller maintenance with professional drift fixes, custom mods, Hall Effect upgrades, and robust electronics precision work.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://wa.me/201000000000"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-3 text-sm font-semibold text-[#020a0f] shadow-lg shadow-cyan-500/30 transition duration-300 hover:from-teal-400 hover:to-cyan-400"
            >
              Book WhatsApp
            </a>

            <a
              href="#services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-teal-300/20 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-slate-800"
            >
              View Services
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center sm:mt-10 sm:gap-4 lg:max-w-xl">
            <div className="rounded-2xl border border-cyan-400/20 bg-white/5 px-3 py-4 backdrop-blur transition hover:shadow-[0_20px_40px_rgba(16,203,235,0.26)]">
              <span className="block text-2xl font-bold text-white sm:text-3xl">
                500+
              </span>
              <span className="text-[11px] text-slate-300 sm:text-sm">
                Controllers Repaired
              </span>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-white/5 px-3 py-4 backdrop-blur transition hover:shadow-[0_20px_40px_rgba(16,203,235,0.26)]">
              <span className="block text-2xl font-bold text-white sm:text-3xl">
                48h
              </span>
              <span className="text-[11px] text-slate-300 sm:text-sm">
                Average Turnaround
              </span>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-white/5 px-3 py-4 backdrop-blur transition hover:shadow-[0_20px_40px_rgba(16,203,235,0.26)]">
              <span className="block text-2xl font-bold text-white sm:text-3xl">
                %99
              </span>
              <span className="text-[11px] text-slate-300 sm:text-sm">
                Customer Satisfaction
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-[28px] bg-teal-500/10 blur-2xl sm:-inset-4" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur sm:rounded-[28px] sm:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] sm:rounded-[22px]">
                <Image
                  src="/images/controller-repair.jpg"
                  alt="Joystick Repair"
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] text-teal-300 backdrop-blur sm:left-5 sm:top-5 sm:text-xs">
                Drift Fix
              </div>

              <div className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] text-white backdrop-blur sm:bottom-5 sm:right-5 sm:text-xs">
                Hall Effect Upgrade
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}