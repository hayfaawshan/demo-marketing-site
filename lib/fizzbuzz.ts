/**
 * Generates a FizzBuzz sequence from 1 to n.
 * For multiples of 3, returns "Fizz".
 * For multiples of 5, returns "Buzz".
 * For multiples of both 3 and 5, returns "FizzBuzz".
 * Otherwise, returns the number as a string.
 *
 * @param n The upper limit of the sequence (inclusive).
 * @returns An array of strings representing the FizzBuzz sequence.
 */
export function fizzbuzz(n: number): string[] {
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