import { motion } from "framer-motion";
import { HeartBurst } from "./Characters";
import { Particles } from "./Particles";
import duduAsset from "@/assets/dudu.png.asset.json";
import babuAsset from "@/assets/babu.png.asset.json";

const LINES = [
  "The screen is quiet.",
  "On one side stands Dudu.",
  "On the other side stands Babu.",
  "For a moment… they simply look at each other.",
  "Then Dudu slowly reaches out her hand.",
  "Babu smiles and reaches back.",
  "Their hands meet.",
];

export function SceneHands({ onNext }: { onNext: () => void }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #fff4ec 0%, #ffe6ea 55%, #fbd6df 100%)",
        }}
      />
      <Particles count={18} kinds={["heart", "petal", "sparkle"]} tint="text-rose-400" />

      <div className="relative z-10 flex w-full max-w-5xl items-end justify-center gap-4 px-6 md:gap-8">
        <motion.div
          initial={{ x: -180, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="flex w-40 flex-col items-center md:w-64"
        >
          <motion.img
            src={duduAsset.url}
            alt="Dudu"
            className="w-full drop-shadow-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="mt-2 font-hand text-2xl text-rose-700">Dudu</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.9, type: "spring" }}
          className="mb-28 flex flex-col items-center"
        >
          <HeartBurst className="h-14 w-14 animate-floaty" />
        </motion.div>

        <motion.div
          initial={{ x: 180, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="flex w-40 flex-col items-center md:w-64"
        >
          <motion.img
            src={babuAsset.url}
            alt="Babu"
            className="w-full drop-shadow-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <p className="mt-2 font-hand text-2xl text-rose-700">Babu</p>
        </motion.div>
      </div>

      <div className="relative z-10 mt-10 flex flex-col items-center gap-2 px-6 text-center">
        {LINES.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.35, duration: 0.9 }}
            className="font-hand text-2xl md:text-3xl text-rose-700"
          >
            {line}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + LINES.length * 0.35, duration: 0.8, type: "spring" }}
          className="mt-2 text-4xl"
        >
          ❤️
        </motion.p>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 3.4, duration: 0.8 }}
        onClick={onNext}
        whileHover={{ scale: 1.05 }}
        className="relative z-10 mt-8 rounded-full bg-white/70 px-8 py-3 font-medium text-rose-700 shadow-md ring-1 ring-rose-200 backdrop-blur"
      >
        ✨ Take My Hand ✨
      </motion.button>
    </section>
  );
}