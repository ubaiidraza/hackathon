import { signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import { auth } from "./config.js";


const logouBtn = document.querySelector('#logout-btn');


logouBtn.addEventListener('click' , ()=>{
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('You are sucessfully logged out')
        window.location="login.html"
      })
      .catch((error) => {
        alert(error)
       
      });
})