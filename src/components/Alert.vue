<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import '../style.css';
import SpecialButton from './SpecialButton.vue';
import CloseIcon from './icons/CloseIcon.vue';

interface Props {
  show: boolean;
  type?: 'info' | 'error' | 'warning' | 'success';
  pos?: 'top' | 'top-right' | 'top-left';
  buttonTextPrimary?: string;
  buttonTextSecondary?: string;
  title?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  pos: 'top-right',
});

const handlePosition = (pos: 'top' | 'top-right' | 'top-left') => {
  switch (pos) {
    case 'top':
      return 'abs-top';
    case 'top-right':
      return 'abs-topright';
    case 'top-left':
      return 'abs-topleft';
  }
};
</script>

<script lang="ts">
export default {
  name: 'Alert',
  methods: {
    onClickSecondary() {
      this.$emit('onClickSecondary');
    },
    onClickPrimary() {
      this.$emit('onClickPrimary');
    },
    checkSlot(slot: string) {
      return !!this.$slots[slot];
    },
    handleClose() {
      this.$emit('onClose');
    },
    onlyDescription() {
      return this.checkSlot('description') && !this.checkSlot('title');
    },
    onlyTitle() {
      return !this.checkSlot('description') && this.checkSlot('title');
    },
    alertIcon(type: string) {
      return defineAsyncComponent(() => import(`./icons/${type}Icon.vue`));
    },
  },
};
</script>

<template>
  <div
    v-if="show"
    :class="`notification ${type} absolute ${handlePosition(pos)} ${
      onlyDescription() ? 'p-3' : 'p-6'
    } ${onlyTitle() ? 'items-center' : 'items-start'}`"
  >
    <div :class="`${onlyDescription() ? 'w-6 h-6' : 'w-8 h-8'}`">
      <component :is="alertIcon(type)" />
    </div>
    <div class="grow flex flex-col gap-2">
      <div
        v-if="checkSlot('title')"
        data-test="title"
        class="order-none self-stretch"
      >
        <slot name="title" />
      </div>
      <div
        v-if="checkSlot('description')"
        data-test="description"
        class="font-normal order-1 self-stretch"
      >
        <slot name="description" />
      </div>
      <div
        v-if="buttonTextPrimary || buttonTextSecondary"
        class="flex pt-2 gap-4 order-2"
      >
        <SpecialButton
          v-if="buttonTextSecondary"
          :color="props.type"
          type="secondary"
          @onClick="onClickSecondary"
          >{{ buttonTextSecondary }}</SpecialButton
        >
        <SpecialButton
          v-if="buttonTextPrimary"
          :color="props.type"
          @onClick="onClickPrimary"
          >{{ buttonTextPrimary }}</SpecialButton
        >
      </div>
    </div>
    <button @click="handleClose" class="w-3 h-3">
      <CloseIcon name="Close" />
    </button>
  </div>
</template>
