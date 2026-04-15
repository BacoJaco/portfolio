"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type ExperienceCardProps = {
  id: number;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  link: string;
  isFirst: boolean;
  isLast: boolean;
  description: string;
  logo?: string; // Add logo prop
};

const ExperienceCard = ({
  companyName,
  role,
  startDate,
  endDate,
  link,
  isFirst,
  isLast,
  description,
  logo,
}: ExperienceCardProps) => {
  const hasDescription = description.trim().length > 0;
  const [isOpen, setIsOpen] = useState(hasDescription);

  const handleClick = () => {
    if (!hasDescription) return;
    setIsOpen(!isOpen);
  };

  const renderDescription = (value: string) => {
    const lines = value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const bulletLines = lines.filter((line) => line.startsWith("- "));
    const textLines = lines.filter((line) => !line.startsWith("- "));

    if (bulletLines.length === 0) {
      if (lines.length <= 1) {
        return <p className="text-sm text-muted-foreground">{value}</p>;
      }

      return (
        <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
          {lines.map((line, index) => (
            <li key={`exp-line-${index}`}>{line}</li>
          ))}
        </ul>
      );
    }

    return (
      <div className="space-y-2">
        {textLines.map((line, index) => (
          <p key={`exp-text-${index}`} className="text-sm text-muted-foreground">
            {line}
          </p>
        ))}
        <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
          {bulletLines.map((line, index) => (
            <li key={`exp-bullet-${index}`}>{line.replace(/^-\s+/, "")}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-col px-2 md:px-4 gap-2 group z-20">
      <div className="flex items-start gap-3 transition-opacity duration-150 group-hover/experience:opacity-40 group-hover:opacity-100!">
        <div className="flex flex-col items-center self-stretch">
          <Link
            href={link}
            target="_blank"
            className="icon-container size-11 sm:size-12 aspect-square relative overflow-hidden rounded-lg border bg-muted/50 flex items-center justify-center shrink-0"
          >
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`/portfolio${logo}`} alt={companyName} className="object-cover w-full h-full" />
            ) : (
              <span className="text-sm font-medium text-muted-foreground uppercase">
                {companyName.charAt(0)}
              </span>
            )}
          </Link>
          <div
            className={cn(
              "w-px bg-border flex-1",
              isLast ? "h-0 w-0" : "min-h-6 mt-2"
            )}
          />
        </div>

        <div className="flex-1">
          <div
            onClick={handleClick}
            className={cn("size-full", { "cursor-pointer": hasDescription })}
            aria-disabled={!hasDescription}
          >
            <h3 className="text-base uppercase">{role}</h3>
            <div className="flex w-full justify-between items-center">
              <p className="text-sm text-muted-foreground sm:w-[100px] sm:pr-0 pr-2 group-hover:text-foreground transition-colors">
                {companyName}
              </p>
              <div className="grow border-b border-dashed border-border" />
              <p className="text-sm text-muted-foreground text-right w-[170px] group-hover:text-foreground transition-colors">
                {startDate} - {endDate}
              </p>
            </div>
          </div>
          <div className="w-full h-4" />
          <AnimatePresence initial={false}>
            {isOpen && hasDescription && (
              <motion.div
                key="experience-description"
                initial={{ height: 0, opacity: 0, y: -6 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -6 }}
                transition={{ ease: "easeOut", duration: 0.125 }}
                className="overflow-hidden"
              >
                {renderDescription(description)}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-full h-6" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;