import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
export interface MenuInterface {
  name: string
  path: string
  component?: string
  index?: string
  children?: MenuInterface[],
  props?:any
}
export const menuConfig: MenuInterface[] = [
  {
    name: 'svg相关',
    path: 'svg',
    index: 'svg',
    children: [
      {
        name: 'loading图',
        path: 'loading',
        component: '../components/svg-animation.vue',
        index: '/svg/loading'
      },
      {
        name: 'autoLogo',
        path: 'autoLogo',
        component: '../components/svg-animation-2.vue',
        index: '/svg/autoLogo'
      },
      {
        name: 'svg绘制轨迹',
        path: 'svgFlexbox',
        component: '../components/svg-animation-3.vue',
        index: '/svg/svgFlexbox'
      },
    ]
  }
]

const formatRoutes = (menuConfig: MenuInterface[]): any => {
  return menuConfig.map(item => (Object.assign({},item,{
    component: item.component ? eval('() => import(item.component)') : null,
    children: item.children ? formatRoutes(item.children) : null
  })))
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
