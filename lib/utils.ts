import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * FizzBuzz implementation
 * @param n - Input number
 * @returns "FizzBuzz" if n is divisible by 3 and 5,
 *          "Fizz" if n is divisible by 3,
 *          "Buzz" if n is divisible by 5,
 *          or the number as a string otherwise
 */
export function fizzBuzz(n: number): string {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz"
  if (n % 3 === 0) return "Fizz"
  if (n % 5 === 0) return "Buzz"
  return n.toString()
}