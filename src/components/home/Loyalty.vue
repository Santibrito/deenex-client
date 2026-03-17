<template>
  <section id="fidelizacion" class="py-20 px-8 relative bg-transparent overflow-hidden">
    <div class="max-w-[1240px] mx-auto relative z-10">
      
      <!-- Centralized Header: Clean & Symmetrical -->
      <div class="mb-2 flex justify-center w-full">
         <div class="text-center">
            <h2 class="text-3xl md:text-5xl font-bold text-ink tracking-tighter leading-none">
              Tu propia máquina de <br/>
              <span class="text-primary italic font-light lowercase">recurrencia y lealtad.</span>
            </h2>
         </div>
      </div>

      <!-- Diagram Stage: Central Card with Connectors -->
      <div class="relative min-h-[600px] flex items-center justify-center">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full py-12">
          
          <!-- Left Column (Technical Specs) -->
          <div class="lg:col-span-3 space-y-16 order-2 lg:order-1 text-right">
             <div v-for="f in leftFeatures" :key="f.title" class="relative group">
                <h4 class="text-primary font-black text-[0.6rem] uppercase tracking-[0.4em] mb-3">{{ f.label }}</h4>
                <p class="text-xl font-bold text-ink leading-tight mb-2">{{ f.title }}</p>
                <p class="text-ink-3 text-[0.8rem] leading-relaxed max-w-[240px] ml-auto">
                   {{ f.desc }}
                </p>
                
                <!-- Connector Line (Desktop Only) -->
                <div class="hidden lg:block absolute -right-12 top-1/2 w-12 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
             </div>
          </div>

          <!-- Center Column (The Hero Card) -->
          <div class="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
             <div class="relative w-full max-w-[520px] group">
                
                <!-- The Connection Diagram Layer (Desktop Only) -->
                <svg class="hidden lg:block absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0" viewBox="0 0 520 330">
                   <!-- Lines to Left (3 levels: 40, 165, 290) -->
                   <path d="M40 40 L-60 40" class="stroke-primary/20" stroke-width="1.5" fill="none" />
                   <circle cx="40" cy="40" r="3" class="fill-primary" />
                   
                   <path d="M40 165 L-60 165" class="stroke-primary/20" stroke-width="1.5" fill="none" />
                   <circle cx="40" cy="165" r="3" class="fill-primary" />

                   <path d="M40 290 L-60 290" class="stroke-primary/20" stroke-width="1.5" fill="none" />
                   <circle cx="40" cy="290" r="3" class="fill-primary" />
                   
                   <!-- Lines to Right -->
                   <path d="M480 40 L580 40" class="stroke-primary/20" stroke-width="1.5" fill="none" />
                   <circle cx="480" cy="40" r="3" class="fill-primary" />
                   
                   <path d="M480 165 L580 165" class="stroke-primary/20" stroke-width="1.5" fill="none" />
                   <circle cx="480" cy="165" r="3" class="fill-primary" />

                   <path d="M480 290 L580 290" class="stroke-primary/20" stroke-width="1.5" fill="none" />
                   <circle cx="480" cy="290" r="3" class="fill-primary" />
                </svg>

                <!-- Card Body -->
                <div class="relative z-10 rounded-[28px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
                   <img 
                      src="/assets/images/card.png" 
                      alt="Membership Asset" 
                      class="w-full h-auto object-contain select-none scale-20"
                   />
                   <!-- Grain & Reflection -->
            
                </div>

                <!-- Strategic Bottom Shadow -->
                <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/40 blur-[50px] opacity-25 rounded-full scale-y-50"></div>
             </div>
          </div>

          <!-- Right Column (Impact Metrics) -->
          <div class="lg:col-span-3 space-y-16 order-3 text-left">
             <div v-for="f in rightFeatures" :key="f.title" class="relative group">
                <h4 class="text-primary font-black text-[0.6rem] uppercase tracking-[0.4em] mb-3">{{ f.label }}</h4>
                <p class="text-xl font-bold text-ink leading-tight mb-2">{{ f.title }}</p>
                <div class="flex items-end gap-3 mb-2">
                   <span class="text-3xl font-black text-ink tracking-tighter">{{ f.value }}</span>
                   <span class="text-[0.65rem] font-bold text-ink-3 uppercase tracking-widest pb-1">{{ f.subLabel }}</span>
                </div>
                
                <!-- Connector Line (Desktop Only) -->
                <div class="hidden lg:block absolute -left-12 top-1/2 w-12 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
             </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const leftFeatures = [
  { label: 'Club de Socios', title: 'Membresías VIP', desc: 'Nueva fuente de monetización con suscripciones, beneficios exclusivos y tiers de fidelidad (Black Tier).' },
  { label: 'Ecosistema', title: 'Programa de Puntos', desc: 'Sistema masivo de clearing, cupones digitales y promociones avanzadas para impulsar la recompra.' },
  { label: 'Soberanía', title: 'CRM & Datos', desc: 'Toda la información, historial y perfiles unificados bajo control total de la marca, sin intermediarios.' }
]

const rightFeatures = [
  { label: 'Impacto', title: 'Frecuencia Real', value: '4.2x', subLabel: 'en recompra' },
  { label: 'Lealtad', title: 'Recurrencia VIP', value: '+15%', subLabel: 'en socios' },
  { label: 'Performance', title: 'Retención Real', value: '+28%', subLabel: 'de base' }
]
</script>

<style scoped>
#fidelizacion {
   padding-bottom: 5rem;
}
</style>


<style scoped>
#fidelizacion {
   padding-bottom: 5rem;
}
</style>
