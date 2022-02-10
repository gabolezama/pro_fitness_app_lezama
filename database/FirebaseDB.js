// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxUHip_lclrDDNAG4vSnGgLQnDavuEr_w",
  authDomain: "pro-fitness-app-e4022.firebaseapp.com",
  projectId: "pro-fitness-app-e4022",
  storageBucket: "pro-fitness-app-e4022.appspot.com",
  messagingSenderId: "1029504115931",
  appId: "1:1029504115931:web:a18e31878b39c9e38418fe",
  measurementId: "G-8VG40JRF5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;