import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Returns an array representing the FizzBuzz sequence from 1 to n.
 * For multiples of 3, returns "Fizz"; for multiples of 5, returns "Buzz";
 * for multiples of both, returns "FizzBuzz"; otherwise, returns the number as a string.
 * @param n The upper limit of the sequence (inclusive)
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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
