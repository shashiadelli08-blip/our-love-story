import { motion } from "framer-motion";
import { Babu, Dudu } from "./Characters";
import { Fireflies, StarField } from "./Particles";

const WISHES = [
  "Life doesn't always happen the way we plan. Sometimes people stay. Sometimes they leave. Sometimes paths separate. And sometimes... life gives them another chance to meet again.",
  "I don't know what tomorrow holds. Maybe one day our paths will cross again. Maybe one day we'll sit together and smile at these memories. Maybe one day we'll find our way back.",
  "And if that day ever comes... I hope our hearts recognize each other once more.",
  "But if life chooses another ending... then I still wish for your happiness. I still wish for your success. I still wish for your peace.",
  "Because real love never stops wanting the best for someone. Even when it hurts. Even when tears fall. Even when they are far away.",
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

        <div className="mt-14 flex flex-col items-center gap-6">
          {WISHES.map((w, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.5, duration: 1.2 }}
              className="max-w-xl font-hand text-xl leading-relaxed text-rose-100/95 md:text-2xl"
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