import { fizzBuzz, generateFizzBuzzSequence } from '../lib/fizzBuzz';

describe('fizzBuzz function', () => {
  test('returns "Fizz" for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  test('returns "Buzz" for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  test('returns "FizzBuzz" for multiples of both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  test('returns the number itself for non-multiples of 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(4)).toBe(4);
  });

  test('throws error for invalid inputs', () => {
    expect(() => fizzBuzz('string')).toThrow();
    expect(() => fizzBuzz(NaN)).toThrow();
    expect(() => fizzBuzz(undefined)).toThrow();
  });
});

describe('generateFizzBuzzSequence function', () => {
  test('generates correct sequence', () => {
    const result = generateFizzBuzzSequence(15);
    const expected = [
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
      11, 'Fizz', 13, 14, 'FizzBuzz'
    ];
    expect(result).toEqual(expected);
  });

  test('throws error for invalid inputs', () => {
    expect(() => generateFizzBuzzSequence('string')).toThrow();
    expect(() => generateFizzBuzzSequence(0)).toThrow();
    expect(() => generateFizzBuzzSequence(-1)).toThrow();
  });
});