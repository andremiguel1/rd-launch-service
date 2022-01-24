module.exports = {
  roots: ['<rootDir>/test'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ["src/**/*.ts"],
  setupFilesAfterEnv: ["./test/setup.ts"],
};