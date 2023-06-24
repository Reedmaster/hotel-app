<template>
  <div class="p-5">
    <router-link :to="link">{{ title }}</router-link>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
})
</script>

<style lang="scss" scoped>

</style>