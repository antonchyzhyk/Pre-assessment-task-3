import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from './route-names'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('@/layouts/GoodsLayout.vue'),
    children: [
      {
        path: '',
        name: routeNames.home,
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]

export {
  routes
}
