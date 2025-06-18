import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility to concatenate Tailwind classes conditionally and merge them.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generates the Fizz Buzz sequence up to a given number n.
 * For multiples of 3 returns "Fizz", for multiples of 5 returns "Buzz",
 * for multiples of both 3 and 5 returns "FizzBuzz", otherwise returns the number.
 *
 * @param n - The upper bound of the sequence (inclusive).
 * @returns An array of strings or numbers representing the Fizz Buzz sequence.
 */
export function fizzBuzz(n: number): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}
