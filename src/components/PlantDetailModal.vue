<template>
  <div v-if="visible" class="modal-overlay" @click.self="handleClose">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">
          <span class="modal-icon">🌿</span>
          <span class="plant-name">{{ plantDetail?.name }}</span>
          <span class="plant-pinyin">{{ plantDetail?.pinyin }}</span>
        </div>
        <button class="modal-close-btn" @click="handleClose">×</button>
      </div>

      <div class="modal-body">
        <div class="info-item">
          <span class="label">📜 出处</span>
          <p class="text">{{ plantDetail?.source || '暂无数据' }}</p>
        </div>
        <div class="info-item">
          <span class="label">📖 原文</span>
          <p class="text">{{ plantDetail?.text || '暂无数据' }}</p>
        </div>
        <div class="info-item">
          <span class="label">💬 释义</span>
          <p class="text">{{ plantDetail?.meaning || '暂无数据' }}</p>
        </div>
        <div class="info-item">
          <span class="label">🎭 文化内涵</span>
          <p class="text">{{ plantDetail?.culture || '暂无数据' }}</p>
        </div>
        <div class="info-item">
          <span class="label">💐 花语</span>
          <p class="text">{{ plantDetail?.flowerLanguage || '暂无数据' }}</p>
        </div>
        <div class="info-item">
          <span class="label">🌱 现代用途</span>
          <p class="text">{{ plantDetail?.usage || '暂无数据' }}</p>
        </div>
      </div>

      <div class="modal-footer">
        <button class="close-btn" @click="handleClose">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  plantDetail: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.visible) {
    handleClose()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: clamp(10px, 2vw, 20px);
}

.modal-content {
  background: #fff;
  border-radius: 16px;
  width: 90%;
  max-width: 550px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(12px, 2.5vw, 16px) clamp(15px, 3vw, 20px);
  background: #e8f5e9;
  border-radius: 16px 16px 0 0;
}

.modal-title {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.modal-icon {
  font-size: clamp(18px, 3vw, 20px);
}

.plant-name {
  font-size: clamp(16px, 3vw, 18px);
  font-weight: bold;
  color: #2e7d32;
}

.plant-pinyin {
  font-size: clamp(12px, 2.5vw, 14px);
  color: #666;
}

.modal-close-btn {
  border: none;
  background: none;
  font-size: clamp(22px, 4vw, 24px);
  cursor: pointer;
  color: #666;
  padding: 0 4px;
}

.modal-body {
  padding: clamp(15px, 3vw, 20px);
}

.info-item {
  margin-bottom: clamp(12px, 2.5vw, 16px);
}

.label {
  display: block;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 4px;
  font-size: clamp(14px, 2.5vw, 16px);
}

.text {
  margin: 0;
  color: #333;
  line-height: 1.5;
  font-size: clamp(13px, 2.3vw, 15px);
}

.modal-footer {
  padding: clamp(12px, 2.5vw, 16px) clamp(15px, 3vw, 20px);
  border-top: 1px solid #eee;
  text-align: center;
}

.close-btn {
  background: #4caf50;
  color: #fff;
  border: none;
  padding: clamp(8px, 2vw, 10px) clamp(25px, 4vw, 30px);
  border-radius: 8px;
  cursor: pointer;
  font-size: clamp(14px, 2.5vw, 16px);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    max-height: 90vh;
  }
  
  .modal-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .plant-pinyin {
    font-size: 12px;
  }
}
</style>