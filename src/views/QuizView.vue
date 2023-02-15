<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import Question from "../components/Question.vue";
import Result from "../components/Result.vue";
import quiz from "../data/data.json";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const route = useRoute();
const quizId = route.params.id;

const currentIndexRouter = ref(quizId);
const currentQuizData = quiz.find((eachData) => eachData.id == quizId);
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
    <div v-if="currentQuizData" class="inner-wrapper">
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
    <div v-else class="content-not-found-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="86"
        height="86"
        fill="currentColor"
        class="bi bi-exclamation-triangle"
        viewBox="0 0 16 16"
      >
        <path
          d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
        />
        <path
          d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"
        />
      </svg>
      <h1 class="content-not-found">Content Not Found !!!</h1>
      <p class="not-found-info">
        The page content you're looking for has not been found!!
      </p>
    </div>
  </div>
</template>

<style setup>
.q-bg-container {
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-not-found-container {
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-not-found {
  font-size: 62px;
  font-weight: bolder;
  opacity: 0.5;
}

.not-found-info {
  color: #232222;
  font-size: 18px;
}

.inner-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
