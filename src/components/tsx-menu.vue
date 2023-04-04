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
  <el-menu-item></el-menu-item>
  <el-sub-menu></el-sub-menu>
</template>

<script lang="tsx">
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import { MenuInterface } from '../router'

export default {
  props: {
    config: {
      required: true,
      type: Array as () => MenuInterface[]
    }
  },
  setup(props: { config: MenuInterface[] }) {
    const createMenu = (config: any): any => {
      return config.children ? (
        <ElSubMenu index={config.index}>
          {{
            title: () => config.name,
            default: () => config.children.map((item: any) => createMenu(item))
          }}
        </ElSubMenu>
      ) : (
        <ElMenuItem index={config.index}>
          <span>{config.name}</span>
        </ElMenuItem>
      )
    }
    return () => (
      <>
        <ElMenu class="h-full" router={true}>
          {props.config.map(item => createMenu(item))}
        </ElMenu>
      </>
    )
  }
}
</script>
