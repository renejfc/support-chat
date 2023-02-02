<script setup lang="ts">
defineProps<{
  message: string
}>()

const showTooltip = ref(false)
</script>

<template>
  <span class="tooltip-wrapper" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
    <slot />
    <span v-if="showTooltip" class="tooltiptext">
      {{ message }}
    </span>
  </span>
</template>

<style scoped lang="css">
.tooltip-wrapper {
  position: relative;
}

.tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip-wrapper:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
