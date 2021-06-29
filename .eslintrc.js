module.exports = {
  plugins: ['cypress'],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript',
    'plugin:cypress/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  env: {
    node: true,
    jest: true
  }
}