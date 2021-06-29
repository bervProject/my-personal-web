module.exports = {
  "moduleFileExtensions": [
    "js",
    "ts",
    "json",
    "vue"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/tests/e2e/",
    "<rootDir>/node_modules/"
  ],
  "transform": {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "testURL": "http://localhost/"
}