import React from "react";

/**
 * Returns "Fizz" for multiples of 3, "Buzz" for multiples of 5,
 * "FizzBuzz" for multiples of both, or the number itself otherwise.
 */
function fizzBuzz(n: number): string {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

const FizzBuzzComponent: React.FC<{ count?: number }> = ({ count = 20 }) => {
  return (
    <div>
      <h2>FizzBuzz up to {count}</h2>
      <ul>
        {Array.from({ length: count }, (_, i) => i + 1).map((num) => (
          <li key={num}>{fizzBuzz(num)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FizzBuzzComponent;