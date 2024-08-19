<template>
  <h3>Полезные ссылки</h3>
  <ul>
    <li v-for="item in linksArray" :key="item.id">
      {{item.name}}
    </li>
  </ul>
</template>

<script setup>

const linksArray = [
  {
    id: 0,
    name: "item 1"
  },
  {
    id: 1,
    name: "item 2"
  },
  {
    id: 2,
    name: "item 3"
  },
]
</script>