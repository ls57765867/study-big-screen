<template>
  <div class="w-screen h-screen">
    <el-container class="h-full">
      <el-header class="flex justify-center items-center bg-blue-200">Header</el-header>
      <el-container class="h-full">
        <el-aside width="150px">
          <tsx-menu :config="config"></tsx-menu>
        </el-aside>
        <el-main class="flex flex-1">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { menuConfig, MenuInterface } from '../router'
const state = reactive<{ config: MenuInterface[] }>({
  config: menuConfig
})

const { config } = toRefs(state)
</script>
