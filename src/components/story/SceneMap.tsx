import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Particles } from "./Particles";
import { TiltCard } from "./TiltCard";
import journeyMap from "@/assets/journey-map-hq.png";

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
    x: 15,
    y: 22,
    title: "First Meet · First Memory · First Chapter",
    memory:
      "The place where our story stepped into reality. The place where strangers became familiar. The place where I first saw you and never knew how important you'd become.\n\n✨ First Meet.\n✨ First Memory.\n✨ First Chapter.",
    emoji: "🎓",
  },
  {
    id: "geetha",
    name: "Geetha Bhavan",
    x: 42,
    y: 22,
    title: "Just tea. Just you.",
    memory:
      "Just tea. Just conversations. Just a normal day.\n\nYet somehow it became one of my favorite memories. Because it wasn't the tea that made it special. It was you. ☕❤️",
    emoji: "☕",
  },
  {
    id: "kulture",
    name: "Kulture Bakery",
    x: 18,
    y: 57,
    title: "More than friends",
    memory:
      "A bakery filled with snacks. A heart filled with questions.\n\nThe conversations became easier. The smiles became warmer. And somewhere between those little moments… you started becoming my more than friend. 🥐❤️",
    emoji: "🥐",
  },
  {
    id: "bimbo",
    name: "Internship Days — Bimbo Bakeries, Uppal",
    x: 45,
    y: 55,
    title: "Where two souls became one",
    memory:
      "Busy roads. Monday Market. Crowded streets. Long workdays. But somewhere between all the ordinary moments… we found something extraordinary.\n\nThis wasn't just the place where we learned about work. It was where we learned about each other. Where two souls grew closer every single day. Where every conversation became a safe place. Where we shared our dreams, fears, possessiveness, laughter, late-night thoughts, study plans, and the little details no one else knew. Where we stood beside each other through every situation — not because we had to, but because we wanted to.\n\nWhenever I think about those days, I don't remember the traffic. I don't remember the noise. I don't even remember how tiring the days were. I remember you.\n\nBecause this was the place where two lives became one beautiful journey. 🏭❤️",
    emoji: "🏭",
  },
  {
    id: "dawath",
    name: "Dawath Arabian Restaurant",
    x: 74,
    y: 59,
    title: "After a long wait",
    memory:
      "After a long wait… two hearts finally met again.\n\nGood food. Long conversations. Endless smiles. A heart full of all the moments we missed.\n\nOne more stop on our journey. One more memory added to my heart. 🍽️❤️",
    emoji: "🍽️",
  },
  {
    id: "melody",
    name: "Melody Mings",
    x: 22,
    y: 85,
    title: "My heart chose you",
    memory:
      "This stop felt different. Because by then… it wasn't just about spending time together. It wasn't just about conversations.\n\nSomewhere along the way… my heart had already chosen you. And little by little… I became completely yours. 🌙❤️",
    emoji: "🌙",
  },
  {
    id: "tealogy",
    name: "Tealogy, KPHB — Last Meet",
    x: 48,
    y: 87,
    title: "Forever starts here",
    memory:
      "A table. Two people. Countless feelings. Conversations that carried things words could never fully explain.\n\nMore laughter. More memories. And another beautiful pin added to our map.\n\nA place that will forever remind me of us. 📍❤️",
    emoji: "📍",
  },
];

export function SceneMap() {
  const [active, setActive] = useState<Stop | null>(null);

  return (
    <section className="relative min-h-screen overflow-hidden py-10 cv-auto">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, #ffeef1 0%, #fbd3dc 55%, #f4b6c4 100%)",
        }}
      />
      <Particles count={12} kinds={["heart", "sparkle"]} tint="text-rose-400/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl text-rose-900 md:text-6xl"
        >
          Our Relationship Journey
        </motion.h2>
        <p className="mt-3 font-hand text-2xl text-rose-700">
          Tap the little ♥ at each place to reveal the memory hidden inside.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-6xl px-6">
        <TiltCard className="mt-10 aspect-[3/2] w-full" max={6}>
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(190,80,110,0.25)] ring-1 ring-rose-200/60">
            <img
              src={journeyMap}
              alt="Our relationship journey map with all our favorite places"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
              loading="lazy"
              decoding="async"
            />

            {STOPS.map((stop, idx) => (
              <button
                key={stop.id}
                onClick={() => setActive(stop)}
                aria-label={`Open memory for ${stop.name}`}
                className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
              >
                <motion.span
                  className="relative block"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.8 + idx * 0.15, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-rose-400/40" />
                  <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-[0_4px_10px_rgba(190,80,110,0.5)] ring-2 ring-white transition group-hover:scale-125 md:h-9 md:w-9">
                    <span className="absolute text-[14px] md:text-[18px]">♥</span>
                    <span className="relative text-[9px] font-bold leading-none md:text-[11px]">{idx + 1}</span>
                  </span>
                  <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-medium text-rose-600 opacity-0 shadow transition group-hover:opacity-100 md:text-[10px]">
                    tap me ✨
                  </span>
                </motion.span>
              </button>
            ))}
          </div>
        </TiltCard>

        <p className="mx-auto mt-8 max-w-xl text-center font-hand text-xl text-rose-800/80">
          "It's not about where we go, but who we have by our side. Here's to us, always &amp; forever." ♡
        </p>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl glass-card p-5 text-center sm:p-8"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-rose text-3xl">
                {active.emoji}
              </div>
              <p className="font-hand text-xl text-rose-700">Memory {STOPS.findIndex((stop) => stop.id === active.id) + 1}</p>
              <h3 className="mt-1 font-display text-2xl text-rose-900 sm:text-3xl">{active.title}</h3>
              <p className="mt-2 font-medium text-rose-800">{active.name}</p>
              <p className="mt-4 max-h-[45vh] overflow-y-auto whitespace-pre-line text-left text-base leading-relaxed text-rose-950/80">
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
      </AnimatePresence>
    </section>
  );
}