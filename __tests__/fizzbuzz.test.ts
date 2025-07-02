import { fizzBuzz, generateFizzBuzzSequence } from "../lib/fizzbuzz";

describe("fizzBuzz", () => {
  it("returns number as string for non-multiples of 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
    expect(fizzBuzz(2)).toBe("2");
    expect(fizzBuzz(4)).toBe("4");
  });

  it("returns Fizz for multiples of 3 only", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(12)).toBe("Fizz");
  });

  it("returns Buzz for multiples of 5 only", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
  });

  it("returns FizzBuzz for multiples of both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).toBe("FizzBuzz");
  });

  it("throws error for NaN, Infinity, -Infinity, or non-integer", () => {
    expect(() => fizzBuzz(NaN)).toThrow();
    expect(() => fizzBuzz(Infinity)).toThrow();
    expect(() => fizzBuzz(-Infinity)).toThrow();
    expect(() => fizzBuzz(3.5)).toThrow();
    expect(() => fizzBuzz(-2.2)).toThrow();
  });
});

describe("generateFizzBuzzSequence", () => {
  it("returns correct sequence for limit 5", () => {
    expect(generateFizzBuzzSequence(5)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
    ]);
  });

  it("returns correct sequence for limit 15", () => {
    expect(generateFizzBuzzSequence(15)).toEqual([
      "1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz",
      "11","Fizz","13","14","FizzBuzz"
    ]);
  });

  it("throws error for zero, negative, non-integer, or non-finite limit", () => {
    expect(() => generateFizzBuzzSequence(0)).toThrow();
    expect(() => generateFizzBuzzSequence(-1)).toThrow();
    expect(() => generateFizzBuzzSequence(2.7)).toThrow();
    expect(() => generateFizzBuzzSequence(NaN)).toThrow();
    expect(() => generateFizzBuzzSequence(Infinity)).toThrow();
  });
});