/**
 * fizzBuzz generates an array of strings for numbers from 1 to n,
 * substituting "Fizz" for multiples of 3, "Buzz" for multiples of 5,
 * and "FizzBuzz" for multiples of both.
 *
 * @param n - The upper limit of the sequence (inclusive)
 * @returns An array of FizzBuzz results as strings
 */
export function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  return result;
}