import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'

const SIZE = {
  0: 'var(--zero)', // 0px
  xxs: 'var(--xxs)', // 4px
  xs: 'var(--xs)', // 8px
  sm: 'var(--sm)', // 12px
  md: 'var(--md)', // 16px
  lg: 'var(--lg)', // 24px
  xl: 'var(--xl)', // 32px
  xxl: 'var(--xxl)', // 48px
}

const LINE_HEIGHT = 1

export default defineConfig({
  preflight: true,
  prefix: 'tw-',
  prefixer: true,

  theme: {
    extend: {},
    colors: {
      DEFAULT: 'var(--text-color)',
      primary: 'var(--primary-color)', // 主色
      error: 'var(--error-color)', // 错误色
      success: 'var(--success-color)', // 成功色
      info: 'var(--info-color)', // 信息色
      link: 'var(--link-color)', // 链接色
      secondary: 'var(--text-color-secondary)', // 二级文本
      third: 'var(--text-color-third)', // 三级文本
      fourth: 'var(--text-color-fourth)', // 四级文本
      fifth: 'var(--text-color-fifth)', // 五级文本（失效、暗提示）
      white: 'var(--white)',
    },
    borderColor: {
      DEFAULT: 'var(--border-color-base)',
    },
    fontSize: {
      xxs: ['var(--font-size-xxs)', LINE_HEIGHT], // 12
      xs: ['var(--font-size-xs)', LINE_HEIGHT], // 13
      base: ['var(--font-size-base)', LINE_HEIGHT], // 14
      lg: ['var(--font-size-lg)', LINE_HEIGHT], // 16
      xl: ['var(--font-size-xl)', LINE_HEIGHT], // 18
      xxl: ['var(--font-size-xxl)', LINE_HEIGHT], // 24
    },
    rounded: {
      DEFAULT: 'var(--border-radius-base)',
    },
    margin: SIZE,
    padding: SIZE,
    spacing: SIZE,
  },
  plugins: [plugin(({}) => {})],
})
