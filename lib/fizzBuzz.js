/**
 * FizzBuzz function that returns:
 * - "Fizz" for multiples of 3
 * - "Buzz" for multiples of 5
 * - "FizzBuzz" for multiples of both 3 and 5
 * - The number itself for other cases
 * 
 * @param {number} num - The number to evaluate
 * @returns {string|number} - The FizzBuzz result
 */
export function fizzBuzz(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new Error('Input must be a valid number');
  }
  
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

/**
 * Generates a FizzBuzz sequence up to a specified number
 * 
 * @param {number} count - The maximum number in the sequence
 * @returns {Array} - Array containing the FizzBuzz sequence
 */
export function generateFizzBuzzSequence(count) {
  if (typeof count !== 'number' || isNaN(count) || count < 1) {
    throw new Error('Count must be a positive number');
  }
  
  const result = [];
  for (let i = 1; i <= count; i++) {
    result.push(fizzBuzz(i));
  }
  return result;
}