<template>
  <component
      v-if="icon"
      :is="iconList[icon]"
      :color="color"
  ></component>
</template>

<script setup>
import SlashIcon from "./components/SlashIcon.vue";

defineProps({
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
});

const iconList = {
  'slash-icon': SlashIcon
}
</script>

<style lang="scss" scoped>

</style>