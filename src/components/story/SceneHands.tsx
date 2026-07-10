import { motion } from "framer-motion";
import { Babu, Dudu, HeartBurst } from "./Characters";
import { Particles } from "./Particles";

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
      <div className="relative z-10 flex w-full max-w-5xl items-end justify-center gap-2 px-6 md:gap-0">
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-40 md:w-64"
        >
          <Dudu className="drop-shadow-xl" />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
          className="mb-24 flex flex-col items-center"
        >
          <HeartBurst className="h-14 w-14 animate-floaty" />
        </motion.div>

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-40 md:w-64"
        >
          <Babu className="drop-shadow-xl -scale-x-100" />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 1.2 }}
        className="relative z-10 mt-10 font-hand text-3xl md:text-4xl text-rose-700"
      >
        Two hearts, one path.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.6, duration: 0.8 }}
        onClick={onNext}
        whileHover={{ scale: 1.05 }}
        className="relative z-10 mt-8 rounded-full bg-white/70 px-8 py-3 font-medium text-rose-700 shadow-md ring-1 ring-rose-200 backdrop-blur"
      >
        ✨ Take My Hand ✨
      </motion.button>
    </section>
  );
}