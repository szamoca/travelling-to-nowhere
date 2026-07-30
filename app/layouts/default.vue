<script setup lang="ts">
// I don't exactly understand this part and also do not get the desired SSR results like in the crash course
// Therefore I might need to be looking into this more
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
  </div>
</template>
