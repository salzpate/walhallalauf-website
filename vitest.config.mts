import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'dist'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', '.next/', 'vitest.setup.ts', 'vitest.config.mts', 'next-env.d.ts', '**/*.config.*', '**/*.test.*', '**/*.spec.*', '**/*.module.css', '**/types/**', '**/index.ts', 'app/**/layout.tsx', 'app/**/not-found.tsx'],
    },
  },
  resolve: {
    alias: {
      '@/components': path.resolve(import.meta.dirname, './components'),
      '@/data': path.resolve(import.meta.dirname, './data'),
      '@/features': path.resolve(import.meta.dirname, './features'),
      '@/hooks': path.resolve(import.meta.dirname, './hooks'),
      '@/lib': path.resolve(import.meta.dirname, './lib'),
      '@/styles': path.resolve(import.meta.dirname, './styles'),
      '@/types': path.resolve(import.meta.dirname, './types'),
    },
  },
});
