module.exports = {
  "moduleFileExtensions": [
    "js",
    "ts",
    "json",
    "vue"
  ],
  "moduleNameMapper": {
    "axios": "axios/dist/node/axios.cjs",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "testPathIgnorePatterns": [
    "<rootDir>/tests/e2e/",
    "<rootDir>/node_modules/"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "transformIgnorePatterns": ['/node_modules/'],
  "collectCoverage": true,
  "collectCoverageFrom": ["**/src/**/*.{ts,js,vue}", "!**/node_modules/**"],
  "testURL": "http://localhost/",
  "preset": '@vue/cli-plugin-unit-jest/presets/typescript-and-babel'
}