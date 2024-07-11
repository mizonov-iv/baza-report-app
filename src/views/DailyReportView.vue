<template>
  <h1>Отчет за день:</h1>

  <form class="form">

    <label>Проведено:</label>
    <input
        class="form-input"
        type="number"
        placeholder="Проведено"
        v-model="meetings"
        @input="handleMeetingsInput"
    >

    <ul v-show="meetings">
      <li v-for="(item, index) in meetingsArray" :key="index">
        <input type="text" v-model="selectedMeetings[index]">
      </li>
    </ul>

    <button
        class="btn"
        @click.prevent="handeBtn"
        :disabled="!meetings || selectedMeetings.length !== meetings"
    >
      Далее
    </button>

    <label>Заведенный объем:</label>
    <input
        class="form-input"
        type="number"
        placeholder="Заведенный объем:"
    >

    <button
        class="btn"
        @click.prevent=""
    >
      Далее
    </button>

    <label>РКО:</label>
    <input
        class="form-input"
        type="number"
        placeholder="Заведенный объем:"
    >

    <button
        class="btn"
        @click.prevent=""
    >
      Далее
    </button>

  </form>

</template>

<script setup>

import {ref} from "vue";

const meetings = ref()
const meetingsArray = ref([])
const selectedMeetings = ref([])

const handleMeetingsInput = () => {
  meetingsArray.value = Array(meetings.value).fill().map((e, i) => i + 1)
  console.log(meetingsArray.value)
}

const handeBtn = () => {
  console.log(selectedMeetings.value)
}

</script>