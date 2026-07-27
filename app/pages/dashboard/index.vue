<script setup lang="ts">
const isSideBarOpen = ref(true);

function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value;
  localStorage.setItem("isSideBarOpen", isSideBarOpen.value.toString());
}

onMounted(() => {
  isSideBarOpen.value = localStorage.getItem("isSideBarOpen") === "true";
});
</script>

<template>
  <div class="flex-1 flex">
    <div class="bg-base-200 transition-all duration-300" :class="{ 'w-64': isSideBarOpen, 'w-12': !isSideBarOpen }">
      <div
        class="flex hover:cursor-pointer hover:bg-base-300 p-1"
        :class="{ 'justify-center': !isSideBarOpen, 'justify-end': isSideBarOpen }"
        @click="toggleSideBar"
      >
        <Icon
          v-if="isSideBarOpen"
          name="pixelarticons:square-chevron-left"
          size="32"
        />
        <Icon
          v-else
          name="pixelarticons:square-chevron-right"
          size="32"
        />
      </div>
      <div class="flex flex-col gap-1">
        <SideBarButton
          label="Locations"
          icon="pixelarticons:map-pin"
          href="/dashboard"
          :show-label="isSideBarOpen"
        />
        <SideBarButton
          label="Add location"
          icon="pixelarticons:image-plus"
          href="/dashboard/add"
          :show-label="isSideBarOpen"
        />
        <div class="divider" />
        <SideBarButton
          label="Sign out"
          icon="pixelarticons:logout"
          href="/sign-out"
          :show-label="isSideBarOpen"
        />
      </div>
    </div>
    <div class="flex-1">
      Content
    </div>
  </div>
</template>
