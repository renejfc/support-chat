<script setup lang="ts">
const props = withDefaults(defineProps<{
  content: string
  isSender: boolean
}>(), {
  isSender: false,
})

const className = computed(() => props.isSender ? 'message--sender' : 'message--other')
</script>

<template>
  <li class="message" :class="className">
    {{ content }}
  </li>
</template>

<style>
.message {
  margin: 1rem;
  padding: 1rem;
  max-width: 60%;
  text-overflow: clip;
  border-radius: 0.5rem;
  word-wrap: break-word;
}

.message--sender {
  text-align: left;
  align-self: flex-end;
  background-color: var(--c-neutral-dark-gray);
}

.message--other {
  text-align: right;
  align-self: flex-start;
  background-color: var(--c-neutral-black);
}
</style>
