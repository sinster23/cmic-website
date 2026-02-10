"use client";
import React from 'react';
import { Shield, Target, CheckCircle } from 'lucide-react';

export default function ServicesHighlightStrip() {
  return (
    <div className="w-[60%] bg-green-700 px-8 py-6 mt-5">
      {/* Title */}
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4 text-center">
        OUR SERVICES
      </h2>
      
      {/* Tagline with Icons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        {/* Independent */}
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-white flex-shrink-0" />
          <span className="text-white text-base md:text-lg font-semibold">
            Independent
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-white/30" />

        {/* Accurate */}
        <div className="flex items-center gap-3">
          <Target className="w-6 h-6 text-white flex-shrink-0" />
          <span className="text-white text-base md:text-lg font-semibold">
            Accurate
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-white/30" />

        {/* Compliant */}
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
          <span className="text-white text-base md:text-lg font-semibold">
            Compliant Inspection Solutions
          </span>
        </div>
      </div>
    </div>
  );
}