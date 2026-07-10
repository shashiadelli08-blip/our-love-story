import { motion } from "framer-motion";
import { Babu, Dudu } from "./Characters";
import { Fireflies, StarField } from "./Particles";

const WISHES = [
  "I wish for a life full of quiet Sunday mornings with you.",
  "I wish for laughter that fills every room we walk into.",
  "I wish for a hand that always finds mine in the dark.",
  "I wish for you — a little happier every single year.",
  "I wish for us — a story that keeps writing itself.",
];

export function SceneWishes() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-night py-24">
      <StarField count={100} />
      <Fireflies count={16} />
      <div
        className="absolute left-1/2 top-16 h-28 w-28 -translate-x-1/2 rounded-full animate-shimmer"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #fff8e0 0%, #f7d68a 55%, #b98a4a 100%)",
          boxShadow: "0 0 60px rgba(255, 220, 140, 0.35)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 font-display text-4xl md:text-5xl text-glow"
        >
          What My Heart Still Wishes
        </motion.h2>

        <div className="mt-14 flex flex-col items-center gap-5">
          {WISHES.map((w, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.6, duration: 1.2 }}
              className="font-hand text-2xl md:text-3xl text-rose-100/95"
            >
              {w}
            </motion.p>
          ))}
        </div>

        <div className="mt-16 flex items-end justify-center gap-2">
          <Dudu className="w-28 drop-shadow-2xl md:w-36" />
          <Babu className="-ml-4 w-28 -scale-x-100 drop-shadow-2xl md:w-36" />
        </div>
      </div>
    </section>
  );
}