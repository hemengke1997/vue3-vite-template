<script lang="tsx" setup>
  import { NFormItem, NInput } from 'naive-ui'
  import EyeOpen from './imgs/icon_open_eye.png'
  import EyeClose from './imgs/icon_close_eye.png'
  import { defineComponent } from 'vue'
  import { useVModel, useVModels } from '@vueuse/core'

  type PropsType = {
    password: string
    confirmPassword?: string
  }

  const EyeComp = defineComponent({
    props: {
      open: Boolean,
    },
    setup(props) {
      return () => <img src={props.open ? EyeOpen : EyeClose} class='tw-w-24px tw-h-24px'></img>
    },
  })

  const InputComp = defineComponent({
    props: {
      value: String,
    },
    emits: ['update:value'],
    setup(props, { emit }) {
      const value = useVModel(props, 'value', emit)

      return () => (
        <NInput
          placeholder=''
          show-password-on='click'
          value={value.value}
          onUpdateValue={(e) => emit('update:value', e)}
          type='password'
          spellcheck='false'
          maxlength={18}
        >
          {{
            'password-visible-icon': () => <EyeComp open />,
            'password-invisible-icon': () => <EyeComp />,
          }}
        </NInput>
      )
    },
  })

  const props = defineProps<PropsType>()
  const emit = defineEmits(['update:password', 'update:confirmPassword'])

  const { password, confirmPassword } = useVModels(props, emit)
</script>

<template>
  <NFormItem label="password" path="password" validation-status="success">
    <InputComp v-model:value="password" />
  </NFormItem>
  <NFormItem label="confirmPassword" path="confirmPassword" validation-status="success">
    <InputComp v-model:value="confirmPassword" />
  </NFormItem>
</template>
