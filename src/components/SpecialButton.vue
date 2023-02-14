<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import '../style.css';
interface Props {
  variant?: 'icon-text' | 'text-icon' | 'text' | 'icon';
  direction?: 'left' | 'right';
  type?: 'primary' | 'secondary';
  color?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'text',
  direction: 'right',
  type: 'primary',
  disabled: false,
});

const handleColor = (color?: string, type?: 'primary' | 'secondary') => {
  switch (color) {
    case 'error':
      return type == 'primary' ? 'text-white bg-red-80' : 'btn-error';
    case 'warning':
      return type == 'primary' ? 'text-white bg-orange-90' : 'btn-warning';
    case 'success':
      return type == 'primary' ? 'text-white bg-green-80' : 'btn-success';
    default:
      return '';
  }
};
</script>

<script lang="ts">
export default {
  name: 'SpecialButton',
  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
  computed: {
    arrowIcon() {
      const capitalize = (s: string) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      let direction = capitalize(this.direction);
      let type = capitalize(this.type);
      return defineAsyncComponent(
        () => import(`./icons/${direction}${type}.vue`)
      );
    },
  },
};
</script>

<template>
  <button
    :disabled="disabled"
    @click="onClick"
    :class="`btn ${type == 'primary' ? 'btn-primary' : 'btn-secondary'} 
    ${variant == 'text-icon' && 'flex-row-reverse'} 
    ${variant == 'icon' ? 'px-2' : 'px-6'}
    ${handleColor(color, type)}`"
  >
    <div v-if="variant !== 'text'" class="w-6 h-6">
      <component :is="arrowIcon" />
    </div>
    <div v-if="variant !== 'icon'"><slot /></div>
  </button>
</template>
