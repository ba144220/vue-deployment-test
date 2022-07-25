<template>
  <div class="flex items-center w-full">
    <LogoButton />
    <nav class="md:flex hidden">
      <router-link v-for="page in pages" :key="page.name" class="m-5 ml-3 mr-3" :to="page.to">{{
        page.name
      }}</router-link>
    </nav>
    <div class="flex-grow"></div>
    <SignIn />
    <div class="block md:hidden mr-5">
      <button
        class="flex items-center px-3 py-3 border rounded text-teal-200 border-teal-400 hover:border-teal-800"
        @click="handleClick"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  </div>
  <nav class="flex flex-col md:hidden bg-orange-100" v-if="showNav">
    <router-link v-for="page in pages" :key="page.name" :to="page.to" class="p-3 w-full">{{ page.name }}</router-link>
  </nav>
</template>

<script setup>
import "../assets/tailwind.css";
import { ref } from "vue";
import LogoButton from "./LogoButton.vue";
import SignIn from "./SignIn.vue";
const showNav = ref(false);
const pages = ref([
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
]);
const handleClick = () => {
  showNav.value = !showNav.value;
};
</script>

<style>
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
