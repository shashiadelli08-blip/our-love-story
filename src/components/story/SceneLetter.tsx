import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Particles } from "./Particles";
import { TiltCard } from "./TiltCard";
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
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-10 cv-auto">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, #fff0e6 0%, #f7d4c8 60%, #e5a99a 100%)",
        }}
      />
      <Particles count={12} kinds={["petal", "heart"]} tint="text-rose-400" />

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

        {/* Closed envelope — tap to open */}
        <TiltCard className="relative z-10 mx-auto mt-6 aspect-[4/3] w-full max-w-xl" max={8}>
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Open the letter"
            className="block h-full w-full cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[#e6b7a6] shadow-2xl" />

            <div
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
            </div>

            <div className="absolute inset-x-0 top-0 z-20 h-1/2">
              <div
                className="h-full w-full"
                style={{
                  background: "linear-gradient(165deg, #e8a892 0%, #d99783 45%, #c47a66 100%)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  boxShadow: "inset 0 -12px 24px -8px rgba(90, 40, 25, 0.35)",
                }}
              />
            </div>

            <div className="absolute left-1/2 top-1/2 z-30 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-700 text-center leading-[3rem] text-white shadow-md">
              ♥
            </div>
          </motion.button>
        </TiltCard>

        <p className="relative z-10 mt-6 text-center font-hand text-lg text-rose-700/80">
          tap the envelope to read it ✨
        </p>
      </div>

      {/* Popup with the full letter */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl p-6 text-left shadow-2xl md:p-10"
              style={{
                background: "linear-gradient(180deg, #fdf5e6 0%, #f5e4c5 100%)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(120,60,20,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(120,60,20,0.12), transparent 45%)",
                }}
              />
              <pre className="relative whitespace-pre-wrap font-hand text-base leading-relaxed text-[#5a2a1a] md:text-xl">
                {LETTER}
              </pre>

              <button
                onClick={() => setOpen(false)}
                className="relative mt-6 rounded-full bg-rose-700 px-6 py-2 text-sm text-white shadow hover:bg-rose-800"
              >
                Close ♡
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
