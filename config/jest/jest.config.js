module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.js'],
  testRegex: '.*[-.]test\\.tsx?$',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/__tests__/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx']
}
