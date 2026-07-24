import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Particles } from "./Particles";

import couplePhoto1 from "@/assets/couple-photo-1.png";
import couplePhoto2 from "@/assets/couple-photo-2.png";
import couplePhoto3 from "@/assets/couple-photo-3.png";
import couplePhoto4 from "@/assets/couple-photo-4.png";
import couplePhoto5 from "@/assets/couple-photo-5.png";
import couplePhotoFoggy from "@/assets/couple-photo-foggy-glass.png";

import giftWireRing from "@/assets/gift-wire-heart-ring.png";
import giftBanglesBlue from "@/assets/gift-bangles-blue.png";
import giftBanglesGreen from "@/assets/gift-bangles-green.png";
import giftBanglesYellow from "@/assets/gift-bangles-yellow.png";
import giftHeartRingHand from "@/assets/gift-heart-ring-hand.png";
import giftTealBearJar from "@/assets/gift-teal-bear-jar.png";

import chatNote1 from "@/assets/chat-note-1.png";
import chatNote2 from "@/assets/chat-note-2.png";
import chatNote3 from "@/assets/chat-note-3.png";
import chatNote4 from "@/assets/chat-note-4.png";
import chatNote5 from "@/assets/chat-note-5.png";
import chatNote6 from "@/assets/chat-note-6.png";
import chatNote7 from "@/assets/chat-note-7.png";

import videoMessage2 from "@/assets/video-message-2.mp4";
import videoMessage3 from "@/assets/video-message-3.mp4";
import videoMessage6 from "@/assets/video-message-6.mp4";

const PHOTOS = [couplePhoto1, couplePhoto2, couplePhoto3, couplePhoto4, couplePhoto5, couplePhotoFoggy];
const GIFTS = [giftWireRing, giftBanglesBlue, giftBanglesGreen, giftBanglesYellow, giftHeartRingHand, giftTealBearJar];
const CHATS = [chatNote1, chatNote2, chatNote3, chatNote4, chatNote5, chatNote6, chatNote7];
const REELS = [videoMessage2, videoMessage3, videoMessage6];

const SONGS = [
  "https://open.spotify.com/track/61fXT6uwJ2THPkbmxa65OI?si=bc38d76d9a2a4337",
  "https://open.spotify.com/track/3JncIz6FsQSQpwQRfuD2X6?si=8ffdf88000174562",
  "https://open.spotify.com/track/7qi2RGLDPwx2aXfknysYLw?si=e2df63cf52c64cc6",
  "https://open.spotify.com/track/28kL5EiBHWVZMi67hNLCHS?si=a0081e6efdd44b8b",
  "https://open.spotify.com/track/1xbZ2No4vTyvc5sVcW4T9Q?si=c63d34892db14770",
  "https://open.spotify.com/track/78GAsjmgrz17UJaN1TvpKn?si=7b696a559db944cf",
];

const JOKES = [
  "gadidi guddu bellam gadda",
  "nijamga nuvvu pichidhaniviney",
  "prathya parthyaksha daivam",
  "...and every late-night joke only we understood.",
];

const CALLS = [
  "The call when you came back from Tirupati — more than 1 hour, and I didn't want it to end.",
  "1st Jan 2025 — even more special, staying with you the whole day.",
  "19th Jan 2025 — that call that went on till morning.",
  "Holding hands, walking through the street market.",
  "Every Rapido auto ride — each one still remembers our conversations.",
];

type Box = {
  id: string;
  icon: string;
  title: string;
  kind: "photos" | "songs" | "reels" | "gifts" | "jokes" | "calls" | "chats";
  ribbon: string;
  boxColor: string;
};

const BOXES: Box[] = [
  { id: "p", icon: "📸", title: "The Pictures That Made Me Blush", kind: "photos", ribbon: "#e5657e", boxColor: "#fff0f3" },
  { id: "s", icon: "🎵", title: "Our Dedication Songs", kind: "songs", ribbon: "#7a5fc4", boxColor: "#f3efff" },
  { id: "r", icon: "📱", title: "Reels That Reminded Me Of Us", kind: "reels", ribbon: "#c4507a", boxColor: "#fff0f6" },
  { id: "g", icon: "🎁", title: "Gifts That Meant More Than Words", kind: "gifts", ribbon: "#d69b3a", boxColor: "#fff8ed" },
  { id: "j", icon: "😂", title: "Jokes Only We Understood", kind: "jokes", ribbon: "#4a9d7f", boxColor: "#f0faf6" },
  { id: "c", icon: "📞", title: "Calls & Meets I Still Treasure", kind: "calls", ribbon: "#c4703a", boxColor: "#fff5ed" },
  { id: "ch", icon: "💬", title: "Notes I Still Scroll Through", kind: "chats", ribbon: "#a35fc4", boxColor: "#f8f0ff" },
];

function GiftBox3D({
  box,
  index,
  isOpen,
  onClick,
}: {
  box: Box;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      key={box.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={!isOpen ? { scale: 1.04, y: -4 } : {}}
      whileTap={!isOpen ? { scale: 0.98 } : {}}
      onClick={onClick}
      className="group relative flex flex-col items-center justify-end"
      style={{ perspective: "800px" }}
    >
      <div className="relative h-44 w-36 md:h-52 md:w-44" style={{ perspective: "800px" }}>
        {/* Lid */}
        <motion.div
          animate={isOpen ? { rotateX: -110, y: -8, z: 10 } : { rotateX: 0, y: 0, z: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="absolute left-0 top-0 z-20 h-10 w-full origin-bottom rounded-t-lg shadow-md"
          style={{
            background: box.boxColor,
            border: `2px solid ${box.ribbon}55`,
            transformStyle: "preserve-3d",
            boxShadow: isOpen ? "0 12px 24px rgba(0,0,0,0.15)" : "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2"
            style={{ background: box.ribbon }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-sm"
            style={{ background: box.ribbon }}
          />
        </motion.div>

        {/* Box body */}
        <div
          className="absolute bottom-0 left-0 h-36 w-full rounded-b-lg md:h-44"
          style={{
            background: box.boxColor,
            border: `2px solid ${box.ribbon}55`,
            borderTop: "none",
            boxShadow: "inset 0 -10px 20px rgba(0,0,0,0.04), 0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="absolute inset-y-0 left-1/2 w-3 -translate-x-1/2"
            style={{ background: box.ribbon }}
          />
          <div
            className="absolute left-0 top-1/2 h-3 w-full -translate-y-1/2"
            style={{ background: box.ribbon, opacity: 0.85 }}
          />

          {/* Glow inside when open */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 rounded-b-lg"
                style={{
                  background: `radial-gradient(circle at center, ${box.ribbon}33 0%, transparent 70%)`,
                }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Floating icon / sparkle when open */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.5 }}
              animate={{ opacity: 1, y: -28, scale: 1 }}
              exit={{ opacity: 0, y: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
              className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl drop-shadow-lg"
            >
              {box.icon}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Label tag */}
      <motion.div
        animate={isOpen ? { y: 4 } : { y: 0 }}
        className="mt-4 rounded-full px-4 py-1.5 text-center text-sm font-semibold shadow-sm backdrop-blur-sm"
        style={{
          background: `${box.boxColor}ee`,
          color: box.ribbon,
          border: `1.5px solid ${box.ribbon}44`,
        }}
      >
        {isOpen ? "Opened ✨" : "Open me ♡"}
      </motion.div>
      <p className="mt-2 max-w-[10rem] text-center font-hand text-lg leading-tight text-rose-800">
        {box.title}
      </p>
    </motion.button>
  );
}

export function SceneMemories() {
  const [open, setOpen] = useState<Box | null>(null);
  const [openedIds, setOpenedIds] = useState<Set<string>>(new Set());

  const handleOpen = (box: Box) => {
    setOpen(box);
    setOpenedIds((prev) => new Set(prev).add(box.id));
  };

  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #f7e7d8 0%, #eecdb5 60%, #e0b6a0 100%)",
        }}
      />
      <Particles count={14} kinds={["sparkle", "heart"]} tint="text-rose-500/70" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-4xl md:text-6xl text-rose-900"
        >
          Beautiful Memories, Wrapped Up
        </motion.h2>
        <p className="mt-2 text-center font-hand text-2xl text-rose-700">
          Tap each gift box — every one holds a piece of us.
        </p>

        <div className="mt-16 grid grid-cols-2 place-items-center gap-10 md:grid-cols-4 lg:grid-cols-7">
          {BOXES.map((it, i) => (
            <GiftBox3D
              key={it.id}
              box={it}
              index={i}
              isOpen={openedIds.has(it.id)}
              onClick={() => handleOpen(it)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl glass-card p-8 text-center"
            >
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl shadow-md"
                style={{ background: open.boxColor, color: open.ribbon, border: `2px solid ${open.ribbon}44` }}
              >
                {open.icon}
              </div>
              <h3 className="font-display text-3xl text-rose-900">{open.title}</h3>

              {open.kind === "photos" && (
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {PHOTOS.map((src, i) => (
                    <img key={i} src={src} alt="Us" className="aspect-square w-full rounded-xl object-cover shadow-md" />
                  ))}
                </div>
              )}

              {open.kind === "gifts" && (
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {GIFTS.map((src, i) => (
                    <img key={i} src={src} alt="A gift" className="aspect-square w-full rounded-xl object-cover shadow-md" />
                  ))}
                </div>
              )}

              {open.kind === "chats" && (
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {CHATS.map((src, i) => (
                    <img key={i} src={src} alt="A note" className="w-full rounded-xl object-cover shadow-md" />
                  ))}
                </div>
              )}

              {open.kind === "reels" && (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {REELS.map((src, i) => (
                    <video
                      key={i}
                      src={src}
                      controls
                      playsInline
                      className="mx-auto max-h-[60vh] w-full rounded-xl bg-black object-contain shadow-md"
                    />
                  ))}
                </div>
              )}

              {open.kind === "songs" && (
                <div className="mt-6 flex flex-col gap-3">
                  {SONGS.map((url, i) => {
                    const trackId = url.split("/track/")[1]?.split("?")[0];
                    return (
                      <iframe
                        key={i}
                        title={`Dedication song ${i + 1}`}
                        src={`https://open.spotify.com/embed/track/${trackId}`}
                        width="100%"
                        height="152"
                        style={{ borderRadius: "12px", border: 0 }}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      />
                    );
                  })}
                </div>
              )}

              {open.kind === "jokes" && (
                <ul className="mt-6 flex flex-col gap-3 text-left font-hand text-xl text-rose-800">
                  {JOKES.map((j, i) => (
                    <li key={i} className="rounded-xl bg-white/60 px-4 py-3 shadow">
                      😂 {j}
                    </li>
                  ))}
                </ul>
              )}

              {open.kind === "calls" && (
                <ul className="mt-6 flex flex-col gap-3 text-left font-hand text-lg text-rose-800">
                  {CALLS.map((c, i) => (
                    <li key={i} className="rounded-xl bg-white/60 px-4 py-3 shadow">
                      📞 {c}
                    </li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => setOpen(null)}
                className="mt-6 rounded-full bg-rose-500 px-6 py-2 text-sm text-white shadow hover:bg-rose-600"
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
