<template>
  <button class="flex items-center border-2 ml-5 mr-5 pl-2 pr-2 m-2" @click="handleClick">
    <img class="h-10" alt="Vue logo" src="../assets/logo.png" />
    <h1 class="font-bold text-3xl ml-3">Logo</h1>
  </button>
</template>

<script setup>
import "../assets/tailwind.css";
import { useRouter } from "vue-router";
const router = useRouter();
const handleClick = () => {
  router.push({ name: "home" });
};
</script>

<style></style>
