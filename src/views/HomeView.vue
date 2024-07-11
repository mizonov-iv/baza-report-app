<template>
  <form class="form" v-if="!showOptions">
    <select class="select" v-model="selectedPerson">
      <option class="select__option" value="" selected>Выберите имя</option>
      <option class="select__option" :value="employee.name" v-for="employee in staff" :key="employee.id">
        {{employee.name}}
      </option>
    </select>
    <button class="btn" @click="showOptions = true">Далее</button>
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

const selectedPerson = ref("")
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
    name: "Данила Г."
  },
]

const showOptions = ref(false)
</script>