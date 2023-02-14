<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({ quiz: Object });

const navigateToQuiz = () => {
  console.log("clicked");
  router.push(`/quiz/${props.quiz.id}`);
};
</script>

<template>
  <div class="card-bg" @click="navigateToQuiz">
    <div class="banner-img-container">
      <img :src="quiz.img" :alt="props.quiz.name" class="banner-img" />
      <p class="banner-heading">{{ props.quiz.name }}</p>
      <p class="question-info">{{ props.quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<style scoped>
.card-bg {
  width: 400px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #f9f8f8;
  border-radius: 10px;
  box-shadow: -1px 0px 40px 9px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.banner-img-container {
  width: 100%;
}

.banner-img {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}

.banner-heading {
  margin-left: 20px;
}

.question-info {
  margin-left: 20px;
}
</style>
