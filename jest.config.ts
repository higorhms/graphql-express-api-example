module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  maxWorkers: '50%',
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testMatch: [
    '**/__tests__/**/*.+(spec|test).[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  collectCoverageFrom: ['**/use-cases/**/*.ts'],
};
