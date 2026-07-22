import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { StarField, Particles } from "./Particles";

const LINE_1 = "❤️ NANNA ❤️";
const LINE_2 = "Happy Birthday, My Love";

export function SceneOpening({ onBegin }: { onBegin: () => void }) {
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [done, setDone] = useState(false);
  const btn = useAnimation();

  useEffect(() => {
    let i = 0;
    const id1 = setInterval(() => {
      i++;
      setT1(LINE_1.slice(0, i));
      if (i >= LINE_1.length) {
        clearInterval(id1);
        let j = 0;
        const id2 = setInterval(() => {
          j++;
          setT2(LINE_2.slice(0, j));
          if (j >= LINE_2.length) {
            clearInterval(id2);
            setTimeout(() => setDone(true), 400);
          }
        }, 55);
      }
    }, 110);
    return () => clearInterval(id1);
  }, []);

  useEffect(() => {
    if (done) btn.start({ opacity: 1, y: 0, scale: 1 });
  }, [done, btn]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-night text-white">
      <StarField count={120} />
      <Particles count={20} kinds={["heart", "sparkle"]} tint="text-rose-200" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute right-[10%] top-[12%] h-40 w-40 rounded-full animate-shimmer"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #fff8e0 0%, #f7d68a 55%, #b98a4a 100%)",
          boxShadow: "0 0 80px 20px rgba(255, 220, 140, 0.35)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="mb-6 font-hand text-2xl text-rose-100/80"
        >
          A little story, just for you...
        </motion.p>
        <h1 className="font-display text-6xl md:text-8xl font-semibold text-glow">
          {t1}
          <span className="inline-block w-[2px] translate-y-2 animate-pulse bg-rose-200 align-middle" />
        </h1>
        <p className="mt-6 font-display text-2xl md:text-4xl text-rose-50/90">
          {t2}
        </p>
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={btn}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onClick={onBegin}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-14 rounded-full bg-gradient-rose px-8 py-4 text-lg font-medium text-white shadow-[var(--shadow-glow)] transition"
        >
          Begin Our Journey ❤️
        </motion.button>
      </div>
    </section>
  );
}