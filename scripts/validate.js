function showError(input, settings) {
  const errorMessage = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = errorMessage;
  input.classList.add(settings.inputErrorClass);
}
function hideError(input, settings) {
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove(settings.inputErrorClass);
}
function toggleError(input, config) {
  if (input.validity.valid) {
    hideError(input, config);
  } else {
    showError(input, config);
  }
}
function checkFormValidity(inputs) {
  return inputs.every((input) => input.validity.valid);
}
function toggleButtonState(inputs, button, settings) {
  const isFormValid = this.checkFormValidity(inputs);
  if (isFormValid) {
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
  } else {
    button.disabled = true;
    button.classList.add(settings.inactiveButtonClass);
  }
}
function enableValidation(settings) {
  const forms = [...document.querySelectorAll(settings.formSelector)];
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    const inputs = [...form.querySelectorAll(settings.inputSelector)];
    const button = form.querySelector(settings.submitButtonSelector);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        toggleError(input, config);
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
