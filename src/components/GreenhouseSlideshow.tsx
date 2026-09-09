import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import render1 from "@/assets/gallery/Screenshot-2026-05-11-124549.png.asset.json";
import render2 from "@/assets/gallery/Screenshot-2026-05-11-124629.png.asset.json";
import render3 from "@/assets/gallery/Screenshot-2026-05-11-124659.png.asset.json";
import render4 from "@/assets/gallery/Screenshot-2026-09-09-143332.png.asset.json";
import render5 from "@/assets/gallery/Screenshot-2026-09-09-143447.png.asset.json";
import render6 from "@/assets/gallery/Screenshot-2026-09-09-143642.png.asset.json";
import render7 from "@/assets/gallery/Screenshot-2026-09-09-143744.png.asset.json";

// The original 3D-section image already on the site
const existingModel = "/lovable-uploads/a69a6a90-6e01-4468-995d-ef0b14ebb3c3.png";

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

const slides: Slide[] = [
  {
    src: existingModel,
    alt: "3D model of the greenhouse structure",
    caption: "3D model of our planned greenhouse structure",
  },
  {
    src: render4.url,
    alt: "Exterior render of the timber-frame greenhouse in a green field",
    caption: "Exterior perspective — gabled timber-frame greenhouse",
  },
  {
    src: render5.url,
    alt: "Front-facing render of the greenhouse with central wooden tower",
    caption: "Front elevation — central tower and sloping roofline",
  },
  {
    src: render6.url,
    alt: "Elevated side-angle render showing the roof grid of beams",
    caption: "Roof structure — grid of timber beams and glass panels",
  },
  {
    src: render7.url,
    alt: "Close-up render of the timber joinery and glass wall",
    caption: "Wall detail — timber joinery and cross-bracing",
  },
  {
    src: render1.url,
    alt: "Interior render with trees and people under skylit timber roof",
    caption: "Interior — high timber ceiling with skylights and growing trees",
  },
  {
    src: render2.url,
    alt: "Interior render showing grid-like shadows on the floor",
    caption: "Interior — ground-level view with roof-shadow patterns",
  },
  {
    src: render3.url,
    alt: "Top-down render of the roof beam grid",
    caption: "Top-down — intricate timber roof-beam grid",
  },
];

const AUTOPLAY_MS = 5000;

export const GreenhouseSlideshow = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const total = slides.length;
  const go = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total],
  );
  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [playing, total]);

  return (
    <div className="w-full">
      <div className="relative rounded-lg overflow-hidden bg-black/30 shadow-2xl group">
        {/* Image stage with crossfade */}
        <div className="relative aspect-video w-full">
          {slides.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
        </div>

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 pointer-events-none">
          <p className="text-sm sm:text-base text-white/90">
            {slides[index].caption}
          </p>
          <p className="text-xs text-white/60 mt-1">
            {index + 1} / {total}
          </p>
        </div>

        {/* Prev / Next controls */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Play / Pause */}
        <button
          type="button"
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          onClick={() => setPlaying((p) => !p)}
          className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white transition-colors"
        >
          {playing ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className="shrink-0 w-20 h-12 sm:w-24 sm:h-14 rounded overflow-hidden border-2 transition-colors"
            style={{
              borderColor: i === index ? "hsl(var(--accent))" : "transparent",
              opacity: i === index ? 1 : 0.55,
            }}
          >
            <img
              src={slide.src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GreenhouseSlideshow;
