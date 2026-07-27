import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Particles } from "./Particles";
import readingBook from "@/assets/mascot-reading-book.png";

const LETTER = `Dear Nanna,

At first...
You were simply another person.
A new conversation.
A new friend.
A new chapter.

But little by little...
You became more.

I started waiting for your messages.
I started smiling whenever your name appeared.
I started sharing parts of myself I never shared with anyone else.

Your voice became comfort.
Your presence became peace.
Your happiness became important.

And without even realizing it...
You became home.

Maybe love doesn't always arrive with fireworks.
Maybe it arrives quietly.
Message by message.
Call by call.
Day by day.
Heart by heart.

And before I knew it...
You weren't just part of my life.
You were part of me.

Love,
Your Bangaram ❤️`;

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
          className="relative z-30 mb-8 text-center font-display text-4xl md:text-5xl text-rose-900"
        >
          A Letter To My Nanna
        </motion.h2>

        <motion.img
          src={readingBook}
          alt=""
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-30 mx-auto mb-4 w-16 drop-shadow-xl md:w-20"
        />

        <div className="relative z-10 mx-auto mt-6 aspect-[4/3] w-full max-w-xl">
          {/* Envelope backing card */}
          <div className="absolute inset-0 rounded-lg bg-[#e6b7a6] shadow-2xl" />

          {/* Letter sheet */}
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={opened ? { y: "-8%", rotate: -1, scale: 1.02 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-3 z-10 overflow-hidden rounded-md p-6 text-left md:p-10"
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

          {/* Envelope flap — sits above the letter while closed, drops behind it once opened */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={opened ? { rotateX: -180 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top", transformStyle: "preserve-3d" }}
            className={`absolute inset-x-0 top-0 h-1/2 ${opened ? "z-0" : "z-20"}`}
          >
            <div
              className="relative h-full w-full"
              style={{
                background: "linear-gradient(165deg, #e8a892 0%, #d99783 45%, #c47a66 100%)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                boxShadow: "inset 0 -12px 24px -8px rgba(90, 40, 25, 0.35)",
              }}
            />
          </motion.div>

          {!opened && (
            <div className="absolute left-1/2 top-1/2 z-30 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-700 text-center leading-[3rem] text-white shadow-md">
              ♥
            </div>
          )}
        </div>
      </div>
    </section>
  );
}