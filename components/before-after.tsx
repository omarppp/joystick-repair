"use client";

import { useRef, useState } from "react";

export default function BeforeAfter() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideo = () => {
    setOpen(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 150);
  };

  const closeVideo = () => {
    videoRef.current?.pause();
    setOpen(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#060b11] py-24">
      {/* glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center">

        {/* title */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-teal-300 backdrop-blur">
            Real Repair Example
          </div>

          <h2 className="text-4xl font-bold text-white">
            Before & After Repair
          </h2>

          <p className="mt-4 text-slate-400">
            Watch how we restore PlayStation controllers to perfect condition
          </p>
        </div>

        {/* preview */}
        <button
          onClick={openVideo}
          className="group relative mx-auto block w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur"
        >
          <div className="relative overflow-hidden rounded-2xl">

            <video
              src="/videos/repair.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.03]"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/20" />

            {/* play icon */}
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-teal-500 text-black shadow-lg transition duration-300 group-hover:scale-110">
              ▶
            </div>

          </div>
        </button>

      </div>

      {/* popup */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              ✕
            </button>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#081019] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <video
                ref={videoRef}
                src="/videos/repair.mp4"
                controls
                className="w-full rounded-2xl"
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}