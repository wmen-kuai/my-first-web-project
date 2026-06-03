import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'

const app = createApp(App)

// 全局错误处理
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err)
  console.error('Error Info:', info)
}

app.mount('#app')