<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "sunset";
  },
  set(value) {
    colorMode.preference = value ? "sunset" : "emerald";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <input v-model="isDark" type="checkbox">

    <Icon
      class="swap-on"
      name="pixelarticons:sun-alt"
      size="24"
    />
    <Icon
      class="swap-off"
      name="pixelarticons:moon"
      size="24"
    />
  </label>
</template>
