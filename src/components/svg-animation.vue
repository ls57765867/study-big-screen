<template>
  <div>
    <svg :width="width" :height="width">
      <circle
        :cx="props.width / 2"
        :cy="props.width / 2"
        :r="(props.width / 2) * 0.95"
        :stroke-width="border"
        stroke="#ccc"
        fill="none"
      ></circle>
      <circle
        class="circle"
        :cx="props.width / 2"
        :cy="props.width / 2"
        :r="(props.width / 2) * 0.95"
        :stroke-width="border"
        stroke-linecap="round"
        stroke="red"
        fill="none"
      ></circle>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { ComputedRef } from 'vue'

const props = withDefaults(
  defineProps<{
    width?: number
    border?: number
    timer?: string
  }>(),
  {
    width: 400,
    border: 10,
    timer: '3s'
  }
)

const maxLength: ComputedRef<number> = computed(() => props.width * Math.PI)
</script>

<style lang="css" scoped>
.circle {
  animation: circle v-bind(timer) linear infinite;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

@keyframes circle {
  from {
    stroke-dasharray: 0 v-bind(maxLength);
  }
  to {
    stroke-dasharray: v-bind(maxLength) 0;
  }
}
</style>
