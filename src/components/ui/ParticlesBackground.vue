<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let ctx = null
let pts = []
let animationId = null

const resize = () => {
  if (!canvas.value) return
  const dpr = window.devicePixelRatio || 1
  const parent = canvas.value.parentElement
  const rect = parent.getBoundingClientRect()
  canvas.value.width = rect.width * dpr
  canvas.value.height = rect.height * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

const draw = () => {
  if (!canvas.value) return
  const w = canvas.value.width / (window.devicePixelRatio || 1)
  const h = canvas.value.height / (window.devicePixelRatio || 1)
  ctx.clearRect(0, 0, w, h)
  pts.forEach(p => {
    p.x += p.vx
    p.y += p.vy
    if (p.x < -2) p.x = w + 2
    if (p.x > w + 2) p.x = -2
    if (p.y < -2) p.y = h + 2
    if (p.y > h + 2) p.y = -2
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(84,35,231,${p.a})`
    ctx.fill()
  })
  animationId = requestAnimationFrame(draw)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resize()
  pts = Array.from({ length: 28 }, () => ({
    x: Math.random() * (canvas.value.width / (window.devicePixelRatio || 1)),
    y: Math.random() * (canvas.value.height / (window.devicePixelRatio || 1)),
    r: Math.random() * 1.3 + 0.5,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    a: Math.random() * 0.08 + 0.04,
  }))
  window.addEventListener('resize', resize)
  draw()
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
  cancelAnimationFrame(animationId)
})
</script>
