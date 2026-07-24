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

const GOLD = "#d4af37";
const GOLD_LIGHT = "#f4d97a";
const BLUSH = "#f7a8c0";
const BLUSH_DEEP = "#e5657e";

function FloatingBits() {
  const bits = Array.from({ length: 40 }).map((_, i) => {
    const kinds = ["❤", "✨", "🌸", "🦋", "✦"];
    return {
      i,
      char: kinds[i % kinds.length],
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 3 + Math.random() * 4,
      size: 12 + Math.random() * 20,
      drift: (Math.random() - 0.5) * 300,
    };
  });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bits.map((b) => (
        <motion.span
          key={b.i}
          initial={{ y: 0, x: 0, opacity: 0, scale: 0.4, rotate: 0 }}
          animate={{
            y: -600 - Math.random() * 200,
            x: b.drift,
            opacity: [0, 1, 1, 0],
            scale: [0.4, 1, 1, 0.6],
            rotate: (Math.random() - 0.5) * 360,
          }}
          transition={{ duration: b.duration, delay: b.delay, ease: "easeOut" }}
          className="absolute"
          style={{
            left: `${b.left}%`,
            bottom: "45%",
            fontSize: `${b.size}px`,
            filter: "drop-shadow(0 0 6px rgba(255,200,220,0.7))",
          }}
        >
          {b.char}
        </motion.span>
      ))}
    </div>
  );
}

function PremiumGiftBox({ opened, onOpen }: { opened: boolean; onOpen: () => void }) {
  return (
    <div className="relative flex items-center justify-center" style={{ perspective: "1200px" }}>
      {/* Glowing aura */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[380px] w-[380px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${GOLD_LIGHT}55 0%, ${BLUSH}33 40%, transparent 70%)`,
          filter: "blur(30px)",
        }}
      />

      {/* Sparkles around box */}
      {!opened &&
        Array.from({ length: 14 }).map((_, i) => {
          const angle = (i / 14) * Math.PI * 2;
          const r = 170;
          return (
            <motion.span
              key={i}
              className="absolute text-yellow-200"
              style={{
                left: `calc(50% + ${Math.cos(angle) * r}px)`,
                top: `calc(50% + ${Math.sin(angle) * r}px)`,
                fontSize: 14 + Math.random() * 10,
                filter: "drop-shadow(0 0 6px #f4d97a)",
              }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1.2, 0.6] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: i * 0.15 }}
            >
              ✦
            </motion.span>
          );
        })}

      <div
        className="relative h-72 w-72 md:h-80 md:w-80"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(12deg) rotateY(-18deg)" }}
      >
        {/* Inner glow when open */}
        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute left-1/2 top-1/3 z-30 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: `radial-gradient(circle, #fff2c8 0%, ${GOLD_LIGHT}cc 30%, ${BLUSH}44 60%, transparent 80%)`,
                filter: "blur(10px)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Lid */}
        <motion.div
          animate={
            opened
              ? { rotateX: -125, y: -30, z: 40 }
              : { rotateX: 0, y: 0, z: 0 }
          }
          transition={{ type: "spring", stiffness: 90, damping: 14, delay: opened ? 0.3 : 0 }}
          className="absolute left-0 top-0 z-20 h-20 w-full origin-bottom rounded-xl"
          style={{
            background: `linear-gradient(145deg, #fff5f8 0%, #ffe0ec 50%, #ffc9dd 100%)`,
            border: `3px solid ${GOLD}`,
            transformStyle: "preserve-3d",
            boxShadow: `0 20px 40px ${BLUSH_DEEP}44, inset 0 0 20px ${GOLD}33`,
          }}
        />

        {/* Box body */}
        <div
          className="absolute bottom-0 left-0 h-60 w-full rounded-xl"
          style={{
            background: `linear-gradient(145deg, #ffd6e5 0%, #ffb8d1 50%, #ff9ec2 100%)`,
            border: `3px solid ${GOLD}`,
            borderTop: "none",
            boxShadow: `0 30px 60px ${BLUSH_DEEP}55, inset 0 -20px 40px ${BLUSH_DEEP}22, inset 0 0 30px ${GOLD}22`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Vertical ribbon */}
          <div
            className="absolute inset-y-0 left-1/2 w-6 -translate-x-1/2"
            style={{
              background: `linear-gradient(90deg, ${BLUSH_DEEP} 0%, ${BLUSH} 50%, ${BLUSH_DEEP} 100%)`,
              boxShadow: `0 0 15px ${BLUSH}88`,
            }}
          />
          {/* Golden edge highlight */}
          <div
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={{
              background: `linear-gradient(180deg, ${GOLD_LIGHT}44 0%, transparent 20%, transparent 80%, ${GOLD}33 100%)`,
            }}
          />
        </div>

        {/* Horizontal ribbon + bow (on lid area) */}
        <AnimatePresence>
          {!opened && (
            <motion.button
              onClick={onOpen}
              exit={{ opacity: 0, scale: 0.4, rotate: 180 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
              className="absolute left-1/2 top-16 z-40 -translate-x-1/2 cursor-pointer"
              aria-label="Untie the ribbon"
            >
              {/* Bow */}
              <div className="relative flex items-center">
                <motion.div
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="h-10 w-14 rounded-full"
                  style={{
                    background: `radial-gradient(ellipse, ${BLUSH} 0%, ${BLUSH_DEEP} 100%)`,
                    boxShadow: `0 4px 12px ${BLUSH_DEEP}66, inset 0 0 8px ${GOLD}66`,
                    transform: "rotate(-25deg)",
                  }}
                />
                <div
                  className="h-6 w-6 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${GOLD_LIGHT}, ${GOLD})`,
                    boxShadow: `0 0 12px ${GOLD_LIGHT}`,
                  }}
                />
                <motion.div
                  animate={{ rotate: [3, -3, 3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="h-10 w-14 rounded-full"
                  style={{
                    background: `radial-gradient(ellipse, ${BLUSH} 0%, ${BLUSH_DEEP} 100%)`,
                    boxShadow: `0 4px 12px ${BLUSH_DEEP}66, inset 0 0 8px ${GOLD}66`,
                    transform: "rotate(25deg)",
                  }}
                />
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {!opened && (
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/70 px-5 py-2 font-hand text-lg text-rose-700 shadow backdrop-blur"
        >
          Pull the ribbon ✨
        </motion.div>
      )}
    </div>
  );
}

export function SceneMemories() {
  const [open, setOpen] = useState<Box | null>(null);
  const [unwrapped, setUnwrapped] = useState(false);

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
          {unwrapped ? "Tap each memory to open it ♡" : "Tap the ribbon to unwrap our story ♡"}
        </p>

        <div className="relative mt-20 flex min-h-[460px] items-center justify-center">
          <AnimatePresence>
            {!unwrapped && (
              <motion.div
                key="box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.4, y: -60 }}
                transition={{ duration: 0.7 }}
              >
                <PremiumGiftBox opened={false} onOpen={() => setUnwrapped(true)} />
              </motion.div>
            )}
          </AnimatePresence>

          {unwrapped && <FloatingBits />}

          {unwrapped && (
            <div className="grid w-full grid-cols-2 place-items-center gap-6 md:grid-cols-4 lg:grid-cols-7">
              {BOXES.map((it, i) => (
                <motion.button
                  key={it.id}
                  initial={{ opacity: 0, y: 80, scale: 0.5, rotate: -20 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 120, damping: 14 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  onClick={() => setOpen(it)}
                  className="group relative flex h-40 w-full max-w-[10rem] flex-col items-center justify-center rounded-2xl p-4 text-center shadow-xl backdrop-blur-md"
                  style={{
                    background: `linear-gradient(135deg, ${it.boxColor}ee 0%, #ffffff88 100%)`,
                    border: `1.5px solid ${it.ribbon}55`,
                    boxShadow: `0 10px 30px ${it.ribbon}33, inset 0 1px 0 #ffffff99`,
                  }}
                >
                  <div
                    className="mb-2 flex h-14 w-14 items-center justify-center rounded-full text-3xl shadow-inner"
                    style={{
                      background: `radial-gradient(circle, #fff 0%, ${it.boxColor} 100%)`,
                      border: `2px solid ${it.ribbon}66`,
                    }}
                  >
                    {it.icon}
                  </div>
                  <p
                    className="font-hand text-sm leading-tight"
                    style={{ color: it.ribbon }}
                  >
                    {it.title}
                  </p>
                  <span
                    className="absolute -top-2 right-2 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 shadow transition-opacity group-hover:opacity-100"
                    style={{ background: it.ribbon }}
                  >
                    open ♡
                  </span>
                </motion.button>
              ))}
            </div>
          )}
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
