<script setup lang="ts">
useHead({
  title: 'Chatbot Support',
  meta: [
    {
      name: 'description', content: 'App to receive asistance from a chatbot.',
    },
  ],
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/robot-icon.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in',
      }"
    />
  </NuxtLayout>
</template>
