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
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  padding: 1rem 2rem;
  align-items: center;
  border-radius: 0.5rem;
  vertical-align: center;
  justify-content: center;
  text-transform: uppercase;
  color: var(--c-neutral-gray);
  transition: all 0.3s ease-in;
  transition: background-color 0.3s;
  background-color: var(--c-neutral-black);
  border: 0.1rem solid var(--c-neutral-dark-gray);
}

.btn--fluid {
  width: 100%;
}

.btn:disabled {
  opacity: 0.9;
  pointer-events: none;
}

.btn:focus {
  outline: var(--c-neutral-gray) solid 2px;
  outline-offset: 2px;
}

.btn:hover {
  background-color: var(--c-neutral-dark-gray);
}

.btn:active {
  background-color: var(--c-neutral-black);
  transform: translateY(0.2rem) translateX(0.2rem);
}
</style>
