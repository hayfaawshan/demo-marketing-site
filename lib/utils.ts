import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility to merge class names with Tailwind and clsx.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns the Fizz Buzz sequence up to the specified number.
 * Multiples of 3 become "Fizz", multiples of 5 become "Buzz",
 * multiples of both become "FizzBuzz", otherwise the number itself.
 * @param n The length of the Fizz Buzz sequence.
 * @returns An array of strings or numbers representing the sequence.
 */
export function fizzBuzz(n: number): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}
