<script setup lang="ts"></script>

<template>
  <li>
    <div class="px-4 py-5 flex items-center">
      <div class="flex-1">
        <slot></slot>
      </div>
      <main v-if="$slots.action" class="ml-3">
        <slot name="action"></slot>
      </main>
    </div>
  </li>
</template>
