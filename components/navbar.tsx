"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#081019]/80 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5">
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-teal-400 sm:text-xl"
          >
            Joystick Repair
          </a>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-teal-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-teal-500 px-5 text-sm font-semibold text-black transition hover:bg-teal-400"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-[#081019]/95 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-teal-400"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex min-h-[46px] items-center justify-center rounded-xl bg-teal-500 px-5 text-sm font-semibold text-black transition hover:bg-teal-400"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}