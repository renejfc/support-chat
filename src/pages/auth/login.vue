<template>
  <section class="login-section">
    <LoginForm />
  </section>
</template>

<style scoped lang="css">
  .login-section {
    width: 80rem;
    display: grid;
    place-items: center;
    height: 80rem;
    border-radius: 3rem;
    background-size: 150%;
    background-position: center;
    background-color: #2c3338;
    background-repeat: no-repeat;
    background-blend-mode: soft-light;
    background-image: url('/support.png');
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }

  @media (max-width: 480px) {
    .login-section {
      background-size: 100%;
      border-radius: 0;
    }
  }
</style>
