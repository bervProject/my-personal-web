module.exports = {
  "moduleFileExtensions": [
    "js",
    "ts",
    "json",
    "vue"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "testPathIgnorePatterns": [
    "<rootDir>/tests/e2e/",
    "<rootDir>/node_modules/"
  ],
  "transform": {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  "collectCoverage": true,
  "collectCoverageFrom": ["**/src/**/*.{ts,js,vue}", "!**/node_modules/**"],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "testURL": "http://localhost/"
}