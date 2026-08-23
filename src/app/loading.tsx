'use client';

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/80 backdrop-blur-md transition-all duration-300">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Brand Loader Ring */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-2 border-red-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-red-600 animate-spin" style={{ animationDuration: '0.8s' }} />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-red-400 animate-spin" style={{ animationDuration: '1.2s', animationDirection: 'reverse' }} />
        </div>
        
        {/* Subtle Text */}
        <span className="font-soehne text-xs font-bold uppercase tracking-widest text-white/90 animate-pulse">
          Loading Aveda Technologies...
        </span>
      </div>
    </div>
  );
}
