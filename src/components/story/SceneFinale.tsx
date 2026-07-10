import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Babu, Dudu, HeartBurst } from "./Characters";
import { Particles, StarField } from "./Particles";

export function SceneFinale() {
  const [showFade, setShowFade] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowFade(true), 5000);
    const t2 = setTimeout(() => setShowFinal(true), 7500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-night py-24">
      <StarField count={150} />
      <Particles count={30} kinds={["heart", "sparkle", "star"]} tint="text-rose-200" />

      {Array.from({ length: 10 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          whileInView={{ y: "-20vh", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 10 + i, delay: i * 0.6, ease: "easeOut" }}
          className="absolute h-8 w-6 rounded-b-2xl rounded-t-md"
          style={{
            left: `${5 + i * 9}%`,
            background: "linear-gradient(180deg, #ffd88a 0%, #ff9a5a 100%)",
            boxShadow: "0 0 20px rgba(255, 180, 100, 0.7)",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl text-glow"
        >
          ❤️ Happy Birthday, My Nanna ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-6 font-hand text-3xl md:text-4xl text-rose-100"
        >
          Forever Your Bangaram
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6 }}
          className="mt-2 font-hand text-2xl text-rose-200"
        >
          🐰 Shashuluu — To My Nanna 🐻
        </motion.p>

        <div className="relative mt-14 flex items-center justify-center">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.4 }}
            className="w-32 md:w-44"
          >
            <Dudu />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.2, type: "spring" }}
            className="mb-14"
          >
            <HeartBurst className="h-16 w-16 animate-floaty" />
          </motion.div>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.4 }}
            className="-ml-6 w-32 md:w-44"
          >
            <Babu className="-scale-x-100" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={showFade ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="relative mt-16 h-40 overflow-hidden rounded-3xl"
          style={{
            background: "linear-gradient(180deg, #ffb98a 0%, #ff8a72 50%, #f76a75 100%)",
          }}
        >
          <motion.div
            initial={{ x: "-10%" }}
            animate={showFade ? { x: "60%" } : {}}
            transition={{ duration: 6, ease: "easeInOut" }}
            className="absolute bottom-0 flex items-end gap-1"
          >
            <Dudu className="w-16" />
            <Babu className="-ml-2 w-16 -scale-x-100" />
          </motion.div>
          <div
            className="absolute right-4 top-4 h-16 w-16 rounded-full"
            style={{
              background:
                "radial-gradient(circle, #fff2b0 0%, #ffb96a 60%, transparent 80%)",
              boxShadow: "0 0 60px rgba(255, 200, 100, 0.9)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={showFinal ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="mt-14"
        >
          <p className="font-display text-xl italic text-rose-100/90 md:text-2xl">
            &ldquo;Every love story doesn&rsquo;t need a perfect ending
            <br />
            to become a beautiful memory.&rdquo;
          </p>
          <p className="mt-8 text-5xl">❤️</p>
          <p className="mt-4 font-hand text-2xl text-rose-100">
            Thank you for walking through our little world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}