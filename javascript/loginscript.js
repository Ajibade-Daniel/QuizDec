const loginBtn = document.querySelector("#login");
const registrationBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registrationForm = document.querySelector(".registration-form");
registrationForm.style.opacity = 0;

loginBtn.addEventListener('click', () => {
  loginBtn.style.backgroundColor = '#02066F';
  registrationBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

  loginForm.style.left = "50%";
  registrationForm.style.left = "-50%";

  loginForm.style.opacity = 1;
  registrationForm.style.opacity = 0;
  loginBtn.classList.add("noHover");
  registrationBtn.classList.remove("noHover");
});




registrationBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registrationBtn.style.backgroundColor = '#02066F';


    loginForm.style.left = "150%";
    registrationForm.style.left = "50%";

    loginForm.style.opacity = 0;
    registrationForm.style.opacity = 1;
    registrationBtn.classList.add("noHover");
    loginBtn.classList.remove("noHover");
  });

loginBtn.classList.add("noHover");
registrationBtn.classList.remove("noHover");