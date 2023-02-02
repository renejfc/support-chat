<template>
  <main class="default-wrapper">
    <slot />
  </main>
</template>

<style scope lang="css">
  .default-wrapper {
    height: 100vh;
    flex-grow: 1;
    display: flex;
    overflow-x: hidden;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--c-neutral-black);
    background-image: url('/bg-pattern.svg');
  }
</style>
