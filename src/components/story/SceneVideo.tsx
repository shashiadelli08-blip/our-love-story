import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Fireflies } from "./Particles";
import { TiltCard } from "./TiltCard";

import videoMessage1 from "@/assets/video-message-1.mp4";
import videoMessage2 from "@/assets/video-message-2.mp4";
import videoMessage3 from "@/assets/video-message-3.mp4";
import videoMessage4 from "@/assets/video-message-4.mp4";
import videoMessage5 from "@/assets/video-message-5.mp4";
import videoMessage6 from "@/assets/video-message-6.mp4";
import videoMessage7 from "@/assets/video-message-7.mp4";

const VIDEOS = [
  videoMessage1,
  videoMessage2,
  videoMessage3,
  videoMessage4,
  videoMessage5,
  videoMessage6,
  videoMessage7,
];

export function SceneVideo({ onClose }: { onClose: () => void }) {
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-night/98 px-4 py-10"
      onClick={onClose}
    >
      <Fireflies count={20} />
      <button
        onClick={onClose}
        aria-label="Close"
        className="fixed right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-rose-100 backdrop-blur transition hover:bg-white/20"
      >
        ✕
      </button>

      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 mx-auto w-full max-w-3xl text-center text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-2xl text-rose-100 sm:text-3xl"
        >
          I couldn't fit everything into words...
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-2 font-hand text-2xl text-rose-100 sm:text-3xl"
        >
          So I recorded this for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl"
        >
          <TiltCard max={5}>
            <div
              className="relative rounded-[2rem] p-6 md:p-8"
              style={{
                background: "linear-gradient(180deg, #6b4a3a 0%, #3d271c 100%)",
                boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7), inset 0 0 20px rgba(0,0,0,0.5)",
              }}
            >
              <div className="relative flex max-h-[60vh] items-center justify-center overflow-hidden rounded-2xl border-4 border-[#2a1710] bg-black">
                <video
                  key={index}
                  src={VIDEOS[index]}
                  controls
                  playsInline
                  preload="metadata"
                  className="max-h-[60vh] w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-2">
                <button
                  onClick={() => setIndex((i) => (i - 1 + VIDEOS.length) % VIDEOS.length)}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-rose-100 transition hover:bg-white/20"
                >
                  ‹ Prev
                </button>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {VIDEOS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Clip ${i + 1}`}
                      className={`h-2 w-2 rounded-full transition ${
                        i === index ? "bg-rose-300" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setIndex((i) => (i + 1) % VIDEOS.length)}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-rose-100 transition hover:bg-white/20"
                >
                  Next ›
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between px-2">
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-amber-200/60">
                  For Nanna · Clip {index + 1} of {VIDEOS.length}
                </span>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 font-hand text-lg text-rose-200/90 sm:text-xl"
        >
          No scripts. No filters. No pretending. Just me. Just my heart. Speaking to yours. ❤️
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
