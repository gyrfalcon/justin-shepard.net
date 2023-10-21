import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/src/", "<rootDir>/tests/unit"],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  reporters: [
    'default',
    [ "jest-junit", { outputDirectory: 'reports/jest' } ],
  ],
}

export default config