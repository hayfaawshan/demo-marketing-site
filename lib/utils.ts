import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns "Fizz" if n is divisible by 3,
 * "Buzz" if n is divisible by 5,
 * "FizzBuzz" if n is divisible by both 3 and 5,
 * or the string of the number itself otherwise.
 * @param n number to check
 * @returns string
 */
export function fizzBuzz(n: number): string {
  if (n % 15 === 0) return "FizzBuzz"
  if (n % 3 === 0) return "Fizz"
  if (n % 5 === 0) return "Buzz"
  return n.toString()
}
