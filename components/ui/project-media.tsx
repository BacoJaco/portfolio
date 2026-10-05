"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectMedia } from "@/types";

type ProjectMediaCarouselProps = {
  media: ProjectMedia[];
  title: string;
};

const ProjectMediaCarousel = ({ media, title }: ProjectMediaCarouselProps) => {
  const [index, setIndex] = useState(0);
  const count = media.length;
  const current = media[index];

  const go = (next: number) => setIndex((next + count) % count);

  return (
    <div className="group/media relative aspect-video w-full overflow-hidden rounded-xl border border-dashed bg-white shadow-xs md:aspect-auto md:h-full dark:bg-background/50">
      {current.type === "video" ? (
        <video
          key={current.src}
          src={current.src}
          className="h-full w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      ) : (
        <Image
          key={current.src}
          src={current.src || "/projects/default.webp"}
          alt={current.alt || title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
      )}

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous media"
            onClick={() => go(index - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-dashed bg-white/80 p-1.5 text-foreground opacity-0 shadow-xs backdrop-blur-sm transition-all hover:bg-white group-hover/media:opacity-100 dark:bg-background/70 dark:hover:bg-background"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next media"
            onClick={() => go(index + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-dashed bg-white/80 p-1.5 text-foreground opacity-0 shadow-xs backdrop-blur-sm transition-all hover:bg-white group-hover/media:opacity-100 dark:bg-background/70 dark:hover:bg-background"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {media.map((_, i) => (
              <button
                type="button"
                key={i}
                aria-label={`Go to media ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-4 bg-foreground"
                    : "w-1.5 bg-foreground/40 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectMediaCarousel;
