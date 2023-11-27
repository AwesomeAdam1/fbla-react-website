import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKvzFQV9erR7fwpOosDoff-_5jYZCArsA",
  authDomain: "fbla-website-walton.firebaseapp.com",
  projectId: "fbla-website-walton",
  storageBucket: "fbla-website-walton.appspot.com",
  messagingSenderId: "727663856275",
  appId: "1:727663856275:web:6a5f6bf198fb6e140c1b66",
  measurementId: "G-R3PBJHESSC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);