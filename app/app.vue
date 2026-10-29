<script setup lang="ts">
const { app } = useRuntimeConfig()

useHead({
  titleTemplate: (title) => (title ? `${title} · Miamo` : 'Miamo'),
  link: [{ rel: 'icon', type: 'image/svg+xml', href: `${app.baseURL}favicon.svg` }],
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
