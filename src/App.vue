<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import {useBaseStore} from './store'
import {storeToRefs} from 'pinia'

const state = reactive({test: 'test'})
const {name, age, doubleAge} = storeToRefs(useBaseStore())
const store = useBaseStore()

const editName = () => {
  store.setName()
}
const editAge = () => {
  age.value++
}
</script>
