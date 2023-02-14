<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import Question from "../components/Question.vue";
import Result from "../components/Result.vue";
import quiz from "../data/data.json";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const currentIndexRouter = ref(quizId);
const currentQuizData = quiz.find((eachData) => eachData.id === quizId);
const currentQuestionIndex = ref(0);
const correctAnswers = ref(0);
const onShowResult = ref(false);

const onCheckAnswer = (answer) => {
  if (currentQuestionIndex.value === currentQuizData.questions.length - 1) {
    onShowResult.value = true;
  } else {
    currentQuestionIndex.value++;
  }

  if (answer) {
    correctAnswers.value++;
  }
};

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${currentQuizData.questions.length}`
);

const barPercentage = computed(
  () => `${(currentQuestionIndex.value / currentQuizData.questions.length) * 100}%`
);
</script>

<template>
  <div class="q-bg-container">
    <QuizHeader
      v-if="!onShowResult"
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <Question
      v-if="!onShowResult"
      :qData="currentQuizData.questions[currentQuestionIndex]"
      @qIndex="onCheckAnswer"
    />
    <Result v-if="onShowResult" :score="correctAnswers" />
  </div>
</template>

<style setup>
.q-bg-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
