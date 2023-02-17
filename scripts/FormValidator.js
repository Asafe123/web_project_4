const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

  _setEventListeners() {
    const inputs = [...form.querySelectorAll(this._settings.inputSelector)];
    const button = form.querySelector(this._settings.submitButtonSelector);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        toggleError(input, config);
        toggleButtonState(inputs, button, config);
      });
    });
  }

  _enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners(formElement, rest);
  }
}

const formElement = document.querySelector(".popup__form");
