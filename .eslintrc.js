module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    quotes: ['error', 'single'],
    semi: [2, 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'error',
    'react/jsx-props-no-spreading': 'error',
    'no-undef': 'error',
  },
  globals: {
    __IS_DEV__: true,
    __dirname: true,
  },
};
