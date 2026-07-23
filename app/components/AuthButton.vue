<script setup lang="ts">
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();
const loading = ref(false);

async function signIn() {
  loading.value = true;
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
  loading.value = false;
}
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
