/**
 * @see https://vitejs.cn/guide/env-and-mode.html#modes
 */

/**
 * @description: Get environment variables
 */
export function getEnv(): string {
  return import.meta.env.MODE
}

/**
 * @description: Is it a development mode
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV
}

/**
 * @description: Is it a production mode
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD
}
