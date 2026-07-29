import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { MusicPlayer } from "@/components/story/MusicPlayer";
import { SceneOpening } from "@/components/story/SceneOpening";
import { SceneHands } from "@/components/story/SceneHands";
import { SceneMap } from "@/components/story/SceneMap";
import { SceneLetter } from "@/components/story/SceneLetter";
import { SceneMemories } from "@/components/story/SceneMemories";
import { SceneWishes } from "@/components/story/SceneWishes";
import { SceneFinale } from "@/components/story/SceneFinale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nanna Birthday Journey" },
      {
        name: "description",
        content: "A cinematic interactive birthday story for Nanna, filled with memories, wishes, and love.",
      },
      { property: "og:title", content: "Nanna Birthday Journey" },
      {
        property: "og:description",
        content: "A cinematic interactive birthday story for Nanna, filled with memories, wishes, and love.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const handsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const scrollTo = (el: HTMLElement | null) => {
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative w-full overflow-x-hidden">
      <MusicPlayer />

      <SceneOpening onBegin={() => scrollTo(handsRef.current)} />

      <div ref={handsRef}>
        <SceneHands onNext={() => scrollTo(mapRef.current)} />
      </div>

      <div ref={mapRef}>
        <SceneMap />
      </div>

      <SceneLetter />
      <SceneMemories />
      <SceneWishes />
      <SceneFinale />
    </main>
  );
}
