const nextJest = require("next/jest");
const { resolveModule } = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const matchModule = (path, options) => {
  return resolveModule(path, options, [".ts", ".tsx", ".js", ".mjs", ".json"]);
};

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "mjs", "json"],
  resolver: matchModule,
};

module.exports = createJestConfig(customJestConfig);
