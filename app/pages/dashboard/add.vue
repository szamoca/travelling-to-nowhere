<script setup lang="ts">
import { InsertLocation } from "~~/lib/db/schema";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(InsertLocation),
});

effect(() => {
  console.log(toRaw(errors.value));
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <div class="container max-w-md mx-auto">
    <div class="my-4">
      <h1 class="text-lg">
        Add location
      </h1>
      <p class="text-sm">
        A location is a place you have travelled or will travel to. It can be a city, country, state or point of interest. You can add specific times you visited this location after adding it.
      </p>
    </div>
    <form class="flex flex-col gap-2.5" @submit.prevent="onSubmit">
      <fieldset class="fieldset">
        <label class="label" for="name">Name</label>
        <Field
          name="name"
          type="text"
          class="input w-full"
          :class="{ 'input-error': errors.name }"
        />
        <p v-if="errors.name" class="label text-error">
          {{ errors.name }}
        </p>
      </fieldset>
      <fieldset class="fieldset">
        <label class="label" for="description">Description</label>
        <Field
          name="description"
          type="textarea"
          class="textarea w-full"
          :class="{ 'input-error': errors.description }"
        />
        <p v-if="errors.description" class="label text-error">
          {{ errors.description }}
        </p>
      </fieldset>
      <fieldset class="fieldset">
        <label class="label" for="latitude">Latitude</label>
        <Field
          name="latitude"
          type="number"
          class="input w-full"
          :class="{ 'input-error': errors.latitude }"
        />
        <p v-if="errors.latitude" class="label text-error">
          {{ errors.latitude }}
        </p>
      </fieldset>
      <fieldset class="fieldset">
        <label class="label" for="longitude">Longitude</label>
        <Field
          name="longitude"
          type="number"
          class="input w-full"
          :class="{ 'input-error': errors.longitude }"
        />
        <p v-if="errors.longitude" class="label text-error">
          {{ errors.longitude }}
        </p>
      </fieldset>
      <div class="flex justify-end gap-3">
        <button type="button" class="btn btn-soft btn-secondary">
          Cancel
          <Icon name="pixelarticons:arrow-bar-left" size="24" />
        </button>
        <button type="submit" class="btn btn-primary">
          Add
          <Icon name="pixelarticons:image-plus" size="24" />
        </button>
      </div>
    </form>
  </div>
</template>
