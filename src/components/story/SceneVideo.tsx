import { motion } from "framer-motion";
import { Fireflies } from "./Particles";

export function SceneVideo() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-night py-24">
      <Fireflies count={20} />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hand text-3xl text-rose-100"
        >
          I couldn't fit everything into words...
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-2 font-hand text-3xl text-rose-100"
        >
          So I recorded this for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div
            className="relative rounded-[2rem] p-6 md:p-8"
            style={{
              background: "linear-gradient(180deg, #6b4a3a 0%, #3d271c 100%)",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7), inset 0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            <div className="relative overflow-hidden rounded-2xl border-4 border-[#2a1710] bg-black">
              <div className="relative aspect-video w-full">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-900/50 via-black to-amber-900/40 text-center">
                  <div>
                    <p className="font-hand text-2xl text-rose-100">🎞️ Your video reel</p>
                    <p className="mt-1 text-xs text-rose-200/70">
                      Drop a &lt;video&gt; source in SceneVideo.tsx
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between px-2">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-amber-200/60">
                For Nanna · With love
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}