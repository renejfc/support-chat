<script setup lang="ts">
const chatListEl = ref<HTMLUListElement>()
const scroll = useScroll(chatListEl)

const auth = useAuthStore()
const chat = useChatStore()

watch(chat.messages, () => {
  if (chatListEl.value?.scrollHeight)
    scroll.scrollToY('bottom')
})

onMounted(() => {
  chat.getWelcomeMessage()
  if (chatListEl.value?.scrollHeight)
    scroll.scrollToY(chatListEl.value.scrollHeight)
})
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
        <ChatMessage v-for="(message, index) in chat.messages" :key="index" :message="message" />
      </ul>
      <section class="chat__bar">
        <ChatBar @send="chat.sendMessage" />
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
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 0.5rem;
  background-color: var(--c-neutral-gray);
}

::-webkit-scrollbar-thumb {
  background-color: var(--c-neutral-black);
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--c-neutral-dark-gray);
}

@media (max-width: 480px) {
  .chat__container {
    height: 100vh;
  }
}
</style>
