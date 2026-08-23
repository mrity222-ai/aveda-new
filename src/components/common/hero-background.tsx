'use client';

export default function HeroBackground() {
  return (
    <>
      {/* -------------------- 3D ISOMETRIC CUBE WIREFRAME BACKGROUND PATTERN -------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-isometric-cube-pattern" width="60" height="103.923" patternUnits="userSpaceOnUse">
              {/* Isometric 3D Wireframe Cubes */}
              <g stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" fill="none">
                {/* Cube 1 */}
                <path d="M 30 0 L 60 17.32 L 60 51.96 L 30 69.28 L 0 51.96 L 0 17.32 Z" />
                <path d="M 30 0 L 30 34.64 L 60 51.96" />
                <path d="M 30 34.64 L 0 51.96" />
                
                {/* Cube 2 (Shifted for Seamless Tiling) */}
                <path d="M 30 69.28 L 60 86.60 L 60 121.24 L 30 138.56 L 0 121.24 L 0 86.60 Z" />
                <path d="M 30 69.28 L 30 103.92 L 60 121.24" />
                <path d="M 30 103.92 L 0 121.24" />

                {/* Connecting grid lines */}
                <path d="M 60 17.32 L 90 0 M 0 17.32 L -30 0" />
                <path d="M 60 51.96 L 90 69.28 M 0 51.96 L -30 69.28" />
              </g>
            </pattern>

            {/* Dotted Grid Pattern for Top-Left and Bottom-Right Corners */}
            <pattern id="hero-dot-matrix-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(255, 255, 255, 0.18)" />
            </pattern>
          </defs>

          {/* Full Isometric Wireframe Grid */}
          <rect width="100%" height="100%" fill="url(#hero-isometric-cube-pattern)" />
        </svg>
      </div>

      {/* Top-Left Dotted Matrix Pattern */}
      <div 
        className="absolute top-0 left-0 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none z-0 opacity-60"
        style={{
          maskImage: 'radial-gradient(circle at 0% 0%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 30%, transparent 80%)'
        }}
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#hero-dot-matrix-pattern)" />
        </svg>
      </div>

      {/* Bottom-Right Dotted Matrix Pattern */}
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none z-0 opacity-60"
        style={{
          maskImage: 'radial-gradient(circle at 100% 100%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 100% 100%, black 30%, transparent 80%)'
        }}
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#hero-dot-matrix-pattern)" />
        </svg>
      </div>

      {/* Center Subtle Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
    </>
  );
}
