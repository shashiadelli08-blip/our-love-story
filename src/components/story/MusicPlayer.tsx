import { useEffect, useRef, useState } from "react";
import { Music2, Volume2 } from "lucide-react";

const TRACK_URL =
  "https://cdn.pixabay.com/download/audio/2022/10/25/audio_946bc6bf50.mp3?filename=romantic-piano-116364.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0;
    a.loop = true;
    a.muted = true;
    a.play().catch(() => {});
  }, []);

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
      a.muted = false;
      a.volume = 0;
      a.play()
        .then(() => {
          const target = volume;
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

  const onVolume = (v: number) => {
    setVolume(v);
    if (audioRef.current && playing) audioRef.current.volume = v;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full glass-card px-4 py-2.5 shadow-lg">
      <audio ref={audioRef} src={TRACK_URL} preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-rose text-white shadow-md transition hover:scale-105"
      >
        {playing ? <Volume2 size={16} /> : <Music2 size={16} />}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => onVolume(parseFloat(e.target.value))}
        aria-label="Volume"
        className="w-20 accent-[color:var(--rose)]"
      />
      {!playing && (
        <span className="hidden text-xs text-muted-foreground sm:inline">
          Tap for music ♪
        </span>
      )}
    </div>
  );
}