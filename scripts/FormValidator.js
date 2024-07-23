export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }
  _showError = (input, settings) => {
    const error = input.validationMessage;
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
    input.classList.add(settings.inputErrorClass);
  };
  _hideError = (input, settings) => {
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(settings.inputErrorClass);
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
    const isFormValid = this._checkFormValidity(inputs);
    if (isFormValid) {
      button.disabled = false;
      button.classList.remove(settings.inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(settings.inactiveButtonClass);
    }
  };
  _setEventListeners = () => {
    const inputs = [...form.querySelectorAll(this._settings.inputSelector)];
    const button = form.querySelector(this._settings.submitButtonSelector);

    const formSelector = document.querySelector(this._settings.formSelector);
    const inputSelector = document.querySelectorAll(
      this._settings.inputSelector
    );
    formSelector.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        _toggleError(inputSelector, settings);
        _toggleButtonState(inputs, button, settings);
      });
    });
  };
  enableValidation = (settings) => {
    const form = this._formElement;
    const settings
    form._setEventListeners();
    this._setEventListeners();
  };
}
