<script setup>
const props = defineProps({ qData: Object });
const emit = defineEmits(["qIndex"]);

const onClickQuestion = (questionId) => {
  emit("qIndex", questionId);
};

console.log(props.qData);
</script>

<template>
  <div class="question-container">
    <p class="question">{{ props.qData.text }}</p>
    <ul class="options-wrapper">
      <li
        class="option-panel"
        v-for="option in props.qData.options"
        :key="option.id"
        @click="onClickQuestion(option.isCorrect)"
      >
        <p class="option-label-head">{{ option.label }}</p>
        <p class="option-label-body">{{ option.text }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.question-container {
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.question {
  font-size: 28px;
  font-weight: bolder;
  align-items: flex-start;
}

.options-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style: none;
}

.option-panel {
  width: 80%;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #ebdef0;
  margin-top: 20px;
  cursor: pointer;
}

.option-label-head {
  background-color: bisque;
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  margin-right: 20px;
}
</style>
