const showError = (input, settings) => {
  const error = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = error;
  input.classList.add(settings.inputErrorClass);
};
const hideError = (input, settings) => {
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove(settings.inputErrorClass);
};
const toggleError = (input, settings) => {
  if (input.validity.valid) {
    hideError(input, settings);
  } else {
    showError(input, settings);
  }
};
const checkFormValidity = (inputs) => {
  return inputs.every((input) => input.validity.valid);
};
const toggleButtonState = (inputs, button, settings) => {
  const isFormValid = checkFormValidity(inputs);
  if (isFormValid) {
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
    button.style.opacity = 1;
    button.style.transform = "scale(1.05)";
  } else {
    button.disabled = true;
    button.classList.add(settings.inactiveButtonClass);
    button.style.opacity = 0.8;
    button.style.transform = "scale(1)";
  }
};
const enableValidation = (settings) => {
  const forms = [...document.querySelectorAll(settings.formSelector)];
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    const inputs = [...form.querySelectorAll(settings.inputSelector)];
    const button = form.querySelector(settings.submitButtonSelector);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        toggleError(input, settings);
        toggleButtonState(inputs, button, settings);
      });
    });
  });
};
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
enableValidation(settings);
