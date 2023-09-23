<template>
    <div class="w-screen h-100">
        <img src="../../../images/somerset_hero.webp" alt="" />
    </div>
    <Spacer />
    <DoubleColumnSection img-align="left" img-src="bedroom.jgp">
        <template #text-body>
            <div class="text-center max-w-[80%]">
                <div class="pb-3 text-4xl">Lorem ipsum</div>
                <div class="pb-6 text-lg">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                </div>
                <div class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex
                    ea commodo consequat.
                </div>
            </div>
        </template>
    </DoubleColumnSection>
    <Spacer />
    <DoubleColumnSection img-align="right" img-link="/resources/images/bedroom.jpg">
        <template #text-body>
            <div class="text-center max-w-[80%]">
                <div class="pb-3 text-4xl">Lorem ipsum</div>
                <div class="pb-6 text-lg">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                </div>
                <div class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex
                    ea commodo consequat.
                </div>
            </div>
        </template>
    </DoubleColumnSection>
</template>

<script setup>
import DoubleColumnSection from '../UI/Sections/DoubleColumnSection.vue';
import Spacer from '../UI/Sections/Spacer.vue';

</script>

<style lang="scss" scoped></style>
