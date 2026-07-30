import { motion } from "framer-motion";
import { Fireflies } from "./Particles";
import { TiltCard } from "./TiltCard";

// Hosted on Google Drive — the source file is ~1.1GB, far too large to bundle in the site.
const DRIVE_FILE_ID = "1HtqJLub_tNFsXjaCeOCoS03L74bF12gP";
const VIDEO_EMBED_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`;

export function SceneVideo({ onClose }: { onClose: () => void }) {
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
              <div className="relative aspect-video overflow-hidden rounded-2xl border-4 border-[#2a1710] bg-black">
                <iframe
                  src={VIDEO_EMBED_URL}
                  title="A video message for Nanna"
                  className="h-full w-full"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 flex items-center justify-center px-2">
                <span className="text-[10px] uppercase tracking-widest text-amber-200/60">
                  For Nanna
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
