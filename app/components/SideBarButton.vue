<script setup lang="ts">
const { label, icon, href, showLabel } = defineProps<{
  label: string;
  icon: string;
  href: string;
  showLabel: boolean;
}>();

const { path } = useRoute();
</script>

<template>
  <div
    class="tooltip-right"
    :data-tip="showLabel ? undefined : label"
    :class="{
      tooltip: !showLabel,
    }"
  >
    <NuxtLink
      :class="{
        'text-secondary': path === href,
        'justify-start': showLabel,
        'justify-center': !showLabel,
      }"
      class="flex gap-2 p-2 hover:bg-base-300 hover:cursor-pointer flex-nowrap"
      :to="href"
    >
      <Icon :name="icon" size="24" />
      <Transition name="grow">
        <span v-if="showLabel">
          {{ label }}
        </span>
      </Transition>
    </NuxtLink>
  </div>
</template>

<style scoped>
.grow-enter-active {
  animation: grow 0.2s;
}
.grow-leave-active {
  animation: grow 0.2s reverse;
}
@keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
