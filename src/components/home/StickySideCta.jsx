"use client";


export default function StickySideCTA() {
  return (
    <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col shadow-xl">
      <button className="[writing-mode:vertical-rl] rotate-180 px-2.5 py-4 bg-green-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-green-800 transition-colors border-b border-white/20">
        Request Quote
      </button>
      <button className="[writing-mode:vertical-rl] rotate-180 px-2.5 py-4 bg-teal-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-teal-800 transition-colors border-b border-white/20">
        Call
      </button>
      <button className="[writing-mode:vertical-rl] rotate-180 px-2.5 py-4 bg-slate-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
        Email
      </button>
    </div>
  );
}