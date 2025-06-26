import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Returns an array representing the FizzBuzz sequence from 1 to n.
 * For multiples of 3, adds "Fizz". For multiples of 5, adds "Buzz".
 * For multiples of both 3 and 5, adds "FizzBuzz". Otherwise, adds the number itself.
 * @param n The upper limit of the sequence (inclusive).
 * @returns An array of numbers and strings following the FizzBuzz rules.
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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
