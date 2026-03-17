<template>
  <span ref="targetEl">{{ current }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  target: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 1200
  }
})

const current = ref(0)
const targetEl = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animate()
      observer.disconnect()
    }
  }, { threshold: 0.6 })

  if (targetEl.value) {
    observer.observe(targetEl.value)
  }
})

const animate = () => {
  const start = performance.now()
  const tick = (now) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
    current.value = Math.round(eased * props.target)
    if (progress < 1) {
      requestAnimationFrame(tick)
    }
  }
  requestAnimationFrame(tick)
}
</script>
