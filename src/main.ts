import 'virtual:windi.css'
import '@/styles/index.less'

import App from './App.vue'
import { createApp } from 'vue'
import { router, setupRouter } from './router'
import { setupStore } from './store'
import { setupI18n } from './locales/setupI18n'
import { setupRouterGuard } from './router/guard'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app)

  setupRouterGuard(router)

  app.mount('#app')
}

bootstrap()
