const nextJest = require("next/jest");
const { matchers, createTestEnvironment, extendExpect } = require("@cosineai/jest-suite");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: createTestEnvironment("**/*.customMatcher"),
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
};

module.exports = extendExpect(createJestConfig(customJestConfig), matchers);
