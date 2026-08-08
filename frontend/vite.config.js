import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Third arg '' loads every variable, not just the VITE_-prefixed ones. The proxy
  // target is server-side config, so it deliberately never reaches the browser bundle.
  const env = loadEnv(mode, process.cwd(), '')
  const apiTarget = env.API_PROXY_TARGET || 'http://127.0.0.1:5555'

  return {
    plugins: [react()],
    resolve: {
      alias: {
        // Lets modules import as '@/lib/apiClient' instead of '../../lib/apiClient'.
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      // Bind IPv4 explicitly: the default resolves to IPv6-only loopback on some
      // Windows setups, which local tooling and browsers can fail to reach.
      host: '127.0.0.1',
      port: 5173,
      // Fail loudly instead of silently moving to another port.
      strictPort: true,
      proxy: {
        // Everything under /api is forwarded to Laravel, so the browser only ever
        // talks to one origin in development and CORS never comes into play.
        '/api': {
          target: apiTarget,
          changeOrigin: true,
        },
      },
    },
  }
})
