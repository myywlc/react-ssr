module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'no-console': 0,
    // 'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'semi': 0,
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'no-tabs': 0,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'max-len': ["error", { "code": 120 }],
  },
};
