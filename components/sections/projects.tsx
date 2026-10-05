"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import userData from "@/config/userData";
import type { ProjectMedia } from "@/types";
import { GithubIcon } from "../icons";
import TextButton from "../ui/text-button";
import ProjectMediaCarousel from "../ui/project-media";

const Projects = () => {
  const { projects } = userData;
  const [index, setIndex] = useState(0);

  const count = projects.length;
  const project = projects[index];

  const go = (next: number) => setIndex((next + count) % count);

  // Build the media list: prefer an explicit `media` array, otherwise fall
  // back to the single imageSrc so every project has at least one slide.
  const media: ProjectMedia[] =
    project.media && project.media.length > 0
      ? project.media
      : [
          {
            type: "image",
            src: project.imageSrc || "/projects/default.webp",
            alt: project.title,
          },
        ];

  const hasLive = project.liveLinkAvailable && project.Livelink;
  const hasGit = project.gitHubLinkAvailable && project.gitHubLink;

  return (
    <div className="border-b border-border border-dashed">
      <div className="border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-2 md:py-4">
        {/* Header matched to Experience section */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1 font-normal tracking-tight text-xl">
            <h2 className="font-normal drop-shadow-xs text-xl md:text-3xl text-muted-foreground">
              PROJECTS
            </h2>
          </div>
          <span className="text-sm text-muted-foreground tabular-nums">
            {index + 1} / {count}
          </span>
        </div>

        {/* Full-width project slide: media on the left, summary on the right */}
        <div className="relative">
          <div className="grid grid-cols-1 items-stretch gap-4 md:h-[22rem] md:grid-cols-2">
            {/* Left: media slideshow */}
            <ProjectMediaCarousel media={media} title={project.title} />

            {/* Right: text summary */}
            <div className="flex min-h-0 flex-col justify-between gap-3 overflow-hidden rounded-xl border border-dashed bg-white p-4 shadow-xs dark:bg-background/50">
              <div className="min-h-0 space-y-3 overflow-y-auto">
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-flex items-center gap-2">
                    <TextButton
                      text={project.title}
                      textSize={22}
                      uppercase="capitalize"
                    />
                    {project.working && (
                      <span className="text-xs text-foreground border border-blue-400/20 bg-blue-100 dark:bg-blue-400/30 transition-all rounded-md px-2 py-0.5">
                        WIP
                      </span>
                    )}
                  </span>
                  <span className="text-sm text-muted-foreground text-nowrap">
                    {project.date}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.details || project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs text-muted-foreground border bg-white dark:bg-card-foreground/2 shadow-xs transition-all rounded-sm px-1.5 py-0.5 flex items-center"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {(hasLive || hasGit) && (
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-border border-dashed">
                  {hasLive && (
                    <Link
                      href={project.Livelink!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground hover:text-foreground w-full text-sm text-center text-nowrap transition-all ${
                        hasGit ? "border-r border-dashed" : ""
                      }`}
                    >
                      Live link
                    </Link>
                  )}
                  {hasGit && (
                    <Link
                      href={project.gitHubLink!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground w-full text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      GitHub
                      <GithubIcon />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Section-level slideshow controls */}
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => go(index - 1)}
            className="absolute -left-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-dashed bg-white/80 p-2 text-foreground shadow-xs backdrop-blur-sm transition-all hover:bg-white md:block dark:bg-background/70 dark:hover:bg-background lg:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => go(index + 1)}
            className="absolute -right-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-dashed bg-white/80 p-2 text-foreground shadow-xs backdrop-blur-sm transition-all hover:bg-white md:block dark:bg-background/70 dark:hover:bg-background lg:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots + mobile arrows */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => go(index - 1)}
            className="rounded-full border border-dashed bg-white p-1.5 text-foreground shadow-xs transition-all hover:bg-white/70 md:hidden dark:bg-background/50 dark:hover:bg-background/80"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {projects.map((p, i) => (
              <button
                type="button"
                key={i}
                aria-label={`Go to ${p.title}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-5 bg-foreground"
                    : "w-2 bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next project"
            onClick={() => go(index + 1)}
            className="rounded-full border border-dashed bg-white p-1.5 text-foreground shadow-xs transition-all hover:bg-white/70 md:hidden dark:bg-background/50 dark:hover:bg-background/80"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
