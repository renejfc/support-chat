<script setup lang="ts">
defineProps<{
  fluid?: boolean
}>()
</script>

<template>
  <button
    class="btn"
    :class="{ 'btn--fluid': fluid }"
  >
    <slot />
  </button>
</template>

<style scoped lang="css">
.btn {
  gap: 0.5rem;
  display: flex;
  overflow: hidden;
  padding: 1rem 2rem;
  align-items: center;
  border-radius: 0.5rem;
  vertical-align: center;
  justify-content: center;
  text-transform: uppercase;
  color: var(--c-neutral-gray);
  transition: background-color 0.3s;
  background-color: var(--c-neutral-black);
  border: 0.1rem solid var(--c-neutral-dark-gray);
}

.btn--fluid {
  width: 100%;
}

.btn:hover,
.btn:focus,
.btn:active {
  background-color: var(--c-neutral-dark-gray);
}
</style>
