<template>
  <section id="marketing" class="bg-surface py-20 px-8 relative overflow-hidden">
    <div class="max-w-[1240px] mx-auto px-5 relative z-10">
      <div class="flex flex-col items-center mb-16">
        <span class="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-primary mb-5 inline-flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Infraestructura Inteligente
        </span>
        <div class="relative flex flex-col items-center">
          <div class="absolute -top-6 text-[4rem] font-black text-ink/5 tracking-tighter select-none whitespace-nowrap">DECIDE EL EXITO POR TI</div>
          <h2 class="font-heading text-[clamp(2.2rem,4.5vw,3.2rem)] tracking-tight text-ink leading-none text-center relative z-10">
            Nuestra IA <span class="text-ink-3 font-light">no recomienda.</span>
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Card 01 -->
        <div class="bg-white border border-border rounded-2xl p-10 flex flex-col gap-6 relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          <div>
            <span class="text-[0.8rem] font-medium text-ink-3 block mb-1">Marketing Masivo vs. Decisiones 1 a 1</span>
            <h4 class="font-heading text-xl font-bold text-ink tracking-tight">El cambio de <b class="font-extrabold text-primary">Paradigma</b></h4>
          </div>
          <p class="text-[0.95rem] text-ink-2 leading-[1.65]">
            Superamos las campañas genéricas para entrar en la era de la <b>hiper-personalización</b>. Nuestra IA analiza el contexto de cada cliente para decidir el mensaje exacto.
          </p>

          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-surface-2 rounded-xl p-4 flex flex-col gap-3">
              <span class="text-[0.7rem] font-bold text-ink-3 uppercase tracking-wider">Tradicional</span>
              <img src="/assets/images/mkt/old-marketing.png" alt="Marketing Tradicional" class="w-full h-24 object-contain grayscale opacity-60" />
            </div>
            <div class="bg-primary-s rounded-xl p-4 flex flex-col gap-3 border border-primary/10 shadow-sm">
              <span class="text-[0.7rem] font-bold text-primary uppercase tracking-wider flex items-center gap-1">
                Motor Deenex <small class="text-[0.6rem] opacity-60">Realtime</small>
              </span>
              <img src="/assets/images/mkt/new-marketing.png" alt="Motor Deenex" class="w-full h-24 object-contain drop-shadow-md" />
            </div>
          </div>
        </div>

        <!-- Card 02 -->
        <div class="bg-primary rounded-2xl p-10 flex flex-col gap-6 relative overflow-hidden group text-white">
          <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div>
          <div class="relative z-10">
            <span class="text-[0.8rem] font-medium text-white/60 block mb-1">Activación Directa</span>
            <h4 class="font-heading text-xl font-bold text-white tracking-tight">Ejecución <b class="font-extrabold">Autónoma</b></h4>
          </div>
          <p class="text-[0.95rem] text-white/80 leading-[1.65] relative z-10">
            Convertimos datos en <b>disparadores de ventas</b> autónomos. Sin intervención humana, el motor identifica la oportunidad y ejecuta la acción.
          </p>

          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 relative z-10 mt-auto">
            <div class="flex justify-between items-center mb-2">
              <b class="text-[0.85rem] font-semibold text-white">Autonomía de Ejecución</b>
              <span class="text-xl font-black text-white">92%</span>
            </div>
            <div class="h-2 bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-white w-[92%] transition-all duration-1000 delay-300"></div>
            </div>
          </div>

          <ul class="flex flex-wrap gap-2 relative z-10 mt-4">
            <li v-for="f in ['E-Commerce Sync', 'Modelos Bayesianos', 'Predicción Contextual']" :key="f" class="text-[0.7rem] font-bold bg-white/10 px-3 py-1 rounded-full border border-white/5">
              {{ f }}
            </li>
          </ul>

          <Button variant="nav" class="!bg-white !text-primary !shadow-none !mt-4 self-start group/btn">
            Ver Motor de IA
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="ml-2 transition-transform group-hover/btn:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../ui/Button.vue'
</script>
