import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN-8VwGM_IUNKiQG_8du5ROV-hcFbSjyk",
  authDomain: "karacsonyijatek-1b1f3.firebaseapp.com",
  projectId: "karacsonyijatek-1b1f3",
  storageBucket: "karacsonyijatek-1b1f3.appspot.com",
  messagingSenderId: "421155145548",
  appId: "1:421155145548:web:70dcde26cc7d7bbe6331e9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);