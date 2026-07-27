<template>
  <div class="flex-1 flex">
    <div class="bg-base-200 w-64">
      <div class="flex justify-end">
        <Icon name="pixelarticons:square-chevron-left" size="32" />
      </div>
      <div class="flex flex-col gap-1">
        <SideBarButton
          label="Locations"
          icon="pixelarticons:map-pin"
          href="/dashboard"
        />
        <SideBarButton
          label="Add location"
          icon="pixelarticons:image-plus"
          href="/dashboard/add"
        />
        <div class="divider" />
        <SideBarButton
          label="Sign out"
          icon="pixelarticons:logout"
          href="/sign-out"
        />
      </div>
    </div>
    <div class="flex-1">
      Content
    </div>
  </div>
</template>
