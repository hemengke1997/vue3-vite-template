<script setup lang="ts">
  import { NButton } from 'naive-ui'
</script>

<template>
  <NButton :bordered="false" attr-type="submit" color="#4650f0" text-color="#fff"><slot></slot></NButton>
</template>
