<<<<<<< Updated upstream
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Particles } from "./Particles";
import journeyMap from "@/assets/journey-map.png.asset.json";
import duduImg from "@/assets/dudu.png.asset.json";
import babuImg from "@/assets/babu.png.asset.json";
=======
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Particles } from "./Particles";
import { Dudu, Babu } from "./Characters";
import journeyMap from "@/assets/journey-map.png";
>>>>>>> Stashed changes

type Stop = {
  id: string;
  name: string;
  emoji: string;
  message: string;
};

const STOPS: Stop[] = [
  {
    id: "kims",
<<<<<<< Updated upstream
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
=======
    name: "KIMS Degree & PG College, Karimnagar",
    emoji: "🎓",
    message:
      "The place where our story stepped into reality.\nThe place where strangers became familiar.\nThe place where I first saw you and never knew how important you'd become.\n\n✨ First Meet.\n✨ First Memory.\n✨ First Chapter.",
  },
  {
    id: "geetha",
    name: "Geetha Bhavan",
    emoji: "☕",
    message:
      "Just tea.\nJust conversations.\nJust a normal day.\n\nYet somehow it became one of my favorite memories.\nBecause it wasn't the tea that made it special.\nIt was you. ☕❤️",
  },
  {
    id: "kulture",
    name: "Kulture Bakery",
    emoji: "🥐",
    message:
      "A bakery filled with snacks.\nA heart filled with questions.\n\nThe conversations became easier.\nThe smiles became warmer.\nAnd somewhere between those little moments...\nYou started becoming my more than friend. 🥐❤️",
  },
  {
    id: "bimbo",
    name: "Internship Days — Bimbo Bakeries, Uppal",
    emoji: "🏭",
    message:
      "Busy roads. Monday Market. Crowded streets. Long workdays.\nBut somewhere between all the ordinary moments, we found something extraordinary.\n\nThis wasn't just the place where we learned about work.\nIt was where we learned about each other.\nWhere two souls grew closer every single day.\nWhere every conversation became a safe place.\nWhere we shared our dreams, fears, possessiveness, laughter, late-night thoughts, study plans, and the little details no one else knew.\nWhere we stood beside each other through every situation — not because we had to, but because we wanted to.\n\nWhenever I think about those days, I don't remember the traffic. I don't remember the noise. I don't even remember how tiring the days were.\nI remember you.\n\nBecause this was the place where two lives became one beautiful journey. 🏭❤️",
  },
  {
    id: "dawath",
    name: "Dawath Arabian Restaurant",
    emoji: "🍽️",
    message:
      "After a long wait...\nTwo hearts finally met again.\n\nGood food. Long conversations. Endless smiles.\nA heart full of all the moments we missed.\n\nOne more stop on our journey.\nOne more memory added to my heart. 🍽️❤️",
  },
  {
    id: "melody",
    name: "Melody Mings",
    emoji: "🌙",
    message:
      "This stop felt different.\nBecause by then... it wasn't just about spending time together.\nIt wasn't just about conversations.\n\nSomewhere along the way, my heart had already chosen you.\nAnd little by little, I became completely yours. 🌙❤️",
  },
  {
    id: "tealogy",
    name: "Tealogy, KPHB — Last Meet",
    emoji: "📍",
    message:
      "A table. Two people. Countless feelings.\nConversations that carried things words could never fully explain.\n\nMore laughter. More memories.\nAnd another beautiful pin added to our map.\n\nA place that will forever remind me of us. 📍❤️",
>>>>>>> Stashed changes
  },
];

export function SceneMap() {
<<<<<<< Updated upstream
  const [active, setActive] = useState<Stop | null>(null);
  const [envOpen, setEnvOpen] = useState(false);
  const [typed, setTyped] = useState("");

  // Reset the envelope + typewriter each time a new stop opens
  useEffect(() => {
    setEnvOpen(false);
    setTyped("");
    if (!active) return;
    const openTimer = setTimeout(() => setEnvOpen(true), 900);
    return () => clearTimeout(openTimer);
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
=======
  const [step, setStep] = useState(0);
  const [openStop, setOpenStop] = useState<Stop | null>(null);
  const current = STOPS[step];

  const advance = () => {
    setOpenStop(current);
  };

  const closeAndContinue = () => {
    setOpenStop(null);
    setStep((s) => Math.min(s + 1, STOPS.length - 1));
  };
>>>>>>> Stashed changes

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

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl text-rose-900"
        >
          Two Different Places, One Beautiful Destiny
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6"
          >
            <p className="font-hand text-2xl text-rose-700">📍 Raddepally</p>
            <p className="mt-2 text-rose-950/80">
              There lived a boy. Living his own life. Following his own dreams.
              Writing his own story.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6"
          >
            <p className="font-hand text-2xl text-rose-700">📍 Vemulawada</p>
            <p className="mt-2 text-rose-950/80">
              There lived a girl. Living her own life. Following her own
              dreams. Writing her own story.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl font-hand text-xl text-rose-800"
        >
          Different places. Different roads. Different lives. Yet destiny was
          already drawing a route between them — a route called "Us." And one
          day, a simple message arrived. Just a "Hi." Sometimes the most
          beautiful stories begin with the smallest moments. And ours did too.
        </motion.p>
      </div>

      <div className="relative z-10 mx-auto mt-20 max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-4xl md:text-6xl text-rose-900"
        >
<<<<<<< Updated upstream
          Our Relationship Journey
        </motion.h2>
        <p className="mt-3 text-center font-hand text-2xl text-rose-700">
          Tap the little ♥ at each place to reveal the memory hidden inside.
        </p>

        <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(190,80,110,0.25)] ring-1 ring-rose-200/60">
          <img
            src={journeyMap.url}
            alt="Our relationship journey map with all our favorite places"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* A tiny heart badge with a number at every place — tap to open the memory */}
          {STOPS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActive(s)}
              aria-label={`Open memory for ${s.name}`}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              <motion.span
                className="relative block"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.8 + idx * 0.15, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* soft glow ring */}
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-rose-400/40" />
                {/* heart badge */}
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-[0_4px_10px_rgba(190,80,110,0.5)] ring-2 ring-white transition group-hover:scale-125 md:h-9 md:w-9">
                  <span className="absolute text-[14px] md:text-[18px]">♥</span>
                  <span className="relative text-[9px] font-bold leading-none md:text-[11px]">
                    {idx + 1}
                  </span>
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-medium text-rose-600 opacity-0 shadow transition group-hover:opacity-100 md:text-[10px]">
                  tap me ✨
                </span>
              </motion.span>
            </button>
          ))}
=======
          The Route We Travelled Together
        </motion.h2>
        <p className="mt-3 text-center font-hand text-2xl text-rose-700">
          🐰❤️🐻 Every step, another memory.
        </p>

        <motion.img
          src={journeyMap}
          alt="Our relationship journey map"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-10 w-full max-w-md rounded-[2rem] shadow-2xl ring-4 ring-white/60"
          style={{ filter: "contrast(1.06) saturate(1.1)" }}
        />

        <div className="mt-14 flex flex-col items-center">
          <p className="mb-6 font-hand text-xl text-rose-700">
            Stop {step + 1} of {STOPS.length}
          </p>

          <div className="flex w-full max-w-lg items-center justify-center gap-4">
            <motion.div
              key={`dudu-${step}`}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-16 md:w-20"
            >
              <Dudu />
            </motion.div>

            <motion.button
              onClick={advance}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }}
              className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white text-3xl shadow-[0_10px_30px_rgba(200,90,90,0.35)] ring-2 ring-rose-300 md:h-28 md:w-28"
            >
              <span>{current.emoji}</span>
              <span className="mt-1 text-[10px] font-medium text-rose-700">
                tap the balloon
              </span>
            </motion.button>

            <motion.div
              key={`babu-${step}`}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-16 md:w-20"
            >
              <Babu className="-scale-x-100" />
            </motion.div>
          </div>

          <p className="mt-6 font-hand text-2xl text-rose-800">
            📍 {current.name}
          </p>
>>>>>>> Stashed changes
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center font-hand text-xl text-rose-800/80">
          "It's not about where we go, but who we have by our side.
          Here's to us, always &amp; forever." ♡
        </p>
      </div>

      <AnimatePresence>
        {openStop && (
          <motion.div
<<<<<<< Updated upstream
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
=======
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={closeAndContinue}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl glass-card p-8 text-center"
>>>>>>> Stashed changes
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-rose text-3xl">
                {openStop.emoji}
              </div>
              <h3 className="font-display text-2xl text-rose-900 md:text-3xl">
                {openStop.name}
              </h3>
              <p className="mt-4 whitespace-pre-line text-left text-base leading-relaxed text-rose-950/80">
                {openStop.message}
              </p>
              <button
                onClick={closeAndContinue}
                className="mt-6 rounded-full bg-rose-500 px-6 py-2 text-sm font-medium text-white shadow hover:bg-rose-600"
              >
                {step < STOPS.length - 1 ? "Next stop ♡" : "Close ♡"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
