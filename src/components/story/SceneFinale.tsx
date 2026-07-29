import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Babu, Dudu, HeartBurst } from "./Characters";
import { Particles, StarField } from "./Particles";
import { TiltCard } from "./TiltCard";

function SunsetBoxSparkle() {
  const stars = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        i,
        left: 5 + Math.random() * 90,
        top: 8 + Math.random() * 45,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2,
        size: 6 + Math.random() * 6,
      })),
    [],
  );
  const hearts = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        i,
        left: 15 + Math.random() * 70,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 2,
        size: 10 + Math.random() * 10,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {stars.map((s) => (
        <motion.span
          key={`star-${s.i}`}
          className="absolute text-amber-100"
          style={{ left: `${s.left}%`, top: `${s.top}%`, fontSize: `${s.size}px` }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
        >
          ✦
        </motion.span>
      ))}
      {hearts.map((h) => (
        <motion.span
          key={`heart-${h.i}`}
          className="absolute bottom-2 text-rose-100"
          style={{ left: `${h.left}%`, fontSize: `${h.size}px` }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -90, opacity: [0, 1, 1, 0] }}
          transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: "easeOut" }}
        >
          ❤
        </motion.span>
      ))}
    </div>
  );
}

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
    <section className="relative min-h-screen overflow-hidden bg-night py-10 cv-auto">
      <StarField count={70} />
      <Particles count={16} kinds={["heart", "sparkle", "star"]} tint="text-rose-200" />

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
          className="font-display text-3xl sm:text-4xl md:text-7xl text-glow"
        >
          ❤️ Happy Birthday, My Nanna ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-xl mx-auto font-hand text-xl leading-relaxed text-rose-100 md:text-2xl"
        >
          And here we are. The final page. The end of this website. But never
          the end of the memories. Thank you for every conversation. Thank you
          for every smile. Thank you for every laugh. Thank you for every
          lesson. Thank you for every memory that became part of my life.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6 }}
          className="mt-6 max-w-xl mx-auto font-hand text-xl leading-relaxed text-rose-100 md:text-2xl"
        >
          If I could go back to the very beginning, I would still answer that
          first message. I would still walk that first step. I would still
          choose that journey. And I would still choose you. Again. And again.
          And again.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2 }}
          className="mt-6 max-w-xl mx-auto font-hand text-xl leading-relaxed text-rose-100 md:text-2xl"
        >
          Happy Birthday, Nanna. I hope life gives you every happiness you
          deserve. And if someday destiny decides to cross our paths again,
          you'll still find a little corner of my heart waiting for you.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.8 }}
          className="mt-6 font-hand text-2xl text-rose-100 md:text-3xl"
        >
          With love. With gratitude. With hope. And with a tiny tear in my
          eyes... I love you. Always and ever and ever you my everything and
          one incomplete wish.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3.4 }}
          className="mt-6 font-hand text-3xl md:text-4xl text-rose-100"
        >
          Forever Your Bangaram
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 4 }}
          className="mt-3 font-hand text-xl leading-relaxed text-rose-200 md:text-2xl"
        >
          🐰 Shashuluu, chotulu, and prathya parthyaksha daivam ani wife...
          and I missed you so much.
          <br />
          To My Nanna 🐻
        </motion.p>

        <div className="relative mt-14 flex items-center justify-center">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.4 }}
            className="w-24 md:w-32"
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
            className="-ml-6 w-24 md:w-32"
          >
            <Babu className="-scale-x-100" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={showFade ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="mt-16"
        >
          <TiltCard className="h-40 w-full" max={6}>
            <div
              className="relative h-full w-full overflow-hidden rounded-3xl"
              style={{
                background: "linear-gradient(180deg, #ffb98a 0%, #ff8a72 50%, #f76a75 100%)",
              }}
            >
              <SunsetBoxSparkle />
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={showFade ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-x-0 top-3 text-center font-hand text-base text-white/90 drop-shadow-sm sm:text-lg"
              >
                See you where destiny meets us again. ✨
              </motion.p>
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
            </div>
          </TiltCard>
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