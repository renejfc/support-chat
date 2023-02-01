<script setup lang="ts">
defineProps<{
  id: string
  type: string
  name: string
  label: string
  valid?: boolean
  required?: boolean
  placeholder?: string
  modelValue: string | null
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="form__field">
    <label class="input__label" :for="id">
      <span class="icon">
        <slot name="icon" />
      </span>
      <span class="hidden">{{ label }}</span>
    </label>
    <input
      :id="id"
      :type="type"
      :name="name"
      class="form__input"
      :class="{
        'form__input--invalid': !valid && valid !== undefined,
        'form__input--valid': valid,
      }"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>

<style scoped lang="css">
.form__field {
  display: flex;
}

.icon,
.form__input {
  padding: 1.5rem;
}

.icon {
  display: grid;
  place-content: center;
  color: var(--c-neutral-light-gray);
}

.form__input {
  border-style: solid;
  transition: all 0.3s ease;
  border-top-left-radius: 0;
  border-bottom-width : 0.1rem;
  background-color: #3b4148;
  color: var(--c-neutral-gray);
  border-radius: 0 1rem 1rem 0;
  border-bottom-left-radius: 0;
  border-color: var(--c-neutral-dark-gray);
}

.form__input--invalid {
  border-color: var(--c-state-error);
}

.form__input--valid {
  border-color: var(--c-state-success);
}

.form__input:focus,
.form__input:active,
.form__input:hover {
  background-color: #434a52;
}

.input__label {
  background-color: #363b41;
}

.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  visibility: hidden;
}
</style>
