<script setup lang="ts">
import { InsertLocation } from "~~/lib/db/schema";

const router = useRouter();

const { handleSubmit, errors, meta } = useForm({
  validationSchema: toTypedSchema(InsertLocation),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});

onBeforeRouteLeave(() => {
  if (meta.value.dirty) {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm("Are you sure you want to leave? Everything Not Saved, Will Be Lost.");
    if (!confirm) {
      return false;
    }
    return true;
  }
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
      <AppFormField
        name="name"
        label="Name"
        type="text"
        :error="errors.name"
      />
      <AppFormField
        name="description"
        label="Description"
        type="textarea"
        :error="errors.description"
      />
      <AppFormField
        name="latitude"
        label="Latitude"
        type="number"
        :error="errors.latitude"
      />
      <AppFormField
        name="longitude"
        label="Longitude"
        type="number"
        :error="errors.longitude"
      />
      <div class="flex justify-end gap-3">
        <button
          type="button"
          class="btn btn-soft btn-secondary"
          @click="router.back()"
        >
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
