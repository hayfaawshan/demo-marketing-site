/**
 * Returns "Fizz", "Buzz", "FizzBuzz", or the number as a string for FizzBuzz logic.
 * Throws if n is not a finite integer.
 */
export function fizzBuzz(n: number): string {
  if (!Number.isFinite(n) || !Number.isInteger(n)) {
    throw new Error("Input must be a finite integer");
  }
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

/**
 * Returns an array of FizzBuzz results for numbers 1..limit (inclusive).
 * Throws if limit is not a positive finite integer.
 */
export function generateFizzBuzzSequence(limit: number): string[] {
  if (!Number.isFinite(limit) || !Number.isInteger(limit) || limit < 1) {
    throw new Error("Limit must be a positive finite integer");
  }
  const result: string[] = [];
  for (let i = 1; i <= limit; i++) {
    result.push(fizzBuzz(i));
  }
  return result;
}