/**
 * Generates a fizz buzz sequence from 1 to n.
 * - For multiples of 3, returns "Fizz" instead of the number.
 * - For multiples of 5, returns "Buzz" instead of the number.
 * - For multiples of both 3 and 5, returns "FizzBuzz" instead of the number.
 * 
 * @param {number} n - The maximum number in the sequence
 * @returns {string[]} An array of strings representing the fizz buzz sequence
 */
export function fizzBuzz(n) {
  const result = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }
  
  return result;
}

/**
 * Generates and prints a fizz buzz sequence from 1 to n to the console.
 * 
 * @param {number} n - The maximum number in the sequence
 */
export function printFizzBuzz(n) {
  const sequence = fizzBuzz(n);
  sequence.forEach(item => console.log(item));
}