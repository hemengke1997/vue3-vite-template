import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}
