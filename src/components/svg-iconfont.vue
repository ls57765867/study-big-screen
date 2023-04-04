<template>
  <svg width="50" height="50">
    <use :href="`#${prefix}-${name}`"></use>
  </svg>
</template>
<script lang="ts" setup>
const props = defineProps<{
  prefix: string
  name: string
}>()
console.log(props)
</script>

<style scoped></style>
