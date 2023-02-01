<template>
  <main class="default-wrapper">
    <slot />
  </main>
</template>

<style scope lang="css">
  .default-wrapper {
    height: 100%;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    background-image: url('/bg-pattern.svg');
    background-color: var(--c-neutral-black);
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
</style>
