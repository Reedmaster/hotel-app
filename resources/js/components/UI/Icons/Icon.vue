<template>
  <component
      v-if="icon"
      :is="iconList[icon]"
      :color="color"
      :width="width"
      :height="height"
  ></component>
</template>

<script setup>
import SlashIcon from "./components/SlashIcon.vue";
import ArrowRightIcon from "./components/ArrowRightIcon.vue";

defineProps({
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
  width: {
    type: String,
    default: '40px',
  },
  height: {
    type: String,
    default: '40px',
  },
});

const iconList = {
  'slash-icon': SlashIcon,
  'arrow-right-icon': ArrowRightIcon,
}
</script>

<style lang="scss" scoped>

</style>