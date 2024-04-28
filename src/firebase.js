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

// const firebaseConfig = {
//   apiKey: "AIzaSyD03UwfA9BkZLSEOXE3i3uJmi_xp3Bwhsk",
//   authDomain: "chat-app-f4207.firebaseapp.com",
//   projectId: "chat-app-f4207",
//   storageBucket: "chat-app-f4207.appspot.com",
//   messagingSenderId: "110707872473",
//   appId: "1:110707872473:web:998ac9e67a118a5168e4c8"
// };u8y