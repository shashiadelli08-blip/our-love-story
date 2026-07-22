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
  {
    id: "kims",
    name: "KIMS Degree & PG College",
    x: 12,
    y: 30,
    title: "First Meet · First Memory · First Chapter",
    memory:
      "The place where our story stepped into reality. The place where strangers became familiar. The place where I first saw you and never knew how important you'd become.\n\n✨ First Meet.\n✨ First Memory.\n✨ First Chapter.",
    emoji: "🎓",
  },
  {
    id: "gb",
    name: "Geetha Bhavan",
    x: 38,
    y: 22,
    title: "Just tea. Just you.",
    memory:
      "Just tea. Just conversations. Just a normal day. Yet somehow it became one of my favorite memories. Because it wasn't the tea that made it special. It was you.",
    emoji: "🍵",
  },
  {
    id: "kb",
    name: "Kulture Bakery",
    x: 22,
    y: 58,
    title: "More than friends",
    memory:
      "A bakery filled with snacks. A heart filled with questions. The conversations became easier. The smiles became warmer. And somewhere between those little moments… you started becoming my more than friend.",
    emoji: "🥐",
  },
  {
    id: "bb",
    name: "Bimbo Bakeries — Internship Days",
    x: 50,
    y: 55,
    title: "Where two souls became one",
    memory:
      "Busy roads. Monday Market. Crowded streets. Long workdays. But somewhere between all the ordinary moments… we found something extraordinary.\n\nThis wasn't just the place where we learned about work. It was where we learned about each other. Where two souls grew closer every single day. Where every conversation became a safe place. Where we shared our dreams, fears, possessiveness, laughter, late-night thoughts, study plans, and the little details no one else knew.\n\nWhenever I think about those days, I don't remember the traffic. I don't remember the noise. I don't even remember how tiring the days were. I remember you. 🏭❤️",
    emoji: "🥖",
  },
  {
    id: "dw",
    name: "Dawath Arabian Restaurant",
    x: 76,
    y: 48,
    title: "Spicing up our bond",
    memory:
      "After a long wait… two hearts finally met again. Good food. Long conversations. Endless smiles. A heart full of all the moments we missed. One more stop on our journey. One more memory added to my heart. 🍽️❤️",
    emoji: "🍽️",
  },
  {
    id: "mm",
    name: "Melody Mings",
    x: 32,
    y: 82,
    title: "Movies, laughter & us",
    memory:
      "This stop felt different. Because by then… it wasn't just about spending time together. It wasn't just about conversations. Somewhere along the way… my heart had already chosen you. And little by little… I became completely yours. 🌙❤️",
    emoji: "🎬",
  },
  {
    id: "tl",
    name: "Tealogy, KPHB",
    x: 62,
    y: 82,
    title: "But our forever starts",
    memory:
      "A table. Two people. Countless feelings. Conversations that carried things words could never fully explain. More laughter. More memories. And another beautiful pin added to our map. A place that will forever remind me of us. 🍵❤️",
    emoji: "🫖",
  },
];

export function SceneMap() {
  const [active, setActive] = useState<Stop | null>(null);
  const path = STOPS.map((s, i) => `${i === 0 ? "M" : "L"} ${s.x} ${s.y}`).join(" ");

  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, #ffeef1 0%, #fbd3dc 55%, #f4b6c4 100%)",
        }}
      />
      <Particles count={20} kinds={["heart", "sparkle"]} tint="text-rose-400/70" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-4xl md:text-6xl text-rose-900"
        >
          Our Relationship Journey
        </motion.h2>
        <p className="mt-3 text-center font-hand text-2xl text-rose-700">
          Built on love, growing together — tap each pin to unfold a memory.
        </p>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] glass-card">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #ffe4ea 0%, #fbc9d5 60%, #f6b0c1 100%)",
            }}
          />
          {/* soft blossom clouds */}
          <div className="absolute -left-6 -top-6 h-40 w-56 rounded-full bg-rose-200/60 blur-2xl" />
          <div className="absolute -right-8 top-8 h-36 w-52 rounded-full bg-pink-200/70 blur-2xl" />
          <div className="absolute bottom-0 left-1/4 h-32 w-64 rounded-full bg-rose-100/70 blur-2xl" />
          <div className="absolute bottom-4 right-8 h-28 w-40 rounded-full bg-pink-100/70 blur-2xl" />
          {/* scattered hearts */}
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="absolute text-rose-300/70"
              style={{
                left: `${(i * 73) % 95 + 2}%`,
                top: `${(i * 41) % 90 + 5}%`,
                fontSize: `${10 + (i % 4) * 4}px`,
              }}
            >
              ♡
            </span>
          ))}

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <motion.path
              d={path}
              fill="none"
              stroke="#e05a76"
              strokeWidth={0.7}
              strokeDasharray="1.6 1.6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 4.5, ease: "easeInOut" }}
            />
          </svg>

          {STOPS.map((s, idx) => (
            <motion.button
              key={s.id}
              onClick={() => setActive(s)}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.18, type: "spring" }}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              <span className="relative flex flex-col items-center">
                {/* label card */}
                <span className="mb-1 flex max-w-[180px] items-center gap-1.5 rounded-xl bg-[#fff2e6] px-2.5 py-1 shadow-[0_3px_10px_rgba(190,80,90,0.25)] ring-1 ring-rose-200 transition group-hover:-translate-y-0.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                    {idx + 1}
                  </span>
                  <span className="whitespace-nowrap text-[11px] font-semibold text-rose-900">
                    {s.name}
                  </span>
                </span>
                {/* pin */}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-base shadow-[0_6px_18px_rgba(200,90,90,0.4)] ring-2 ring-rose-400 transition group-hover:scale-110">
                  {s.emoji}
                </span>
                <span className="mt-0.5 text-rose-500">📍</span>
              </span>
            </motion.button>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center font-hand text-xl text-rose-800/80">
          "It's not about where we go, but who we have by our side.
          Here's to us, always &amp; forever." ♡
        </p>
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
            <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-rose-950/80">
              {active.memory}
            </p>
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