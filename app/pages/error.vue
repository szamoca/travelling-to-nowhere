<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An unknown error occurred.";
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-6">
    <div role="alert" class="alert alert-error min-w-1/2">
      <Icon name="pixelarticons:alert" size="64" />
      <span>Oh no! Task failed successfully: {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-primary">
      Home
      <Icon name="pixelarticons:arrow-bar-left" size="24" />
    </NuxtLink>
  </div>
</template>
