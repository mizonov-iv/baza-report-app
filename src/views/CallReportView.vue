<template>
  <h1>Отчет по звонкам:</h1>
  <form class="form">

    <div class="input-field">
      <input
          class="login-input"
          type="number"
          v-model="appointed"
          required
      >
      <label class="login-input__placeholder">Назначено</label>
    </div>

    <div class="input-field">
      <input
          class="login-input"
          type="number"
          v-model="confirmed"
          @input="confirm"
          required
      >
      <label class="login-input__placeholder">Подтверждено</label>
    </div>

    <ul style="width: 100%" v-if="confirmed">
      <li v-for="(item, index) in confirmedArray" :key="index">
        <p>Время подтвержденной встречи:</p>
        <select class="select" v-model="selectedNumbers[item]">
          <option :value="option.time" v-for="option in timeOptions" :key="option.id">
            {{option.time}}
          </option>
        </select>
      </li>
    </ul>

    <button
        class="btn"
        @click.prevent="cnslog"
        :disabled="!confirmed || !selectedNumbers.length"
    >
      Отправить
    </button>

  </form>

</template>

<script setup lang="ts">

import {ref} from "vue"
import axios from "axios";

const appointed = ref()
const confirmed = ref()
const confirmedArray = ref([])
const selectedNumbers = ref([])

const confirm = () => {
  console.log(confirmed.value)
  confirmedArray.value = Array(confirmed.value).fill().map((e, i) => i + 1)
  console.log(confirmedArray.value)
}

const cnslog = () => {
  console.log(selectedNumbers.value)
  console.log({
    "Назначено: ": appointed.value,
    "Подтверждено: ": confirmed.value,
    "Время встреч: ": selectedNumbers.value
  })

  sendMessage()
}

const sendMessage = () => {

  const TOKEN = "7090072301:AAFZZHhY5SjBLOlud-efko5Z6GovjDWdyU0"
  const CHAT_ID = "-4248844229"
  const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`

  let message = `<b>Отчет по назначениям:</b>\n`
  message += `<b>Назначено: </b> ${appointed.value} \n`
  message += `<b>Подтверждено: </b> ${confirmed.value} \n`
  message += `<b>Время встреч: </b> ${selectedNumbers.value} \n`

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })

  appointed.value = ""
  confirmed.value = ""
}

const timeOptions = [
  {
    id: 1,
    time: "12:00"
  },
  {
    id: 2,
    time: "12:30"
  },
  {
    id: 3,
    time: "13:00"
  },
  {
    id: 4,
    time: "13:30"
  },
  {
    id: 5,
    time: "14:00"
  },
  {
    id: 6,
    time: "14:30"
  },
  {
    id: 7,
    time: "15:00"
  },
  {
    id: 8,
    time: "15:30"
  },
  {
    id: 9,
    time: "16:00"
  },
  {
    id: 10,
    time: "16:30"
  },
  {
    id: 11,
    time: "17:00"
  },
]

const addOption = (event) => {
  // console.log(event.target.value)
  time.push(event.target.value)
  console.log(time)
}

const time = []

</script>