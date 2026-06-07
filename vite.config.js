import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  base: '/my-first-web-project/', // 关键：固定为 /仓库名/
  plugins: [vue()]
})