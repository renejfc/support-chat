<script setup lang="ts">
const emit = defineEmits<{
  (e: 'send', content: string): void
}>()

const content = ref('')

function send() {
  emit('send', content.value)
  content.value = ''
}
</script>

<template>
  <div class="bar">
    <input v-model="content" type="text" class="bar__input" placeholder="Type your message...">
    <div class="bar__btn bar__btn--send">
      <CoreButton fluid radiusless borderless @click="send">
        send
        <Icon name="ri:send-plane-fill" />
      </CoreButton>
    </div>
  </div>
</template>

<style scoped lang="css">
.bar {
  height: 6rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
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
