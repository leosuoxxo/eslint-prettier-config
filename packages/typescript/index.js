// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const tsConfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : fs.existsSync('types/tsconfig.json')
  ? path.resolve('types/tsconfig.json')
  : undefined;

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: tsConfig,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'import/named': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          { multiline: { delimiter: 'none' } },
        ],
        '@typescript-eslint/type-annotation-spacing': ['error', {}],

        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',

        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
      },
    },
  ],
};
