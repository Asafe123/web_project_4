const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
const formElement = document.querySelector(".popup__form");

export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    const input = this._settings.inputSelector;
  }
  _showError = (input, settings) => {
    const error = input.validationMessage;
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
    settings.inputSelector.classList.add(settings.inputErrorClass);
  };

  _hideError = (input, settings) => {
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    settings.inputSelector.classList.remove(settings.inputErrorClass);
  };
  _toggleError = (input, settings) => {
    if (input.validity.valid) {
      this._hideError(input, settings);
    } else {
      this._showError(input, settings);
    }
  };
  _checkFormValidity = (inputs) => {
    return inputs.every((input) => input.validity.valid);
  };

  _toggleButtonState = (inputs, button, settings) => {
    const isFormValid = this.checkFormValidity(inputs);
    if (isFormValid) {
      button.disabled = false;
      button.classList.remove(settings.inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(settings.inactiveButtonClass);
    }
  };

  _setEventListeners() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this.inputs.forEach((input) => {
      input.addEventListener("input", () => {
        _toggleError(input, settings);
        _toggleButtonState(inputs, button, settings);
      });
    });
  }
  enableValidation = () => {
    this.inputs = [this._formElement.querySelectorAll(settings.inputSelector)];
    this.button = this._formElement.querySelector(
      settings.submitButtonSelector
    );
    this._setEventListeners();
    return;
  };
}

// _setEventListeners() {
//   this._formElement.addEventListener("submit", (e) => {
//     e.preventDefault();
//   });
//   input.addEventListener("input", () => {
//     this._toggleError(input, settings);
//   });
// }

// enableValidation = () => {
//   const inputs = [this._formElement.querySelectorAll(settings.inputSelector)];
//   const button = this._formElement.querySelector(
//     settings.submitButtonSelector
//   );
//   inputs.forEach((input) => {
//     input.addEventListener("input", () => {
//       _toggleError(input, settings);
//       _toggleButtonState(inputs, button, settings);
//     });
//   });
//   this._setEventListeners;
// };
