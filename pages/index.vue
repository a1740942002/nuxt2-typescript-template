<template>
  <div>
    <h1 class="bg-red-500">{{ count }}</h1>
    <button @click="handleClick">+1</button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0);
const handleClick = () => {
  count.value++;
};
</script>
