import {onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth, db } from "./config.js";
import { addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 

// import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 



onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
        window.location = 'login.html'
    }
  });



const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    signOut(auth).then(() => {
        console.log('logout Successfully')
        window.location = 'login.html'
      }).catch((error) => {
        console.log(error)
      });
})




// post add


const title = document.querySelector('#title')
const description = document.querySelector('#description')
const formAdd = document.querySelector('#form-add')
const div = document.querySelector('#div')




async function getData(){
  const arr = []
  const querySnapshot = await getDocs(collection(db, "todos"));
querySnapshot.forEach((doc) => {
  arr.push(doc.data());
});
console.log(arr);
arr.map((item)=>{
  div.innerHTML += `
  <h1>${item.title}</h1>
  <h1>${item.description}</h1>


  `
})
}
getData()


formAdd.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log(title.value)
  console.log(description.value)

  try {
      const docRef = await addDoc(collection(db, "todos"),{
        title: title.value,
        description: description.value,
        uid:auth.currentUser.uid
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
})















