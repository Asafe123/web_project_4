const escValue = 27;
function closeModalByEscape(evt) {
  if (evt.keyCode === escValue) {
    const openedPopup = document.querySelector(".popup_opened");
    closeModal(openedPopup);
  }
}
function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}
export function openModal(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", closeModalByEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}
export function closeModal(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeModalByEscape);
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}
