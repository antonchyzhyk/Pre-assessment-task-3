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
        name: routeNames.goods,
        component: () => import('@/views/goods/Goods.vue')
      }
    ]
  }
]

export {
  routes
}
