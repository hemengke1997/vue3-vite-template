/**
 * 分析打包文件
 */
import visualizer from 'rollup-plugin-visualizer'

/**
 * 是否预览
 */
export function isReportMode(): boolean {
  return process.env.REPORT === 'true'
}

export function configVisualizerConfig() {
  if (isReportMode()) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  }
  return []
}
