/**
 * vite plugin
 */
import type { PluginOption } from 'vite'
import windiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import { splitVendorChunkPlugin } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import setupExtend from './setupExtend'
import vitePluginImp from 'vite-plugin-imp'
import { configCompressPlugin } from './compress'
import { configSvgr } from './svgr'
import { configVisualizerConfig } from './visualizer'
import { configHtmlPlugin } from './html'

export function createVitePlugins(isBuild: boolean, env: ImportMetaEnv) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue({ reactivityTransform: true }), vueJsx(), setupExtend()]

  const { VITE_LEGACY, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = env

  // https://cn.vitejs.dev/guide/build.html#chunking-strategy
  vitePlugins.push(splitVendorChunkPlugin())

  // vite-plugin-windicss
  vitePlugins.push(windiCSS())

  // vite-plugin-imp
  vitePlugins.push(
    vitePluginImp({
      libList: [
        {
          libName: 'lodash-es',
          libDirectory: '',
          camel2DashComponentName: false,
        },
      ],
    }),
  )

  // vite-plugin-legacy
  // modernPolyfills: true 浏览器兼容
  VITE_LEGACY &&
    vitePlugins.push(
      legacy({
        modernPolyfills: true,
        polyfills: false,
        targets: ['Chrome 63'],
        renderLegacyChunks: false,
      }),
    )

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig())

  vitePlugins.push(configSvgr())

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(isBuild))

  // isBuild && vitePlugins.push(configCdnPlugin());

  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE))
  }

  return vitePlugins
}
