import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  // configure vite DEVELOPMENT server (yarn run dev)
  server: {
    host: true, // expose app via IP address from local network
    port: 3333,
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsconfigPaths(),
    svgr(),
    checker({
      // use TypeScript check
      typescript: true,
    }),
  ],
})