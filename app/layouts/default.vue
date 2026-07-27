<script setup lang="ts">
// I don't exactly understand this part and also do not get the desired SSR results like in the crash course so I might need to be looking into this more
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main>
      <slot />
    </main>
  </div>
</template>
