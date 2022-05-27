<script lang="ts">
  import { defineComponent } from 'vue'
  import { useProvideGlobalContext } from './useGlobalContext'

  export default defineComponent({
    name: 'GlobalContext',
    inheritAttrs: false,
    setup(_, { slots }) {
      useProvideGlobalContext()
      return () => slots.default?.()
    },
  })
</script>
