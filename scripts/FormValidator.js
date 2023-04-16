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
  _toggleError(input, config) {
    if (input.validity.valid) {
      _hideError(input, config);
    } else {
      _showError(input, config);
    }
  }
  _checkFormValidity(inputs) {
    return inputs.every((input) => input.validity.valid);
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
  enableValidation(settings) {
    const forms = [...document.querySelectorAll(settings.formSelector)];
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      const inputs = [...form.querySelectorAll(settings.inputSelector)];
      const button = form.querySelector(settings.submitButtonSelector);
      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          _toggleError(input, config);
          _toggleButtonState(inputs, button, config);
        });
      });
    });
  }
  _enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners(formElement);
  }
}

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formElement = document.querySelector(".popup__form");
