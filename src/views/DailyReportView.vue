<template>
  <h3>Отчет за день: {{managersStore.selectedManager}}</h3>
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

<!--    <ul v-show="meetings">-->
<!--      <li class="input-field" v-for="(item, index) in meetingsArray" :key="index">-->
<!--        <p>Какой объем, когда ответ?</p>-->
<!--        <input class="login-input" type="text" v-model="selectedMeetings[index]">-->
<!--      </li>-->
<!--    </ul>-->

    <ul style="width: 100%" v-show="meetings">
      <li class="input-field" v-for="(item, index) in meetingsArray" :key="index">
        <div class="input-field">
          <input
              class="login-input"
              type="text"
              v-model="selectedMeetings[index]"
              required
          >
          <label class="login-input__placeholder">Результат встречи:</label>
        </div>
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
        :disabled="selectedMeetings.length !== meetings"
    >
      Отправить
    </button>

    <button
        class="btn"
        @click.prevent="goBack"
    >
      Назад
    </button>
  </form>
  <Modal v-show="showModal" @closePopup="closePopup"></Modal>
</template>

<script setup>
import {ref} from "vue";
import Modal from "../components/Modal.vue"
import { useRouter } from 'vue-router'
import axios from "axios";
import {useManagersStore} from "../stores/managersStore";

const router = useRouter()
const managersStore = useManagersStore()

const appointed = ref()
const appointedAfter = ref()
const meetings = ref()
const volume = ref()
const rko = ref()

const meetingsArray = ref([])
const selectedMeetings = ref([])

const showModal = ref(false)

const goBack = () => {
  router.push("/")
}

const closePopup = () => {
  showModal.value = false
  router.push("/")
}

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

  sendMessage()
  showModal.value = true
}

const sendMessage = () => {

  const TOKEN = "7090072301:AAFZZHhY5SjBLOlud-efko5Z6GovjDWdyU0"
  // const CHAT_ID = "-4200712551" --> test bot id
  const CHAT_ID = "-1002209146359"
  const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`

  let message = `<b>Отчет за день: </b>${managersStore.selectedManager} \n`
  message += `<b>Назначено в ГЧ: </b>${appointed.value} \n`
  message += `<b>Назначено после ГЧ: </b>${appointedAfter.value} \n`
  message += `<b>Проведено: </b>${meetings.value} \n`
  message += `${selectedMeetings.value} \n`
  message += `<b>Заведено: </b>${volume.value} \n`
  message += `<b>Заявок РКО: </b>${rko.value} \n`

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })

  appointed.value = ""
  appointedAfter.value = ""
  selectedMeetings.value
  volume.value = ""
  rko.value = ""
}
</script>