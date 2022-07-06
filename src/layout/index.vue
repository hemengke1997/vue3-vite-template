<script lang="ts" setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView>
    <template #default="{ Component, route }">
      <Transition name="fade-slide" mode="out-in" appear>
        <KeepAlive v-if="route.meta.keepAlive">
          <component :is="Component" :key="route.path" />
        </KeepAlive>
        <component :is="Component" v-else :key="route.path" />
      </Transition>
    </template>
  </RouterView>
</template>

<style scoped>
  /* router view transition fade-slide */
  .fade-slide-leave-active,
  .fade-slide-enter-active {
    transition: all 0.15s;
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateX(10px);
  }

  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }
</style>
