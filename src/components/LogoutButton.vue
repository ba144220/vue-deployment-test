<template>
  <button
    @click="handleSignOut"
    class="block border-2 border-gray-400 hover:border-gray-800 p-2 pl-4 pr-4 ml-3 mr-3 rounded-lg"
  >
    <h1 class="font-bold">Logout</h1>
  </button>
</template>

<script setup>
import "../assets/tailwind.css";
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const auth = getAuth();
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style></style>
