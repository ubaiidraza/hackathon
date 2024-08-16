import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyCPJrZ9D6oUmTcJyhbvYADnPoYY3E8-5sk",
    authDomain: "hackathon-8b227.firebaseapp.com",
    projectId: "hackathon-8b227",
    storageBucket: "hackathon-8b227.appspot.com",
    messagingSenderId: "219700908474",
    appId: "1:219700908474:web:6fd91e782b2279638ccd83",
    measurementId: "G-HWZWE0WN38"
  }
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);