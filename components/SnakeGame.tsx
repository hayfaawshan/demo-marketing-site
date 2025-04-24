import React, { useEffect, useRef, useState } from "react";

type Position = { x: number; y: number };

// Configuration
const BOARD_SIZE = 15;
const INITIAL_SNAKE: Position[] = [
  { x: 7, y: 7 },
  { x: 6, y: 7 },
  { x: 5, y: 7 },
];
const INITIAL_DIRECTION: Position = { x: 1, y: 0 };
const SPEED = 120; // ms per tick

function getRandomPosition(exclude: Position[]): Position {
  while (true) {
    const pos = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
    if (!exclude.some(sq => sq.x === pos.x && sq.y === pos.y)) {
      return pos;
    }
  }
}

function positionsEqual(a: Position, b: Position) {
  return a.x === b.x && a.y === b.y;
}

const directions: Record<string, Position> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

function nextHead(head: Position, dir: Position): Position {
  return {
    x: (head.x + dir.x + BOARD_SIZE) % BOARD_SIZE,
    y: (head.y + dir.y + BOARD_SIZE) % BOARD_SIZE,
  };
}

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Position>(INITIAL_DIRECTION);
  const [nextDir, setNextDir] = useState<Position>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Position>(
    getRandomPosition(INITIAL_SNAKE)
  );
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  // Keyboard controls
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isRunning || isGameOver) return;
      if (!(e.key in directions)) return;

      // Prevent instant reversal if snake longer than 1 block
      const opp = {
        x: direction.x * -1,
        y: direction.y * -1,
      };
      if (
        directions[e.key].x === opp.x &&
        directions[e.key].y === opp.y &&
        snake.length > 1
      ) {
        return;
      }
      setNextDir(directions[e.key]);
      e.preventDefault();
    };
    window.addEventListener("keydown", handler, { passive: false });
    return () => window.removeEventListener("keydown", handler);
  }, [direction, isRunning, isGameOver, snake.length]);

  // Game loop
  useEffect(() => {
    if (!isRunning || isGameOver) return;

    const interval = setInterval(() => {
      setDirection(nextDir);
      setSnake((prev) => {
        let newHead = nextHead(prev[0], nextDir);

        // Check collision with the body (ignore tail if it's moving)
        const body = prev.slice(0, -1);

        if (body.some(seg => positionsEqual(seg, newHead))) {
          setIsGameOver(true);
          setIsRunning(false);
          return prev;
        }

        let ateFood = positionsEqual(newHead, food);
        let newSnake = [newHead, ...prev];
        if (ateFood) {
          setScore(s => s + 1);
          setFood(getRandomPosition(newSnake));
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(interval);
  }, [nextDir, isRunning, isGameOver, food]);

  // Restart game
  function handleRestart() {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setNextDir(INITIAL_DIRECTION);
    setFood(getRandomPosition(INITIAL_SNAKE));
    setScore(0);
    setIsRunning(true);
    setIsGameOver(false);
  }

  // Render grid
  function renderBoard() {
    const rows = [];
    for (let y = 0; y < BOARD_SIZE; y++) {
      const cells = [];
      for (let x = 0; x < BOARD_SIZE; x++) {
        const pos = { x, y };
        let className = "border border-gray-300 w-4 h-4 md:w-5 md:h-5";
        if (positionsEqual(food, pos)) {
          className += " bg-red-500";
        } else if (positionsEqual(snake[0], pos)) {
          className += " bg-green-700";
        } else if (snake.some(seg => positionsEqual(seg, pos))) {
          className += " bg-green-400";
        } else {
          className += " bg-neutral-900";
        }
        cells.push(<div key={x} className={className} />);
      }
      rows.push(
        <div key={y} className="flex flex-row">
          {cells}
        </div>
      );
    }
    return rows;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-mono p-2">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow mb-4">
        🐍 Snake Game
      </h1>
      <div className="mb-2 text-white text-lg">Score: {score}</div>
      <div
        className="inline-block"
        style={{
          background: "#1a1a1a",
          padding: 8,
          borderRadius: 8,
          boxShadow: "0 2px 12px #0008",
        }}
      >
        <div
          style={{
            lineHeight: 0,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {renderBoard()}
        </div>
      </div>
      {isGameOver && (
        <div className="mt-4 text-center">
          <div className="text-2xl text-red-400 mb-2">Game Over!</div>
          <button
            className="px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      )}
      <div className="mt-4 text-gray-200 text-xs">
        <b>Controls:</b> Arrow keys (↑, ↓, ←, →) &nbsp;•&nbsp; Eat the red food and avoid your own tail!
      </div>
    </div>
  );
}

