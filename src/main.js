import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5jlW6j4lXyb0K2o9hhIw4hrb75qKRH08",
  authDomain: "vue-deployment-test-c20e1.firebaseapp.com",
  projectId: "vue-deployment-test-c20e1",
  storageBucket: "vue-deployment-test-c20e1.appspot.com",
  messagingSenderId: "229526666525",
  appId: "1:229526666525:web:4f712498e82af41cc5f5f4",
  measurementId: "G-CF9MV77BT5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount("#app");
