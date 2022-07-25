<template>
  <header class="sticky top-0 z-50 bg-orange-200">
    <NavBar />
  </header>
  <router-view />
  <footer class="bg-slate-900"><Footer /></footer>
</template>

<script setup>
import "./assets/tailwind.css";
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
