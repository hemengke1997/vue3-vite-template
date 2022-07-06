import { createInjectionState } from '@vueuse/core'
import { ref } from 'vue'

export interface GlobalProviderContextProps {
  test: any
}

const [useProvideGlobalContext, useGlobalContext] = createInjectionState<any[], GlobalProviderContextProps>(() => {
  return { test: ref(0) }
})

export { useProvideGlobalContext, useGlobalContext }
