import { motion, type MotionProps } from "framer-motion";
import bunnyGiftBox from "@/assets/mascot-bunny-gift-box.png";
import bearBalloon from "@/assets/mascot-bear-balloon.png";

type CharProps = { className?: string } & MotionProps;

// 🐰 Dudu
export function Dudu({ className, ...rest }: CharProps) {
  return (
    <motion.img
      src={bunnyGiftBox}
      alt="Dudu"
      className={className}
      style={{ imageRendering: "auto" }}
      {...rest}
    />
  );
}

// 🐻 Babu
export function Babu({ className, ...rest }: CharProps) {
  return (
    <motion.img
      src={bearBalloon}
      alt="Babu"
      className={className}
      style={{ imageRendering: "auto" }}
      {...rest}
    />
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
