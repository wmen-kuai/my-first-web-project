import { ref, computed } from 'vue'
import { questions as allQuestions, plantData, allPlantsList } from '../data/questions.js'

export function useGame() {
  // 游戏状态
  const gameState = ref('welcome') // welcome / quiz / result
  const currentQuestionIndex = ref(0)
  const selectedAnswer = ref(null)
  const showResult = ref(false)
  const correctCount = ref(0)
  
  // 植物数据（带解锁状态）
  const plants = ref([...plantData])
  const gameHistory = ref([])
  const totalGames = ref(0)
  const bestScore = ref(0)

  // 弹窗状态 - 确保初始值为 false
  const showPlantDetailModal = ref(false)
  const currentPlantDetail = ref(null)

  // 当前游戏的题目列表（随机排序）
  const currentQuestions = ref([])

  // 计算属性
  const currentQuestion = computed(() => currentQuestions.value[currentQuestionIndex.value])
  const progressPercent = computed(() => {
    return ((currentQuestionIndex.value + 1) / currentQuestions.value.length) * 100
  })
  const unlockedCount = computed(() => plants.value.filter(p => p.unlocked).length)

  // 获取题目类型
  const getQuestionType = (type) => {
    const map = { single: '单选题' }
    return map[type] || type
  }

  // 获取所有已解锁植物
  const getAllUnlockedPlants = () => {
    return plants.value.filter(p => p.unlocked)
  }

  // 洗牌算法：随机打乱数组顺序
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // 游戏方法
  const startGame = () => {
    gameState.value = 'quiz'
    currentQuestionIndex.value = 0
    selectedAnswer.value = null
    showResult.value = false
    correctCount.value = 0
    
    // 随机打乱题目顺序
    currentQuestions.value = shuffleArray(allQuestions)
  }

  const selectAnswer = (index) => {
    if (showResult.value) return
    selectedAnswer.value = index
  }

  const submitAnswer = () => {
    if (selectedAnswer.value === null) return
    
    showResult.value = true
    const isCorrect = selectedAnswer.value === currentQuestion.value.answer
    
    if (isCorrect) {
      correctCount.value++
      // 解锁植物
      const plantId = currentQuestion.value.plantId
      const plant = plants.value.find(p => p.id === plantId)
      if (plant && !plant.unlocked) {
        plant.unlocked = true
        plant.unlockDate = new Date().toLocaleString()
      }
    }
  }

  const skipQuestion = () => {
    nextQuestion()
  }

  const nextQuestion = () => {
    if (currentQuestionIndex.value < currentQuestions.value.length - 1) {
      currentQuestionIndex.value++
      selectedAnswer.value = null
      showResult.value = false
    } else {
      endGame()
    }
  }

  const endGame = () => {
    gameState.value = 'result'
    totalGames.value++
    
    // 更新最高分
    if (correctCount.value > bestScore.value) {
      bestScore.value = correctCount.value
    }
    
    // 记录游戏历史
    gameHistory.value.push({
      score: correctCount.value,
      date: new Date().toISOString()
    })
  }

  const restartGame = () => {
    startGame()
  }

  // 弹窗方法
  const openPlantDetail = (detail) => {
    currentPlantDetail.value = detail
    showPlantDetailModal.value = true
  }

  const closePlantDetail = () => {
    showPlantDetailModal.value = false
    currentPlantDetail.value = null
  }

  return {
    // 状态
    gameState,
    currentQuestionIndex,
    selectedAnswer,
    showResult,
    correctCount,
    currentQuestion,
    progressPercent,
    plants,
    gameHistory,
    totalGames,
    bestScore,
    allPlantsList,
    unlockedCount,
    questions: currentQuestions,

    // 方法
    startGame,
    selectAnswer,
    submitAnswer,
    skipQuestion,
    nextQuestion,
    restartGame,
    getQuestionType,
    getAllUnlockedPlants,

    // 弹窗
    showPlantDetailModal,
    currentPlantDetail,
    openPlantDetail,
    closePlantDetail
  }
}