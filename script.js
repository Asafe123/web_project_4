// queryselectors
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".form__close-button");
const popup = document.querySelector(".popup");
const profileForm = document.querySelector(".popup__form_type_profile");
const profileName = document.querySelector(".profile__title");
const profileOccupation = document.querySelector(".profile__ocupation");
const profileInputName = document.querySelector(".popup__form-input_type_name");
const profileInputOccupation = document.querySelector(
  ".popup__form-input_type_occupation"
);

// functions
function activePopup() {
  popup.classList.add("popup_opened");
}
function removePopup() {
  popup.classList.remove("popup_opened");
}
function saveProfileForm(evt) {
  //erase defualt settings
  evt.preventDefault();
  // remove popup
  removePopup(popup);
  profileName.textContent = profileInputName.value;
  profileOccupation.textContent = profileInputOccupation.value;
}
// eventlisteners
editButton.addEventListener("click", activePopup);
closeButton.addEventListener("click", removePopup);
profileForm.addEventListener("submit", saveProfileForm);
