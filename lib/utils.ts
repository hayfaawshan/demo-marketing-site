import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns the FizzBuzz sequence as an array of strings from 1 to n.
 * - Multiples of 3: "Fizz"
 * - Multiples of 5: "Buzz"
 * - Multiples of both 3 and 5: "FizzBuzz"
 * - Otherwise: the number as a string
 * @param n The maximum number of the sequence
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
