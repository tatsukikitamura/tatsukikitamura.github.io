import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { ignores: ['dist/', '.astro/', 'node_modules/', 'shuukatsu/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    // Browser code: islands, inline <script> in .astro, and src/lib helpers.
    files: ['src/**/*.{ts,tsx}', '**/*.astro'],
    languageOptions: { globals: globals.browser },
  },
  {
    ...reactHooks.configs.flat.recommended,
    files: ['src/**/*.tsx'],
  },
  {
    files: ['*.config.{js,mjs}'],
    languageOptions: { globals: globals.node },
  },
]);
