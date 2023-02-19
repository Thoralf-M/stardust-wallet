import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), 
    viteStaticCopy({
    targets: [
      {
        src: 'node_modules/@iota/wallet-wasm/web/wasm/wallet_wasm_bg.wasm',
        dest: ''
      }
    ]
  })],
  optimizeDeps: {
    exclude: ['@iota/wallet-wasm']
  }
})
