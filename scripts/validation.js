function showError(input, settings) {
  const error = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = error;
  input.classList.add(settings.inputErrorClass);
}
function hideError(input, settings) {
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove(settings.inputErrorClass);
}

function checkValidity(input) {
  if (input.validity.valid) {
    hideError(input);
  } else {
    showError(input);
  }
}
function toggleButtonState(inputs, button, settings) {
  const isFormValid = inputs.every((input) => input.validity.valid);
  if (isFormValid) {
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
  } else {
    button.disabled = true;
    button.classList.add(settings.inactiveButtonClass);
  }
}
function enableValidation(settings) {
  // find all forms
  const forms = [...document.querySelectorAll(settings.formSelector)];
  // prevent default
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    // search all inputs inside forms
    const inputs = [...form.querySelectorAll(settings.inputSelector)];
    const button = form.querySelector(settings.submitButtonSelector);
    inputs.forEach((input) => {
      // queryelectors elements
      // define Toggle buttonstate at OPENING WINDOW
      // good luck. this is the LAST fix before submitting.
      input.addEventListener("input", () => {
        checkValidity(input);
        toggleButtonState(inputs, button, config);
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
