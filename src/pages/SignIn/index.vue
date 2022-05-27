<script lang="tsx" setup>
  import { FormInst, NForm, NButton } from 'naive-ui'
  import FormEmail from '@/components/Sign/FormEmail/index.vue'
  import FormPassword from '@/components/Sign/FormPassword/index.vue'
  import ErrorTip from '@/components/Sign/ErrorTip/index.vue'
  import { $ref } from 'vue/macros'

  interface ModelType {
    email: string
    password: string
  }

  let formRef = $ref<FormInst | null>(null)
  let modelRef = $ref<ModelType>({ email: '', password: '' })
  let error = $ref<string>('')
  let loading = $ref(false)
  let canSubmit = $ref(false)

  function handleSubmit() {
    formRef?.validate((err) => {
      if (err?.length) {
        error = err[0][0].message ?? ''
      }
    })
  }
</script>

<template>
  <div>
    <NForm ref="formRef" :model="modelRef" :show-feedback="false">
      <FormEmail v-model:email="modelRef.email" class="tw-mb-27px" />
      <FormPassword v-model:password="modelRef.password" />
      <ErrorTip :text="error" />
      <NButton :bordered="false" attr-type="submit" @click="handleSubmit" :loading="loading" :disabled="canSubmit"
        >submit</NButton
      >
    </NForm>
  </div>
</template>
