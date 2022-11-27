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
  } else {
    showError(input);
  }
}
function toggleButtonState(inputs, button) {
  const isFormValid = inputs.every((input) => input.validity.valid);
  if (isFormValid) {
    button.disabled = false;
    button.classList.remove("popup__button_disabled");
  } else {
    button.disabled = true;
    button.classList.add("popup__button_disabled");
  }
}
function enableValidation(settings) {
  // find all forms
  const forms = [...document.querySelectorAll(".popup__form")];
  // prevent default
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    // search all inputs inside forms
    const inputs = [...form.querySelectorAll(".popup__input")];
    const button = form.querySelector(".popup__button");
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkValidity(input);
        toggleButtonState(inputs, button);
      });
    });
  });
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
