<template>
  <section id="plataforma" class="py-20 px-4 md:px-8 relative overflow-hidden bg-transparent">
    <div class="max-w-[1240px] mx-auto relative z-10">
      
      <!-- Studio Header: Editorial Grouped Layout -->
      <div class="mb-24">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-12 w-full">
           <!-- Title Group (Centered on mobile, Left on Desktop) -->
           <div class="text-center lg:text-left">
              <h2 class="text-3xl md:text-5xl font-bold text-ink tracking-tighter leading-none">
                Control Total <br/>
                <span class="text-primary italic font-light lowercase">en un Hub compacto.</span>
              </h2>
           </div>

           <!-- Desktop Only: Far Right Aligned Quote -->
           <div class="hidden lg:block max-w-[420px] text-right relative lg:ml-auto">
              <div class="absolute -left-12 top-0 bottom-0 w-px bg-primary/10"></div>
              <p class="text-ink-3 font-semibold text-[0.88rem] leading-relaxed italic pr-2">
                "Unificamos todas las métricas operativas en un solo panel de control inteligente y predictivo."
              </p>
           </div>
        </div>
      </div>

      <!-- Suite Canvas Card -->
      <div class="relative bg-primary rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl shadow-primary/20 border border-white/5 group">
        
        <!-- Texture & Depth Overlay (Matched from Logistica) -->
        <div class="absolute inset-0 z-0 pointer-events-none opacity-80 transition-transform duration-[15s] ease-out group-hover:scale-110">
           <img 
              src="https://ngc-mena.com/wp-content/uploads/2025/01/DataAnalytics.gif" 
              alt="Context animation" 
              class="w-full h-full object-cover grayscale brightness-200 opacity-50 mix-blend-overlay"
           />
           <div class="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-transparent"></div>
        </div>

        <!-- Designer Grain Texture -->
        <div class="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-[1]" style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center min-h-[420px] p-8 md:p-12 lg:p-16 gap-8 lg:gap-16">
          
          <!-- Navigation Dots (Desktop Left) -->
          <div class="hidden lg:flex lg:col-span-1 flex-col items-center gap-4">
            <button 
              v-for="(_, index) in features" 
              :key="index"
              @click="currentIndex = index"
              class="group/dot relative p-2 transition-all duration-300"
            >
              <div 
                class="w-1.5 transition-all duration-500 rounded-full"
                :class="currentIndex === index ? 'h-8 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'h-3 bg-white/30 group-hover/dot:bg-white/60'"
              ></div>
            </button>
          </div>

          <!-- Image Showcase (Middle) -->
          <div class="lg:col-span-5 flex items-center justify-center order-2 lg:order-2">
            <transition name="hub-compact" mode="out-in">
              <div :key="currentIndex" class="w-full">
                <!-- White Box for Image -->
                <div class="bg-white rounded-[32px] p-8 lg:p-12 shadow-2xl flex items-center justify-center aspect-[4/3] w-full transform transition-all duration-700 hover:scale-[1.02]">
                  <img 
                    :src="features[currentIndex].img" 
                    :alt="features[currentIndex].titleBold" 
                    class="w-full h-auto object-contain max-h-full drop-shadow-sm"
                  />
                </div>
              </div>
            </transition>
          </div>

          <!-- Text Details (Right) -->
          <div class="lg:col-span-6 text-white order-1 lg:order-3">
            <transition name="hub-compact" mode="out-in">
              <div :key="currentIndex">
                <div class="mb-8">
                  <h3 class="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight opacity-90 leading-tight">
                    {{ features[currentIndex].titleThin }}
                  </h3>
                  <h3 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
                    {{ features[currentIndex].titleBold }}
                  </h3>
                </div>
                
                <p class="text-lg md:text-xl text-white/80 font-light italic leading-relaxed max-w-xl">
                  {{ features[currentIndex].desc }}
                </p>

                <!-- Mobile Navigation Dots -->
                <div class="flex lg:hidden items-center gap-3 mt-10">
                  <button 
                    v-for="(_, index) in features" 
                    :key="index"
                    @click="currentIndex = index"
                    class="h-1.5 transition-all duration-500 rounded-full"
                    :class="currentIndex === index ? 'w-10 bg-white' : 'w-4 bg-white/30'"
                  ></button>
                </div>
              </div>
            </transition>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'

const currentIndex = ref(0)

const features = [
  { 
    titleThin: 'Dashboards', 
    titleBold: 'Operativos',
    desc: 'Visualizá facturación y ticket promedio en tiempo real. Obtené una visión 360° de tu operación para tomar decisiones basadas en datos concretos.', 
    img: '/assets/images/stadistics/analisis-de-facturacion.png',
  },
  { 
    titleThin: 'Embudo de', 
    titleBold: 'Comportamiento',
    desc: 'Identificá fugas de ventas mediante IA. Un cliente promedio abandona el carrito el 70% de las veces; recuperalos con automatizaciones inteligentes.', 
    img: '/assets/images/stadistics/embudo-de-comportamiento.png',
  },
  { 
    titleThin: 'Frecuencia', 
    titleBold: 'de Compra',
    desc: 'Promedio de veces que un cliente compra en el periodo. Un cliente registrado suele comprar hasta 3.00x veces más seguido que el promedio general.', 
    img: '/assets/images/stadistics/valor-retencion.png',
  }
]
</script>

<style scoped>
.hub-compact-enter-active, .hub-compact-leave-active {
  transition: all 0.4s ease-out;
}
.hub-compact-enter-from { opacity: 0; transform: scale(0.97); }
.hub-compact-leave-to { opacity: 0; transform: scale(1.03); }
</style>
