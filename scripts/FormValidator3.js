class FormValidator  {
    constructor (settings) {
        this._settings =settings;
    }
    showError = (input, settings) => {
        const error = input.validationMessage;
        const errorElement = document.querySelector(`#${input.id}-error`);
        errorElement.textContent = error;
        input.classList.add(settings.inputErrorClass);
      };



    }
}