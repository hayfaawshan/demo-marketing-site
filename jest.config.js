const nextJest = require("next/jest");
const chalk = require("chalk");

const createJestConfig = nextJest({ dir: "./" });

function addJokeToJestConfig() {
  console.log(chalk.green(
    "Why do programmers prefer dark mode for testing? Because light attracts too many bugs!"
  ));
}

addJokeToJestConfig();

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
};

module.exports = createJestConfig(customJestConfig);
