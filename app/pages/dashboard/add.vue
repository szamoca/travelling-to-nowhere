<script setup lang="ts">
import type { FetchError } from "ofetch";

import { InsertLocation } from "~~/lib/db/schema";

const router = useRouter();
const loading = ref(false);
const submitError = ref("");

const { handleSubmit, errors, setErrors, meta } = useForm({
  validationSchema: toTypedSchema(InsertLocation),
});

const onSubmit = handleSubmit(async (values) => {
  try {
    loading.value = true;
    submitError.value = "";
    const inserted = await $fetch("/api/locations", {
      method: "POST",
      body: values,
    });
    console.log(inserted);
  }
  catch (e) {
    const error = e as FetchError;
    if (error.data?.data) {
      setErrors(error.data.data);
    }
    submitError.value = error.statusMessage || "An unknown error occurred";
  }
  finally {
    loading.value = false;
  }
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
  <div class="container max-w-md mx-auto pb-16">
    <div class="my-4">
      <h1 class="text-lg">
        Add location
      </h1>
      <p class="text-sm">
        A location is a place you have travelled or will travel to. It can be a city, country, state or point of interest. You can add specific times you visited this location after adding it.
      </p>
    </div>
    <div
      v-if="submitError"
      role="alert"
      class="alert alert-soft alert-error"
    >
      <span>{{ submitError }}</span>
    </div>
    <form class="flex flex-col gap-2.5" @submit.prevent="onSubmit">
      <AppFormField
        name="name"
        label="Name"
        type="text"
        :disabled="loading"
        :error="errors.name"
      />
      <AppFormField
        name="description"
        label="Description"
        type="textarea"
        :disabled="loading"
        :error="errors.description"
      />
      <AppFormField
        name="latitude"
        label="Latitude"
        type="number"
        :disabled="loading"
        :error="errors.latitude"
      />
      <AppFormField
        name="longitude"
        label="Longitude"
        type="number"
        :disabled="loading"
        :error="errors.longitude"
      />
      <div class="flex justify-end gap-3">
        <button
          :disabled="loading"
          type="button"
          class="btn btn-soft btn-secondary"
          @click="router.back()"
        >
          Cancel
          <Icon name="pixelarticons:arrow-bar-left" size="24" />
        </button>
        <button
          :disabled="loading"
          type="submit"
          class="btn btn-primary"
        >
          Add
          <span v-if="loading" class="loading loading-dots loading-sm" />
          <Icon
            v-else
            name="pixelarticons:image-plus"
            size="24"
          />
        </button>
      </div>
    </form>
  </div>
</template>
