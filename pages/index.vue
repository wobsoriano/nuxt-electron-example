<script setup lang="ts">
const { data } = await useFetch<{
  id: number
  title: string
  completed: boolean
}[]>('https://jsonplaceholder.typicode.com/todos')
</script>

<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <li v-for="t in data" :key="t.id">
        <NuxtLink :to="`/todo/${t.id}`">
          {{ t.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
