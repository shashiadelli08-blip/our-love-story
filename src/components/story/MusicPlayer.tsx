import { useRef, useState } from "react";
import { Music2, Volume2 } from "lucide-react";
// Chopin — Nocturne No. 2 in E-flat Major, Op. 9 — public domain (CC0), via Wikimedia Commons/Musopen.
// Bundled locally since the previous CDN link (pixabay) returned 403s in practice.
import trackUrl from "@/assets/background-music.mp3";

const VOLUME = 0.5;

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      const start = a.volume;
      const steps = 20;
      let i = 0;
      const id = setInterval(() => {
        i++;
        a.volume = Math.max(0, start * (1 - i / steps));
        if (i >= steps) {
          clearInterval(id);
          a.pause();
        }
      }, 40);
      setPlaying(false);
    } else {
      a.volume = 0;
      a.play()
        .then(() => {
          const target = VOLUME;
          const steps = 24;
          let i = 0;
          const id = setInterval(() => {
            i++;
            a.volume = Math.min(target, target * (i / steps));
            if (i >= steps) clearInterval(id);
          }, 60);
          setPlaying(true);
        })
        .catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full glass-card px-4 py-2.5 shadow-lg">
      <audio ref={audioRef} src={trackUrl} preload="none" loop />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-rose text-white shadow-md transition hover:scale-105"
      >
        {playing ? <Volume2 size={16} /> : <Music2 size={16} />}
      </button>
      {!playing && (
        <span className="hidden text-xs text-muted-foreground sm:inline">
          Tap for music ♪
        </span>
      )}
    </div>
  );
}