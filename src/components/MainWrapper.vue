<script setup lang="ts"></script>

<template>
  <div class="bg-diagonal">
    <main class="container py-10">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.bg-diagonal {
  width: 100vw;
  height: 33vh;
  background-image: linear-gradient(to bottom right, var(--purple) 50%, transparent 50%);
}
</style>
