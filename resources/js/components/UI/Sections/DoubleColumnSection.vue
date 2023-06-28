<template>
    <Wrapper>
        <div class="flex" :class="{
            'flex-row': imgAlign === 'left',
            'flex-row-reverse': imgAlign === 'right',
        }">
            <div class="flex-1">
                <img src="../../../../images/bedroom.jpg" alt="">
            </div>
            <div class="flex-1 flex flex-col justify-center" :class="{
                'items-end': imgAlign === 'left',
                'items-start': imgAlign === 'right',
            }">
                <slot name="text-body"></slot>
            </div>
        </div>
    </Wrapper>
</template>

<script setup>
import Wrapper from './Wrapper.vue';

defineProps({
    img: {
        type: String,
    },
    imgAlign: {
        type: String,
        validator(value) {
            return ['left', 'right'].includes(value);
        }
    }
})
</script>

<style lang="scss" scoped></style>
