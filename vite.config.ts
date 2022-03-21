/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: 'src/shared/setupTests.ts',
    },
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(process.cwd()) }],
    },
})
