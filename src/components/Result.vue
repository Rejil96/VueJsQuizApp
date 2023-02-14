<script setup>
import { useRouter } from "vue-router";
const props = defineProps({ score: Number });

const router = useRouter();

const navigateToHome = () => {
  console.log("clicked");
  router.push(`/`);
};
</script>

<template>
  <div class="result-container">
    <h1 class="result-heading">Result</h1>
    <p class="result-info-text">
      Your Score is <span class="score-digit">{{ props.score * 5 }}/ 15 </span>
    </p>
    <button @click="navigateToHome" class="button-back">Back to Home</button>
  </div>
</template>

<style scoped>
.result-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
}

.result-heading {
  font-size: 32px;
  margin: 20px 0px;
}

.result-info-text {
  font-weight: 600;
  font-size: 18px;
  margin: 40px 0px;
  display: flex;
  align-items: center;
}

.score-digit {
  font-size: 62px;
  font-weight: bolder;
  margin-left: 20px;
}

.button-back {
  background-color: blueviolet;
  border: none;
  padding: 15px;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}
</style>
