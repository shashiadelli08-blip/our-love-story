import { motion } from "framer-motion";
import { useState } from "react";
import { Particles } from "./Particles";

type Item = {
  id: string;
  icon: string;
  title: string;
  body: string;
};

const ITEMS: Item[] = [
  { id: "p", icon: "📸", title: "Our Polaroids", body: "That one blurry photo where you laughed too hard — my favorite." },
  { id: "s", icon: "🎵", title: "Our Song", body: "The one you played on loop until it became ours." },
  { id: "g", icon: "🎁", title: "Little Gifts", body: "The tiny things you kept — proof that you noticed everything." },
  { id: "f", icon: "😂", title: "Funny Moments", body: "The day you tripped and blamed the floor. Iconic." },
  { id: "c", icon: "📞", title: "Late Night Calls", body: "3 AM, both sleepy, neither hanging up first." },
  { id: "ch", icon: "💬", title: "Our Chats", body: "\"Ate?\" \"Sleep?\" \"Miss you.\" — the trilogy." },
  { id: "r", icon: "📱", title: "Reels You Sent", body: "A whole feed of things that reminded you of me." },
  { id: "l", icon: "💌", title: "Little Notes", body: "Every 'good morning' that made mine better." },
];

export function SceneMemories() {
  const [open, setOpen] = useState<Item | null>(null);

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
          Our Memory Room
        </motion.h2>
        <p className="mt-2 text-center font-hand text-2xl text-rose-700">
          Pick up anything — it belongs to us.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {ITEMS.map((it, i) => (
            <motion.button
              key={it.id}
              initial={{ opacity: 0, y: 30, rotate: i % 2 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 0, y: -6 }}
              onClick={() => setOpen(it)}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl glass-card p-4 text-left"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl bg-white/60 p-4">
                <div className="text-5xl transition group-hover:scale-110">{it.icon}</div>
                <p className="font-hand text-2xl text-rose-800">{it.title}</p>
              </div>
              <span className="pointer-events-none absolute inset-x-4 top-2 h-1 rounded-full bg-rose-400/70" />
            </motion.button>
          ))}
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl glass-card p-8 text-center"
          >
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-rose text-4xl">
              {open.icon}
            </div>
            <h3 className="font-display text-3xl text-rose-900">{open.title}</h3>
            <p className="mt-3 font-hand text-xl leading-relaxed text-rose-800">{open.body}</p>
            <button
              onClick={() => setOpen(null)}
              className="mt-6 rounded-full bg-rose-500 px-6 py-2 text-sm text-white shadow hover:bg-rose-600"
            >
              Close ♡
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}