<template>
  <section id="infraestructura" class="py-24 px-8 relative bg-transparent">
    <div class="max-w-[1240px] mx-auto">
      
      <!-- Studio Header: Editorial Grouped Layout -->
      <div class="mb-24">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-12 w-full">
           <!-- Title Group (Centered on mobile, Left on Desktop) -->
           <div class="text-center lg:text-left">
              <h2 class="text-3xl md:text-5xl font-bold text-ink tracking-tighter leading-none">
                Gestión centralizada para <br/>
                <span class="text-primary italic font-light lowercase">tu expansión regional.</span>
              </h2>
           </div>

           <!-- Desktop Only: Far Right Aligned Quote -->
           <div class="hidden lg:block max-w-[400px] text-right relative lg:ml-auto">
              <div class="absolute -left-12 top-0 bottom-0 w-px bg-primary/10"></div>
              <p class="text-ink-3 font-semibold text-[0.88rem] leading-relaxed italic pr-2">
                "Controlá ventas, stock y operaciones de cada sucursal desde un solo panel administrativo de alta gama."
              </p>
           </div>
        </div>
      </div>

      <!-- SaaS Cards: Persistent Active Icons -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        <div v-for="item in features" :key="item.title" 
             class="bg-white border border-border rounded-2xl p-8 shadow-sm group hover:shadow-md transition-all duration-300">
          <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white mb-6">
             <component :is="item.icon" class="w-5 h-5" />
          </div>
          <h3 class="text-[1.1rem] font-bold text-ink mb-3 tracking-tight italic">{{ item.title }}</h3>
          <p class="text-[0.85rem] text-ink-3 leading-relaxed font-medium">
            {{ item.desc }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const features = [
  { 
    title: 'Canal Propio (Web & App)', 
    desc: 'Publicamos tu propia Web y Apps oficiales en App Store y Play Store. Sin comisiones por venta y con total soberanía de tus clientes.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': '2.5' }, [h('path', { d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' })])
  },
  { 
    title: 'Supervisión Centralizada', 
    desc: 'Controlá ventas, stock y operaciones de cada sucursal desde un solo panel administrativo diseñado para cadenas masivas.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': '2.5' }, [h('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2' }), h('path', { d: 'M3 9h18M9 21V9' })])
  },
  { 
    title: 'Estrategia Regional', 
    desc: 'Acompañamiento profesional a través de Deenex Academy para profesionalizar la gestión operativa de tus sucursales.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': '2.5' }, [h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }), h('circle', { cx: '9', cy: '7', r: '4' })])
  }
]
</script>

<style scoped>
/* Clean corporate styles */
</style>
