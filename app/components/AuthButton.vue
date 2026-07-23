<script setup lang="ts">
const { loading, signIn } = useAuthStore();
</script>

<template>
  <button
    class="btn btn-accent"
    :disabled="loading"
    @click="signIn"
  >
    Sign in with GitHub
    <span v-if="loading" class="loading loading-dots loading-sm" />
    <Icon
      v-else
      name="pixelarticons:github"
      size="24"
    />
  </button>
</template>
