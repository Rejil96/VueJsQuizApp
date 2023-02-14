<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import Question from "../components/Question.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
console.log(quizId);

const currentIndexRouter = ref(quizId);
</script>

<template>
  <div class="q-bg-container">
    <QuizHeader />
    <Question />
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
