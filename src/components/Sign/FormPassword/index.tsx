import { NFormItem, NInput } from 'naive-ui'
import { computed, defineComponent, WritableComputedRef } from 'vue'
import EyeOpen from './imgs/icon_open_eye.png'
import EyeClose from './imgs/icon_close_eye.png'

export default defineComponent({
  components: {
    NFormItem,
    NInput,
  },
  inheritAttrs: false,
  props: {
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
    },
  },
  emits: ['update:password'],
  setup(props, { emit }) {
    const password: WritableComputedRef<string> = computed({
      get() {
        return props.password
      },
      set(value) {
        emit('update:password', value)
      },
    })

    const eyeVisibleSlot = <img src={EyeOpen} class='tw-w-24px tw-h-24px' />

    const eyeCloseSlot = <img src={EyeClose} class='tw-w-24px tw-h-24px' />

    const eyeSlot = {
      'password-invisible-icon': () => eyeCloseSlot,
      'password-visible-icon': () => eyeVisibleSlot,
    }

    return () => {
      return (
        <>
          <NFormItem label='password' path='password' validation-status='success'>
            <NInput
              placeholder=''
              value={password.value}
              onUpdateValue={(e) => {
                password.value = e
              }}
              spellcheck='false'
              type='password'
              maxlength={18}
              show-password-on='click'
              v-slots={eyeSlot}
            ></NInput>
          </NFormItem>

          {props.confirmPassword && (
            <NFormItem label='confirmPassword' path='confirmPassword'>
              <NInput placeholder='' spellcheck='false' type='password' maxlength={18} v-slots={eyeSlot}></NInput>
            </NFormItem>
          )}
        </>
      )
    }
  },
})
