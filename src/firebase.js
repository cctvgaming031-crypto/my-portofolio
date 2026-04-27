// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBX-0qUQyEROelsU4-g5QKuzm8z19EUMjo",
  authDomain: "portofolio-putra.firebaseapp.com",
  projectId: "portofolio-putra",
  storageBucket: "portofolio-putra.firebasestorage.app",
  messagingSenderId: "313232918366",
  appId: "1:313232918366:web:7063ec2f87783da5eb71cf",
  measurementId: "G-8S1D592RYQ"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
