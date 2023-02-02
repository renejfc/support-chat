<script setup lang="ts">
const auth = useAuthStore()
</script>

<template>
  <CoreArea background="messages.png">
    <div class="chat__container">
      <div class="logout_btn">
        <CoreButton variant="danger" radiusless borderless @click="auth.logout">
          log out
          <Icon name="ri:logout-box-r-fill" />
        </CoreButton>
      </div>
      <section class="chat__messages">
        <!-- asd -->
      </section>
      <section class="chat__bar">
        <ChatBar />
      </section>
    </div>
  </CoreArea>
</template>

<style lang="css">
.chat__container {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  backdrop-filter: saturate(1) blur(16px);
}

.logout_btn {
  align-self: center;
  width: fit-content;
}

.chat__messages {
  flex-grow: 1;
  overflow-y: auto;
}

.chat__bar {
  display: flex;
}

@media (max-width: 480px) {
  .chat__container {
    height: 100vh;
  }
}
</style>
