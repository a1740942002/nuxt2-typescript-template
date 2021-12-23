<template lang="pug">
div
  h1 Hello Nuxt.js

</template>

<script setup lang="ts">
const count = ref(0);
const handleClick = () => {
  count.value++;
};
</script>

<style lang="sass" scoped>
h1
  background-color: red
</style>
