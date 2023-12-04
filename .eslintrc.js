module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
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
  plugins: ['@typescript-eslint', 'react', 'i18next', 'import'],
  rules: {
    quotes: ['error', 'single'],
    semi: [2, 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'error',
    'react/jsx-props-no-spreading': 'error',
    'no-undef': 'error',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['linkType'],
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/shared/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/entities/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/features/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/widgets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/pages/**',
            group: 'internal',
            position: 'before',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __dirname: true,
  },
};
