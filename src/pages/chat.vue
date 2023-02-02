<script setup lang="ts">
const auth = useAuthStore()

const messages = reactive([
  { content: 'Hello! Is everything alright?', isSender: false },
])

const chatListEl = ref<HTMLUListElement>()

onMounted(() => {
  if (chatListEl.value)
    chatListEl.value.scrollTop = chatListEl.value?.scrollHeight
})

function sendMessage(content: string) {
  if (content.trim() === '')
    return

  messages.push({ content, isSender: true })
}
</script>

<template>
  <CoreArea background="messages.png">
    <section class="chat__container">
      <div class="logout__btn">
        <CoreButton variant="danger" radiusless borderless @click="auth.logout">
          <Icon name="ri:logout-box-fill" />
          log out
        </CoreButton>
      </div>
      <ul ref="chatListEl" class="chat__messages">
        <ChatMessage v-for="(message, index) in messages" :key="index" :content="message.content" :is-sender="message.isSender" />
      </ul>
      <section class="chat__bar">
        <ChatBar @send="sendMessage" />
      </section>
    </section>
  </CoreArea>
</template>

<style lang="css">
.chat__container {
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: column;
  justify-content: flex-end;
  backdrop-filter: saturate(1) blur(16px);
}

.logout__btn {
  top: 0;
  position: fixed;
  overflow: hidden;
  border-bottom-right-radius: 10rem;
}

.chat__messages {
  display: flex;
  overflow-y: auto;
  padding-bottom: 3rem;
  list-style-type: none;
  flex-direction: column;
}

@media (max-width: 480px) {
  .chat__container {
    height: 100vh;
  }
}
</style>
