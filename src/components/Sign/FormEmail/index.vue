<script lang="ts" setup>
  import { NFormItem, NInput } from 'naive-ui'
  import { useVModel } from '@vueuse/core'

  const props = defineProps<{
    email: string
  }>()
  const emit = defineEmits(['update:email'])
  const email = useVModel(props, 'email', emit)
</script>

<template>
  <NFormItem label="email" path="email" validation-status="success">
    <NInput placeholder="" v-model:value="email" spellcheck="false" />
  </NFormItem>
</template>
