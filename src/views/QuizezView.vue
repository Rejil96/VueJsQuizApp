<script setup>
import q from "../data/data.json";
import SubjectCard from "../components/SubjectCard.vue";
import { ref, watch } from "vue";

const quizData = ref(q);
const searchText = ref("");

watch(searchText, (newValue) => {
  if (newValue) {
    quizData.value = quizData.value.filter((eachData) =>
      eachData.name.toLowerCase().includes(newValue.toLowerCase())
    );
  } else {
    quizData.value = q;
  }
});
</script>

<template>
  <div class="inner-wrapper">
    <h1 class="main-heading">Quiz App</h1>
    <div class="search-header">
      <input
        type="search"
        class="search-text"
        v-model="searchText"
        placeholder="Search"
      />
    </div>
    <div class="subject-listing-container">
      <SubjectCard v-for="quiz in quizData" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped>
.main-heading {
  font-size: 36px;
  font-weight: bolder;
  text-align: center;
}

.search-text {
  width: 50vw;
  height: 46px;
  padding: 10px;
  outline: none;
  background-color: rgb(223, 223, 223, 0.2);
  border: 1px solid #a9a8a8;
}

.subject-listing-container {
  width: 100;
  display: flex;
  flex-wrap: wrap;
  padding: 80px;
  align-items: center;
  justify-content: center;
}

.inner-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
