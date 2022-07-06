import { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 缓存
    keepAlive?: boolean
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/a',
  },
  {
    path: '/a',
    component: () => import('@/pages/a/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    // TODO
    component: () => import('@/pages/a/index.vue'),
  },
]

export default routes
