const path = require('path')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  env: {
    es2020: true,
    node: true,
    browser: true
  },
  ignorePatterns: [
    '.eslintrc.js',
    'babel-plugin-macros.config.js',
    'browser-open.js',
    'src/superrare-ui/*',
    'tests/e2e',
    'config/*',
    'scripts/*'
  ],
  rules: {
    'prettier/prettier': 'warn',
    'max-len': ['off', { code: 120 }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true
      }
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'no-case-declarations': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'prefer-const': ['warn'],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.'
          }
        ],
        patterns: ['!styled-components/macro']
      }
    ],
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': ['warn'],
    'jsx-a11y/click-events-have-key-events': ['warn'],
    'jsx-a11y/no-static-element-interactions': ['warn']
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['./src/**/*.{js,jsx}', './src/**/*.*.{js,jsx}'],
      parser: '@babel/eslint-parser',
      extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier'
      ],
      plugins: ['@babel'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          classes: true,
          jsx: true
        },
        babelOptions: {
          configFile: path.join(__dirname, './.babelrc')
        }
      },
      rules: {
        'react/prop-types': 'off',
        'no-unused-vars': 'warn',
        'no-useless-catch': 'off',
        'no-case-declarations': 'off',
        'react/jsx-key': 'warn',
        'react/no-unescaped-entities': 'warn',
        'import/prefer-default-export': 'off',
        camelcase: 'off',
        'no-console': 'off',
        'prefer-const': ['warn'],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'styled-components',
                message: 'Please import from styled-components/macro.'
              }
            ],
            patterns: ['!styled-components/macro']
          }
        ],
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/no-onchange': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': ['warn'],
        'jsx-a11y/click-events-have-key-events': ['warn'],
        'jsx-a11y/no-static-element-interactions': ['warn'],
        // disable typescript rules in js files
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-empty-function': 'warn'
      }
    }
  ]
}
