<script setup lang="ts">
withDefaults(defineProps<{
  fluid?: boolean
  variant?: 'primary' | 'danger'
  radiusless?: boolean
  borderless?: boolean
}>(), {
  fluid: false,
  variant: 'primary',
  radiusless: false,
  borderless: false,
})
</script>

<template>
  <button
    class="btn"
    :class="{
      'btn--primary': variant === 'primary',
      'btn--danger': variant === 'danger',
      'btn--fluid': fluid,
      'btn--radiusless': radiusless,
      'btn--borderless': borderless,
    }"
  >
    <slot />
  </button>
</template>

<style scoped lang="css">
/* Base */
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
  transition: all 0.3s ease-in;
  font-size: var(--font-size-base);
  transition: background-color 0.3s;
  border: 0.1rem solid var(--c-neutral-dark-gray);
}

.btn--fluid {
  width: 100%;
  height: 100%;
}

.btn--radiusless {
  border-radius: 0;
}

.btn--borderless {
  border: none;
}

.btn:focus {
  outline: var(--c-neutral-gray) solid 2px;
  outline-offset: 2px;
}

/* Variant: primary */
.btn--primary {
  color: var(--c-neutral-gray);
  background-color: var(--c-neutral-black);
}

.btn--primary:disabled {
  opacity: 0.9;
  pointer-events: none;
}

.btn--primary:hover {
  background-color: var(--c-neutral-dark-gray);
}

.btn--primary:active {
  background-color: var(--c-neutral-black);
  transform: translateY(0.2rem) translateX(0.2rem);
}

/* Variant: danger */
.btn--danger {
  color: var(--c-neutral-gray);
  background-color: var(--c-state-error);
}
</style>
