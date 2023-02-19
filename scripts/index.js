import { openModal, closeModal } from "./utils";

const initialCards = [
  {
    name: "Tel-Aviv Landscape",
    link: "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/06/Best-areas-to-stay-in-Tel-Aviv-scaled-e1593008399620.jpg?w=1506&ssl=1",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const setting = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
// querySelectors =>
const templateListItem = document
  .querySelector(".card-template")
  .content.querySelector(".card");
const list = document.querySelector(".places__list");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const editModal = document.querySelector(".popup_type_edit");
const addCardModal = document.querySelector(".popup_type_add-card");
const imageModal = document.querySelector(".popup_type_image-modal");
const editModalCloseButton = editModal.querySelector(".popup__close");
const addCardModalCloseButton = addCardModal.querySelector(".popup__close");
const popupPreviewCloseButton = document.querySelector(
  ".popup__close_type_preview"
);
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const previewImage = document.querySelector(".popup__preview-image");
const previewTitle = document.querySelector(".popup__preview-title");
const profileNameInput = document.querySelector(".popup__input_type_name");
const profileOccupationInput = document.querySelector(
  ".popup__input_type_occupation"
);
const cardNameInput = document.querySelector(".popup__input_type_card-title");
const cardLinkInput = document.querySelector(".popup__input_type_card-link");
const editForm = editModal.querySelector(".popup__form");
const addCardForm = addCardModal.querySelector(".popup__form");

// open/close modal functions ->

// const escValue = 27;
// function closeModalByEscape(evt) {
//   if (evt.keyCode === escValue) {
//     const openedPopup = document.querySelector(".popup_opened");
//     closeModal(openedPopup);
//   }
// }
// function closeModalOnRemoteClick(evt) {
//   if (evt.target === evt.currentTarget) {
//     closeModal(evt.target);
//   }
// }
// function openModal(modal) {
//   modal.classList.add("popup_opened");
//   document.addEventListener("keydown", closeModalByEscape);
//   modal.addEventListener("mousedown", closeModalOnRemoteClick);
// }
// function closeModal(modal) {
//   modal.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closeModalByEscape);
//   modal.removeEventListener("mousedown", closeModalOnRemoteClick);
// }

// generate card ->
function generateCard(cardData) {
  const listItem = templateListItem.cloneNode(true);
  const title = listItem.querySelector(".card__title");
  const likeButton = listItem.querySelector(".card__like-icon");
  const image = listItem.querySelector(".card__image");
  const deleteButton = listItem.querySelector(".card__delete-button");
  title.textContent = cardData.name;
  image.style.backgroundImage = `url(${cardData.link})`;
  // Like button feature
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-icon_type_active");
  });
  // Delete card feature
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });
  //Open preview feature
  image.addEventListener("click", () => {
    openModal(imageModal);
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewTitle.textContent = cardData.name;
  });
  return listItem;
}
// render card to the website ->
function renderCard(listItem) {
  list.prepend(listItem);
}
function renderInitialCards() {
  initialCards.forEach((cardData) => {
    const card = generateCard(cardData);
    renderCard(card);
  });
}
renderInitialCards();

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const card = generateCard({
    name: cardNameInput.value,
    link: cardLinkInput.value,
  });
  renderCard(card);
  closeModal(addCardModal);
  addCardForm.reset();
});
function insertProfileInfo(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileOccupation.textContent = profileOccupationInput.value;
  closeModal(editModal);
}
editForm.addEventListener("submit", insertProfileInfo);
function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileOccupationInput.value = profileOccupation.textContent;
}
editProfileButton.addEventListener("click", () => {
  openModal(editModal);
  fillProfileForm();
});
addCardButton.addEventListener("click", () => {
  openModal(addCardModal);
  // queryselector inputs
  const inputs = [...addCardModal.querySelectorAll(".popup__input")];
  // queryselectot button
  const button = addCardModal.querySelector(".popup__button");
  // call toggleButton StateButton
  toggleButtonState(inputs, button, setting);
});
// universal close button Handeler ->
const closeButtons = document.querySelectorAll(".popup__close");
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closeModal(popup));
});
