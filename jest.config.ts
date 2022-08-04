module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  maxWorkers: '50%',
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coverageThreshold: {
    'src/**': {
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  testMatch: [
    '**/__tests__/**/*.+(spec|test).[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
};
