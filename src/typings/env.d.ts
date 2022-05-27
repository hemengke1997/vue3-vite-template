/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly DEV: boolean
  readonly PROD: boolean
  readonly MODE: string
  // host
  readonly VITE_PUBLIC_PATH: string
  readonly VITE_HOST: string
  readonly VITE_API_ORIGIN: string
  readonly VITE_STAGE: 'TEST' | 'RELEASE'
  readonly VITE_LEGACY: boolean
  readonly VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
}
