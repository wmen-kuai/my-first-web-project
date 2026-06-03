<template>
  <div class="question-card">
    <span class="question-type">{{ questionType }}</span>
    <h2 class="question-text">{{ question.text }}</h2>
    
    <div class="options">
      <button 
        v-for="(option, index) in question.options" 
        :key="index"
        class="option-btn"
        :class="{
          selected: selectedAnswer === index,
          correct: showResult && index === question.answer,
          wrong: showResult && selectedAnswer === index && index !== question.answer
        }"
        @click="$emit('select-answer', index)"
        :disabled="showResult"
      >
        {{ option }}
      </button>
    </div>

    <div class="action-btns">
      <button class="btn-secondary" @click="$emit('skip')" :disabled="showResult">跳过</button>
      <button 
        class="btn-primary" 
        @click="handleSubmit"
        :disabled="selectedAnswer === null && !showResult"
      >
        {{ showResult ? '下一题' : '提交答案' }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  questionType: {
    type: String,
    required: true
  },
  selectedAnswer: {
    type: Number,
    default: null
  },
  showResult: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select-answer', 'submit', 'skip', 'next'])

const handleSubmit = () => {
  if (props.showResult) {
    emit('next')
  } else {
    emit('submit')
  }
}
</script>

<style scoped>
.question-card {
  background: white;
  border-radius: 16px;
  padding: clamp(25px, 4vw, 40px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-out;
}

.question-type {
  display: inline-block;
  background: #e8f5e9;
  color: #2e7d32;
  padding: clamp(5px, 1.5vw, 6px) clamp(10px, 2vw, 12px);
  border-radius: 20px;
  font-size: clamp(12px, 2vw, 14px);
  margin-bottom: 20px;
}

.question-text {
  font-size: clamp(18px, 3.5vw, 24px);
  color: #333;
  line-height: 1.6;
  margin-bottom: clamp(20px, 3vw, 30px);
  white-space: pre-line;
  animation: fadeIn 0.6s ease-out;
}

.options {
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 2vw, 15px);
  margin-bottom: clamp(20px, 3vw, 30px);
}

.option-btn {
  padding: clamp(12px, 2.5vw, 16px) clamp(15px, 3vw, 20px);
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  font-size: clamp(14px, 2.5vw, 16px);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.option-btn:hover:not(:disabled) {
  border-color: #4caf50;
  background: #f1f8e9;
  transform: translateX(5px);
}

.option-btn.selected {
  border-color: #4caf50;
  background: #e8f5e9;
  animation: pulse 0.3s ease;
}

.option-btn.correct {
  border-color: #4caf50;
  background: #c8e6c9;
  color: #2e7d32;
  font-weight: bold;
  animation: colorChange 1s ease;
}

.option-btn.wrong {
  border-color: #f44336;
  background: #ffebee;
  color: #c62828;
  animation: colorChange 1s ease;
}

.option-btn:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.action-btns {
  display: flex;
  gap: clamp(10px, 2vw, 15px);
  justify-content: flex-end;
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

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.3);
}

.btn-primary:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.btn-secondary {
  padding: clamp(12px, 2.5vw, 14px) clamp(25px, 4vw, 32px);
  background: white;
  color: #666;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: clamp(14px, 2.5vw, 16px);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .question-card {
    padding: 20px;
  }
  
  .action-btns {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
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

@keyframes colorChange {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>