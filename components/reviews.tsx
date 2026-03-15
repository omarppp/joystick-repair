"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    type: "video",
    title: "Custom Controller Showcase",
    subtitle: "Watch one of our custom builds in action",
    src: "/videos/custom-showcase.mp4",
  },
  {
    type: "image",
    title: "Custom Controller 01",
    subtitle: "Premium custom shell and clean finish",
    src: "/images/custom1.jpg",
  },
  {
    type: "image",
    title: "Custom Controller 02",
    subtitle: "Teal inspired design with premium details",
    src: "/images/custom2.jpg",
  },
  {
    type: "image",
    title: "Custom Controller 03",
    subtitle: "Built for style and performance",
    src: "/images/custom3.jpg",
  },
  {
    type: "image",
    title: "Custom Controller 04",
    subtitle: "Clean aesthetic with upgraded parts",
    src: "/images/custom4.jpg",
  },
  {
    type: "image",
    title: "Custom Controller 05",
    subtitle: "Custom finish with a bold premium look",
    src: "/images/custom5.jpg",
  },
  {
    type: "image",
    title: "Custom Controller 06",
    subtitle: "Unique build crafted for gamers",
    src: "/images/custom6.jpg",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[current];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#060b11] py-20 sm:py-24"
    >
      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-teal-300 backdrop-blur sm:text-sm">
            Custom Controller Gallery
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Customized Controllers
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Explore custom controller styles, finishes, and premium builds made
            by Joystick Repair.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur sm:p-4">
          <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Main Media */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#081019]">
              <div className="relative aspect-square w-full bg-black">
                {activeSlide.type === "video" ? (
                  <video
                    src={activeSlide.src}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={activeSlide.src}
                    alt={activeSlide.title}
                    fill
                    className="object-contain bg-black"
                  />
                )}
              </div>
            </div>

            {/* Side Content */}
            <div className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div>
                <div className="mb-3 inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">
                  {activeSlide.type === "video" ? "Featured Video" : "Custom Design"}
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {activeSlide.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {activeSlide.subtitle}
                </p>
              </div>

              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                  <span>
                    Slide {current + 1} / {slides.length}
                  </span>
                  <span>Mobile Friendly</span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prevSlide}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                  >
                    ←
                  </button>

                  <button
                    onClick={nextSlide}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500 text-black transition hover:bg-teal-400"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`relative overflow-hidden rounded-2xl border transition ${
                  current === index
                    ? "border-teal-400"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="relative aspect-square w-full bg-black">
                  {slide.type === "video" ? (
                    <>
                      <video
                        src={slide.src}
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-lg text-white">
                        ▶
                      </div>
                    </>
                  ) : (
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className="object-contain bg-black"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
