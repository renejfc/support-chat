<script setup lang="ts">
import type { IBotMessage, IUserMessage } from '~/types/chat.interface'

const props = defineProps<{
  message: IUserMessage | IBotMessage
}>()

const className = computed(() => {
  if (props.message.from === 'user')
    return 'message--user'
  return 'message--bot'
})
</script>

<template>
  <li class="message" :class="className">
    <span v-if="props.message.text">{{ props.message.text }}</span>
    <img v-if="props.message.url" :src="props.message.url" alt="image provided by chatbot">
  </li>
</template>

<style scoped lang="css">
.message {
  margin: 1rem;
  padding: 1rem;
  max-width: 60%;
  text-overflow: clip;
  border-radius: 0.5rem;
  word-wrap: break-word;
}

.message--user {
  text-align: right;
  align-self: flex-end;
  background-color: var(--c-neutral-dark-gray);
}

.message--bot {
  text-align: left;
  align-self: flex-start;
  background-color: var(--c-neutral-black);
}
</style>
