<script setup lang="ts">
import { ref } from 'vue';

let visible = ref(true);
</script>

<template>
  <Alert :show="visible" @onClose="visible = false">
    <template #title>Testing one two three</template>
    <template #description>Testing one two three</template>
  </Alert>
  <SpecialButton type="primary" variant="icon" direction="left">
    Hello World
  </SpecialButton>
</template>
