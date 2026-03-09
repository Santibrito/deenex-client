<template>
  <section id="casos" class="py-24 px-8 relative overflow-hidden bg-primary overflow-hidden">
    <!-- Abstract Background shapes -->
    <div class="absolute -left-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-[80px]"></div>
    <div class="absolute -right-20 -bottom-20 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"></div>
    
    <div class="max-w-[1240px] mx-auto relative z-10">
      <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
        <!-- Studio Header: Technical Block Layout (Contrast) -->
        <div class="mb-16 flex flex-col items-center lg:items-start text-white">
          <div class="inline-flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 w-full">
            <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <span class="text-[0.62rem] font-black text-white uppercase tracking-[0.4em]">Case Study // 01</span>
                </div>
                <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none">
                  De 1 a 75 locales: <br/>
                  <span class="text-white/60 italic font-light lowercase">la escala real de Fabric.</span>
                </h2>
            </div>

            <div class="hidden lg:block w-px h-24 bg-white/10 mx-4"></div>

            <div class="max-w-[400px]">
                <p class="text-white/70 font-semibold text-[0.85rem] leading-relaxed italic border-l-4 border-white/20 pl-6 lg:border-none lg:pl-0">
                  "Descubrí cómo Fabric Sushi profesionalizó su ecosistema digital y recuperó su rentabilidad migrando a un canal 100% propio."
                </p>
            </div>
          </div>
        </div>
          
          <div class="grid grid-cols-2 gap-8">
             <div v-for="stat in stats" :key="stat.label" class="space-y-1">
                <p class="text-4xl font-extrabold text-white tracking-tighter">{{ stat.value }}</p>
                <p class="text-[0.75rem] font-bold text-white/50 uppercase tracking-widest">{{ stat.label }}</p>
             </div>
          </div>
          
          <div class="mt-14">
             <button class="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all active:scale-95">
                Leer historia completa
             </button>
          </div>
        <!-- Visual (Mockup or Image) -->
        <div class="flex-1 w-full flex justify-center">
           <div class="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border border-white/10">
              <!-- Placeholder for Success Image -->
              <div class="absolute inset-0 bg-ink/40 z-10 group-hover:bg-ink/20 transition-all duration-500"></div>
              <img src="/assets/images/header.svg" alt="Fabric Sushi Store" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
              
              <!-- Floating label -->
              <div class="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                 <div class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-2">
                    <!-- Brand Logo Placeholer -->
                    <span class="text-white font-black text-xs">FABRIC</span>
                 </div>
                 <div class="text-white">
                    <p class="text-[0.7rem] font-bold uppercase tracking-widest leading-none mb-1">Copa América Edition</p>
                    <p class="text-[0.55rem] opacity-60">Implementación Masiva 2024</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '+15%', label: 'Recurrencia' },
  { value: '+28%', label: 'Retención' },
  { value: '4.2x', label: 'Frecuencia' },
  { value: '75', label: 'Sucursales' }
]
</script>

<style scoped>
#casos {
  background: radial-gradient(circle at 70% 20%, #632df3 0%, #3b179d 100%);
}
</style>
