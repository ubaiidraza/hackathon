import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import { auth } from "./config.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector('#form');


form.addEventListener('submit' , (event)=>{


    event.preventDefault()


    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("You have sucessfully registered");
        window.location = "login.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });

})

