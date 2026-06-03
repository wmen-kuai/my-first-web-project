<template>
  <div class="result-screen">
    <h1 class="result-title">🎉 闯关完成！</h1>
    
    <div class="score-box">
      <p class="score-label">本次得分</p>
      <p class="score-value">{{ correctCount }} / {{ total }}</p>
      <p class="score-percent">{{ Math.round((correctCount / total) * 100) }}%</p>
    </div>

    <div class="stats-box">
      <h3>📊 累计统计</h3>
      <div class="stat-item">
        <span>总游戏次数：</span>
        <strong>{{ totalGames }}</strong>
      </div>
      <div class="stat-item">
        <span>历史最高分：</span>
        <strong>{{ bestScore }} / {{ total }}</strong>
      </div>
      <div class="stat-item">
        <span>已解锁植物：</span>
        <strong>{{ unlockedPlantCount }} / {{ allPlantsCount }}</strong>
      </div>
    </div>

    <div class="unlocked-plants" v-if="unlockedPlants.length > 0">
      <h3>🌿 已解锁植物：</h3>
      <div class="plant-list">
        <div 
          v-for="plant in unlockedPlants" 
          :key="plant.id" 
          class="plant-item"
          @click="$emit('open-detail', plant)"
        >
          <span class="plant-icon">🌿</span>
          <div class="plant-info">
            <span class="plant-name">{{ plant.name }}</span>
            <span class="plant-time">{{ plant.unlockDate }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="result-btns">
      <button class="btn-primary" @click="$emit('restart')">再来一次</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  correctCount: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  totalGames: {
    type: Number,
    required: true
  },
  bestScore: {
    type: Number,
    required: true
  },
  unlockedPlants: {
    type: Array,
    required: true
  },
  unlockedPlantCount: {
    type: Number,
    required: true
  },
  allPlantsCount: {
    type: Number,
    required: true
  }
})

defineEmits(['restart', 'open-detail'])
</script>

<style scoped>
.result-screen {
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: clamp(15px, 3vw, 20px);
  animation: fadeIn 0.6s ease-out;
}

.result-title {
  font-size: clamp(24px, 5vw, 36px);
  color: #2e7d32;
  margin-bottom: clamp(20px, 3vw, 30px);
}

.score-box {
  background: white;
  border-radius: 16px;
  padding: clamp(25px, 4vw, 40px);
  margin-bottom: clamp(20px, 3vw, 30px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.1);
  animation: fadeIn 0.8s ease-out;
}

.score-label {
  font-size: clamp(14px, 2.5vw, 18px);
  color: #666;
  margin-bottom: 10px;
}

.score-value {
  font-size: clamp(32px, 6vw, 48px);
  font-weight: bold;
  color: #4caf50;
  animation: pulse 1s ease infinite;
}

.score-percent {
  font-size: clamp(18px, 3vw, 24px);
  color: #66bb6a;
  margin-top: 10px;
}

.stats-box {
  background: white;
  border-radius: 16px;
  padding: clamp(20px, 3vw, 30px);
  margin-bottom: clamp(20px, 3vw, 30px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.1);
  animation: fadeIn 1s ease-out;
}

.stats-box h3 {
  font-size: clamp(16px, 2.5vw, 20px);
  color: #333;
  margin-bottom: clamp(15px, 2.5vw, 20px);
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: clamp(10px, 2vw, 12px) 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: clamp(14px, 2.5vw, 16px);
  color: #666;
  animation: slideIn 0.5s ease-out;
}

.stat-item:last-child {
  border-bottom: none;
}

.stat-item strong {
  color: #4caf50;
  font-size: clamp(16px, 2.5vw, 18px);
}

.unlocked-plants {
  background: white;
  border-radius: 16px;
  padding: clamp(20px, 3vw, 30px);
  margin-bottom: clamp(20px, 3vw, 30px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.1);
  animation: fadeIn 1.2s ease-out;
}

.unlocked-plants h3 {
  font-size: clamp(16px, 2.5vw, 20px);
  color: #333;
  margin-bottom: clamp(15px, 2.5vw, 20px);
}

.plant-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(clamp(150px, 25vw, 200px), 1fr));
  gap: clamp(10px, 2vw, 15px);
}

.plant-item {
  background: #e8f5e9;
  padding: clamp(10px, 2vw, 12px) clamp(15px, 2.5vw, 20px);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.5vw, 12px);
  animation: slideIn 0.5s ease-out;
  transition: all 0.3s ease;
  cursor: pointer;
}

.plant-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
}

.plant-icon {
  font-size: clamp(16px, 2.5vw, 20px);
}

.plant-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.plant-name {
  font-size: clamp(14px, 2.5vw, 16px);
  color: #333;
  font-weight: 500;
}

.plant-time {
  font-size: clamp(10px, 1.8vw, 12px);
  color: #999;
}

.result-btns {
  display: flex;
  justify-content: center;
  gap: clamp(10px, 2vw, 15px);
  flex-wrap: wrap;
}

.btn-primary {
  padding: clamp(12px, 2.5vw, 14px) clamp(25px, 4vw, 32px);
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: clamp(14px, 2.5vw, 16px);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.3);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .result-screen {
    padding: 15px;
  }
  
  .score-box,
  .stats-box,
  .unlocked-plants {
    padding: 20px;
  }
  
  .stat-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .plant-list {
    grid-template-columns: 1fr;
  }
  
  .result-btns {
    flex-direction: column;
  }
  
  .btn-primary {
    width: 100%;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

@keyframes slideIn {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>