import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

export function playClickSound() {
  const audio = new Audio("/sfx/click.wav");
  audio.volume = 0.5;
  audio.play().catch((e) => console.error("Audio play failed", e));
}