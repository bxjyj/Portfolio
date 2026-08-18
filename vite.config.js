import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site is served from https://bxjyj.github.io/Portfolio/
// so production asset URLs need that prefix. Dev keeps base at "/" so
// `npm run dev` works at http://localhost:5173/ without the prefix.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Portfolio/' : '/',
}));
