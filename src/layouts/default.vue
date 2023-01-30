<template>
  <div class="default-wrapper">
    <main class="main-container">
      <slot />
    </main>
  </div>
</template>

<style scope lang="css">
  .default-wrapper {
    height: 100%;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    background-image: url('/bg-pattern.svg');
    background-color: var(--c-neutral-black);
  }

  .main-container {
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
</style>
