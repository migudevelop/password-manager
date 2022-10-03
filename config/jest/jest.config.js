module.exports = {
  rootDir: '../../',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.js'],
  testRegex: '.*[-.]test\\.tsx?$',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/__tests__/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@locale/(.*)$': '<rootDir>/src/locale/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@redux/(.*)$': '<rootDir>/src/redux/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1'
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  }
}
