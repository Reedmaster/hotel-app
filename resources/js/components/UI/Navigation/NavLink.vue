<template>
  <div class="pl-2.5 flex items-center">
    <router-link class="pr-2.5 font-cardo" :to="link">{{ title }}</router-link>
    <Icon icon="slash-icon" color="fill-priory-cream" class="w-4" />
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