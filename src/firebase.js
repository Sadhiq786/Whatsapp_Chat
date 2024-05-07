import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBsXH2OPfnuTBvKZnWoICtvtFKpLgG_EQk",
  authDomain: "texting-f8555.firebaseapp.com",
  projectId: "texting-f8555",
  storageBucket: "texting-f8555.appspot.com",
  messagingSenderId: "133616778490",
  appId: "1:133616778490:web:a6cd7c19bfad7e7222dd43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

