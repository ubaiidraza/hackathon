import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCLYCyutiTJyA5gwkeel61nfhnbu0m_cp8",
  authDomain: "blogging-app-9c3c3.firebaseapp.com",
  projectId: "blogging-app-9c3c3",
  storageBucket: "blogging-app-9c3c3.appspot.com",
  messagingSenderId: "876768355025",
  appId: "1:876768355025:web:5f76c3fb8f053e93cd1bf0",
  measurementId: "G-J22NC5D61W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
