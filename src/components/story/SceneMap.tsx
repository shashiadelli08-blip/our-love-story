import { motion } from "framer-motion";
import { useState } from "react";
import { Particles } from "./Particles";

type Stop = {
  id: string;
  name: string;
  x: number;
  y: number;
  title: string;
  memory: string;
  emoji: string;
};

const STOPS: Stop[] = [
  { id: "rp", name: "Raddepally", x: 8, y: 78, title: "Where I began", memory: "A quiet little home town where my heart first learned to dream of you.", emoji: "🏡" },
  { id: "vm", name: "Vemulawada", x: 18, y: 22, title: "Where you began", memory: "Temple bells and warm mornings — the place that shaped my Nanna.", emoji: "🛕" },
  { id: "kims", name: "KIMS Degree & PG College", x: 34, y: 55, title: "First glances", memory: "Between lectures and library corners — where two paths first noticed each other.", emoji: "🎓" },
  { id: "gb", name: "Geetha Bhavan", x: 46, y: 32, title: "First laughs", memory: "Shared plates, silly jokes, and the beginning of forever inside jokes.", emoji: "🍛" },
  { id: "kb", name: "Kulture Bakery", x: 58, y: 66, title: "Sweet Sundays", memory: "Pastries, coffee, and long looks that said everything without words.", emoji: "🥐" },
  { id: "bb", name: "Bimbo Bakeries — Uppal", x: 70, y: 38, title: "The internship days", memory: "Early mornings, tired evenings — and a phone that was always calling you.", emoji: "🥖" },
  { id: "dw", name: "Dawath Arabian Restaurant", x: 78, y: 68, title: "Our little feast", memory: "Mandi, laughter, and that photo we took where you smiled with your eyes.", emoji: "🍽️" },
  { id: "mm", name: "Melody Mings", x: 86, y: 30, title: "Our song night", memory: "You sang for me. Off-key, off-tempo, perfectly.", emoji: "🎤" },
  { id: "tl", name: "Tealogy KPHB", x: 92, y: 78, title: "One more chai", memory: "The last sip is always yours. Always.", emoji: "🍵" },
];

export function SceneMap() {
  const [active, setActive] = useState<Stop | null>(null);
  const ordered = STOPS.slice().sort((a, b) => a.x - b.x);
  const path = ordered.map((s, i) => `${i === 0 ? "M" : "L"} ${s.x} ${s.y}`).join(" ");

  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, #fff8ec 0%, #f7dfc9 55%, #efc7ad 100%)",
        }}
      />
      <Particles count={16} kinds={["sparkle", "star"]} tint="text-amber-400/70" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-4xl md:text-6xl text-rose-900"
        >
          Our Little Journey
        </motion.h2>
        <p className="mt-3 text-center font-hand text-2xl text-rose-700">
          Tap each stop — every one hides a memory.
        </p>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] glass-card">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, #fdf3df 0%, #f3d9a8 100%)",
            }}
          />
          <div className="absolute left-4 top-6 h-10 w-24 rounded-full bg-white/70 blur-md" />
          <div className="absolute right-10 top-12 h-8 w-20 rounded-full bg-white/70 blur-md" />
          <div className="absolute bottom-16 left-1/3 h-6 w-16 rounded-full bg-white/60 blur-md" />

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <motion.path
              d={path}
              fill="none"
              stroke="#c9736a"
              strokeWidth={0.6}
              strokeDasharray="1.4 1.4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
          </svg>

          {STOPS.map((s, idx) => (
            <motion.button
              key={s.id}
              onClick={() => setActive(s)}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.15, type: "spring" }}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg shadow-[0_6px_18px_rgba(200,90,90,0.35)] ring-2 ring-rose-300 transition group-hover:scale-110">
                {s.emoji}
              </span>
              <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-rose-800 opacity-0 shadow-sm transition group-hover:opacity-100">
                {s.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <motion.div
            initial={{ scale: 0.85, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl glass-card p-8 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-rose text-3xl">
              {active.emoji}
            </div>
            <p className="font-hand text-xl text-rose-700">{active.name}</p>
            <h3 className="mt-1 font-display text-3xl text-rose-900">{active.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-rose-950/80">{active.memory}</p>
            <button
              onClick={() => setActive(null)}
              className="mt-6 rounded-full bg-rose-500 px-6 py-2 text-sm font-medium text-white shadow hover:bg-rose-600"
            >
              Close ♡
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}