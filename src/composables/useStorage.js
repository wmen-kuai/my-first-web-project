import { watch } from 'vue'

export function useStorage(plants, gameHistory, totalGames, bestScore) {
  const STORAGE_KEY = 'shijing-caomu-ji'

  const load = () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      if (data) {
        const parsed = JSON.parse(data)
        // 恢复植物解锁状态
        if (parsed.plants) {
          plants.value.forEach(p => {
            const saved = parsed.plants.find(sp => sp.id === p.id)
            if (saved) {
              p.unlocked = saved.unlocked
              p.unlockDate = saved.unlockDate
            }
          })
        }
        gameHistory.value = parsed.gameHistory || []
        totalGames.value = parsed.totalGames || 0
        bestScore.value = parsed.bestScore || 0
      }
    } catch (e) {
      console.error('加载本地存储失败:', e)
    }
  }

  const save = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        plants: plants.value.map(p => ({
          id: p.id,
          unlocked: p.unlocked,
          unlockDate: p.unlockDate
        })),
        gameHistory: gameHistory.value,
        totalGames: totalGames.value,
        bestScore: bestScore.value
      }))
    } catch (e) {
      console.error('保存本地存储失败:', e)
    }
  }

  const init = () => {
    load()
    // 监听数据变化自动保存
    watch([plants, gameHistory, totalGames, bestScore], save, { deep: true })
  }

  return { init, load, save }
}