<script setup lang="ts">
import type { ISession } from '~/types/auth.interface'

const auth = useAuthStore()

const credentials = reactive<ISession>({
  username: null,
  password: null,
})

const shouldValidate = ref(false)

const isValidUsername = isValidField('username')
const isValidPassword = isValidField('password')

const loginError = auth.authError

async function login() {
  await auth.login({
    username: credentials.username,
    password: credentials.password,
  })
}

function onInput(field: 'username' | 'password', value: string) {
  credentials[field] = value
  shouldValidate.value = true
}

function isValidField(field: 'username' | 'password') {
  return computed(() => {
    if (!shouldValidate.value)
      return undefined
    return credentials[field] !== null && credentials[field]!.length > 3
  })
}
</script>

<template>
  <CoreArea background="support.png">
    <form class="form" @submit.prevent="login">
      <h1 class="form__title">
        Log in with your credentials to join the chat.
      </h1>
      <div class="form__inputs">
        <div class="form__fields">
          <CoreInput
            id="username"
            :valid="isValidUsername"
            :model-value="credentials.username"
            name="username"
            label="username"
            type="text"
            placeholder="Username"
            required
            @update:model-value="value => onInput('username', value)"
          >
            <template #icon>
              <Icon name="ri:user-fill" />
            </template>
          </CoreInput>
          <CoreInput
            id="password"
            :valid="isValidPassword"
            required
            :model-value="credentials.password"
            name="password"
            label="password"
            type="password"
            placeholder="Password"
            @update:model-value="value => onInput('password', value)"
          >
            <template #icon>
              <Icon name="ri:lock-fill" />
            </template>
          </CoreInput>
        </div>
        <div class="form__btn">
          <CoreButton :disabled="!(isValidPassword && isValidUsername)" fluid>
            <Icon name="ri:key-2-fill" class="key-icon" />
            LogIn
          </CoreButton>
        </div>
      </div>

      <p v-if="loginError.code" class="form__error">
        {{ loginError.message }}
      </p>
    </form>
  </CoreArea>
</template>

<style scoped lang="css">
  .form {
  gap: 4rem;
  min-width: 50%;
  height: 75%;
  display: flex;
  overflow: hidden;
  border-radius: 1rem;
  align-items: center;
  flex-direction: column;
  padding-top: 13rem;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: rgba(0, 0, 0, 0.25) 0rem 2.5rem 5rem -1.2rem;
}

.form__title {
  width: 80%;
  text-align: center;
  padding: 0 3rem 0 3rem;
  font-size: var(--font-size-lg);
}

.form__inputs {
  gap: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.form__fields {
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

.form__btn {
  width: 20rem;
  height: 5rem;
}

.form__error {
  width: 100%;
  text-align: center;
  color: var(--c-state-error);
  font-weight: var(--font-weight-bold);
  background-color: rgba(0, 0, 0, 0.2);

}

.key-icon {
  font-size: 2rem;
}

@media (max-width: 480px) {
  .form {
    height: 100%;
    box-shadow: none;
    gap: 8rem;
  }

  .form__fields {
    width: 90%;
  }
}
</style>
