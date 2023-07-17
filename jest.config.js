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
    "^.+\\.tsx?$": ["ts-jest", {
      babelConfig: true,
    }]
  },
  "transformIgnorePatterns": ['/node_modules/'],
  "collectCoverage": true,
  "collectCoverageFrom": ["**/src/**/*.{ts,js,vue}", "!**/node_modules/**"],
  "testEnvironmentOptions": {
    url: "http://localhost/",
    customExportConditions: ["node", "node-addons"],
  },
  "preset": '@vue/cli-plugin-unit-jest/presets/typescript-and-babel'
}