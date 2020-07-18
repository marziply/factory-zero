export default {
  transform: {},
  testEnvironment: 'jest-environment-node',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'mjs'],
  setupFiles: ['<rootDir>/tests/setup.mjs'],
  testMatch: ['**/tests/**/*.spec.(js|mjs)']
}
