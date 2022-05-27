<script lang="ts" setup>
  import {
    NLoadingBarProvider,
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    useLoadingBar,
    useDialog,
    useMessage,
    useNotification,
  } from 'naive-ui'
  import { defineComponent, h } from 'vue'

  // 挂载naive组件的方法至window, 以便在路由钩子函数和请求函数里面调用
  function registerNaiveTools() {
    window.$loadingBar = useLoadingBar()
    window.$dialog = useDialog()
    window.$message = useMessage()
    window.$notification = useNotification()
  }

  const NaiveProviderContainer = defineComponent({
    name: 'NaiveProviderContainer',
    setup() {
      registerNaiveTools()
    },
    render: () => h('div'),
  })
</script>

<template>
  <NLoadingBarProvider>
    <NDialogProvider>
      <NNotificationProvider>
        <NMessageProvider>
          <NaiveProviderContainer />
          <slot></slot>
        </NMessageProvider>
      </NNotificationProvider>
    </NDialogProvider>
  </NLoadingBarProvider>
</template>
