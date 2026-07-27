<script setup lang="ts">
const authStore = useAuthStore();

onMounted(() => {
  authStore.signOut();
});
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-6">
    <span class="loading loading-dots loading-xl" />
  </div>
</template>
