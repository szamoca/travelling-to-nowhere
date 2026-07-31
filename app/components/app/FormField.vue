<script setup lang="ts">
const props = defineProps<{
  label: string;
  name: string;
  type: "text" | "textarea" | "number";
  disabled?: boolean;
  error?: string;
}>();
</script>

<template>
  <fieldset class="fieldset">
    <label class="label" for="name">{{ props.label }}</label>
    <Field
      :as="props.type === 'textarea' ? 'textarea' : 'input'"
      :name="props.name"
      :type="props.type"
      :disabled="props.disabled"
      class="w-full"
      :class="{
        'input': props.type === 'text' || props.type === 'number',
        'textarea': props.type === 'textarea',
        'input-error': props.error,
      }"
    />
    <p v-if="props.error" class="label text-error">
      {{ props.error }}
    </p>
  </fieldset>
</template>
