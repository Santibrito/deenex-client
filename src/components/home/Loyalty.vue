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
      <div class="relative min-h-[500px] flex items-center justify-center">
        
        <!-- Background Ambient Glow -->

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          
          <!-- Left Column (Technical Specs) -->
          <div class="lg:col-span-3 space-y-24 order-2 lg:order-1 text-right">
             <div v-for="f in leftFeatures" :key="f.title" class="relative group">
                <h4 class="text-primary font-black text-[0.6rem] uppercase tracking-[0.4em] mb-3">{{ f.label }}</h4>
                <p class="text-xl font-bold text-ink leading-tight mb-2">{{ f.title }}</p>
                <p class="text-ink-3 text-[0.8rem] leading-relaxed max-w-[220px] ml-auto">
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
                   <!-- Lines to Left -->
                   <path d="M40 80 L-60 80" class="stroke-primary/20" stroke-width="1.5" fill="none" />
                   <circle cx="40" cy="80" r="3" class="fill-primary" />
                   
                   <path d="M40 250 L-60 250" class="stroke-primary/20" stroke-width="1.5" fill="none" />
                   <circle cx="40" cy="250" r="3" class="fill-primary" />

                   <!-- Lines to Right -->
                   <path d="M480 80 L580 80" class="stroke-primary/20" stroke-width="1.5" fill="none" />
                   <circle cx="480" cy="80" r="3" class="fill-primary" />
                   
                   <path d="M480 250 L580 250" class="stroke-primary/20" stroke-width="1.5" fill="none" />
                   <circle cx="480" cy="250" r="3" class="fill-primary" />
                </svg>

                <!-- Card Body -->
                <div class="relative z-10 rounded-[28px] bg-gradient-to-br from-[#411BB3] via-[#331494] to-ink overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border border-white/10 ring-1 ring-white/5 ring-inset">
                   <img 
                      src="/assets/images/prueba.svg" 
                      alt="Membership Asset" 
                      class="w-full h-auto object-contain select-none "
                   />
                   <!-- Grain & Reflection -->
                   <div class="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                   <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                </div>

                <!-- Strategic Bottom Shadow -->
                <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/40 blur-[50px] opacity-25 rounded-full scale-y-50"></div>
             </div>
          </div>

          <!-- Right Column (Impact Metrics) -->
          <div class="lg:col-span-3 space-y-24 order-3 text-left">
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
  { label: 'Control Total', title: 'Data Ownership', desc: 'Los datos son tuyos. Tracking 100% bajo tu dominio corporativo sin intermediarios.' },
  { label: 'Ecosistema', title: 'Marca Blanca', desc: 'Todo el entorno visual responde exclusivamente a tu identidad de marca.' }
]

const rightFeatures = [
  { label: 'Performance', title: 'Recurrencia Real', value: '4.2x', subLabel: 'en frecuencia' },
  { label: 'Crecimiento', title: 'Retención VIP', value: '+28%', subLabel: 'clientes fans' }
]
</script>

<style scoped>
#fidelizacion {
   padding-bottom: 5rem;
}
</style>
