// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDj02QMKm-KOrWthWL2ISezDmuZ5LXebxs",
  authDomain: "rotana-cinema.firebaseapp.com",
  projectId: "rotana-cinema",
  storageBucket: "rotana-cinema.firebasestorage.app",
  messagingSenderId: "393294757148",
  appId: "1:393294757148:web:1e0ccc4a688b96cc4f8ed9",
  measurementId: "G-T3QX9BN7HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
