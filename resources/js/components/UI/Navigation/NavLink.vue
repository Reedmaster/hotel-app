<template>
  <div class="p-5">
    <router-link :to="link">{{ title }}</router-link>
    <Icon icon="slash-icon" color="fill-priory-cream" />
  </div>
</template>

<script setup>
import Icon from "../Icons/Icon.vue";

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