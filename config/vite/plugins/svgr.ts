import svgrPlugin from 'vite-plugin-svgr'

export function configSvgr() {
  return svgrPlugin({
    svgrOptions: {
      icon: true,
    },
  })
}
