<script setup lang="ts"></script>

<template>
  <div class="bg-white shadow-md rounded">
    <header class="px-4 py-2 h-20">
      <div class="flex items-center h-full">
        <div class="flex-1">
          <slot></slot>
        </div>
        <main v-if="$slots.action" class="h-full">
          <slot name="action"></slot>
        </main>
      </div>
    </header>
    <main v-if="$slots.main" class="px-4 py-5 bg-gray-light rounded-b">
      <slot name="main"></slot>
    </main>
  </div>
</template>
