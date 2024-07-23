<template>
  <h1>Отчет за день:</h1>
  <form class="form">
    <!--НАЗНАЧЕНО В ГЧ:-->
    <div class="input-field">
      <input
          class="login-input"
          type="number"
          v-model="appointed"
          required
      >
      <label class="login-input__placeholder">Назначено в ГЧ:</label>
    </div>

    <!--НАЗНАЧЕНО ПОСЛЕ ГЧ:-->
    <div class="input-field">
      <input
          class="login-input"
          type="number"
          v-model="appointedAfter"
          required
      >
      <label class="login-input__placeholder">Назначено после ГЧ:</label>
    </div>

    <!--ПРОВЕДЕО-->
    <div class="input-field">
      <input
          class="login-input"
          type="number"
          v-model="meetings"
          @input="handleMeetingsInput"
          required
      >
      <label class="login-input__placeholder">Проведено:</label>
    </div>

    <ul v-show="meetings">
      <li v-for="(item, index) in meetingsArray" :key="index">
        <input type="text" v-model="selectedMeetings[index]">
      </li>
    </ul>

    <!--ЗВАЕДЕНО-->
    <div class="input-field">
      <input
          class="login-input"
          type="number"
          v-model="volume"
          required
      >
      <label class="login-input__placeholder">Заведено:</label>
    </div>

    <!--ЗАЯВОК РКО-->
    <div class="input-field">
      <input
          class="login-input"
          type="number"
          v-model="rko"
          required
      >
      <label class="login-input__placeholder">Заявок РКО:</label>
    </div>

    <button
        class="btn"
        @click.prevent="handeBtn"
        :disabled="!meetings || selectedMeetings.length !== meetings"
    >
      Далее
    </button>
  </form>
</template>

<script setup>

import {ref} from "vue";

const appointed = ref()
const appointedAfter = ref()
const meetings = ref()
const volume = ref()
const rko = ref()

const meetingsArray = ref([])
const selectedMeetings = ref([])

const handleMeetingsInput = () => {
  meetingsArray.value = Array(meetings.value).fill().map((e, i) => i + 1)
  console.log(meetingsArray.value)
}

const handeBtn = () => {
  console.log("Назначено в ГЧ: ", appointed.value)
  console.log("Назначено после ГЧ: ", appointedAfter.value)
  console.log("Проведено: ", selectedMeetings.value)
  console.log("Заведено: ", volume.value)
  console.log("Заявок РКО: ", rko.value)
}
</script>