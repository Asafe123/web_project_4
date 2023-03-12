export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }
  _showError(input, settings) {
    const error = input.validationMessage;
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
    input.classList.add(settings.inputErrorClass);
  }
  _hideError(input, settings) {
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(settings.inputErrorClass);
  }
  _checkFormValidity(inputs) {
    return inputs.every(
      (_formElement) => this._formElement.input.validity.valid
    );
  }
  _setEventListeners() {
    const { inputSelector, submitButtonSelector } = this._settings;
    const forms = [...document.querySelectorAll(settings.formSelector)];

    const button = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
    _;

    // inputs.forEach((input) => {
    //   input.addEventListener("input", () => {
    //     toggleError(input, config);
    //     toggleButtonState(inputs, button, config);
    //   });
    // });
  }
  _enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners(formElement);
  }
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formElement = document.querySelector(".popup__form");

const editFormValidator = new FormValidator(config, editForm);
const addCardFormValidator = new FormValidator(config, addCardForm);
