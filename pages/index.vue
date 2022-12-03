<script setup lang="ts">
onMounted(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
</script>

<template>
  <div>
    <div>Hello from index</div>
    <NuxtLink to="/hello">Hello</NuxtLink>
  </div>
</template>
