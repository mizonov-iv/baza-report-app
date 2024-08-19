<template>
  <h3>Полезные ссылки</h3>
  <ul class="link-list">
    <li class="link-list-item" v-for="item in linksArray" :key="item.id">
      {{item.name}}
      <p>{{item.text}}</p>
    </li>
  </ul>
</template>

<script setup>

const linksArray = [
  {
    id: 0,
    name: "item 1",
    text: "some text"
  },
  {
    id: 1,
    name: "item 2",
    text: "some text"
  },
  {
    id: 2,
    name: "item 3",
    text: "some text"
  },
]
</script>