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
  _toggleError(input, config) {
    if (input.validity.valid) {
      _hideError(input, config);
    } else {
      _showError(input, config);
    }
  }
  _checkFormValidity(inputs) {
    return inputs.every((formElement) => formElement.input.validity.valid);
  }
  _toggleButtonState(inputs, button, settings) {
    const isFormValid = this._checkFormValidity(inputs);
    if (isFormValid) {
      button.disabled = false;
      button.classList.remove(settings.inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(settings.inactiveButtonClass);
    }
  }
  _setEventListeners() {
    const { formSelector, inputSelector, submitButtonSelector } =
      this._settings;
    const forms = [...document.querySelectorAll(formSelector)];
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    });
    const inputs = [...forms.querySelectorAll(inputSelector)];
    const button = forms.querySelector(submitButtonSelector);

    // set event for form input
    submitButtonSelector.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        _toggleError(input, config);
        _toggleButtonState(inputs, button, config);
      });
    });
  }
  enableValidation() {
    this._setEventListeners();
  }
}
