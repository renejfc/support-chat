<script setup lang="ts">
const props = defineProps<{
  background?: string
}>()

const bgUrlProp = ref(`url('/${props.background}')`)
</script>

<template>
  <section class="area">
    <slot />
  </section>
</template>

<style scoped lang="css">
.area {
  width: 100%;
  display: flex;
  height: 80rem;
  max-width: 80rem;
  border-radius: 3rem;
  overflow-y: hidden;
  align-items: center;
  background-size: 150%;
  flex-direction: column;
  justify-content: center;
  background-position: center;
  background-color: #2c3338;
  background-repeat: no-repeat;
  background-blend-mode: soft-light;
  background-image: v-bind(bgUrlProp);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

@media (max-width: 768px) {
  .area {
    background-size: 200%;
    border-radius: 0;
  }
}
</style>
