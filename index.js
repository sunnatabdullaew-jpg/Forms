const submitButton = document.querySelector(".submit-button");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const form = document.querySelector(".form");

const emailInputValue = emailInput.value.trim();
const passwordInputValue = passwordInput.value.trim();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(passwordInput.value.trim());

  if (!emailInputValue) {
    return alert("Bosh maydon qoldirilmasin!");
  } else {
    alert("Siz Muvaffaqiyatli royxatdan otdingiz!");
  }

  if (!passwordInputValue) {
    return alert("Bosh maydon qoldirilmasin!");
  }
  else {
    alert("Siz Muvaffaqiyatli royxatdan otdingiz!");
  }
});
