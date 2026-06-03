<template>
  <aside class="plant-sidebar">
    <h3>🌿 植物名录</h3>
    <p class="sidebar-stats">{{ unlockedCount }} / {{ allPlantsList.length }} 已解锁</p>
    <div class="plant-list-sidebar">
      <div 
        v-for="plant in allPlantsList" 
        :key="plant.id"
        class="sidebar-plant-item"
        :class="{ unlocked: isPlantUnlocked(plant.id) }"
        @click="handlePlantClick(plant.id)"
      >
        <span class="plant-status">{{ isPlantUnlocked(plant.id) ? '✅' : '⬜' }}</span>
        <span class="plant-name-sidebar">{{ plant.name }}</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
// 注意：Vue3.4+ 不需要导入defineProps/defineEmits！
const props = defineProps({
  allPlantsList: {
    type: Array,
    required: true
  },
  unlockedCount: {
    type: Number,
    required: true
  },
  unlockedPlantIds: {
    type: Array,
    required: true
  },
  plantsData: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['open-detail'])

const isPlantUnlocked = (plantId) => props.unlockedPlantIds.includes(plantId)

const handlePlantClick = (plantId) => {
  if (!isPlantUnlocked(plantId)) return
  const plantDetail = props.plantsData.find(p => p.id === plantId)
  if (plantDetail) emit('open-detail', plantDetail)
}
</script>

<style scoped>
.plant-sidebar {
  width: clamp(200px, 25vw, 250px);
  background: white;
  border-radius: 16px;
  padding: clamp(15px, 2.5vw, 20px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideIn 0.6s ease-out;
}

.plant-sidebar h3 {
  font-size: clamp(16px, 2.5vw, 18px);
  color: #2e7d32;
  margin-bottom: 10px;
}

.sidebar-stats {
  font-size: clamp(12px, 2vw, 14px);
  color: #666;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e8f5e9;
}

.plant-list-sidebar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-plant-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: clamp(6px, 1.5vw, 8px) clamp(10px, 2vw, 12px);
  border-radius: 8px;
  background: #f5f5f5;
  transition: all 0.3s ease;
  cursor: default;
}

.sidebar-plant-item.unlocked {
  background: #e8f5e9;
  border-left: 3px solid #4caf50;
  cursor: pointer;
}

.sidebar-plant-item:hover {
  transform: translateX(5px);
  background: #f0f0f0;
}

.sidebar-plant-item.unlocked:hover {
  background: #c8e6c9;
}

.plant-status {
  font-size: clamp(14px, 2.5vw, 16px);
}

.plant-name-sidebar {
  font-size: clamp(12px, 2vw, 14px);
  color: #333;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .plant-sidebar {
    width: 100%;
    max-height: 200px;
    margin-bottom: 15px;
  }
  
  .sidebar-plant-item {
    padding: 8px 10px;
  }
}

@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>