<template>
  <div class="layout">
    <SiteHeader />
    <main class="layout__main">
      <slot />
    </main>
    <AppToast />
    <SiteFooter />
    <CookieBanner />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.layout__main {
  flex: 1;
}
</style>
