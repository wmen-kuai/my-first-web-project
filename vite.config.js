import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 这里必须和你的GitHub仓库名完全一致，前后都要有斜杠
  base: '/my-first-web-project/'
})