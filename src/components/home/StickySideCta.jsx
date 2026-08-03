"use client";

import Link from "next/link";

export default function StickySideCTA() {
  return (
    <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col shadow-xl">
      <Link
        href="/request-a-quote"
        className="[writing-mode:vertical-rl] rotate-180 px-2.5 py-4 bg-green-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-green-800 transition-colors border-b border-white/20 text-center"
      >
        Request Quote
      </Link>
      <a
        href="tel:+9386226827"
        className="[writing-mode:vertical-rl] rotate-180 px-2.5 py-4 bg-teal-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-teal-800 transition-colors border-b border-white/20 text-center"
      >
        Call
      </a>
      <a
        href="mailto:info@carbonson.in"
        className="[writing-mode:vertical-rl] rotate-180 px-2.5 py-4 bg-slate-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors text-center"
      >
        Email
      </a>
    </div>
  );
}