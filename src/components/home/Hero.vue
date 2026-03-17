<template>
  <section id="hero" class="relative pt-32 pb-0 px-8 overflow-hidden bg-transparent flex flex-col items-center">
    <!-- Particles canvas (fondo) -->
    <ParticlesBackground />

    <div class="max-w-[1240px] mx-auto flex flex-col items-center text-center relative z-[1]">
      <!-- Eyebrow -->
      <p class="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-primary mb-7 transition-all duration-700 animate-rise" style="animation-delay: 0.05s">
        <span class="w-5 h-px bg-primary opacity-60"></span>
        Sistema Comercial para Cadenas
        <span class="w-5 h-px bg-primary opacity-60"></span>
      </p>

      <!-- Headline -->
      <h1 class="font-heading text-[clamp(2.4rem,5.8vw,4.2rem)] tracking-tighter leading-[1] text-ink max-w-[950px] transition-all duration-700 animate-rise" style="animation-delay: 0.1s">
        <span class="block">La infraestructura para</span>
        <span class="font-extrabold text-ink relative">
          cadenas que quieren
          <div class="inline-block relative overflow-hidden align-bottom text-primary italic" :style="{ height: (step || 60) + 'px' }">
            <div 
              class="flex flex-col transition-transform duration-500 cubic-bezier-[.77,0,.18,1]"
              :class="{ '!transition-none': isResetting }"
              :style="{ transform: `translateY(-${currentIndex * (step || 60)}px)` }"
            >
              <span v-for="(word, index) in words" :key="index" class="block whitespace-nowrap px-2 ref-word">
                {{ word }}.
              </span>
              <span class="block whitespace-nowrap px-2">
                {{ words[0] }}.
              </span>
            </div>
          </div>
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="text-[1.1rem] font-medium leading-[1.5] text-ink-3 max-w-[560px] mt-8 transition-all duration-700 animate-rise" style="animation-delay: 0.25s">
        Centralizá ventas, logística y marketing en un solo núcleo operativo.
        <span class="text-ink-2">Sin comisiones y con el control total de tus datos.</span>
      </p>

      <!-- CTAs -->
      <div class="flex items-center gap-4 mt-10 flex-wrap justify-center transition-all duration-700 animate-rise" style="animation-delay: 0.4s">
        <!-- CTA 1 -->
        <a 
          href="#demo" 
          class="group inline-flex items-center gap-3 bg-primary border-[1.5px] border-primary text-white font-semibold rounded-[7px] hover:bg-primary-hover hover:border-primary-hover transition-all tracking-tight"
          style="padding: 0.875rem 1.5rem 0.875rem 1.875rem; font-size: 0.9375rem; letter-spacing: -0.015em;"
        >
          Comenzar Ahora
          <span class="inline-flex items-center justify-center w-[22px] h-[22px] rounded-md bg-white/12 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </a>

        <!-- CTA 2 -->
        <a 
          href="#plataforma" 
          class="group inline-flex items-center gap-1.5 px-1 py-4 text-[0.9rem] font-medium text-ink-3 hover:text-ink transition-all tracking-tight"
        >
          Ver cómo funciona
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" class="opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
            <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>

      <!-- Social Proof -->
      <div class="flex items-center gap-3 mt-10 transition-all duration-700 animate-rise" style="animation-delay: 0.52s">
        <div class="flex">
          <div v-for="tag in ['MB', 'LS', 'AR', 'PG']" :key="tag" class="w-[28px] h-[28px] rounded-full border-2 border-white bg-primary-s -ml-2 first:ml-0 flex items-center justify-center text-[0.65rem] font-bold text-primary">
            {{ tag }}
          </div>
        </div>
        <span class="text-[0.8rem] text-ink-3 font-medium">+600 sucursales ya operan con Deenex</span>
      </div>

      <!-- Preview -->
      <div id="preview" class="mt-16 max-w-[1100px] w-full relative transition-all duration-700 animate-rise" style="animation-delay: 0.64s">
        <div class="overflow-hidden relative bg-transparent browser-viewport rounded-t-[32px] border-x border-t border-border/40 backdrop-blur-sm">
            <img 
              src="/assets/images/header.svg" 
              alt="Dashboard" 
              class="w-full h-auto max-h-[480px] object-cover object-top mix-blend-multiply opacity-[0.98] [mask-image:linear-gradient(to_bottom,black_80%,transparent_95%)]" 
            />
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import ParticlesBackground from '../ui/ParticlesBackground.vue'

const words = ['crecer', 'escalar', 'liderar']
const currentIndex = ref(0)
const step = ref(0)
const isResetting = ref(false)
let intervalId = null

onMounted(async () => {
  await nextTick()
  const el = document.querySelector('.ref-word')
  if (el) {
    step.value = el.getBoundingClientRect().height
  }

  intervalId = setInterval(() => {
    currentIndex.value++
    
    if (currentIndex.value >= words.length) {
      setTimeout(() => {
        isResetting.value = true
        currentIndex.value = 0
        setTimeout(() => {
          isResetting.value = false
        }, 50)
      }, 520)
    }
  }, 2400)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
#hero {
  background: transparent;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-rise {
  animation: rise 0.65s cubic-bezier(.25, .46, .45, .94) both;
}
</style>
