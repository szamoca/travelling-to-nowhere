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
    <form class="flex flex-col gap-2.5">
      <fieldset class="fieldset">
        <label class="label" for="name">Name</label>
        <input
          name="name"
          type="text"
          class="input w-full"
        >
        <!-- <p class="label">For validation messages later on</p> -->
      </fieldset>
      <fieldset class="fieldset">
        <label class="label" for="description">Description</label>
        <textarea name="description" class="textarea w-full" />
        <!-- <p class="label">For validation messages later on</p> -->
      </fieldset>
      <fieldset class="fieldset">
        <label class="label" for="latitude">Latitude</label>
        <input
          name="latitude"
          type="number"
          class="input w-full"
        >
        <!-- <p class="label">For validation messages later on</p> -->
      </fieldset>
      <fieldset class="fieldset">
        <label class="label" for="longitude">Longitude</label>
        <input
          name="longitude"
          type="number"
          class="input w-full"
        >
        <!-- <p class="label">For validation messages later on</p> -->
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
