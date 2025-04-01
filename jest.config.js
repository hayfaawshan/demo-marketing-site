const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/lib/testing/setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/", "lib/testing"],
};

module.exports = createJestConfig(customJestConfig);
