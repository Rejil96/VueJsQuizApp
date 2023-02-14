<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <div class="bg-container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bg-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
</style>
