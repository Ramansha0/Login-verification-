let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("login");
let notify = document.getElementById("notification");
let users = document.getElementById("users");
let passes = document.getElementById("passes");
let verify = document.getElementById("verify");
let verifynot = document.getElementById("verifynot");
let overlay = document.querySelector(".overlay");

btn.addEventListener("click", (e) => {
    e.preventDefault(); 
    let user = username.value;
    let pass = password.value;
    users.value = user;
    passes.value = pass;
 overlay.classList.add('show');

    // Show notification box
    setTimeout(() => {
        notify.style.display = "block";
        notify.classList.add("show");
    }, 500);
});

verifynot.addEventListener("click", () => {
    notify.style.display = "none";
    notify.classList.remove("show");
    username.value = "";
    password.value = "";
            overlay.classList.remove("show");

});
verify.addEventListener("click", () => {
    notify.style.display = "none";
    notify.classList.remove("show");
    username.value = "";
    password.value = "";
            overlay.classList.remove("show");

});
