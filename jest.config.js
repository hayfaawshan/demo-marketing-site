const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  globalSetup: "<rootDir>/node_modules/@quramy/jest-prisma/global-setup",
  globalTeardown: "<rootDir>/node_modules/@quramy/jest-prisma/global-teardown",
  setupFilesAfterEnv: ["<rootDir>/jest.test-setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
};

module.exports = createJestConfig(customJestConfig);
