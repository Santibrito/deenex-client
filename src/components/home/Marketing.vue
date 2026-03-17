<template>
  <section id="marketing" class="py-24 px-8 relative overflow-hidden bg-transparent">
    <!-- Background Accents -->
    
    <div class="max-w-[1240px] mx-auto relative z-10">
      
      <!-- Studio Header -->
      <div class="mb-20">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-12 w-full">
           <div class="text-center lg:text-left">
              <h2 class="text-3xl md:text-5xl font-bold text-ink tracking-tighter leading-none">
                Canal propio <br/>
                <span class="text-primary italic font-light lowercase">sin comisiones, impacto directo.</span>
              </h2>
           </div>
           <div class="hidden lg:block max-w-[420px] text-right relative lg:ml-auto">
              <div class="absolute -left-12 top-0 bottom-0 w-px bg-primary/10"></div>
              <p class="text-ink-3 font-semibold text-[0.88rem] leading-relaxed italic pr-2">
                "Lanzá tu propia Web y App sin pagar comisiones por tus ventas. Usá WhatsApp Marketing para reactivar clientes y disparar tu rentabilidad."
              </p>
           </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <!-- Logic Narrative (Left) -->
        <div class="lg:col-span-5 space-y-12 order-2 lg:order-1">
          <div v-for="(step, i) in steps" :key="i" class="flex gap-6 group">
            <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-black text-sm transition-all group-hover:bg-primary group-hover:text-white">
              0{{ i + 1 }}
            </div>
            <div class="space-y-2">
              <h4 class="text-xl font-bold text-ink">{{ step.title }}</h4>
              <p class="text-ink-3 text-[0.9rem] leading-relaxed">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>

        <!-- Visual Stage (Right) -->
        <div class="lg:col-span-7 flex items-center justify-center order-1 lg:order-2">
          <div class="relative w-full max-w-[440px]">
            
            <!-- Floating Automation Cards -->
            <div class="absolute -left-12 top-10 z-20 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/50 animate-bounce-slow">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p class="text-[0.6rem] font-black text-ink/40 uppercase tracking-widest">IA Trigger</p>
                  <p class="text-[0.75rem] font-bold text-ink">Fuga de venta detectada</p>
                </div>
              </div>
            </div>

            <div class="absolute -right-8 bottom-20 z-20 bg-primary p-4 rounded-2xl shadow-2xl border border-white/10 animate-float">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <p class="text-[0.6rem] font-black text-white/50 uppercase tracking-widest">Action</p>
                  <p class="text-[0.75rem] font-bold text-white">Cupón 15% enviado</p>
                </div>
              </div>
            </div>

            <!-- Phone GIF Container -->
            <div class="relative mx-auto w-full max-w-[320px]">
               <img 
                  src="/assets/images/telefono.gif" 
                  alt="Phone animation" 
                  class="w-full h-auto"
               />
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { 
    title: 'Canal Propio (Web & App)', 
    desc: 'Lanzamos tu propio ecommerce corporativo integrado. Sin intermediarios, sin comisiones por pedido y con el control total de tu marca.' 
  },
  { 
    title: 'WhatsApp Marketing Suite', 
    desc: 'Campañas directas al bolsillo del cliente. Automatizá envíos personalizados y reactivá clientes inactivos con tasas de apertura del 90%.' 
  },
  { 
    title: 'Reactivación & Fidelidad', 
    desc: 'Detectamos clientes en riesgo y disparamos incentivos automáticos. Convertí tu base de datos en una máquina de recompra constante.' 
  }
]
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}
</style>
