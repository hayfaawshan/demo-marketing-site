import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * FizzBuzz function that returns:
 * - "Fizz" for numbers divisible by 3
 * - "Buzz" for numbers divisible by 5
 * - "FizzBuzz" for numbers divisible by both 3 and 5
 * - The number itself for all other cases
 * 
 * @param num - The number to evaluate
 * @returns A string based on the FizzBuzz rules
 */
export function fizzBuzz(num: number): string {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz"
  }
  if (num % 3 === 0) {
    return "Fizz"
  }
  if (num % 5 === 0) {
    return "Buzz"
  }
  return num.toString()
}