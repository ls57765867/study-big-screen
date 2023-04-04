import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
export interface MenuInterface {
  name: string
  path: string
  component?: string
  index?: string
  children?: MenuInterface[]
}
export const menuConfig: MenuInterface[] = [
  {
    name: 'svg相关',
    path: 'svg',
    index: 'svg',
    children: [
      {
        name: 'bb',
        path: 'bb',
        component: '../components/svg-animation.vue',
        index: 'svg/bb'
      }
    ]
  }
]

const formatRoutes = (menuConfig: MenuInterface[]): any => {
  return menuConfig.map(item => ({
    path: item.path,
    component: item.component ? eval('() => import(item.component)') : null,
    children: item.children ? formatRoutes(item.children) : null
  }))
}
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../view/navigation.vue'),
    children: formatRoutes(menuConfig)
  }
]
console.log(routes)
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
