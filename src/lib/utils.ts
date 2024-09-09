import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatFollowersCount(count: number) {
  if (count < 1_000) return count;
  if (count < 10_000) return count.toLocaleString('en-US');
  if (count < 1_000_000) return `${count / 1_000}K`;
  return `${count / 1_000_000}M`;
}
