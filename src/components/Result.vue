<script setup>
const props = defineProps({ score: Number });
</script>

<template>
  <div class="container">
    <h1 class="result-heading">Result</h1>
    <p class="result-info=text">Your Score is {{ props.score * 5 }}/ 15</p>
  </div>
</template>
