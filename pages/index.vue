<template lang="pug">
div
  Hello
  h2  {{count}}
  button(@click="handleClick") +1

</template>

<script setup lang="ts">
const count = ref(0)
const handleClick = () => {
  count.value++
}
</script>

<style lang="sass" scoped>
h1
  @apply bg-red-500
</style>
