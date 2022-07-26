<template>
  <button
    @click="handleClick"
    class="block border-2 border-gray-400 hover:border-gray-800 p-2 pl-4 pr-4 ml-3 mr-3 rounded-lg"
  >
    <h1 class="font-bold">Sign In</h1>
  </button>

  <div
    v-if="show"
    class="fixed inset-0 backdrop-blur-sm bg-opacity-50 bg-gray-400 overflow-y-auto h-full w-full flex items-center justify-center"
    id="my-modal"
    @click.self="handleClick"
  >
    <div class="relative bg-white rounded-lg drop-shadow-xl md:w-1/2 w-5/6 max-w-sm m-auto">
      <button
        type="button"
        class="hidden md:flex absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        @click="handleClick"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
      <div class="py-6 px-6 lg:px-8">
        <h3 class="mb-4 text-xl font-medium text-gray-900">Sign in to our platform</h3>
        <form class="space-y-6" action="#" @submit.prevent="signIn">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@company.com"
              required
              v-model="email"
            />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              v-model="password"
            />
          </div>

          <button
            type="submit"
            class="mt-5 w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>
        </form>
        <p v-if="errMsg">{{ errMsg }}</p>
        <!-- <div class="w-full flex justify-center mt-5">
          <button
            @click="signInWithGoogle"
            class="flex items-center text-white bg-[#4285f4] hover:bg-[#1669F2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-1 py-1 text-center"
          >
            <div class="h-10 w-10 bg-slate-50 mr-5"><img src="../assets/google-48.png" /></div>
            <p class="text-lg font-bold mr-5">Login with Google</p>
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import "../assets/tailwind.css";
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
const show = ref(false);

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const handleClick = () => {
  show.value = !show.value;
  console.log("click");
};

const signIn = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/");
      console.log(auth.currentUser);
      handleClick();
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
// const signInWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(getAuth(), provider)
//     .then((result) => {
//       console.log(result.user);
//       router.push("/about");
//     })
//     .catch((error) => {});
// };
</script>

<style></style>
