import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge multiple class names using clsx and tailwind-merge
 * This utility helps to combine and resolve Tailwind CSS class conflicts
 * 
 * @param  {...any} inputs - Class names to merge
 * @returns {string} - Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
