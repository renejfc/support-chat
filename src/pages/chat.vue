<script setup lang="ts">
const auth = useAuthStore()
</script>

<template>
  <CoreArea>
    <h1 @click="auth.logout">Chat</h1>
  </CoreArea>
</template>
