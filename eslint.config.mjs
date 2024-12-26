import react from 'eslint-plugin-react'
import typescriptEslint from 'typescript-eslint'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'
import js from '@eslint/js'

export default typescriptEslint.config([
  {
    ignores: ['**/playwright.config.js', 'dist/*', '.proxyrc.js'],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  typescriptEslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint.plugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: typescriptEslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'script',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
