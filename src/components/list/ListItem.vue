<script setup lang="ts"></script>

<template>
  <li>
    <div class="px-4 py-5 flex items-center h-full">
      <div class="flex-1">
        <slot></slot>
      </div>
      <main v-if="$slots.action" class="h-full">
        <slot name="action"></slot>
      </main>
    </div>
  </li>
</template>
