function showError(input) {
  const error = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = error;
  input.classList.add("popup__input_theme_error");
}
function hideError(input) {
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove("popup__input_theme_error");
}

function checkValidity(input) {
  if (input.validity.valid) {
    hideError(input);
    console.log("valid");
  } else {
    showError(input);
    console.log("not valid");
  }
}

function enableValidation(settings) {
  // find all forms
  const forms = [...document.querySelectorAll(".popup__form")];
  console.log(forms);
  // prevent default
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    // search all inputs inside forms
    const inputs = [...form.querySelectorAll(".popup__input")];
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        console.log("who clicked here?");
        checkValidity(input);
      });
    });
  });
  // subscribe to its change
  // chack if input is valid
  // if valid => no action needed
  // if not valid => show error
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
enableValidation(config);
