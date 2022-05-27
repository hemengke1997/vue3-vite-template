import { ASSETSDIR, ENVPREFIX, OUTDIR, PREVIEW_HOST, PREVIEW_POPT, TARGET } from './config/vite/constant'
import path from 'path'
import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import { createVitePlugins } from './config/vite/plugins'
import { wrapperEnv } from './config/vite/utils'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const isBuild = command === 'build'

  const env = loadEnv(mode, root) as ImportMetaEnv

  const viteEnv = wrapperEnv(env)

  const { VITE_PUBLIC_PATH } = viteEnv

  return {
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(isBuild, viteEnv),
    root,
    mode, // can be overridden by the command line --mode option
    envPrefix: ENVPREFIX,
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        { find: '@', replacement: path.resolve(__dirname, './src') },
        {
          find: '@config',
          replacement: path.resolve(__dirname, './config'),
        },
        {
          find: /^~/,
          replacement: path.resolve(__dirname, './'),
        },
      ],
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: '[local]_[hash:base64:5]',
      },
    },

    preview: {
      port: PREVIEW_POPT,
      host: PREVIEW_HOST,
    },
    // server: {
    //   host: HOST,
    //   port: PORT,
    // },
    build: {
      target: TARGET,
      cssTarget: TARGET,
      minify: 'esbuild',
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      sourcemap: false,
      outDir: OUTDIR, // 默认dist
      assetsDir: ASSETSDIR, // 默认assets
      rollupOptions: {
        output: {
          chunkFileNames: `${ASSETSDIR}/js/[name]-[hash].chunk.js`,
          entryFileNames: `${ASSETSDIR}/js/[name]-[hash].entry.js`,
          assetFileNames: `${ASSETSDIR}/[ext]/[name]-[hash].[ext]`,
        },
      },
      commonjsOptions: {},
    },
  }
}
