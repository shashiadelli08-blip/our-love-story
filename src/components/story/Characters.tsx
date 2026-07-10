import { motion, type MotionProps } from "framer-motion";

type CharProps = { className?: string } & MotionProps;

// 🐰 Dudu — cream bunny with pink cheeks in a soft hoodie
export function Dudu({ className, ...rest }: CharProps) {
  return (
    <motion.svg
      viewBox="0 0 200 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <radialGradient id="duduFur" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff8f2" />
          <stop offset="100%" stopColor="#f5e3d3" />
        </radialGradient>
        <linearGradient id="duduHood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6b7c4" />
          <stop offset="100%" stopColor="#e88ea4" />
        </linearGradient>
      </defs>
      {/* ears */}
      <ellipse cx="72" cy="40" rx="14" ry="34" fill="url(#duduFur)" />
      <ellipse cx="128" cy="40" rx="14" ry="34" fill="url(#duduFur)" />
      <ellipse cx="72" cy="44" rx="6" ry="24" fill="#f8c6d0" />
      <ellipse cx="128" cy="44" rx="6" ry="24" fill="#f8c6d0" />
      {/* head */}
      <circle cx="100" cy="100" r="52" fill="url(#duduFur)" />
      {/* cheeks */}
      <circle cx="72" cy="112" r="9" fill="#f7a8b8" opacity="0.75" />
      <circle cx="128" cy="112" r="9" fill="#f7a8b8" opacity="0.75" />
      {/* eyes */}
      <ellipse cx="84" cy="98" rx="4.5" ry="6" fill="#3b2a2a" />
      <ellipse cx="116" cy="98" rx="4.5" ry="6" fill="#3b2a2a" />
      <circle cx="85.5" cy="96" r="1.6" fill="#fff" />
      <circle cx="117.5" cy="96" r="1.6" fill="#fff" />
      {/* nose + mouth */}
      <path d="M97 110 Q100 113 103 110 L100 114 Z" fill="#e58aa0" />
      <path d="M96 118 Q100 122 104 118" stroke="#7a4a4a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* hoodie body */}
      <path d="M50 168 Q100 140 150 168 L158 232 Q100 244 42 232 Z" fill="url(#duduHood)" />
      <path d="M60 158 Q100 138 140 158 L140 172 Q100 156 60 172 Z" fill="#f9c9d4" />
      {/* arms */}
      <ellipse cx="42" cy="196" rx="14" ry="20" fill="url(#duduHood)" />
      <ellipse cx="158" cy="196" rx="14" ry="20" fill="url(#duduHood)" />
      {/* paws */}
      <circle cx="42" cy="214" r="10" fill="url(#duduFur)" />
      <circle cx="158" cy="214" r="10" fill="url(#duduFur)" />
    </motion.svg>
  );
}

// 🐻 Babu — cozy brown bear with soft sweater
export function Babu({ className, ...rest }: CharProps) {
  return (
    <motion.svg
      viewBox="0 0 200 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <radialGradient id="babuFur" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#c99074" />
          <stop offset="100%" stopColor="#8a5a3b" />
        </radialGradient>
        <linearGradient id="babuSweater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8d4c5" />
          <stop offset="100%" stopColor="#7fa892" />
        </linearGradient>
      </defs>
      {/* ears */}
      <circle cx="62" cy="52" r="18" fill="url(#babuFur)" />
      <circle cx="138" cy="52" r="18" fill="url(#babuFur)" />
      <circle cx="62" cy="54" r="9" fill="#e5b89a" />
      <circle cx="138" cy="54" r="9" fill="#e5b89a" />
      {/* head */}
      <circle cx="100" cy="102" r="54" fill="url(#babuFur)" />
      {/* muzzle */}
      <ellipse cx="100" cy="118" rx="26" ry="20" fill="#f0d4b8" />
      {/* cheeks */}
      <circle cx="68" cy="118" r="8" fill="#e08a86" opacity="0.55" />
      <circle cx="132" cy="118" r="8" fill="#e08a86" opacity="0.55" />
      {/* eyes */}
      <ellipse cx="84" cy="100" rx="4.5" ry="6" fill="#2a1a12" />
      <ellipse cx="116" cy="100" rx="4.5" ry="6" fill="#2a1a12" />
      <circle cx="85.5" cy="98" r="1.6" fill="#fff" />
      <circle cx="117.5" cy="98" r="1.6" fill="#fff" />
      {/* nose + smile */}
      <ellipse cx="100" cy="114" rx="6" ry="4" fill="#3b2418" />
      <path d="M92 124 Q100 130 108 124" stroke="#3b2418" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* sweater */}
      <path d="M46 172 Q100 144 154 172 L162 232 Q100 244 38 232 Z" fill="url(#babuSweater)" />
      <path d="M46 172 Q100 178 154 172" stroke="#5f8875" strokeWidth="2" fill="none" opacity="0.5" />
      {/* arms */}
      <ellipse cx="38" cy="198" rx="15" ry="21" fill="url(#babuSweater)" />
      <ellipse cx="162" cy="198" rx="15" ry="21" fill="url(#babuSweater)" />
      {/* paws */}
      <circle cx="38" cy="216" r="11" fill="url(#babuFur)" />
      <circle cx="162" cy="216" r="11" fill="url(#babuFur)" />
    </motion.svg>
  );
}

export function HeartBurst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 34 C6 24 4 14 12 10 C16 8 19 10 20 13 C21 10 24 8 28 10 C36 14 34 24 20 34 Z"
        fill="url(#hg)"
      />
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffb3c1" />
          <stop offset="100%" stopColor="#e5657e" />
        </linearGradient>
      </defs>
    </svg>
  );
}