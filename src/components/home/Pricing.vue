<template>
  <section id="planes" class="py-20 px-8 bg-transparent">
    <div class="max-w-[1200px] mx-auto">
      
      <!-- Corporate Header -->
      <div class="text-center mb-16">
        <h2 class="text-[1.85rem] font-bold text-ink tracking-tight mb-3">Modelos de Inversión</h2>
        <p class="text-[0.95rem] text-ink-2 max-w-[500px] mx-auto leading-relaxed">
          Estructura modular diseñada para acompañar el crecimiento de tu operación local y regional.
        </p>
      </div>

      <!-- SaaS Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        
        <!-- Module 1: Ventas -->
        <div class="bg-white border border-border rounded-2xl flex flex-col p-6 shadow-sm">
          <div class="mb-6">
            <span class="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[0.6rem] font-bold uppercase tracking-wider rounded-md mb-2">Fundamental</span>
            <h3 class="text-lg font-bold text-ink">Ventas</h3>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-bold text-ink">USD 12</span>
              <span class="text-xs text-ink-3">/ canal</span>
            </div>
            <p class="text-[0.7rem] text-ink-3 font-medium uppercase tracking-tighter">+ local / mes • + IVA</p>
          </div>

          <div class="p-3 bg-primary/5 rounded-lg border border-primary/10 mb-6">
             <p class="text-[0.7rem] font-black text-primary mb-1 uppercase tracking-wider">0% Comisiones</p>
             <p class="text-[0.65rem] text-ink-3 leading-tight font-medium">Rentabilidad total. No pagues por cada venta que realices.</p>
          </div>

          <ul class="space-y-2.5 mb-8 flex-1">
            <li v-for="f in salesFeatures" :key="f" class="flex items-start gap-2 text-[0.75rem] text-ink-2">
              <span class="text-primary font-bold">✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>

          <button class="w-full py-2.5 bg-ink text-white text-[0.75rem] font-bold uppercase tracking-wider rounded-lg hover:bg-black transition-colors">
            Elegir Núcleo
          </button>
        </div>

        <!-- Module 2: Marketing -->
        <div class="bg-white border border-border rounded-2xl flex flex-col p-6 shadow-sm">
          <div class="mb-6">
            <span class="inline-block px-2 py-0.5 bg-green-500/10 text-green-600 text-[0.6rem] font-bold uppercase tracking-wider rounded-md mb-2">Lealtad</span>
            <h3 class="text-lg font-bold text-ink">Marketing</h3>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-bold text-ink">USD 15</span>
              <span class="text-xs text-ink-3">/ local</span>
            </div>
            <p class="text-[0.7rem] text-ink-3 font-medium uppercase tracking-tighter">Módulo Mensual • + IVA</p>
          </div>

          <ul class="space-y-2.5 mb-8 flex-1">
            <li v-for="f in mktFeatures" :key="f" class="flex items-start gap-2 text-[0.75rem] text-ink-2">
              <span class="text-green-600 font-bold">✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>

          <button class="w-full py-2.5 bg-surface-2 text-ink border border-border text-[0.75rem] font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-colors">
            Sumar Módulo
          </button>
        </div>

        <!-- Module 3: Deenex AI -->
        <div class="bg-white border-2 border-primary rounded-2xl flex flex-col p-6 shadow-md relative">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-primary text-white text-[0.55rem] font-black uppercase tracking-widest rounded-full">
            Diferencial IA
          </div>
          
          <div class="mb-6">
            <span class="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[0.6rem] font-bold uppercase tracking-wider rounded-md mb-2">Optimización</span>
            <h3 class="text-lg font-bold text-ink">Deenex AI</h3>
          </div>
          
          <div class="mb-6">
            <h4 class="text-sm font-bold text-ink italic leading-tight mb-1">Growth Engine Predictivo</h4>
            <p class="text-[0.7rem] text-ink-3">Automatización Inteligente</p>
          </div>

          <div class="bg-surface-2 p-3 rounded-lg border border-border/50 mb-6">
            <p class="text-[0.75rem] text-ink-2 leading-snug font-medium italic">
              Campañas vía WhatsApp integradas a tu base de datos de deenex.
            </p>
          </div>

          <ul class="space-y-2.5 mb-8 flex-1">
             <li class="flex items-start gap-2 text-[0.75rem] text-ink-2 font-bold">
               <span class="text-primary font-bold">✓</span>
               Captación Predictiva
             </li>
             <li class="flex items-start gap-2 text-[0.75rem] text-ink-2">
               <span class="text-primary font-bold">✓</span>
               Análisis de Recurrencia
             </li>
          </ul>

          <button class="w-full py-2.5 bg-primary text-white text-[0.75rem] font-bold uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity">
            Saber Más
          </button>
        </div>

        <!-- Module 4: Club Socios -->
        <div class="bg-white border border-border rounded-2xl flex flex-col p-6 shadow-sm">
          <div class="mb-6">
            <span class="inline-block px-2 py-0.5 bg-amber-500/10 text-amber-600 text-[0.6rem] font-bold uppercase tracking-wider rounded-md mb-2">Suscripciones VIP</span>
            <h3 class="text-lg font-bold text-ink">Club Socios</h3>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-bold text-ink">20%</span>
              <span class="text-xs text-ink-3 font-bold uppercase tracking-tighter">RevShare</span>
            </div>
            <p class="text-[0.7rem] text-ink-3 font-medium italic leading-none mt-1">Suscripciones solamente</p>
          </div>

          <ul class="space-y-2.5 mb-8 flex-1">
            <li v-for="f in clubFeatures" :key="f" class="flex items-start gap-2 text-[0.75rem] text-ink-2">
              <span class="text-amber-500 text-xs">★</span>
              <span>{{ f }}</span>
            </li>
          </ul>

          <button class="w-full py-2.5 bg-surface-2 text-ink border border-border text-[0.75rem] font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-colors">
            Activar Módulo
          </button>
        </div>
      </div>

      <!-- Economy of Scale Section -->
      <div class="border-t border-border pt-12">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h4 class="text-lg font-bold text-ink mb-1 tracking-tight">Economía de Escala</h4>
            <p class="text-[0.75rem] text-ink-2 leading-relaxed">Bonificaciones automáticas basadas en el volumen de sucursales activas.</p>
          </div>
          
          <div class="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div v-for="tier in economyTiers" :key="tier.name" class="p-4 border border-border rounded-xl bg-white text-center">
              <p class="text-[0.55rem] font-black text-ink-3 uppercase tracking-widest mb-1">{{ tier.name }}</p>
              <p class="text-[0.65rem] font-bold text-primary/40 mb-2">{{ tier.range }}</p>
              <p class="text-xl font-black text-ink tracking-tighter">{{ tier.discount }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-[0.85rem] text-ink-3 font-medium">
          ¿Buscás una solución Enterprise (+200 sucursales)? 
          <a href="#" class="text-primary font-bold border-b border-primary/20 hover:border-primary transition-all ml-1">Contactanos para un plan a medida</a>
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
const salesFeatures = [
  'Web & App propia (App Store)',
  'Gestión Omnicanal',
  'Órdenes QR, Mesa y Mostrador',
  'Logística integrada'
]

const mktFeatures = [
  'WhatsApp Marketing Suite',
  'IA para Reactivación',
  'Base de datos (CRM)',
  'Sistema de Puntos & Club'
]

const clubFeatures = [
  'Pagos recurrentes',
  'Membresías VIP',
  'Gestión de socios',
  'Beneficios Auto'
]

const economyTiers = [
  { name: 'Starter', range: '1-25 local', discount: 'Lista' },
  { name: 'Growth', range: '26-70 local', discount: '-10%' },
  { name: 'Scale', range: '71-150 local', discount: '-15%' },
  { name: 'Enterprise', range: '+150 local', discount: 'Custom' },
]
</script>

<style scoped>
/* Clean corporate styles */
</style>
