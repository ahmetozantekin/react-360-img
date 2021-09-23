import { defineConfig } from 'vite'
import * as path from 'path';

export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: false,
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, '/src/main.jsx'),
      name: '360',
      formats: ['es', 'cjs'],
      fileName: format => `main.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'react'
        }
      }
    },
    esbuild: {
      loader: 'jsx',
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
  },
})
