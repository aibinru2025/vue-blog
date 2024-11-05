import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // 后端服务器地址
        changeOrigin: true,              // 修改请求头中的 Host 字段
        secure: false,                   // 如果后端是 https，则改为 true
        rewrite: (path) => path.replace(/^\/api/, ''),  // 去掉路径中的 /api 前缀
      },
    },
  },
})
