<template>
  <div class="modal-bg">
    <div class="modal-wrapper">
      <button class="modal-close-btn" @click="$emit('closePopup')">&#10006;</button>
      <p>Отчет отправлен</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>