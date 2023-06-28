<template>
    <Navbar :links="navLinks" />
    <div class="bg-priory-cream">
        <router-view></router-view>
    </div>
</template>

<script setup>
// implement navbar
// implement home page
// implement section
// implement accommodation page
// implement see-and-do page
// implement booking page
// implement footer
import Navbar from './components/UI/Navigation/Navbar.vue';

const navLinks = [
    {
        title: 'Home',
        link: '/'
    }, {
        title: 'Accommodation',
        link: '/accommodation'
    }, {
        title: 'See & Do',
        link: '/see-and-do'
    }, {
        title: 'Booking',
        link: '/booking'
    },
]
</script>

<style lang="scss" scoped></style>
