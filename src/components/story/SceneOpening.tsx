import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { StarField, Particles } from "./Particles";

const SECRET = "143"; // "I love you" in numbers
type Stage = "closed" | "opening" | "lock" | "unlocked";

export function SceneOpening({ onBegin }: { onBegin: () => void }) {
  const [stage, setStage] = useState<Stage>("closed");
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const openBox = () => {
    setStage("opening");
    setTimeout(() => setStage("lock"), 1400);
  };

  const press = (n: string) => {
    if (stage !== "lock") return;
    setError(false);

    if (n === "⌫") {
      setCode((current) => current.slice(0, -1));
      return;
    }

    if (n === "✓") {
      if (code === SECRET) {
        setStage("unlocked");
      } else {
        setError(true);
        setTimeout(() => setCode(""), 500);
      }
      return;
    }

    if (code.length < 3) setCode((current) => current + n);
  };

  // auto-submit at 3 digits
  useEffect(() => {
    if (stage === "lock" && code.length === 3) {
      const t = setTimeout(() => {
        if (code === SECRET) setStage("unlocked");
        else {
          setError(true);
          setTimeout(() => setCode(""), 600);
        }
      }, 200);
      return () => clearTimeout(t);
    }
  }, [code, stage]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-night text-white">
      <StarField count={140} />
      <Particles count={16} kinds={["heart", "sparkle"]} tint="text-rose-200" />

      {/* Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute right-[8%] top-[10%] h-36 w-36 rounded-full animate-shimmer"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #fff8e0 0%, #f7d68a 55%, #b98a4a 100%)",
          boxShadow: "0 0 90px 24px rgba(255, 220, 140, 0.4)",
        }}
      />

      <div className="relative z-10 flex w-full flex-col items-center px-6 text-center">
        <AnimatePresence mode="wait">
          {(stage === "closed" || stage === "opening") && (
            <motion.div
              key="box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="mb-8 font-hand text-2xl text-rose-100/80"
              >
                A little gift, just for you...
              </motion.p>

              <GiftBox opening={stage === "opening"} onClick={stage === "closed" ? openBox : undefined} />

              {stage === "closed" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="mt-10 font-hand text-xl text-rose-100/70"
                >
                  tap the box ✨
                </motion.p>
              )}
            </motion.div>
          )}

          {stage === "lock" && (
            <motion.div
              key="lock"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 flex items-center gap-3 font-hand text-2xl text-rose-100/90">
                <span>🔒</span> enter our secret code
              </div>

              <motion.div
                animate={error ? { x: [0, -10, 10, -8, 8, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="mb-8 flex gap-4"
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`flex h-14 w-12 items-center justify-center rounded-lg border-2 font-display text-3xl backdrop-blur-md ${
                      error
                        ? "border-red-400/70 bg-red-500/10 text-red-200"
                        : "border-rose-200/40 bg-white/5 text-rose-50"
                    }`}
                  >
                    {code[i] ? "●" : ""}
                  </div>
                ))}
              </motion.div>

              <div className="grid grid-cols-3 gap-3">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "⌫", "0", "✓"].map((k) => (
                  <button
                    key={k}
                    onClick={() => press(k)}
                    className="h-14 w-14 rounded-full border border-rose-200/25 bg-white/5 font-display text-xl text-rose-50 backdrop-blur-md transition hover:scale-110 hover:bg-rose-300/20 active:scale-95"
                  >
                    {k}
                  </button>
                ))}
              </div>

              <p className="mt-6 font-hand text-base text-rose-100/50">
                hint: what I whisper without saying it 💕
              </p>
            </motion.div>
          )}

          {stage === "unlocked" && (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col items-center"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mb-6 font-hand text-2xl text-rose-100/80"
              >
                A little story, just for you...
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 1.2 }}
                className="font-display text-6xl font-semibold text-glow md:text-8xl"
              >
                ❤️ NANNA ❤️
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="mt-6 font-display text-2xl text-rose-50/90 md:text-4xl"
              >
                Happy Birthday, My Love
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="mt-8 rounded-2xl border border-rose-200/20 bg-white/5 px-6 py-5 backdrop-blur-md"
              >
                <p className="mb-4 font-hand text-lg text-rose-100/80">
                  It's been...
                </p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                  {[
                    { icon: "❤️", value: "428", label: "Days" },
                    { icon: "⏰", value: "10,272", label: "Hours" },
                    { icon: "⏱️", value: "616,320", label: "Minutes" },
                    { icon: "✨", value: "36,979,200", label: "Seconds" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2 + i * 0.15, duration: 0.6 }}
                      className="flex flex-col items-center"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-display text-2xl font-semibold text-rose-50 md:text-3xl">
                        {item.value}
                      </span>
                      <span className="font-hand text-sm text-rose-100/60">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-4 font-hand text-base text-rose-100/70">
                  ...since our journey began, and every single second has been a part of my story with you. 💖
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
                onClick={onBegin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-10 rounded-full bg-gradient-rose px-8 py-4 text-lg font-medium text-white shadow-[var(--shadow-glow)]"
              >
                Begin Our Journey ❤️
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function GiftBox({ opening, onClick }: { opening: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className="group relative h-56 w-56 [perspective:900px] disabled:cursor-default"
      aria-label="Open gift"
    >
      {/* glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl transition"
        style={{ background: "radial-gradient(circle, rgba(255,180,200,0.5), transparent 70%)" }}
      />

      {/* Box base */}
      <div
        className="absolute bottom-0 left-1/2 h-32 w-48 -translate-x-1/2 rounded-md shadow-2xl"
        style={{
          background: "linear-gradient(180deg, #d94f7a 0%, #b83863 100%)",
          boxShadow: "0 20px 40px -10px rgba(217,79,122,0.6), inset 0 -8px 20px rgba(0,0,0,0.25)",
        }}
      >
        {/* vertical ribbon */}
        <div
          className="absolute left-1/2 top-0 h-full w-6 -translate-x-1/2"
          style={{ background: "linear-gradient(180deg, #ffd66e, #f2a93b)" }}
        />
      </div>

      {/* Lid */}
      <motion.div
        animate={opening ? { rotateX: -120, y: -40, opacity: 0.9 } : { rotateX: 0, y: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
        className="absolute left-1/2 top-8 h-12 w-52 -translate-x-1/2 rounded-md"
      >
        <div
          className="relative h-full w-full rounded-md"
          style={{
            background: "linear-gradient(180deg, #e85d88 0%, #c74572 100%)",
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.4), inset 0 -6px 10px rgba(0,0,0,0.2)",
          }}
        >
          {/* horizontal ribbon on lid */}
          <div
            className="absolute left-1/2 top-0 h-full w-6 -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, #ffd66e, #f2a93b)" }}
          />
          {/* bow */}
          <div className="absolute left-1/2 top-[-22px] -translate-x-1/2 text-4xl">🎀</div>
        </div>
      </motion.div>

      {/* Sparkles on opening */}
      <AnimatePresence>
        {opening && (
          <>
            {Array.from({ length: 14 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: -120 - Math.random() * 80,
                  x: (Math.random() - 0.5) * 200,
                  scale: 1,
                }}
                transition={{ duration: 1.4, delay: Math.random() * 0.3 }}
                className="absolute left-1/2 top-16 text-2xl"
              >
                {["✨", "💖", "⭐", "🌟"][i % 4]}
              </motion.span>
            ))}
          </>
        )}
      </AnimatePresence>

      {!opening && (
        <span className="absolute inset-0 rounded-xl ring-0 ring-rose-200/0 transition group-hover:ring-4 group-hover:ring-rose-200/30" />
      )}
    </button>
  );
}