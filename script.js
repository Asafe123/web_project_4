let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".form__close-button");
let popup = document.querySelector(".popup");

function activePopup() {
  popup.classList.add("popup_opened");
}
function removePopup() {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", activePopup);
closeButton.addEventListener("click", removePopup);
