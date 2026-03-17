<template>
  <section id="logistica" class="px-8 relative bg-transparent overflow-hidden mb-24">
    <div class="max-w-[1240px] mx-auto relative z-10">
      
      <!-- Studio Header: Editorial Grouped Layout -->
      <div class="mb-24">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-12 w-full">
           <!-- Title Group (Centered on mobile, Left on Desktop) -->
           <div class="text-center lg:text-left">
              <h2 class="text-3xl md:text-5xl font-bold text-ink tracking-tighter leading-none">
                Tu marca al frente, <br/>
                <span class="text-primary italic font-light lowercase">la operación bajo control.</span>
              </h2>
           </div>

           <!-- Desktop Only: Far Right Aligned Quote -->
           <div class="hidden lg:block max-w-[420px] text-right relative lg:ml-auto">
              <div class="absolute -left-12 top-0 bottom-0 w-px bg-primary/10"></div>
              <p class="text-ink-3 font-semibold text-[0.88rem] leading-relaxed italic pr-2">
                "Blindamos tu base de datos y la recurrencia con una experiencia logística 100% nativa."
              </p>
           </div>
        </div>
      </div>

      <!-- Studio Canvas: The Modern Logistic Square -->
      <div class="relative bg-primary rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl shadow-primary/20 border border-white/5 group">
        
        <!-- Texture & Depth Overlay -->
        <div class="absolute inset-0 z-0 pointer-events-none opacity-80 transition-transform duration-[15s] ease-out group-hover:scale-110">
           <img 
              src="https://cdn.techinasia.com/wp-content/uploads/2021/08/1629359887_newsletter-gif-happyfresh-1920x1080-1.gif" 
              alt="Context animation" 
              class="w-full h-full object-cover grayscale brightness-200 opacity-50 mix-blend-overlay"
           />
           <div class="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-transparent"></div>
        </div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 w-full h-full items-center min-h-[420px]">
          
          <!-- Column 01: Typographic Narrative (Left) -->
          <div class="lg:col-span-7 xl:col-span-8 p-10 md:p-14 lg:px-20 lg:py-12">
             <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div v-for="(v, i) in protocol" :key="v.title" class="space-y-4">
                   <div class="flex flex-col gap-2">
                      <span class="text-[0.55rem] font-black text-white/30 uppercase tracking-[0.3em] font-mono leading-none tracking-widest italic">Protocol {{ i+1 }}</span>
                      <h3 class="text-xl font-black text-white tracking-tight italic border-b border-white/10 pb-2 transition-all group-hover:border-white/30">{{ v.title }}</h3>
                   </div>
                   <p class="text-white/60 text-[0.82rem] font-medium leading-relaxed max-w-[320px]">
                      {{ v.desc }}
                   </p>
                </div>
             </div>
          </div>

          <!-- Column 02: Precision Showcase Interface (Right) -->
          <div class="lg:col-span-5 xl:col-span-4 p-8 lg:pr-16 flex items-center justify-center xl:justify-end text-ink">
             <div class="relative w-full max-w-[200px]">
                
                <!-- Studio Grade Phone (Static & Compact) -->
                <div class="relative bg-black rounded-[42px] p-2.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border-[2.5px] border-white/10">
                   <div class="relative w-full aspect-[9/19] bg-[#F4F4F7] rounded-[34px] overflow-hidden border-[1px] border-black/80">
                      
                      <!-- Interaction Map Animation -->
                      <img 
                         src="https://www.upperinc.com/wp-content/uploads/2022/05/upper-route-plan-1.gif" 
                         alt="UX" 
                         class="w-full h-full object-cover grayscale-[0.2] opacity-80"
                      />

                   </div>
                   <!-- Notch -->
                   <div class="absolute top-5 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-black rounded-full z-20 shadow-inner"></div>
                </div>

                <!-- Ground Shadow for Object Depth -->
                <div class="absolute -bottom-6 inset-x-0 mx-auto w-1/2 h-8 bg-black/40 blur-3xl opacity-40 rounded-full"></div>
             </div>
          </div>

        </div>

        <!-- Designer Grain Texture -->
        <div class="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>
      </div>

    </div>
  </section>
</template>

<script setup>
const protocol = [
  { 
    title: 'Marca Blanca', 
    desc: 'Tracking 100% bajo tu dominio. El cliente interactúa exclusivamente con tu estética corporativa.' 
  },
  { 
    title: 'Despacho Inteligente', 
    desc: 'Algoritmos propietarios que orquestan el despacho regional basado en performance y costo.' 
  },
  { 
    title: 'Blindaje de Datos', 
    desc: 'Toda la base de clientes y métricas operativas al 100% bajo tu dominio. Control total de tu tráfico.' 
  },
  { 
    title: 'Monitoring Central', 
    desc: 'Consola unificada para gestionar flota propia y externa con métricas de servicio en tiempo real.' 
  }
]
</script>

<style scoped>
/* Purely Technical & Static */
</style>
