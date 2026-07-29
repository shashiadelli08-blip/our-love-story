import { motion } from "framer-motion";
import { Babu, Dudu, HeartBurst } from "./Characters";
import { Particles } from "./Particles";
import { TiltCard } from "./TiltCard";
import handshakeBanner from "@/assets/mascot-handshake-banner.png";

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

      <div className="relative z-10 flex w-full max-w-5xl items-end justify-center gap-1 px-4 sm:gap-2 sm:px-6 md:gap-0">
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-20 sm:w-28 md:w-40"
        >
          <Dudu className="drop-shadow-xl" />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
          className="mb-16 flex flex-col items-center sm:mb-24"
        >
          <HeartBurst className="h-10 w-10 animate-floaty sm:h-14 sm:w-14" />
        </motion.div>

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-20 sm:w-28 md:w-40"
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

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.3, duration: 0.9 }}
        className="relative z-10 mt-8 w-48 md:w-56"
      >
        <TiltCard max={12}>
          <img
            src={handshakeBanner}
            alt="Take my hand"
            onClick={onNext}
            className="w-full cursor-pointer drop-shadow-xl"
          />
        </TiltCard>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.6, duration: 0.8 }}
        onClick={onNext}
        whileHover={{ scale: 1.05 }}
        className="relative z-10 mt-4 rounded-full bg-white/70 px-8 py-3 font-medium text-rose-700 shadow-md ring-1 ring-rose-200 backdrop-blur"
      >
        ✨ Take My Hand ✨
      </motion.button>
    </section>
  );
}
