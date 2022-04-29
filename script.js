// queryselectors
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".form__close-button");
const popup = document.querySelector(".popup");
const saveButton = document.querySelector(".popup__submit-button");
// functions
function activePopup() {
  popup.classList.add("popup_opened");
}
function removePopup() {
  popup.classList.remove("popup_opened");
}
function saveText() {
  const myText = "This can be whatever text you like!";
  alert(myText);
}
// eventlisteners
editButton.addEventListener("click", activePopup);
closeButton.addEventListener("click", removePopup);
saveButton.addEventListener("submit", saveText);
