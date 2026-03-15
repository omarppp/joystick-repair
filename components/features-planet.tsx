export default function FeaturesPlanet() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#060b11] py-20 sm:py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -left-20 bottom-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-teal-300 backdrop-blur sm:text-sm">
            Premium Repair Services
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Services
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Specialized PlayStation controller repair with premium parts,
            precise work, and clean finishing.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Big Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-teal-400/20 bg-gradient-to-b from-teal-400/10 to-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur sm:col-span-2 lg:row-span-2 sm:p-8">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-teal-400/20 blur-3xl" />

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l3 2" />
              </svg>
            </div>

            <div className="mb-3 inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">
              Most Requested
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
              Drift Repair
            </h3>

            <p className="mb-8 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              Fix analog drift issues and restore smooth, accurate stick
              movement with precise calibration and premium-quality parts.
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-300">
                Smooth Movement
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-300">
                Accurate Control
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-300">
                Fast Turnaround
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-300">
                Clean Finish
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-white/[0.05] sm:p-6">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 3v18" />
                <path d="M7 8c0-2.5 2-4 5-4s5 1.5 5 4-2 4-5 4-5 1.5-5 4 2 4 5 4" />
              </svg>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              Hall Effect Upgrade
            </h3>

            <p className="text-sm leading-7 text-slate-400">
              Upgrade your controller with Hall Effect modules for better
              durability and long-term performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-white/[0.05] sm:p-6">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="7" width="16" height="10" rx="2" />
                <path d="M21 10v4" />
                <path d="M10 10l-2 3h3l-1 3 4-5h-3l1-3z" />
              </svg>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              Battery Replacement
            </h3>

            <p className="text-sm leading-7 text-slate-400">
              Install a fresh high-quality battery for longer and more stable
              play sessions.
            </p>
          </div>

          {/* Wide Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-white/[0.05] sm:col-span-2 sm:p-6">
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-teal-500/10 blur-2xl transition duration-300 group-hover:bg-teal-400/20" />

            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 8h12" />
                <path d="M8 8v8a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4" />
                <path d="M16 8v8a2 2 0 0 1-2 2h0" />
              </svg>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              Trigger Repair
            </h3>

            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              Repair broken, loose, or unresponsive L2 and R2 trigger buttons
              with clean internal work and reliable replacement parts.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-white/[0.05] sm:p-6">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="8" cy="12" r="3" />
                <circle cx="16" cy="12" r="3" />
                <path d="M11 12h2" />
              </svg>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              Analog Replacement
            </h3>

            <p className="text-sm leading-7 text-slate-400">
              Replace damaged analog modules with brand-new precise components.
            </p>
          </div>

          {/* Card 6 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-white/[0.05] sm:p-6">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M8 4h8" />
                <path d="M9 4v4" />
                <path d="M15 4v4" />
                <path d="M6 10h12" />
                <path d="M8 10v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7" />
              </svg>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              Full Controller Cleaning
            </h3>

            <p className="text-sm leading-7 text-slate-400">
              Complete internal cleaning and maintenance for better performance
              and feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}