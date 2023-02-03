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

const show = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 100)
})
</script>

<template>
  <li class="message" :class="[className, { animated: show }]">
    <span v-if="props.message.text">{{ props.message.text }}</span>
    <img v-if="props.message.url" :src="props.message.url" alt="image provided by chatbot">
  </li>
</template>

<style scoped lang="css">
.message {
  opacity: 0;
  margin: 1rem;
  padding: 1rem;
  max-width: 60%;
  text-overflow: clip;
  border-radius: 0.5rem;
  word-wrap: break-word;
  box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.25);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.message.animated {
  opacity: 1;
}

.message:hover {
  transform: translate(0, -2%);
  box-shadow: 0px 5px 10px -2px rgba(0,0,0,0.25);
}

.message--user {
  align-self: flex-end;
  transform: translate(5%, 2%) scale(0.95);
  background-color: var(--c-neutral-dark-gray);
}

.message--user.animated {
  transform: translate(0, 0) scale(1);
}

.message--bot {
  text-align: left;
  align-self: flex-start;
  transform: translate(-5%, 2%) scale(0.95);
  background-color: var(--c-neutral-black);
}

.message--bot.animated {
  transform: translate(0, 0) scale(1);
}
</style>
