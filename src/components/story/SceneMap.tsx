import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Particles } from "./Particles";
import { HeartBurst } from "./Characters";
import journeyMap from "@/assets/journey-map.png.asset.json";
import duduImg from "@/assets/dudu.png.asset.json";
import babuImg from "@/assets/babu.png.asset.json";

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
    id: "gb",
    name: "Geetha Bhavan",
    x: 42,
    y: 22,
    title: "Just tea. Just you.",
    memory:
      "Just tea. Just conversations. Just a normal day. Yet somehow it became one of my favorite memories. Because it wasn't the tea that made it special. It was you.",
    emoji: "🍵",
  },
  {
    id: "kb",
    name: "Kulture Bakery",
    x: 18,
    y: 57,
    title: "More than friends",
    memory:
      "A bakery filled with snacks. A heart filled with questions. The conversations became easier. The smiles became warmer. And somewhere between those little moments… you started becoming my more than friend.",
    emoji: "🥐",
  },
  {
    id: "bb",
    name: "Bimbo Bakeries — Internship Days",
    x: 45,
    y: 55,
    title: "Where two souls became one",
    memory:
      "Busy roads. Monday Market. Crowded streets. Long workdays. But somewhere between all the ordinary moments… we found something extraordinary.\n\nThis wasn't just the place where we learned about work. It was where we learned about each other. Where two souls grew closer every single day. Where every conversation became a safe place. Where we shared our dreams, fears, possessiveness, laughter, late-night thoughts, study plans, and the little details no one else knew.\n\nWhenever I think about those days, I don't remember the traffic. I don't remember the noise. I don't even remember how tiring the days were. I remember you. 🏭❤️",
    emoji: "🥖",
  },
  {
    id: "dw",
    name: "Dawath Arabian Restaurant",
    x: 74,
    y: 59,
    title: "Spicing up our bond",
    memory:
      "After a long wait… two hearts finally met again. Good food. Long conversations. Endless smiles. A heart full of all the moments we missed. One more stop on our journey. One more memory added to my heart. 🍽️❤️",
    emoji: "🍽️",
  },
  {
    id: "mm",
    name: "Melody Mings",
    x: 22,
    y: 85,
    title: "Movies, laughter & us",
    memory:
      "This stop felt different. Because by then… it wasn't just about spending time together. It wasn't just about conversations. Somewhere along the way… my heart had already chosen you. And little by little… I became completely yours. 🌙❤️",
    emoji: "🎬",
  },
  {
    id: "tl",
    name: "Tealogy, KPHB",
    x: 48,
    y: 87,
    title: "But our forever starts",
    memory:
      "A table. Two people. Countless feelings. Conversations that carried things words could never fully explain. More laughter. More memories. And another beautiful pin added to our map. A place that will forever remind me of us. 🍵❤️",
    emoji: "🫖",
  },
];

export function SceneMap() {
  const [active, setActive] = useState<Stop | null>(null);

  // Loop the walk: visit each stop, then return to the first.
  const walkStops = [...STOPS, STOPS[0]];
  const walkX = walkStops.map((s) => `${s.x}%`);
  const walkY = walkStops.map((s) => `${s.y}%`);
  const totalDuration = STOPS.length * 3.2;

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
          Follow Dudu &amp; Babu as they wander through every place — tap a pin to unfold its memory.
        </p>

        <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(190,80,110,0.25)] ring-1 ring-rose-200/60">
          <img
            src={journeyMap.url}
            alt="Our relationship journey map with all our favorite places"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* Invisible clickable hotspots over each photo on the map */}
          {STOPS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActive(s)}
              aria-label={`Open memory: ${s.name}`}
              className="group absolute h-[18%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-2xl transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              <span className="absolute -top-2 -left-2 flex h-7 w-7 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white shadow-lg opacity-0 transition group-hover:opacity-100">
                {idx + 1}
              </span>
              <span className="absolute inset-0 rounded-2xl ring-2 ring-rose-400/0 transition group-hover:ring-rose-400/70" />
            </button>
          ))}

          {/* Walking Dudu + Babu — travel through every stop in a gentle loop */}
          <motion.div
            className="pointer-events-none absolute z-10 flex items-end gap-1"
            initial={{ left: `${STOPS[0].x}%`, top: `${STOPS[0].y}%` }}
            animate={{ left: walkX, top: walkY }}
            transition={{
              duration: totalDuration,
              ease: "easeInOut",
              times: walkStops.map((_, i) => i / (walkStops.length - 1)),
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ translateX: "-50%", translateY: "-90%" }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={duduImg.url}
                alt="Dudu the bunny"
                className="h-16 w-16 object-contain drop-shadow-[0_6px_10px_rgba(190,80,110,0.4)] md:h-24 md:w-24"
                draggable={false}
              />
            </motion.div>
            <HeartBurst className="mb-6 h-5 w-5 animate-floaty" />
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.15,
              }}
              className="relative"
            >
              <img
                src={babuImg.url}
                alt="Babu the bear"
                className="h-16 w-16 object-contain drop-shadow-[0_6px_10px_rgba(190,80,110,0.4)] md:h-24 md:w-24"
                draggable={false}
              />
            </motion.div>
          </motion.div>
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