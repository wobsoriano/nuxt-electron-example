<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch<{
  id: number
  title: string
  completed: boolean
}>('https://jsonplaceholder.typicode.com/todos/' + route.params.id)
</script>

<template>
  <div>
    <h1>Todo</h1>
    <p>ID: {{ data?.id }}</p>
    <p>title: {{ data?.title }}</p>
    <p>Completed: {{ data?.completed }}</p>
    <NuxtLink to="/">Back</NuxtLink>
  </div>
</template>
