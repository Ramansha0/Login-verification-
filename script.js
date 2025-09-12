let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("login");
let notify = document.getElementById("notification");
btn.addEventListener("click" ,(e) => {
      e.preventDefault(); 
  let user= username.value;
    let pass= password.value;
   console.log("verify its you "+user);
    
 setTimeout(() => {
    notify.style.display="block";
   },1500);
})