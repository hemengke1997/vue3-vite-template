declare global {
  const __APP_INFO__: {
    pkg: {
      name: string
      version: string
      dependencies: Record<any, string>
      devDependencies: Record<any, string>
    }
    lastBuildTime: string
  }
}

declare type Recordable<T = any> = Record<string, T>

interface Window {
  // naive-ui
  $loadingBar: import('naive-ui').LoadingBarApi
  $dialog: import('naive-ui').DialogApi
  $message: import('naive-ui').MessageApi
  $notification: import('naive-ui').NotificationApi
}
