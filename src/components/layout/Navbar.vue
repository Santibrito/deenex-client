<template>
  <header
    id="navbar"
    class="fixed top-3.5 left-1/2 -translate-x-1/2 w-[min(1200px,calc(100%-32px))] z-[100] bg-primary rounded-xl border border-white/20 border-t-white/30 transition-all duration-300 backdrop-blur-[18px] animate-nav-drop overflow-hidden font-sans"
    :class="{ 'shadow-nav': isScrolled }"
  >
    <div class="px-6 h-[54px] flex items-center justify-between relative">
      <!-- Logo -->
      <a href="#hero" class="flex items-center transition-opacity hover:opacity-80 shrink-0">
        <img src="/assets/images/deenex-logo.svg" alt="Deenex" class="h-[18px] w-auto brightness-0 invert" />
      </a>

      <!-- Links centrados (Desktop) -->
      <nav aria-label="Navegación principal" class="hidden md:block absolute left-1/2 -translate-x-1/2">
        <ul class="flex items-center gap-0 list-none">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block px-[0.85rem] py-2 text-[0.82rem] font-medium text-white/65 hover:text-white transition-colors relative group"
              :class="{ '!text-white': activeSection === link.href.substring(1) }"
              @click="activeSection = link.href.substring(1)"
            >
              {{ link.label }}
              <span
                class="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-white rounded-full transition-transform duration-300 origin-center scale-x-0 group-hover:scale-x-100"
                :class="{ '!scale-x-100': activeSection === link.href.substring(1) }"
              ></span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Acciones -->
      <div class="flex items-center gap-2 shrink-0">
        <a 
          href="#demo" 
          class="hidden md:inline-flex items-center px-[1.15rem] py-[0.48rem] bg-white text-primary text-[0.82rem] font-bold rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-white/90 hover:shadow-[0_2px_8px_rgba(0,0,0,0.10)] transition-all whitespace-nowrap tracking-tight"
        >
          Agendar Demo
        </a>
        
        <!-- Hamburger mobile -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden flex items-center justify-center w-11 h-11 text-white relative z-[110]"
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
            <path 
              class="transition-all duration-300 origin-center" 
              :class="{ 'translate-y-[5px] rotate-45': isMenuOpen }"
              d="M4 7h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
            />
            <path 
              class="transition-all duration-300"
              :class="{ 'opacity-0': isMenuOpen }"
              d="M4 12h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
            />
            <path 
              class="transition-all duration-300 origin-center"
              :class="{ '-translate-y-[5px] -rotate-45': isMenuOpen }"
              d="M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
            />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <transition
    enter-active-class="transition-transform duration-[450ms] ease-[cubic-bezier(0.77,0,0.18,1)]"
    leave-active-class="transition-transform duration-[450ms] ease-[cubic-bezier(0.77,0,0.18,1)]"
    enter-from-class="-translate-y-full"
    enter-to-class="translate-y-0"
    leave-from-class="translate-y-0"
    leave-to-class="-translate-y-full"
  >
    <div 
      v-show="isMenuOpen"
      class="fixed inset-0 z-[99] bg-white flex flex-col justify-center px-10"
    >
      <ul class="flex flex-col gap-0 list-none mt-8">
        <li v-for="(link, i) in navLinks" :key="link.href" class="border-b border-border transition-all duration-400 opacity-0 translate-y-2" :class="{ '!opacity-100 !translate-y-0': isMenuOpen }" :style="{ transitionDelay: `${0.1 + i * 0.05}s` }">
          <a 
            :href="link.href" 
            @click="isMenuOpen = false"
            class="flex items-center justify-between py-4 font-heading text-2xl font-bold tracking-tight text-ink hover:text-primary transition-all group relative"
            :class="{ 'text-primary': activeSection === link.href.substring(1) }"
          >
            <!-- Indicador activo (barra a la izquierda) -->
            <span 
              v-if="activeSection === link.href.substring(1)"
              class="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full"
            ></span>
            
            {{ link.label }}
            <span class="text-lg font-light text-ink-3 group-hover:translate-x-1 group-hover:text-primary transition-all opacity-40">→</span>
          </a>
        </li>
      </ul>
      <div class="mt-10 transition-all duration-400 opacity-0 translate-y-2 delay-300" :class="{ '!opacity-100 !translate-y-0': isMenuOpen }">
        <a 
          href="#demo" 
          @click="isMenuOpen = false" 
          class="block text-center py-3.5 bg-primary text-white text-[0.9375rem] font-semibold rounded-[7px] hover:bg-primary-hover transition-all tracking-tight shadow-sm"
        >
          Agendar Demo
        </a>
        <p class="mt-5 text-[0.78rem] font-medium text-ink-3 text-center opacity-60">Deenex — Sistema Operativo para Cadenas</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('hero')

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Infraestructura', href: '#infraestructura' },
  { label: 'Fidelización', href: '#fidelizacion' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Casos', href: '#casos' },
  { label: 'Planes', href: '#planes' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes nav-drop {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-14px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
.animate-nav-drop {
  animation: nav-drop 0.55s cubic-bezier(.34, 1.56, .64, 1) both;
}
.bg-white\/97 {
  background-color: rgba(255, 255, 255, 0.97);
}
</style>
