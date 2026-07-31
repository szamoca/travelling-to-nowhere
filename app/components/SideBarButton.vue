<script setup lang="ts">
const props = defineProps<{
  label: string;
  icon: string;
  href: string;
  showLabel: boolean;
}>();

const route = useRoute();
</script>

<template>
  <div
    class="tooltip-right"
    :data-tip="props.showLabel ? undefined : label"
    :class="{
      tooltip: !props.showLabel,
    }"
  >
    <NuxtLink
      :class="{
        'text-secondary': route.path === href,
        'justify-start': props.showLabel,
        'justify-center': !props.showLabel,
      }"
      class="flex gap-2 p-2 hover:bg-base-300 hover:cursor-pointer flex-nowrap"
      :to="props.href"
    >
      <Icon :name="props.icon" size="24" />
      <Transition name="grow">
        <span v-if="props.showLabel">
          {{ props.label }}
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
