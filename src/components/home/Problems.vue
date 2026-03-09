<template>
  <section id="problema" class="bg-transparent py-20 px-8 relative overflow-hidden">
    <!-- Noise -->
    <NoiseBackground target-id="problema" />

    <div class="max-w-[1200px] mx-auto relative z-[1]">
      <!-- Eyebrow -->
      <div class="flex justify-center items-center gap-2 text-[0.72rem] font-bold tracking-[0.09em] uppercase text-primary mb-5">
        <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
        El problema actual
      </div>

      <!-- Title -->
      <h2 class="font-heading text-[clamp(1.9rem,4vw,3rem)] tracking-tight text-ink leading-[1.1] text-center max-w-[800px] mx-auto mb-[1.4rem]">
        <span class="font-light text-ink-3 block">Las cadenas tradicionales</span>
        <span class="font-extrabold text-ink block">pierden el control de sus datos.</span>
      </h2>

      <!-- Subtitle -->
      <p class="text-base font-normal text-ink-2 leading-[1.65] text-center max-w-[540px] mx-auto mb-14">
        Gestionar múltiples sucursales sin una plataforma integrada genera fricciones operativas y pérdida de oportunidades de venta.
      </p>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div v-for="(prob, index) in problems" :key="index" class="bg-surface-2/50 backdrop-blur-sm border border-border rounded-[14px] p-7 flex flex-col gap-3.5 transition-all duration-200 hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-1 group">
          <div class="w-11 h-11 rounded-[11px] bg-primary-s flex items-center justify-center shrink-0">
            <component :is="prob.icon" class="w-5 h-5 stroke-primary fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round" />
          </div>
          <h3 class="font-heading text-[1.05rem] font-bold tracking-tight text-ink leading-[1.25]">
            {{ prob.title }}
          </h3>
          <p class="text-[0.875rem] text-ink-3 leading-[1.65] flex-1">
            {{ prob.desc }}
          </p>
          <div class="inline-flex items-center gap-1.5 text-[0.76rem] font-semibold text-primary bg-primary-s rounded-md px-3 py-1 self-start">
            <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
            {{ prob.badge }}
          </div>
        </div>
      </div>

      <!-- Closing -->
      <div class="bg-surface-2 border border-border rounded-[14px] p-10 mt-14 text-center">
        <h4 class="font-heading text-[1.1rem] font-bold text-ink tracking-tight mb-2">Ya no estás solo en esto</h4>
        <p class="text-[0.9rem] text-ink-2 leading-[1.6] max-w-[480px] mx-auto">
          Deenex centraliza cada punto de contacto para que tu marca crezca de forma autónoma y controlada.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'
import NoiseBackground from '../ui/NoiseBackground.vue'

// Basic icons as functional components
const IconCloud = () => h('svg', { viewBox: '0 0 24 24' }, [h('path', { d: 'M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2-1.3-3.7-3.2-4.2-.3-2.6-2.6-4.8-5.3-4.8s-5 2.2-5.3 4.8C6.3 10.8 5 12.5 5 14.5 5 17 7 19 9.5 19' })])
const IconHash = () => h('svg', { viewBox: '0 0 24 24' }, [h('line', { x1: '4', y1: '9', x2: '20', y2: '9' }), h('line', { x1: '4', y1: '15', x2: '20', y2: '15' }), h('line', { x1: '10', y1: '3', x2: '8', y2: '21' }), h('line', { x1: '16', y1: '3', x2: '14', y2: '21' })])
const IconBar = () => h('svg', { viewBox: '0 0 24 24' }, [h('line', { x1: '12', y1: '20', x2: '12', y2: '10' }), h('line', { x1: '18', y1: '20', x2: '18', y2: '4' }), h('line', { x1: '6', y1: '20', x2: '6', y2: '16' })])

const problems = [
  { 
    title: 'Datos Dispersos', 
    desc: 'Cada sucursal opera como una isla, sin conexión real con el resto de la cadena.', 
    icon: IconCloud, 
    badge: 'Sin Centralización' 
  },
  { 
    title: 'Fidelización Nula', 
    desc: 'Los clientes no vuelven porque no hay incentivos personalizados que los atraigan.', 
    icon: IconHash, 
    badge: 'Baja Retención' 
  },
  { 
    title: 'Gestión Manual', 
    desc: 'Cargar cupones, promociones y menús en cada App es lento y propenso a errores.', 
    icon: IconBar, 
    badge: 'Ineficiencia' 
  },
]
</script>
