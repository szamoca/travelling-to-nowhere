<script setup lang="ts">
const { label, name, type, error } = defineProps<{
  label: string;
  name: string;
  type: "text" | "textarea" | "number";
  disabled?: boolean;
  error?: string;
}>();
</script>

<template>
  <fieldset class="fieldset">
    <label class="label" for="name">{{ label }}</label>
    <Field
      :as="type === 'textarea' ? 'textarea' : 'input'"
      :name="name"
      :type="type"
      :disabled="disabled"
      class="w-full"
      :class="{
        'input': type === 'text' || type === 'number',
        'textarea': type === 'textarea',
        'input-error': error,
      }"
    />
    <p v-if="error" class="label text-error">
      {{ error }}
    </p>
  </fieldset>
</template>
