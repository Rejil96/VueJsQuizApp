<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import Question from "../components/Question.vue";
import quiz from "../data/data.json";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const route = useRoute();
const quizId = parseInt(route.params.id);

const currentIndexRouter = ref(quizId);
const currentQuestionIndex = ref(0);

const currentQuizData = quiz.find((eachData) => eachData.id === currentIndexRouter.value);

const onCheckAnswer = (answer) => {
  console.log(answer);
  currentQuestionIndex.value = currentQuestionIndex.value + 1;
};

const questionStatus = computed(
  //the index start from 0 and we want question number 1 as initial so we add 1 with index
  () => `${currentQuestionIndex.value + 1}/${currentQuizData.questions.length}`
);

const barPercentage = computed(
  () => `${(currentQuestionIndex.value / currentQuizData.questions.length) * 100}%`
);
</script>

<template>
  <div class="q-bg-container">
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
    <Question
      :qData="currentQuizData.questions"
      @qIndex="onCheckAnswer"
      :currentQuestionIndex="currentQuestionIndex"
    />
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
