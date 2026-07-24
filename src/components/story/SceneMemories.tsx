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
  preview?: string[];
  ribbon: string;
};

const BOXES: Box[] = [
  { id: "p", icon: "📸", title: "The Pictures That Made Me Blush", kind: "photos", preview: PHOTOS.slice(0, 4), ribbon: "#e5657e" },
  { id: "s", icon: "🎵", title: "Our Dedication Songs", kind: "songs", ribbon: "#7a5fc4" },
  { id: "r", icon: "📱", title: "Reels That Reminded Me Of Us", kind: "reels", ribbon: "#c4507a" },
  { id: "g", icon: "🎁", title: "Gifts That Meant More Than Words", kind: "gifts", preview: GIFTS.slice(0, 4), ribbon: "#d69b3a" },
  { id: "j", icon: "😂", title: "Jokes Only We Understood", kind: "jokes", ribbon: "#4a9d7f" },
  { id: "c", icon: "📞", title: "Calls & Meets I Still Treasure", kind: "calls", ribbon: "#c4703a" },
  { id: "ch", icon: "💬", title: "Notes I Still Scroll Through", kind: "chats", preview: CHATS.slice(0, 4), ribbon: "#a35fc4" },
];

export function SceneMemories() {
  const [open, setOpen] = useState<Box | null>(null);

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
          Open every gift box — each one belongs to us.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {BOXES.map((it, i) => (
            <motion.button
              key={it.id}
              initial={{ opacity: 0, y: 30, rotate: i % 2 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 0, y: -6 }}
              onClick={() => setOpen(it)}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl text-left shadow-lg ring-1 ring-white/40"
            >
              {it.preview ? (
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                  {it.preview.map((src, j) => (
                    <img key={j} src={src} alt="" className="h-full w-full object-cover" />
                  ))}
                </div>
              ) : it.kind === "reels" ? (
                <video
                  src={REELS[0]}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(160deg, ${it.ribbon}dd 0%, ${it.ribbon}88 100%)`,
                  }}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div
                className="absolute inset-x-0 top-0 h-2"
                style={{ background: it.ribbon }}
              />
              <div className="absolute inset-y-0 left-1/2 w-2 -translate-x-1/2" style={{ background: it.ribbon }} />

              <div className="relative flex h-full w-full flex-col items-center justify-end gap-2 p-4 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl shadow-md transition group-hover:scale-110">
                  {it.icon}
                </div>
                <p className="font-hand text-lg text-white drop-shadow-md">{it.title}</p>
              </div>
            </motion.button>
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
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl glass-card p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-rose text-3xl">
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
