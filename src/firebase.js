import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDDM6DWXLa85JoV2v9z6xiOOxBln8ZK4AM",
    authDomain: "texting-a3d75.firebaseapp.com",
    projectId: "texting-a3d75",
    storageBucket: "texting-a3d75.appspot.com",
    messagingSenderId: "680270460904",
    appId: "1:680270460904:web:294229e7955ed0efc5565d"
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
// };