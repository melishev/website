/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/max-len': ['error', {
      code: 100,
      template: 80,
      tabWidth: 2,
      comments: 80,
      ignorePattern: '',
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: false,
      ignoreHTMLAttributeValues: false,
      ignoreHTMLTextContents: true,
    }],
  },
};
