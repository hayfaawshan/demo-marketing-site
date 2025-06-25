import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns the FizzBuzz sequence up to the given number n.
 * For multiples of 3, adds "Fizz"; for multiples of 5, adds "Buzz";
 * for multiples of both, adds "FizzBuzz"; otherwise, the number itself.
 * @param n The upper limit of the sequence (inclusive)
 * @returns An array of strings representing the FizzBuzz sequence
 */
export function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}
