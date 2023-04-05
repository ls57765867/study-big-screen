<!--利用两个矩形，一个为底色矩形，另一个矩形使用白色蒙版只展示出一小部分，并用动画标签让其运动，最后使用渐变色将第二个矩形变色-->

<template>
  <div ref="svgBox" class="fly-box bg-gray-700">
    <svg ref="svg" :width="width" :height="height">
      <defs>
        <!--一个矩形组件-->
        <path
          id="fly-box-path"
          :d="pathD"
          fill="none"
        ></path>
        <!--渐变色-->
        <radialGradient
          id="radial-gradient"
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
          r="50%"
        >
          <!--渐变色开始位置-->
          <stop offset="0" stop-color="#fff" stop-opacity="1"></stop>
          <!--渐变色结束为止-->
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <!--蒙版，黑透白不透-->
        <mask id="fly-box-mask">
          <circle r="150" cx="0" cy="0" fill="url(#radial-gradient)">
            <!--动画效果-->
            <animateMotion dur="3s" :path="animateD" rotate="auto"
                           repeatCount="indefinite"></animateMotion>
          </circle>
        </mask>
      </defs>
      <!--底色边框-->
      <use href="#fly-box-path" stroke-width="1" stroke="#235fa7"></use>
      <!--运动的边框-->
      <use href="#fly-box-path" stroke-width="3" stroke="#4fd2dd" mask="url(#fly-box-mask)"></use>
    </svg>
    <div class="fly-box-container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const svgBox = ref<SVGElement>()
const width = ref(0)
const height = ref(0)
nextTick(()=>{
  width.value = svgBox.value!.clientWidth
  height.value = svgBox.value!.clientHeight
})
const pathD = computed(()=> `M5 5 L5 ${height.value - 5} L${width.value -5 } ${height.value - 5} L${width.value - 5} 5 Z`)
const animateD = computed(()=> `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value -5 } L5 ${height.value - 5} Z`)
</script>


<style scoped>
.fly-box{
  position: relative;
  width: 100%;
  height: 100%;
}
.fly-box svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.fly-box-container{
  width: 100%;
  height: 100%;
  padding: 10px;
}
</style>



