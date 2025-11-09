import { defineConfig } from 'eslint/config';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import { fixupPluginRules } from '@eslint/compat';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended'
    ),

    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      'react-hooks': fixupPluginRules(reactHooks),
      'jsx-a11y': jsxA11Y,
      prettier,
    },

    languageOptions: {
      parser: tsParser,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          jsxSingleQuote: true,
        },
      ],
      eqeqeq: ['error', 'always'],
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/anchor-is-valid': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0,
        },
      ],

      semi: 'off',
    },
  },
]);
