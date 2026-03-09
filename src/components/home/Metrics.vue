<template>
  <section id="agenda" class="py-24 px-4 md:px-8 relative overflow-hidden bg-transparent">
    <div class="max-w-[1240px] mx-auto relative z-10 text-center mb-16 px-4">
      <h2 class="text-4xl md:text-6xl font-black text-ink tracking-tight mb-6">
        Agendá una <span class="text-primary italic font-light lowercase">demo en vivo.</span>
      </h2>
      <p class="text-lg md:text-xl text-ink-3 max-w-2xl mx-auto font-light leading-relaxed italic">
        "Elegí el horario que mejor te quede y descubrí cómo podemos escalar tu operación al siguiente nivel."
      </p>
    </div>

    <!-- Calendar Container -->
    <div class="max-w-[1000px] mx-auto relative group">
      <!-- Glow Effect -->
      <div class="absolute inset-0 bg-primary/10 blur-[120px] rounded-[60px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700"></div>

      <!-- Calendar Frame -->
      <div class="relative bg-white rounded-[40px] shadow-2xl shadow-primary/10 border border-white p-4 min-h-[650px] overflow-hidden flex items-center justify-center">
        <!-- Google Calendar / Calendly Embed -->
        <!-- Google Calendar Appointment Scheduling begin -->
<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1iVqdXikThyQhseuQOwR7crtYe3QTRUCic_jg-ALAmmHKqys90plc5wbYn2vxMzYCwtlPohi-B?gv=true" style="border: 0" width="100%" height="600" frameborder="0"></iframe>
<!-- end Google Calendar Appointment Scheduling -->
      </div>

      <!-- Trust Badges or Meta -->
      <div class="mt-8 flex flex-wrap justify-center gap-8 opacity-40">
        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink">
          <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          Disponibilidad hoy
        </div>
        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Sesión de 30 min
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// En un entorno real, el script de Calendly se cargaría en el head o dinámicamente.
// He utilizado un iframe para máxima compatibilidad inmediata.
</script>

<style scoped>
/* Estilos adicionales si fueran necesarios */
</style>
