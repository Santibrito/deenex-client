<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full pointer-events-none opacity-[0.028] z-0"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animationId = null

const resize = () => {
  if (!canvas.value) return
  const dpr = window.devicePixelRatio || 1
  const parent = canvas.value.parentElement
  const rect = parent.getBoundingClientRect()
  canvas.value.width = rect.width * dpr
  canvas.value.height = rect.height * dpr
}

const draw = () => {
  if (!canvas.value) return
  const ctx = canvas.value.getContext('2d')
  const w = canvas.value.width
  const h = canvas.value.height
  if (w === 0 || h === 0) { animationId = requestAnimationFrame(draw); return; }
  const iData = ctx.createImageData(w, h)
  const buf32 = new Uint32Array(iData.data.buffer)
  const len = buf32.length
  for (let i = 0; i < len; i++) {
    if (Math.random() < 0.5) buf32[i] = 0xff000000
  }
  ctx.putImageData(iData, 0, 0)
  animationId = requestAnimationFrame(draw)
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  draw()
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
  cancelAnimationFrame(animationId)
})
</script>
