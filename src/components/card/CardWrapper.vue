<script setup lang="ts"></script>

<template>
  <div class="bg-white shadow-md rounded">
    <header class="px-4 py-5">
      <slot></slot>
    </header>
    <main v-if="$slots.main" class="px-4 py-5 bg-gray-light rounded-b">
      <slot name="main"></slot>
    </main>
  </div>
</template>
