const jestPreset = require("jest-preset-next/jest-preset");

const customJestConfig = {
  ...jestPreset,
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
};

module.exports = customJestConfig;
