<template>
  <div class="flex h-16 justify-between pr-10 pl-10 bg-priory-red text-priory-cream">
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