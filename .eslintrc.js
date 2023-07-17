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
    'vue/multi-word-component-names': 'warn',
    'vue/no-v-model-argument': 'warn'
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },

  env: {
    node: true,
    jest: true
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
