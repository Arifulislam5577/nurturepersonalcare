import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import unicorn from 'eslint-plugin-unicorn'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: { unicorn },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'unicorn/filename-case': ['error', { case: 'kebabCase' }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            { pattern: '@/lib/**', group: 'internal', position: 'before' },
            { pattern: '@/components/**', group: 'internal' },
            { pattern: '@/hooks/**', group: 'internal', position: 'after' },
            { pattern: '@/types/**', group: 'parent', position: 'before' },
            { pattern: '@/public/**', group: 'parent' },
            {
              pattern: '*.css',
              group: 'index',
              position: 'after',
              patternOptions: { matchBase: true },
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],
      'no-restricted-imports': ['error', { patterns: ['../*'] }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-nested-ternary': 'error',
      eqeqeq: ['error', 'always'],
      'prefer-const': 'error',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default eslintConfig
