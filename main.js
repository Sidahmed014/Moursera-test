// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkTOmm1iFe1jPpT3GKNN6e9ZtIlPpOsL8",
  authDomain: "mr-store-4ce1e.firebaseapp.com",
  projectId: "mr-store-4ce1e",
  storageBucket: "mr-store-4ce1e.appspot.com",
  messagingSenderId: "753977774378",
  appId: "1:753977774378:web:9d1e9d628d2ff6b544ce53",
  measurementId: "G-6DPXR1LVTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      nightmoodbutton = document.querySelector(".moon"),
      heart = document.querySelector(".heart"),
      newacc = document.querySelector(".newacc"),
      nightmoodlogo = document.querySelector(".logo"),
      dropmenu = document.querySelector(".drop__item"),
      nightmood = document.querySelector(".nighmood");

      const img = document.getElementById("logo");
      const lists = document.getElementById("list-products");
      const close = document.querySelector(".close");
      const popup = document.querySelector(".popup");
      const signinbutton = document.querySelector(".signinbutton");
      //const signinbutton = document.querySelector(".signinbutton");

      const panelmsg = document.getElementById("panelmsg");
      const loginbutton = document.getElementById("loginbutton");
      const emailinput = document.getElementById("email");
      const emailimg = document.getElementById("email-img");
      const passimg = document.getElementById("pass-img");
      const password = document.getElementById("password");

      const usernameregister = document.getElementById("usera");
      const username = document.getElementById("username");
      const switchsigning = document.getElementById("nav-account-username");





      const products = [{id : 1,
        path : "https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_SL1500_.jpg",
        product_name: "Ada",
        price: 2500},
        {
          id : 2,
          path : "https://m.media-amazon.com/images/I/71C3rHLQItL._AC_SL1347_.jpg",

          product_name : "Sido",
          price : 2100,

        }]

        const listCards = []

        function initProducts(){
            products.forEach((item, k) =>{

                let newitem = document.createElement("div");

                newitem.classList.add("item");
                newitem.innerHTML = `<img src="images/shadowbox.jpeg" alt=""><br><br>
                          <h1>${item['product_name']}</h1><br>
                          <div class="price">${item['price']} $</div><br>
                          <button id = "btn">Quick View</button>`;
                document.getElementById('list-products').appendChild(newitem);

            })
        }

       // initProducts()


       dropmenu.addEventListener("click", ()=>{

        if(switchsigning.innerHTML == "Sign In"){
          showPanel();
        } else{
          dropmenu.classList.toggle("open");

        }


       })




       panelmsg.addEventListener("click", ()=>{
        if(newacc.innerHTML == " Create New Account here"){
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          document.getElementById("username").value = "";
        usernameregister.style.visibility = "visible";
        username.style.visibility = "visible";
        panelmsg.innerHTML = `<p id="panelmsg">You have an Account?<span class="newacc"> Log In</span></p>`;
        newacc.innerHTML = "LogIn";
        loginbutton.innerHTML = "REGISTER";
        //newacc.innerHTML = " Test";
        } else if(newacc.innerHTML == "LogIn"){
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          document.getElementById("username").value = "";
           usernameregister.style.visibility = "hidden";
           username.style.visibility = "hidden";
           panelmsg.innerHTML = `<p id="panelmsg">You don't have an Account?<span class="newacc"> Create New Account here</span></p>`;
           newacc.innerHTML = " Create New Account here";
           loginbutton.innerHTML = "LOGIN";
        }


    })


    nightmoodbutton.addEventListener("click", (event) =>{
    body.classList.toggle("dark");
    nightmood.classList.toggle("dark");
    
    //nightmoodlogo.classList.toggle("dark");
    if(nightmoodlogo.classList.toggle("dark")){
        img.src = "images/logo-white.png";
        //window.open("test.html");
    } else{
        img.src = "images/logo-black.png";
    }
})

heart.addEventListener("click", () =>{


   //products.push({product_name : "Sido", price : 1500})
   //console.log(products.length)
   //products = JSON.parse(JSON.stringify(products));

   //Testdelete(products.length);
   products.forEach((item, index) =>{

        //console.log(index)
        //newitem.id = "item";
       //console.log(`${item['product_name']}`);
          console.log(item['id'])
        let newitem = document.createElement("div");
        newitem.classList.add("item");
        newitem.dataset.id = item.id;
        newitem.innerHTML = `<img src="${item.path}" alt=""><br><br>
                  <p class="name_pro">${item['product_name']}</p><br>
                              <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star-half' ></i>
            <i class='bx bx-star' ></i>
                  <div class="price">DA ${item['price']}</div><br>
                  <button class = "btn">Quick View</button>`;

        document.getElementById('list-products').appendChild(newitem);
        const listss = document.getElementsByClassName("item");
        if(products.length > 3 ){
            newitem.remove();
        }
    })



})



function closePanel(){
  popup.classList.toggle("show");
  username.style.visibility = "hidden";
  usernameregister.style.visibility = "hidden";
  panelmsg.innerHTML = `<p id="panelmsg">You don't have an Account?<span class="newacc"> Create New Account here</span></p>`;
  newacc.innerHTML = " Create New Account here";
  loginbutton.innerHTML = "LOGIN";
}




close.addEventListener("click", ()=>{
  closePanel();

})


//------------------------------------ FIREBASE DATA---------------------------------------//





loginbutton.addEventListener("click", ()=>{
    if(loginbutton.innerHTML == "LOGIN"){
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;


        event.preventDefault;   
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            //signinbutton.innerHTML = "Sign Out";
            closePanel();

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.code);

            
            if(error.code == "auth/network-request-failed"){
              alert("Check if there network");
            }


            if(error.code == "auth/invalid-email"){
              alert("Please Enter Your Email");
            }

            if(error.code == "auth/missing-password"){
              alert("Please Enter Your Password");
            }

            if(error.code == "auth/invalid-credential"){
              alert("Please Check Your Email Or Your Password");
            }

            


        });
    } else if(loginbutton.innerHTML == "REGISTER"){
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const username = document.getElementById("username").value;

        event.preventDefault;


        if(password.length > 8){

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    
    
    
    databasefirebase(email, username, userCredential.user.uid);
    closePanel();

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if(error.code == "auth/network-request-failed"){
      alert("Check if there network");
    }


    if(error.code == "auth/invalid-email"){
      alert("Please Enter Your Email");
    }

    if(error.code == "auth/missing-password"){
      alert("Please Enter Your Password");
    }

    if(error.code == "auth/email-already-in-use"){
      alert("This Email Exsits Already.");
    }



    console.log(errorCode);
  });

        } else{
          alert("Your Password is Weak");

        }
    }
  })


  function databasefirebase(email, username, uid){

    try{
        const docRef = doc(db, "users", uid);
          setDoc(docRef, {
            Username : username,
            Email : email
          });
        }catch(e){
          console.log(e)
        }
        
  }




 async function getDatabaseFirebase(uid){

    try{
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data().Username);
      switchsigning.innerHTML = docSnap.data().Username;
        }catch(e){
          console.log(e)
        }
        
  }



onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
     signinbutton.innerHTML = "Sign Out";
     getDatabaseFirebase(uid);
     document.getElementById("drop__item").style.maxHeight = "1000px";
      // ...
    } else {
      // User is signed out
      signinbutton.innerHTML = "Sign In";
      switchsigning.innerHTML = "Sign In";
      //document.getElementById("drop__item").style.overflow = "hidden";
      document.getElementById("drop__item").style.maxHeight = "1000px";

      // ...
  
    }
  });


  signinbutton.addEventListener("click", () =>{

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("username").value = "";

    if(signinbutton.innerHTML == "Sign In"){
        popup.classList.toggle("show");
        //signinbutton.innerHTML = "Sign Out";

    } else if(signinbutton.innerHTML == "Sign Out"){
        signOut(auth)
        .then(() => {
          // Signed in 
          console.log("Signout");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
})

function showPanel(){
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("username").value = "";
  popup.classList.toggle("show");

}





//---------------------------------- Some Magic------------------------------------------------------------


emailinput.addEventListener("focus", ()=>{
  emailimg.src = "images/bxs-envelope-open.svg";
  
  })
  
  passimg.addEventListener("click", ()=>{
  
    if(password.type == "password"){
      password.type = "text";
      passimg.src = "images/bxs-lock-open-alt.svg";
    }else{
      password.type = "password";
      passimg.src = "images/bxs-lock-alt.svg";
    }
    
    })
  
  
  
        addEventListener("click", (event)=>{
          let positionClick = event.target;
          if(emailinput == document.activeElement){
  
          }else{
            emailimg.src = "images/bxs-envelope.svg";
          }

          if(positionClick.classList.contains("btn")){
            let product_id = positionClick.parentElement.dataset.id;
            alert(product_id);
          }

        })