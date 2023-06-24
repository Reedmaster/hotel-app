<template>
  <div class="h-16 bg-priory-red flex justify-between text-priory-cream">
    <div class="text-2xl">
      The Old Priory
    </div>
    <div class="flex justify-between">
      <NavLink v-for="link in links" :title="link.title" :link="link.link"></NavLink>
    </div>
  </div>
</template>

<script setup>
import NavLink from "./NavLink.vue";
defineProps({
  links: {
    type: Array,
    required: true,
  }
})
</script>

<style lang="scss" scoped>

</style>