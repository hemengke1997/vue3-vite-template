import dayjs from 'dayjs'
import type { PluginOption } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import pkg from '../../../package.json'

export function configHtmlPlugin(isBuild: boolean) {
  const getAppConfigSrc = () => {
    return `v${pkg.version}-${dayjs().format('YYYY-MM-DD HH:mm:ss')}`
  }

  const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      tags: [
        {
          tag: 'script',
          injectTo: 'head',
          attrs: {
            ['pkg-version']: getAppConfigSrc(),
          },
        },
      ],
    },
  })
  return htmlPlugin
}
