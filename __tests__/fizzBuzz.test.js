import { fizzBuzz } from '../lib/fizzBuzz';

describe('fizzBuzz function', () => {
  test('returns an array of the correct length', () => {
    expect(fizzBuzz(15).length).toBe(15);
    expect(fizzBuzz(1).length).toBe(1);
    expect(fizzBuzz(0).length).toBe(0);
  });

  test('returns normal numbers correctly', () => {
    expect(fizzBuzz(2)).toEqual(['1', '2']);
    expect(fizzBuzz(7)[6]).toBe('7');
  });

  test('returns "Fizz" for multiples of 3', () => {
    expect(fizzBuzz(3)[2]).toBe('Fizz');
    expect(fizzBuzz(6)[5]).toBe('Fizz');
  });

  test('returns "Buzz" for multiples of 5', () => {
    expect(fizzBuzz(5)[4]).toBe('Buzz');
    expect(fizzBuzz(10)[9]).toBe('Buzz');
  });

  test('returns "FizzBuzz" for multiples of both 3 and 5', () => {
    expect(fizzBuzz(15)[14]).toBe('FizzBuzz');
    expect(fizzBuzz(30)[29]).toBe('FizzBuzz');
  });

  test('handles a full sequence correctly', () => {
    const expected = [
      '1', '2', 'Fizz', '4', 'Buzz',
      'Fizz', '7', '8', 'Fizz', 'Buzz',
      '11', 'Fizz', '13', '14', 'FizzBuzz'
    ];
    expect(fizzBuzz(15)).toEqual(expected);
  });
});