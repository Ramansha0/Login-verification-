let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("login");

btn.addEventListener("click" ,() => {
  let user= username.value;
    let pass= password.value;
   alert(`verify its you ${user}`);
     alert(`verify its your password  ${pass}`);
})