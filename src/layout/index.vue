<script lang="ts" setup>
  import { NConfigProvider } from 'naive-ui'
  import NaiveProviderVue from './components/NaiveProvider.vue'
  import { getNaiveThemeOverrides } from '@/settings/theme'
  import { RouterView } from 'vue-router'
</script>

<template>
  <NConfigProvider :theme-overrides="getNaiveThemeOverrides()">
    <NaiveProviderVue>
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
    </NaiveProviderVue>
  </NConfigProvider>
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
