"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "../icons";
import TextButton from "./text-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  imageSrc?: string;
  date: string;
  gitHubLink: string | null;
  working?: boolean;
  liveLinkAvailable?: boolean;
  gitHubLinkAvailable?: boolean;
  details?: string;
};

const ProjectCard = ({
  title,
  description,
  tags,
  liveLink,
  imageSrc,
  date,
  gitHubLink,
  working = false,
  liveLinkAvailable = true,
  gitHubLinkAvailable = true,
  details,
}: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

 return (
    <>
      <div
        onClick={() => details && setOpen(true)}
        className={`flex z-20 flex-col justify-between gap-1 rounded-xl bg-white hover:bg-white/70 dark:bg-background/50 dark:hover:bg-background/80 shadow-xs transition-all border border-dashed p-2 group ${details ? "cursor-pointer" : ""}`}
      >
        <Image
          src={imageSrc || "/projects/default.webp"}
          alt={title}
          width={600}
          height={600}
          className="w-full h-[13rem] object-cover object-top rounded-lg transition-all duration-150 group-hover/projects:opacity-40 group-hover:!opacity-100"
        />
        <div className="flex items-center justify-between">
          <span className="inline-flex justify-start items-center -mb-2 gap-2">
            <TextButton text={title} textSize={18} uppercase="capitalize" />
            {working && (
              <span className="ml-2 text-xs text-foreground border border-blue-400/20 bg-blue-100 dark:bg-blue-400/30 transition-all rounded-md px-2 py-0.5">
                WIP
              </span>
            )}
          </span>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>                                          {/* ← closes justify-between div */}
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-muted-foreground border bg-white dark:bg-card-foreground/2 hover:bg-white/70 dark:hover:bg-card-foreground/5 shadow-xs hover:shadow-none transition-all rounded-sm px-1.5 py-0.5 flex items-center"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-border border-dashed">
          {liveLinkAvailable && liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`text-muted-foreground hover:text-foreground w-full text-sm text-center text-nowrap transition-all ${gitHubLinkAvailable && gitHubLink ? "border-r border-dashed" : ""}`}
            >
              Live link
            </Link>
          )}
          {gitHubLinkAvailable && gitHubLink && (
            <Link
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground hover:text-foreground w-full text-sm flex items-center justify-center gap-2 transition-all"
            >
              GitHub
              <GithubIcon />
            </Link>
          )}
        </div>
      </div> 
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg p-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {title}
              {working && (
                <span className="text-xs font-normal text-foreground border border-blue-400/20 bg-blue-100 dark:bg-blue-400/30 rounded-md px-2 py-0.5">
                  WIP
                </span>
              )}
            </DialogTitle>
          </DialogHeader>

          <div className="relative h-48 w-full rounded-lg overflow-hidden">
            <Image
              src={imageSrc || "/projects/default.webp"}
              alt={title}
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="space-y-4">
            <span className="text-xs text-muted-foreground">{date}</span>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {details}
            </p>
            <div className="flex gap-2 flex-wrap">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-muted-foreground border bg-white dark:bg-card-foreground/2 rounded-sm px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border border-dashed">
              {liveLinkAvailable && liveLink && (
                <Link
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`text-muted-foreground hover:text-foreground w-full text-sm text-center text-nowrap transition-all ${gitHubLinkAvailable && gitHubLink ? "border-r border-dashed" : ""}`}
                >
                  Live link
                </Link>
              )}
              {gitHubLinkAvailable && gitHubLink && (
                <Link
                  href={gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-foreground w-full text-sm flex items-center justify-center gap-2 transition-all"
                >
                  GitHub
                  <GithubIcon />
                </Link>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;