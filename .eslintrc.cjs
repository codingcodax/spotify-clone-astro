// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
const path = require('path');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: {
              // Allow `void` return type for JSX attributes such as `onClick` / `onSubmit`
              attributes: false,
            },
          },
        ],
        'tailwindcss/classnames-order': 'off',
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ],
  parserOptions: {
    project: true,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    tsconfigRootDir: __dirname,
  },
};
