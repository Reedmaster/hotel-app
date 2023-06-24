<template>
  <div class="text-red-500 text-3xl">Welcome page with vue!</div>
  <Navbar>
    <template v-slot:links>
      <router-link to="/">Home</router-link>
      <router-link to="/accommodation">Accommodation</router-link>
      <router-link to="/see-and-do">See & Do</router-link>
      <router-link to="/booking">Booking</router-link>
    </template>
  </Navbar>
  <router-view></router-view>
</template>

<script setup>
// implement navbar
// implement home page
// implement accommodation page
// implement see-and-do page
// implement booking page
// implement footer
import Navbar from './components/UI/Navigation/Navbar.vue';
</script>

<style lang="scss" scoped></style>
