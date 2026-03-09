<template>
  <button
    v-if="!to"
    :class="[
      classes,
      variantClasses[variant]
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
  <router-link
    v-else-if="isRoute"
    :to="to"
    :class="[
      classes,
      variantClasses[variant]
    ]"
    v-bind="$attrs"
  >
    <slot />
  </router-link>
  <a
    v-else
    :href="to"
    :class="[
      classes,
      variantClasses[variant]
    ]"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary' // primary, ghost, nav, secondary
  },
  to: {
    type: String,
    default: ''
  },
  isRoute: {
    type: Boolean,
    default: false
  }
})

const classes = 'font-sans inline-flex items-center justify-center transition-all duration-200'

const variantClasses = {
  primary: 'bg-primary text-white font-semibold px-6 py-3.5 rounded-[7px] border-[1.5px] border-primary hover:bg-primary-hover hover:border-primary-hover tracking-tight',
  ghost: 'text-ink-3 font-medium px-1 py-3.5 hover:text-ink tracking-tight',
  nav: 'px-[1.15rem] py-[0.48rem] bg-white text-primary text-[0.82rem] font-semibold rounded-md shadow-btn hover:bg-white/90 hover:shadow-btn-hover tracking-tight',
  outline: 'border border-border bg-white text-ink font-medium px-4 py-2.5 rounded-lg hover:bg-surface-2 hover:border-primary/20'
}
</script>
