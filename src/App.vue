<script setup>
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Navbar/>
  <RouterView />
 <Hero title="Vue Project" subtitle="Created by Shanu Joshi for practice purpose" />
</template>

<style scoped>

</style>
