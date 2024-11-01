<template>
  <p style="text-align: center; font-size: 18px">{{managersStore.selectedManager}}</p>
  <form class="form" v-if="!showOptions">
    <select class="select" v-model="managersStore.selectedManager">
      <option class="select__option" value="" selected>Выберите имя</option>
      <option class="select__option" :value="employee.name" v-for="employee in staff" :key="employee.id">
        {{employee.name}}
      </option>
    </select>
    <button
        class="btn"
        @click="showOptions = true"
        :disabled="!managersStore.selectedManager"
    >
      Далее
    </button>
  </form>

  <ul class="options-list" v-else>
    <li v-for="option in options" :key="option.id">
      <router-link class="list-item" :to="option.link">
        {{option.name}}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import {ref} from "vue"
import {useManagersStore} from "../stores/managersStore";

const managersStore = useManagersStore()
const showOptions = ref(false)
// const managersStore.selectedManager = ref("")
const options = [
  {
    id: 1,
    name: "Отчет за ГЧ",
    link: "/call-report"
  },
  {
    id: 2,
    name: "Отчет за день",
    link: "/daily-report"
  },
  {
    id: 3,
    name: "Рассчет ЗП",
    link: "/salary-count"
  },
  // {
  //   id: 4,
  //   name: "Полезные ссылки",
  //   link: "/useful-links"
  // },
]
const staff = [
  {
    id: 1,
    name: "Григорий Б."
  },
  {
    id: 2,
    name: "Наталия К."
  },
  {
    id: 3,
    name: "Анастасия М."
  },
  {
    id: 4,
    name: "Кристина А."
  },
  {
    id: 5,
    name: "Анастасия Ч."
  },
]
</script>