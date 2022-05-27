import { kebabCase } from 'lodash-es'
import { GlobalThemeOverrides } from 'naive-ui'
import { addColorAlpha, getColorPalette } from './utils'

const Colors = {
  primaryColor: '#4650f0',
  errorColor: '#ff6628',
  whiteColor: '#ffffff',
}

export const theme = {
  Colors: {
    ...Colors,
    linkColor: '#4650f0',
    primaryBg: '#1d1f26',
    secondBg: '#242731',
  },
  size: {
    xxl: '48px',
    xl: '32px',
    lg: '24px',
    md: '16px',
    sm: '12px',
    xs: '8px',
    xxs: '4px',
    zero: '0',
  },
  fontSize: {
    fontSizeXxs: '12px',
    fontSizeXs: '13px',
    fontSizeBase: '14px',
    fontSizeLg: '16px',
    fontSizeXl: '18px',
    fontSizeXxl: '24px',
  },
}

export const naiveColors: GlobalThemeOverrides = {
  common: {
    primaryColor: Colors.primaryColor,
    errorColor: Colors.errorColor,
  },
  Button: {
    textColor: Colors.whiteColor,
  },
}

type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'
type ColorScene = '' | 'Suppl' | 'Hover' | 'Pressed' | 'Active'
type ColorKey = `${ColorType}Color${ColorScene}`
type ThemeColor = Partial<Record<ColorKey, string>>

interface ColorAction {
  scene: ColorScene
  handler: (color: string) => string
}

function getThemeColors(colors: [ColorType, string][]) {
  const colorActions: ColorAction[] = [
    { scene: '', handler: (color) => color },
    { scene: 'Suppl', handler: (color) => color },
    { scene: 'Hover', handler: (color) => getColorPalette(color, 5) },
    { scene: 'Pressed', handler: (color) => getColorPalette(color, 7) },
    { scene: 'Active', handler: (color) => addColorAlpha(color, 0.1) },
  ]
  const themeColor: ThemeColor = {}

  colors.forEach((color) => {
    colorActions.forEach((action) => {
      const [colorType, colorValue] = color
      const colorKey: ColorKey = `${colorType}Color${action.scene}`
      themeColor[colorKey] = action.handler(colorValue)
    })
  })

  return themeColor
}

export function getNaiveThemeOverrides(): GlobalThemeOverrides {
  const themeColors = getThemeColors([
    ['primary', Colors.primaryColor],
    ['error', Colors.errorColor],
  ])

  return {
    common: {
      ...themeColors,
    },
  }
}

export function getCssVariables() {
  const variables: string[] = []
  for (const k in theme) {
    const vars = theme[k]

    const keys = Object.keys(vars)
    keys.forEach((varKey) => {
      variables.push(`--${kebabCase(varKey)}: ${vars[varKey]}`)
    })
  }

  return variables
}

// 设置css变量到html节点
export function setCssVarialesToHtml() {
  const vars = getCssVariables()

  document.documentElement.style.cssText += vars?.join(';')
}
