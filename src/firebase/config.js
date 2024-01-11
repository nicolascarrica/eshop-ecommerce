import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAqNlj78KCg4cJISbKciqA9MnlyJwMZrcc",
  authDomain: "eshop-c2886.firebaseapp.com",
  projectId: "eshop-c2886",
  storageBucket: "eshop-c2886.appspot.com",
  messagingSenderId: "899285036442",
  appId: "1:899285036442:web:e877c65eac4c2cd0fd1e23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app