export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }
  _showError(input, settings) {
    const errorMessage = input.validationMessage;
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = errorMessage;
    input.classList.add(settings.inputErrorClass);
  }
  _hideError(input, settings) {
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(settings.inputErrorClass);
  }
  _checkFormValidity(inputs) {
    return inputs.every((formElement) => formElement.input.validity.valid);
  }
  _toggleButtonState(inputs, button, settings) {
    const isFormValid = this.checkFormValidity(inputs);
    if (isFormValid) {
      button.disabled = false;
      button.classList.remove(settings.inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(settings.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    const { inputSelector, submitButtonSelector } = this._settings;
    const forms = [...document.querySelectorAll(settings.formSelector)];

    const button = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });  

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        toggleError(input, config);
        toggleButtonState(inputs, button, config);
      });
    })

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formElement = document.querySelector(".popup__form");
