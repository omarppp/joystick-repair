import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-[#060b11] text-white">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-teal-500/15 blur-3xl sm:h-[420px] sm:w-[420px]" />
        <div className="absolute -left-16 top-28 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl sm:-left-24 sm:top-40 sm:h-72 sm:w-72" />
        <div className="absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl sm:-right-24 sm:bottom-0 sm:h-72 sm:w-72" />
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
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-teal-300 backdrop-blur sm:mb-5 sm:px-4 sm:text-sm">
            Professional PlayStation Controller Repair
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Joystick
            <span className="block text-teal-400">Repair</span>
          </h1>

          <p className="mx-auto mb-7 max-w-xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0">
            Premium repair service for PlayStation controllers, including drift
            repair, analog replacement, Hall Effect upgrades, battery
            replacement, and full internal cleaning.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://wa.me/201000000000"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-teal-400"
            >
              Book on WhatsApp
            </a>

            <a
              href="#services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center sm:mt-10 sm:gap-4 lg:max-w-xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur">
              <span className="block text-xl font-bold text-white sm:text-2xl">
                500+
              </span>
              <span className="text-[11px] text-slate-400 sm:text-sm">
                Controllers Repaired
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur">
              <span className="block text-xl font-bold text-white sm:text-2xl">
                Fast
              </span>
              <span className="text-[11px] text-slate-400 sm:text-sm">
                Service Turnaround
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur">
              <span className="block text-xl font-bold text-white sm:text-2xl">
                PS5
              </span>
              <span className="text-[11px] text-slate-400 sm:text-sm">
                Repair Specialists
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