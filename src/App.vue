<template>
  <div class="antialiased font-sans text-ink-2 min-h-screen relative selection:bg-primary/10 selection:text-primary bg-surface-2">
    <!-- Global Noise Background -->
    <NoiseBackground class="fixed inset-0 w-full h-full pointer-events-none opacity-[0.032] z-0" />

    <div class="relative z-10 flex flex-col min-h-screen">
      <!-- Layout -->
      <Navbar />

      <main class="flex-grow">
        <Hero id="hero" />
        <Brands />
        <Infra id="infraestructura" />
        <Logistica id="logistica" />
        <Loyalty id="fidelizacion" />
        <Marketing id="automatizacion" />
        <Plataforma id="plataforma" />
        <Pricing id="planes" />
        <Metrics id="social-band" />
      </main>

      <!-- Footer Simple -->
      <footer class="bg-transparent border-t border-border py-12 px-8">
        <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/assets/images/deenex-logo.svg" alt="Deenex Logo" class="h-4 brightness-0 opacity-40" />
          <p class="text-[0.8rem] text-ink-3">© 2025 Deenex. Todos los derechos reservados.</p>
          <div class="flex gap-6 text-[0.8rem] text-ink-3">
            <a href="#" class="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" class="hover:text-primary transition-colors">Términos</a>
          </div>
        </div>
      </footer>
      <!-- WhatsApp Floating Button -->
      <WhatsAppFloat />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
import NoiseBackground from './components/ui/NoiseBackground.vue'
import Hero from './components/home/Hero.vue'
import Brands from './components/home/Brands.vue'
import Infra from './components/home/Infra.vue'
import Loyalty from './components/home/Loyalty.vue'
import Marketing from './components/home/Marketing.vue'
import Pricing from './components/home/Pricing.vue'
import Metrics from './components/home/Metrics.vue'
import Plataforma from './components/home/Plataforma.vue'
import Logistica from './components/home/Logistica.vue'
import WhatsAppFloat from './components/ui/WhatsAppFloat.vue'
</script>

<style>
/* Global resets or overrides if needed */
</style>
