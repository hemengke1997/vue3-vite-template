<script setup lang="tsx" name="ErrorTip">
  const props = defineProps<{ text: string | undefined }>()
</script>

<template>
  <div class="error-tip">
    <i class="icon"></i>
    <span class="text">{{ props.text }}</span>
  </div>
</template>

<style scoped lang="less"></style>
