let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("login");
let notify = document.getElementById("notification");
let users = document.getElementById("users");
let passes = document.getElementById("passes");
let verify = document.getElementById("verify");
let verifynot = document.getElementById("verifynot");
btn.addEventListener("click" ,(e) => {
      e.preventDefault(); 
  let user= username.value;
    let pass= password.value;
users.value=user;
passes.value=pass;
 setTimeout(() => {
    notify.style.display="block";
   },1500);

})

verifynot.addEventListener("click", ()=>{
   notify.style.display="none";
    username.value="";
    password.value="";

})