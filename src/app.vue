<template>
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss">
@import '@/styles/mixins.scss';

html, body, #app {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    @include fill-parent();
    background-color: black;
}
</style>
