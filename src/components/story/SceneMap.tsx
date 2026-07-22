import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Particles } from "./Particles";
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
  const [envOpen, setEnvOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [popped, setPopped] = useState<Record<string, boolean>>({});

  // Reset the envelope + typewriter each time a new stop opens
  useEffect(() => {
    setEnvOpen(false);
    setTyped("");
    if (!active) return;
    const openTimer = setTimeout(() => setEnvOpen(true), 900);
    return () => clearTimeout(openTimer);
  }, [active]);

  // When the memory modal closes, re-inflate that balloon so it can be popped again
  useEffect(() => {
    if (active) return;
    const t = setTimeout(() => setPopped({}), 400);
    return () => clearTimeout(t);
  }, [active]);

  // Typewriter effect once the envelope is open — Dudu reading slowly
  useEffect(() => {
    if (!active || !envOpen) return;
    const text = active.memory;
    let i = 0;
    setTyped("");
    const id = setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 32);
    return () => clearInterval(id);
  }, [active, envOpen]);

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
          Pop a balloon at each place to unfold the little memory hidden inside. 🎈
        </p>

        <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(190,80,110,0.25)] ring-1 ring-rose-200/60">
          <img
            src={journeyMap.url}
            alt="Our relationship journey map with all our favorite places"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* A floating balloon at every place — tap to pop and read the memory */}
          {STOPS.map((s, idx) => {
            const colors = [
              "from-rose-400 to-rose-600",
              "from-pink-400 to-pink-600",
              "from-fuchsia-400 to-fuchsia-600",
              "from-red-400 to-rose-500",
              "from-rose-300 to-pink-500",
              "from-pink-500 to-rose-600",
              "from-fuchsia-300 to-rose-500",
            ];
            const isPopped = popped[s.id];
            return (
              <button
                key={s.id}
                onClick={() => {
                  setPopped((p) => ({ ...p, [s.id]: true }));
                  setTimeout(() => setActive(s), 380);
                }}
                aria-label={`Pop the balloon at ${s.name}`}
                className="group absolute z-10 -translate-x-1/2 -translate-y-full focus:outline-none"
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
              >
                {/* String */}
                <span className="mx-auto block h-10 w-[2px] bg-rose-300/80" />
                {/* Balloon */}
                <motion.span
                  className="relative -mt-[46px] block"
                  animate={
                    isPopped
                      ? { scale: [1, 1.4, 0], opacity: [1, 1, 0], rotate: [0, -8, 0] }
                      : { y: [0, -6, 0], rotate: [-2, 2, -2] }
                  }
                  transition={
                    isPopped
                      ? { duration: 0.35 }
                      : { duration: 3 + idx * 0.2, repeat: Infinity, ease: "easeInOut" }
                  }
                >
                  <span
                    className={`relative flex h-10 w-9 items-center justify-center rounded-[50%] bg-gradient-to-br ${colors[idx % colors.length]} text-white shadow-[0_6px_14px_rgba(190,80,110,0.45)] ring-1 ring-white/40 transition group-hover:scale-110 md:h-14 md:w-12`}
                  >
                    <span className="text-[10px] font-bold md:text-xs">{idx + 1}</span>
                    <span className="absolute left-1.5 top-1.5 h-2 w-2 rounded-full bg-white/70 md:h-3 md:w-3" />
                    <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-inherit" />
                  </span>
                  {/* Little "pop me" nudge */}
                  <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-medium text-rose-600 opacity-0 shadow transition group-hover:opacity-100 md:text-[10px]">
                    pop me ✨
                  </span>
                </motion.span>
                {/* Pop burst */}
                {isPopped && (
                  <motion.span
                    className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 text-2xl"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    💥
                  </motion.span>
                )}
              </button>
            );
          })}
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
            className="relative w-full max-w-xl overflow-hidden rounded-3xl glass-card p-8 text-center"
          >
            {/* Babu opens the envelope, Dudu reads it slowly */}
            <div className="relative mx-auto mb-4 flex h-40 items-end justify-center gap-6">
              {/* Babu — opens the letter */}
              <motion.img
                src={babuImg.url}
                alt="Babu opens the letter"
                className="h-28 w-28 object-contain drop-shadow-[0_6px_10px_rgba(190,80,110,0.35)]"
                initial={{ x: -20, y: 10, opacity: 0 }}
                animate={{ x: 0, y: envOpen ? -6 : 0, opacity: 1, rotate: envOpen ? [-4, 4, -2, 0] : 0 }}
                transition={{ duration: 0.8 }}
                draggable={false}
              />

              {/* Envelope / Letter */}
              <div className="relative h-24 w-32">
                {/* Envelope base */}
                <motion.div
                  className="absolute inset-0 rounded-md bg-gradient-to-b from-rose-100 to-rose-200 shadow-inner ring-1 ring-rose-300"
                  animate={{ scale: envOpen ? 1.05 : 1 }}
                />
                {/* Envelope flap */}
                <motion.div
                  className="absolute left-0 right-0 top-0 h-14 origin-top rounded-t-md bg-rose-300"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    transformOrigin: "top center",
                  }}
                  animate={{ rotateX: envOpen ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                {/* Letter peeking */}
                <motion.div
                  className="absolute left-2 right-2 top-2 rounded-sm bg-white/95 px-2 py-1 text-[8px] leading-tight text-rose-900 shadow"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: envOpen ? -18 : 20, opacity: envOpen ? 1 : 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="font-hand text-[10px]">Dear Nanna…</div>
                  <div className="mt-1 space-y-[2px]">
                    <div className="h-[2px] w-full bg-rose-200" />
                    <div className="h-[2px] w-4/5 bg-rose-200" />
                    <div className="h-[2px] w-3/4 bg-rose-200" />
                  </div>
                </motion.div>
                {/* Heart seal */}
                {!envOpen && (
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 text-lg">❤️</div>
                )}
              </div>

              {/* Dudu — reads the letter */}
              <motion.img
                src={duduImg.url}
                alt="Dudu reads the letter"
                className="h-28 w-28 object-contain drop-shadow-[0_6px_10px_rgba(190,80,110,0.35)]"
                initial={{ x: 20, y: 10, opacity: 0 }}
                animate={{
                  x: 0,
                  y: envOpen ? [0, -3, 0] : 0,
                  opacity: 1,
                }}
                transition={{
                  duration: envOpen ? 2 : 0.8,
                  repeat: envOpen ? Infinity : 0,
                  ease: "easeInOut",
                }}
                draggable={false}
              />
            </div>

            <p className="font-hand text-xl text-rose-700">
              <span className="mr-2">{active.emoji}</span>
              {active.name}
            </p>
            <h3 className="mt-1 font-display text-3xl text-rose-900">{active.title}</h3>

            {/* Slow reveal — Dudu reading */}
            <p className="mt-4 min-h-[6rem] whitespace-pre-line text-left text-base leading-relaxed text-rose-950/80">
              {envOpen ? typed : ""}
              {envOpen && typed.length < active.memory.length && (
                <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-rose-400 align-middle" />
              )}
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