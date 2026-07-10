import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Particles } from "./Particles";

const LETTER = `My dearest Nanna,

If I had to choose one word for what you are to me, it would still not be enough.
You are my quiet mornings and my noisy laughs, my safest place and my biggest adventure.

I remember every silly fight and every warm hug that came after.
I remember every "I'll call you back" that turned into hours.
I remember every small thing — because with you, nothing is small.

Thank you for being patient with me on my hard days,
for celebrating me on my happy ones,
and for choosing me — again and again.

On your birthday, I don't want to give you the world.
I just want to be your world.

Forever yours,
Shashuluu 🐰`;

export function SceneLetter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (inView) setTimeout(() => setOpened(true), 800);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-24"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, #fff0e6 0%, #f7d4c8 60%, #e5a99a 100%)",
        }}
      />
      <Particles count={20} kinds={["petal", "heart"]} tint="text-rose-400" />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center font-display text-4xl md:text-5xl text-rose-900"
        >
          A Letter for You
        </motion.h2>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
          <div className="absolute inset-0 rounded-lg bg-[#e6b7a6] shadow-2xl" />
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={opened ? { y: "-8%", rotate: -1, scale: 1.02 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-3 overflow-hidden rounded-md p-6 text-left md:p-10"
            style={{
              background: "linear-gradient(180deg, #fdf5e6 0%, #f5e4c5 100%)",
              boxShadow: "0 20px 40px -20px rgba(120, 50, 30, 0.4)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(120,60,20,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(120,60,20,0.12), transparent 45%)",
              }}
            />
            <motion.pre
              initial={{ opacity: 0 }}
              animate={opened ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 2 }}
              className="whitespace-pre-wrap font-hand text-base leading-relaxed text-[#5a2a1a] md:text-xl"
            >
              {LETTER}
            </motion.pre>
          </motion.div>
          <motion.div
            initial={{ rotateX: 0 }}
            animate={opened ? { rotateX: -180 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top", transformStyle: "preserve-3d" }}
            className="absolute inset-x-0 top-0 h-1/2"
          >
            <div
              className="h-full w-full"
              style={{
                background: "linear-gradient(180deg, #d99783 0%, #c47a66 100%)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />
          </motion.div>
          {!opened && (
            <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-700 text-center leading-[3rem] text-white shadow-md">
              ♥
            </div>
          )}
        </div>
      </div>
    </section>
  );
}