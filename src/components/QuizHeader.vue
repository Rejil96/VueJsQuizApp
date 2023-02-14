<script setup>
const props = defineProps({ questionStatus: String, barPercentage: String });
</script>

<template>
  <header>
    <h1 class="header-question">Questions {{ props.questionStatus }}</h1>
    <div class="bar">
      <div class="completion" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bar {
  width: 300px;
  height: 40px;
  border: 1px solid #ed9e36;
}

.header-question {
  font-size: 38px;
  font-weight: bolder;
}

.completion {
  height: 100%;
  width: 0%;
  background-color: #ed9e36;
}
</style>
