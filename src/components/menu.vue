<template>
  <!--  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">-->
  <!--    <el-sub-menu index="1">-->
  <!--      <template #title>-->
  <!--        <el-icon><location /></el-icon>-->
  <!--        <span>Navigator 1</span>-->
  <!--      </template>-->
  <!--      <el-sub-menu index="1-4">-->
  <!--        <template #title>item four</template>-->
  <!--        <el-menu-item index="1-4-1">item one</el-menu-item>-->
  <!--      </el-sub-menu>-->
  <!--    </el-sub-menu>-->
  <!--    <el-menu-item index="2">-->
  <!--      <el-icon><icon-menu /></el-icon>-->
  <!--      <span>Navigator Two</span>-->
  <!--    </el-menu-item>-->
  <!--    <el-menu-item index="3" disabled>-->
  <!--      <el-icon><document /></el-icon>-->
  <!--      <span>Navigator Three</span>-->
  <!--    </el-menu-item>-->
  <!--    <el-menu-item index="4">-->
  <!--      <el-icon><setting /></el-icon>-->
  <!--      <span>Navigator Four</span>-->
  <!--    </el-menu-item>-->
  <!--  </el-menu>-->
  <!--  <el-menu>-->
  <!--    <el-menu-item>-->
  <!--      <span>123</span>-->
  <!--    </el-menu-item>-->
  <!--  </el-menu>-->
  <!--  <el-menu>-->
  <!--    <el-menu-item>-->
  <!--      <span>123</span>-->
  <!--    </el-menu-item>-->
  <!--  </el-menu>-->
  <el-menu></el-menu>
</template>

<script lang="tsx">
import { menuConfig } from '../router'
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'

export default {
  setup() {
    const getSubMenu = (config: any): any => {
      if (!config || config.length === 0) {
        return
      }
      if (config.length === 1) {
        return h(ElMenuItem, { index: config[0].index }, () => h('span', config[0].name))
      } else {
        return config.map((item: any): any => {
          if (item.children) {
            return h(
              ElSubMenu,
              { index: item.index },
              {
                default: () => getSubMenu(item.children),
                title: () => h('span', item.name)
              }
            )
          } else {
            return h(ElMenuItem, null, () => h('span', item.name))
          }
        })
      }
    }

    return () => h(ElMenu, null, () => getSubMenu(menuConfig))
  }
}
</script>
