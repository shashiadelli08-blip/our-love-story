import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { StarField, Particles } from "./Particles";

// 🔐 Change this to a code meaningful to you two (e.g. anniversary MMDD)
const UNLOCK_CODE = "1234";

type Stage = "box" | "opening" | "lock" | "unlocked";

export function SceneOpening({ onBegin }: { onBegin: () => void }) {
  const [stage, setStage] = useState<Stage>("box");
  const [pin, setPin] = useState("");
  const [shake, setShake] = useState(false);

  const handleOpen = () => {
    setStage("opening");
    setTimeout(() => setStage("lock"), 1400);
  };

  const press = (d: string) => {
    if (pin.length >= UNLOCK_CODE.length) return;
    const next = pin + d;
    setPin(next);
    if (next.length === UNLOCK_CODE.length) {
      if (next === UNLOCK_CODE) {
        setTimeout(() => setStage("unlocked"), 350);
        setTimeout(() => onBegin(), 1800);
      } else {
        setShake(true);
        setTimeout(() => {
          setShake(false);
          setPin("");
        }, 600);
      }
    }
  };

  const clear = () => setPin("");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-night text-white">
      <StarField count={160} />
      <Particles count={14} kinds={["sparkle", "star"]} tint="text-amber-100" />

      {/* Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute right-[8%] top-[10%] h-36 w-36 rounded-full animate-shimmer"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #fff8e0 0%, #f7d68a 55%, #b98a4a 100%)",
          boxShadow: "0 0 90px 24px rgba(255, 220, 140, 0.35)",
        }}
      />

      <div className="relative z-10 flex w-full flex-col items-center px-6 text-center">
        <AnimatePresence mode="wait">
          {(stage === "box" || stage === "opening") && (
            <motion.div
              key="giftbox"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1.4 }}
                className="mb-10 font-hand text-2xl md:text-3xl text-rose-100/80"
              >
                A little gift, just for you...
              </motion.p>

              <GiftBox opening={stage === "opening"} onClick={handleOpen} />

              {stage === "box" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 1 }}
                  className="mt-10 text-sm md:text-base text-rose-100/60"
                >
                  Tap the box to unwrap ✨
                </motion.p>
              )}
            </motion.div>
          )}

          {stage === "lock" && (
            <motion.div
              key="lock"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-dark rounded-3xl px-8 py-8 md:px-12 md:py-10"
                style={{ boxShadow: "0 0 60px rgba(255,200,140,0.15)" }}
              >
                <div className="mb-3 flex items-center justify-center gap-2 text-amber-200/90">
                  <LockIcon />
                  <span className="font-hand text-xl">Enter our code</span>
                </div>
                <p className="mb-6 text-xs uppercase tracking-[0.3em] text-rose-100/50">
                  Hint: 1 · 2 · 3 · 4
                </p>

                {/* PIN dots */}
                <div className="mb-8 flex justify-center gap-4">
                  {Array.from({ length: UNLOCK_CODE.length }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-4 w-4 rounded-full border transition-all duration-200 ${
                        i < pin.length
                          ? "border-amber-200 bg-amber-200 shadow-[0_0_16px_rgba(255,220,140,0.9)]"
                          : "border-white/30 bg-white/5"
                      }`}
                    />
                  ))}
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <KeyBtn key={n} onClick={() => press(String(n))}>
                      {n}
                    </KeyBtn>
                  ))}
                  <KeyBtn onClick={clear} muted>
                    ✕
                  </KeyBtn>
                  <KeyBtn onClick={() => press("0")}>0</KeyBtn>
                  <KeyBtn
                    onClick={() => setPin(pin.slice(0, -1))}
                    muted
                  >
                    ⌫
                  </KeyBtn>
                </div>
              </motion.div>

              {shake && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm text-rose-300"
                >
                  Not quite... try again 💭
                </motion.p>
              )}
            </motion.div>
          )}

          {stage === "unlocked" && (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.3, 1] }}
                transition={{ duration: 1 }}
                className="text-6xl md:text-8xl"
              >
                💖
              </motion.div>
              <p className="mt-6 font-display text-3xl md:text-5xl text-glow">
                Unlocked
              </p>
              <p className="mt-3 font-hand text-xl text-rose-100/80">
                Happy Birthday, my Nanna ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function KeyBtn({
  children,
  onClick,
  muted,
}: {
  children: React.ReactNode;
  onClick: () => void;
  muted?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      onClick={onClick}
      className={`h-14 w-14 md:h-16 md:w-16 rounded-2xl font-display text-2xl transition-colors ${
        muted
          ? "bg-white/5 text-rose-100/60 hover:bg-white/10"
          : "bg-white/10 text-amber-50 hover:bg-white/20"
      }`}
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
    >
      {children}
    </motion.button>
  );
}

function LockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 10V7a5 5 0 1 1 10 0v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="4.5"
        y="10"
        width="15"
        height="11"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="15.5" r="1.6" fill="currentColor" />
    </svg>
  );
}

function GiftBox({ opening, onClick }: { opening: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={!opening ? { scale: 1.04 } : {}}
      whileTap={!opening ? { scale: 0.97 } : {}}
      animate={!opening ? { y: [0, -6, 0] } : {}}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="relative"
      style={{ width: 220, height: 220 }}
      aria-label="Open the gift"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,180,200,0.55), transparent 60%)",
        }}
      />

      {/* Box body */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 rounded-md"
        style={{
          width: 180,
          height: 130,
          marginTop: -20,
          background:
            "linear-gradient(160deg, #d94a70 0%, #a8214a 60%, #7a1436 100%)",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.45), inset 0 0 30px rgba(255,255,255,0.08)",
        }}
      >
        {/* Vertical ribbon */}
        <div
          className="absolute left-1/2 top-0 h-full -translate-x-1/2"
          style={{
            width: 22,
            background:
              "linear-gradient(180deg, #ffd88a 0%, #f4b64a 60%, #b47a1e 100%)",
            boxShadow: "0 0 12px rgba(255,210,120,0.6)",
          }}
        />
      </div>

      {/* Lid */}
      <motion.div
        initial={false}
        animate={
          opening
            ? { y: -160, rotate: -18, opacity: 0 }
            : { y: 0, rotate: 0, opacity: 1 }
        }
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 rounded-md"
        style={{
          width: 200,
          height: 44,
          top: 46,
          background:
            "linear-gradient(160deg, #e85a80 0%, #b8244f 70%, #7a1436 100%)",
          boxShadow:
            "0 8px 20px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.1)",
        }}
      >
        {/* Horizontal ribbon on lid */}
        <div
          className="absolute left-1/2 top-0 h-full -translate-x-1/2"
          style={{
            width: 22,
            background:
              "linear-gradient(180deg, #ffd88a 0%, #f4b64a 100%)",
            boxShadow: "0 0 10px rgba(255,210,120,0.6)",
          }}
        />
        {/* Bow */}
        <div
          className="absolute left-1/2 -top-8 -translate-x-1/2"
          style={{
            width: 80,
            height: 34,
          }}
        >
          <div
            className="absolute left-0 top-0 h-full w-9 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, #ffe29a, #e2a53a 70%)",
              transform: "rotate(-18deg)",
              boxShadow: "0 0 12px rgba(255,210,120,0.6)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full w-9 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, #ffe29a, #e2a53a 70%)",
              transform: "rotate(18deg)",
              boxShadow: "0 0 12px rgba(255,210,120,0.6)",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: "radial-gradient(circle, #fff2c0, #c68a1e)",
              boxShadow: "0 0 10px rgba(255,220,140,0.9)",
            }}
          />
        </div>
      </motion.div>

      {/* Sparkle burst on open */}
      <AnimatePresence>
        {opening && (
          <>
            {Array.from({ length: 14 }).map((_, i) => {
              const angle = (i / 14) * Math.PI * 2;
              const dx = Math.cos(angle) * 140;
              const dy = Math.sin(angle) * 140;
              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  animate={{ x: dx, y: dy, opacity: [0, 1, 0], scale: 1.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 text-amber-200"
                  style={{ textShadow: "0 0 12px rgba(255,220,140,0.9)" }}
                >
                  ✦
                </motion.span>
              );
            })}
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
}