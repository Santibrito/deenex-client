<template>
  <section id="brands" class="bg-transparent py-12 px-8 relative overflow-hidden">
    <div class="max-w-[1240px] mx-auto relative z-10">
      <!-- Center Title (Eyebrow only) -->
      <div class="flex flex-col items-center text-center mb-10 transition-all duration-700 animate-rise">
        <p class="inline-flex items-center gap-3 text-[0.72rem] md:text-[0.78rem] font-bold tracking-[0.14em] uppercase text-primary">
          <span class="w-8 h-px bg-primary opacity-20"></span>
          Conectamos con el ecosistema líder
          <span class="w-8 h-px bg-primary opacity-20"></span>
        </p>
      </div>

        <!-- Brands Scroll -->
        <div class="w-full relative overflow-hidden group">
          <!-- Soft Gradient Blurs for infinite transition -->
          <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f0edff] to-transparent z-10 pointer-events-none"></div>
          <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f0edff] to-transparent z-10 pointer-events-none"></div>

          <!-- Marquee Track -->
          <div class="flex items-center gap-12 md:gap-18 animate-marquee whitespace-nowrap py-4">
            <div v-for="(logo, i) in doubleLogos" :key="i" class="flex-shrink-0 flex items-center justify-center w-[95px] md:w-[125px] h-9 md:h-11">
              <img 
                :src="logo.src" 
                :alt="logo.name" 
                class="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  { name: 'Fabric Sushi', src: '/assets/images/header.svg' }, // Usando el asset disponible como placeholder
  { name: 'Coquitos', src: '/assets/images/sponsor/coquitos-logo.jpeg' },
  { name: 'La Fabrica', src: '/assets/images/sponsor/la-fabrica-logo.png' },
  { name: 'Monti', src: '/assets/images/sponsor/monti-logo.png' },
  { name: 'Quem', src: '/assets/images/sponsor/quem-logo.png' },
  { name: 'Somos Palta', src: '/assets/images/sponsor/somos-palta-logo.svg' },
]

// Duplicate logos for seamless loop
const doubleLogos = [...logos, ...logos, ...logos]
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 45s linear infinite;
}

/* Rediseñamos el marquee para que sea más fluido con 3 juegos de logos */
</style>
