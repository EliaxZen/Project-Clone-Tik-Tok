import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA-2_jiy9ptdJaeuBCIm4n8CswiAZGgjJE",
  authDomain: "clone-tiktok-684ef.firebaseapp.com",
  projectId: "clone-tiktok-684ef",
  storageBucket: "clone-tiktok-684ef.appspot.com",
  messagingSenderId: "347133491734",
  appId: "1:347133491734:web:3a29907e7256834d2f5337"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;