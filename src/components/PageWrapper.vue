<script setup lang="ts">
import Navbar from '../components/NavbarComponent.vue'
</script>

<template>
  <div class="main">
    <Navbar />
    <slot></slot>
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
  background-color: oklch(var(--b2));
}
</style>
