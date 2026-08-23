'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const successStories = [
  {
    id: 1,
    quote: "Aveda Technologies delivered a high-performance digital infrastructure for ONS Sustainable Energy. Their technical expertise and execution speed are unmatched.",
    author: "MANU BHATIA",
    subtext: "MD - ONS Sustainable Energy Solutions (Leading Solar EPC Company in India)",
  },
  {
    id: 2,
    quote: "Partnering with Aveda for Sky Renewable was a game-changer. They built a seamless, scalable platform tailored perfectly to clean energy operations.",
    author: "NAIMESH CHANDRAKER",
    subtext: "Director - Sky Renewable",
  },
  {
    id: 3,
    quote: "Aveda Technologies transformed Shiv Mahaluxmi Solar Energy's online presence and lead automation. Outstanding commitment and world-class software engineering.",
    author: "RAHUL CHAND",
    subtext: "Managing Director & Founder - Shiv Mahaluxmi Solar Energy",
  },
];

export default function SuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevStory = () => {
    setActiveIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setActiveIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  };

  const currentStory = successStories[activeIndex];

  return (
    <section className="relative py-20 sm:py-28 bg-[#030517] text-white overflow-hidden border-b border-[#181d3d]">
      
      {/* 3D Wireframe Perspective Grid Overlay (Same to Same as Footer) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 600">
          <g stroke="#6b7cba" strokeWidth="0.8" strokeOpacity="0.4" fill="none">
            <line x1="-300" y1="100" x2="1700" y2="450" />
            <line x1="-300" y1="200" x2="1700" y2="550" />
            <line x1="-300" y1="300" x2="1700" y2="650" />
            <line x1="-300" y1="0" x2="1700" y2="350" />
            <line x1="-300" y1="650" x2="1700" y2="100" />
            <line x1="-300" y1="550" x2="1700" y2="0" />
            <line x1="-300" y1="450" x2="1700" y2="-100" />
            <line x1="100" y1="0" x2="100" y2="600" strokeWidth="0.5" />
            <line x1="320" y1="0" x2="320" y2="600" strokeWidth="0.5" />
            <line x1="580" y1="0" x2="580" y2="600" strokeWidth="0.5" />
            <line x1="840" y1="0" x2="840" y2="600" strokeWidth="0.5" />
            <line x1="1100" y1="0" x2="1100" y2="600" strokeWidth="0.5" />
            <line x1="1360" y1="0" x2="1360" y2="600" strokeWidth="0.5" />
          </g>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
        
        {/* Top Section Header */}
        <div className="mb-8">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            WHAT THE CLIENT SAID
          </span>
        </div>

        {/* Main Quote Block */}
        <div className="relative max-w-4xl mx-auto my-auto min-h-[220px] flex flex-col justify-center items-center">
          
          {/* Main Quote Text */}
          <blockquote className="font-serif italic text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.35] text-slate-100 tracking-tight text-center transition-all duration-500">
            &ldquo;{currentStory.quote}&rdquo;
          </blockquote>

          {/* Author Name */}
          <div className="mt-10">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              {currentStory.author}
            </h3>

            {/* Author Subtext */}
            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans font-normal tracking-wide max-w-2xl mx-auto leading-relaxed">
              {currentStory.subtext}
            </p>
          </div>

        </div>

        {/* Navigation Arrows & Dot Indicators */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prevStory}
            className="w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-200 hover:text-white hover:border-red-500 transition-all flex items-center justify-center focus:outline-none shadow-md"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {successStories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 focus:outline-none",
                  idx === activeIndex
                    ? "w-6 bg-red-500"
                    : "w-2 bg-slate-700 hover:bg-slate-500"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextStory}
            className="w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-200 hover:text-white hover:border-red-500 transition-all flex items-center justify-center focus:outline-none shadow-md"
            aria-label="Next story"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
