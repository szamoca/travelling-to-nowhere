<script setup lang="ts">
const { label, icon } = defineProps<{
  label: string;
  icon: string;
  href: string;
}>();

const { path } = useRoute();
</script>

<template>
  <NuxtLink
    :class="{ 'text-secondary': path === href }"
    class="flex justify-start gap-2 p-2 hover:bg-base-300 hover:cursor-pointer"
    :to="href"
  >
    <Icon :name="icon" size="24" />
    {{ label }}
  </NuxtLink>
</template>
