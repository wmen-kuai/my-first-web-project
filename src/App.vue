<template>
  <div id="app">
    <!-- 欢迎页 -->
    <div v-if="gameState === 'welcome'" class="welcome-screen">
      <h1 class="welcome-title">🌿 诗经草木集</h1>
      <p class="welcome-desc">看诗猜植物，解锁诗经中的草木世界</p>
      <p class="welcome-desc">📖 阅读诗句 · 🌱 猜测植物 · ✨ 解锁图鉴</p>
      <button class="btn-primary" @click="startGame">开始游戏</button>
    </div>

    <!-- 答题页 -->
    <div v-else-if="gameState === 'quiz'" class="quiz-screen">
      <PlantSidebar 
        :all-plants-list="allPlantsList"
        :unlocked-count="unlockedCount"
        :unlocked-plant-ids="plants.filter(p => p.unlocked).map(p => p.id)"
        :plants-data="getAllUnlockedPlants()"
        @open-detail="openPlantDetail"
      />
      <main class="quiz-main">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
        </div>
        <p class="progress-text">{{ currentQuestionIndex + 1 }} / {{ questions.length }}</p>
        <QuizCard
          :question="currentQuestion"
          :question-type="getQuestionType(currentQuestion.type)"
          :selected-answer="selectedAnswer"
          :show-result="showResult"
          @select-answer="selectAnswer"
          @submit="submitAnswer"
          @skip="skipQuestion"
          @next="nextQuestion"
        />
      </main>
    </div>

    <!-- 结果页 -->
    <ResultScreen
      v-else-if="gameState === 'result'"
      :correct-count="correctCount"
      :total="questions.length"
      :total-games="totalGames"
      :best-score="bestScore"
      :unlocked-plants="getAllUnlockedPlants()"
      :unlocked-plant-count="unlockedCount"
      :all-plants-count="allPlantsList.length"
      @restart="restartGame"
      @open-detail="openPlantDetail"
    />

    <!-- 植物详情弹窗 -->
    <teleport to="body">
      <PlantDetailModal
        :visible="showPlantDetailModal"
        :plant-detail="currentPlantDetail"
        @close="closePlantDetail"
      />
    </teleport>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useGame } from './composables/useGame'
import { useStorage } from './composables/useStorage'
import PlantSidebar from './components/PlantSidebar.vue'
import QuizCard from './components/QuizCard.vue'
import ResultScreen from './components/ResultScreen.vue'
import PlantDetailModal from './components/PlantDetailModal.vue'

// 初始化游戏
const game = useGame()

// 解构响应式状态，确保在模板中正确解包
const {
  gameState,
  currentQuestionIndex,
  selectedAnswer,
  showResult,
  correctCount,
  currentQuestion,
  progressPercent,
  plants,
  allPlantsList,
  unlockedCount,
  
  // 其他状态
  gameHistory,
  totalGames,
  bestScore,
  questions,
  
  // 弹窗状态
  showPlantDetailModal,
  currentPlantDetail,
  
  // 方法
  startGame,
  selectAnswer,
  submitAnswer,
  skipQuestion,
  nextQuestion,
  restartGame,
  getQuestionType,
  getAllUnlockedPlants,
  openPlantDetail,
  closePlantDetail
} = game

// 初始化本地存储
const storage = useStorage(
  plants,
  gameHistory,
  totalGames,
  bestScore
)

onMounted(() => {
  // 确保弹窗初始状态为关闭
  showPlantDetailModal.value = false
  currentPlantDetail.value = null
  
  storage.init()
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.welcome-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
}

.welcome-title {
  font-size: clamp(28px, 5vw, 42px);
  color: #2e7d32;
  margin-bottom: 20px;
}

.welcome-desc {
  font-size: clamp(14px, 2.5vw, 18px);
  color: #555;
  margin-bottom: 10px;
}

.btn-primary {
  margin-top: 30px;
  background: #4caf50;
  color: white;
  border: none;
  padding: clamp(12px, 2vw, 15px) clamp(30px, 5vw, 40px);
  border-radius: 10px;
  font-size: clamp(16px, 2.5vw, 18px);
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #388e3c;
  transform: translateY(-2px);
}

.quiz-screen {
  display: flex;
  min-height: 100vh;
  padding: clamp(10px, 2vw, 20px);
  gap: clamp(10px, 2vw, 20px);
}

.quiz-main {
  flex: 1;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #c8e6c9;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: #4caf50;
  transition: width 0.3s;
}

.progress-text {
  text-align: right;
  color: #666;
  font-size: clamp(12px, 2vw, 14px);
  margin-bottom: 20px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .quiz-screen {
    flex-direction: column;
    padding: 10px;
  }
  
  .welcome-screen {
    padding: 15px;
  }
  
  .question-card {
    padding: clamp(20px, 4vw, 40px) !important;
  }
  
  .question-text {
    font-size: clamp(18px, 4vw, 24px) !important;
  }
  
  .option-btn {
    padding: clamp(12px, 2.5vw, 16px) clamp(15px, 3vw, 20px) !important;
    font-size: clamp(14px, 2.5vw, 16px) !important;
  }
}

/* 平板适配 */
@media (min-width: 769px) and (max-width: 1024px) {
  .quiz-screen {
    padding: 15px;
  }
}

/* 大屏适配 */
@media (min-width: 1440px) {
  .quiz-main {
    max-width: 800px;
  }
}
</style>