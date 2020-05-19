module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier' : 'error',
    'react/jsx-filename-extension': [
      'warn',
      {extensions: ['.jsx', 'js']}
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor' : 'off',
    'no-return-assign' : 'off',
    'no-param-reassign' : 'off'
  },
};
