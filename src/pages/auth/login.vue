<script setup lang="ts">
import type { ISession } from '~~/src/types/auth.interface'

const auth = useAuthStore()

const credentials = reactive<ISession>({
  username: null,
  password: null,
})

async function login() {
  await auth.login({
    username: credentials.username,
    password: credentials.password,
  })
}
</script>

<template>
  <CoreArea>
    <form class="form" @submit.prevent="login">
      <h1 class="form__title">
        Log in with your credentials to join the chat.
      </h1>
      <div class="form__inputs">
        <CoreInput
          id="username"
          :model-value="credentials.username"
          name="username"
          label="username"
          type="text"
          placeholder="Username"
          @update:model-value="newValue => credentials.username = newValue"
        >
          <template #icon>
            <Icon name="ri:user-fill" />
          </template>
        </CoreInput>
        <CoreInput
          id="password"
          :model-value="credentials.password"
          name="password"
          label="password"
          type="password"
          placeholder="Password"
          @update:model-value="newValue => credentials.password = newValue"
        >
          <template #icon>
            <Icon name="ri:lock-fill" />
          </template>
        </CoreInput>
      </div>

      <div class="pad-x">
        <CoreButton fluid>
          <Icon name="ri:key-2-fill" class="key-icon" />
          LogIn
        </CoreButton>
      </div>
    </form>
  </CoreArea>
</template>

<style scoped lang="css">
  .form {
  gap: 4rem;
  width: 50%;
  height: 75%;
  display: flex;
  overflow: hidden;
  border-radius: 1rem;
  align-items: center;
  flex-direction: column;
  padding-top: 13rem;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0rem 2.5rem 5rem -1.2rem;
}

.form__title {
  font-size: var(--font-size-md);
  text-align: center;
  padding: 0 3rem 0 3rem;
}

.form__inputs {
  gap: 1rem;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

.pad-x {
  width: 100%;
  padding: 0 10rem 0 10rem;
}

.key-icon {
  font-size: 2rem;
}

@media (max-width: 480px) {
  .form {
    height: 100%;
    box-shadow: none;
  }
}
</style>
