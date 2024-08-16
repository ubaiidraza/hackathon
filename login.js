import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const userName = document.querySelector('#username');

import { auth } from "./config.js";

form.addEventListener('submit' , (event)=>{

    event.preventDefault()



   
   signInWithEmailAndPassword(auth, email.value , password.value)
     .then((userCredential) => {
       const user = userCredential.user;
       alert('You are sucessfully logged In');
       window.location="index.html"
      
     })
     .catch((error) => {
       const errorMessage = error.message;
       alert(errorMessage);
     });
    




})