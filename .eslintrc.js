const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  // which environments your script is designed to run in. Each environment brings with it a certain set of predefined global variables.
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // https://typescript-eslint.io/docs/linting/#details
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  // "plugins": [
  //     "jquery",   // eslint-plugin-jquery
  //     "@foo/foo", // @foo/eslint-plugin-foo
  //     "@bar"      // @bar/eslint-plugin
  // ],
  plugins: ['@typescript-eslint', 'prettier'], // means @typescript-eslint/eslint-plugin eslint-plugin-prettier

  // "extends": [
  //     "plugin:jquery/recommended",
  //     "plugin:@foo/foo/recommended",
  //     "plugin:@bar/recommended"
  // ],
  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  // "off" or 0 - turn the rule off
  // "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
  // "error" or 2 - turn the rule on as an error (exit code will be 1)
  //   "rules": {
  //     "jquery/a-rule": "error",
  //     "@foo/foo/some-rule": "error",
  //     "@bar/another-rule": "error"
  // },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    'vue/custom-event-name-casing': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multi-word-component-names': 'off',
    // prettier
    'prettier/prettier': ['warn', { singleQuote: true, jsxSingleQuote: true }],
  },
})
