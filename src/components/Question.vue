<template>
  <div class="question-container">
    <p class="question">What is the chemical of the salt</p>
    <ul class="options-wrapper">
      <li class="option-panel">
        <p class="option-label-head">A</p>
        <p class="option-label-body">Ncal</p>
      </li>
      <li class="option-panel">
        <p class="option-label-head">B</p>
        <p class="option-label-body">Ncal</p>
      </li>
      <li class="option-panel">
        <p class="option-label-head">C</p>
        <p class="option-label-body">Ncal</p>
      </li>
      <li class="option-panel">
        <p class="option-label-head">D</p>
        <p class="option-label-body">Ncal</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.question-container {
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.question {
  font-size: 28px;
  font-weight: bolder;
  align-items: flex-start;
}

.options-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style: none;
}

.option-panel {
  width: 80%;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #ebdef0;
  margin-top: 20px;
}

.option-label-head {
  background-color: bisque;
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  margin-right: 20px;
}
</style>
