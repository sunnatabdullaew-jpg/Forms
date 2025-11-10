const submitButton = document.querySelector(".submit-button");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const form = document.querySelector(".form");

const emailInputValue = emailInput.value.trim();
const passwordInputValue = passwordInput.value.trim();

form.addEventListener("submit", (e) => {
  e.preventDefault();

    if(!emailInput.value.trim() || !passwordInput.value.trim()){
        return alert("Email va parol kiritilishi shart!");
    }else {
        alert("Siz Muvaffaqiyatli royxatdan otdingiz!");
        window.open("https://github.com/sunnatabdullaew-jpg/Forms" , "_blank");
    }

    console.log(emailInput.value.trim());
    console.log(passwordInput.value.trim());
});
