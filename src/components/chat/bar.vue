<script setup lang="ts">
const chat = useChatStore()

const message = ref('')

function send() {
  chat.sendMessage({
    type: 'text',
    text: message.value,
    from: 'user',
  })

  message.value = ''
}
</script>

<template>
  <form class="bar" @submit.prevent="send">
    <input v-model="message" type="text" class="bar__input" placeholder="Type your message...">
    <div class="bar__btn bar__btn--send">
      <CoreButton fluid radiusless borderless>
        send
        <Icon name="ri:send-plane-fill" />
      </CoreButton>
    </div>
  </form>
</template>

<style scoped lang="css">
.bar {
  height: 6rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.bar__input {
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0 1rem;
  background-color: #3b4148;
  color: var(--c-neutral-gray);
  font-size: var(--font-size-md);
  border: 0.1rem solid var(--c-neutral-dark-gray);
  box-shadow: 0 0.5rem 1rem -0.5rem rgba(0, 0, 0, 0.25);
}

.bar__btn {
  height: 100%;
}
</style>
