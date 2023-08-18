<script setup lang="ts"></script>

<template>
  <div class="bg-diagonal fixed top-0 z-[-1]"></div>
  <main class="container max-w-screen-lg py-10 px-2 md:px-8 lg:px-0">
    <slot></slot>
  </main>
</template>

<style scoped>
.bg-diagonal {
  width: 150vw;
  height: 30vh;
  background-image: linear-gradient(to bottom right, var(--purple-dark) 50%, transparent 50%);
}

@media (min-width: theme('screens.sm')) {
  .bg-diagonal {
    width: 100vw;
    height: 25vh;
  }
}
</style>
