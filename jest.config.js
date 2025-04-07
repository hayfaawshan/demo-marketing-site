const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironmentOptions: {
    jsdom: {
      approximateTextWidth: true
    }
  },
  projects: [
    {
      testEnvironment: "jest-environment-jsdom",
      setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
      moduleDirectories: ["node_modules", "<rootDir>/"],
      testMatch: ["**/*.ts", "**/*.tsx"]
    },
    {
      testEnvironment: "jest-environment-node",
      setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
      moduleDirectories: ["node_modules", "<rootDir>/"],
      testMatch: ["**/*.js"]
    }
  ]
};

module.exports = createJestConfig(customJestConfig);
