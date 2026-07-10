import { useMemo } from "react";

type Kind = "heart" | "petal" | "star" | "firefly" | "sparkle" | "butterfly";

const glyph: Record<Kind, string> = {
  heart: "❤",
  petal: "✿",
  star: "✦",
  firefly: "•",
  sparkle: "✧",
  butterfly: "🦋",
};

export function Particles({
  count = 24,
  kinds = ["heart", "sparkle", "star"],
  className = "",
  tint = "text-rose-300",
}: {
  count?: number;
  kinds?: Kind[];
  className?: string;
  tint?: string;
}) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const kind = kinds[i % kinds.length];
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 14 + Math.random() * 18;
        const size = 10 + Math.random() * 22;
        const dx = (Math.random() - 0.5) * 200;
        const opacity = 0.4 + Math.random() * 0.5;
        return { kind, left, delay, duration, size, dx, opacity, i };
      }),
    [count, kinds],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {items.map((p) => (
        <span
          key={p.i}
          className={`absolute bottom-[-10vh] animate-drift ${tint}`}
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            // @ts-expect-error css var
            "--dx": `${p.dx}px`,
          }}
        >
          {glyph[p.kind]}
        </span>
      ))}
    </div>
  );
}

export function StarField({ count = 80 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 4,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((s) => (
        <span
          key={s.i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 6px rgba(255,240,200,0.9)",
          }}
        />
      ))}
    </div>
  );
}

export function Fireflies({ count = 24 }: { count?: number }) {
  const flies = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        i,
        left: Math.random() * 100,
        top: 30 + Math.random() * 70,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {flies.map((f) => (
        <span
          key={f.i}
          className="absolute h-1.5 w-1.5 rounded-full animate-floaty"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            background: "radial-gradient(circle, #fff5b8 0%, #f5c66a 60%, transparent 80%)",
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            boxShadow: "0 0 12px 4px rgba(255, 220, 130, 0.7)",
          }}
        />
      ))}
    </div>
  );
}