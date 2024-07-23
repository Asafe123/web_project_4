// import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
const editForm = document.querySelector(".popup__edit-form");
const addCardForm = document.querySelector(".popup__image-form");

// const editFormValidator = new FormValidator(settings, editForm);
// const addCardFormValidator = new FormValidator(settings, addCardForm);

// editFormValidator.enableValidation();
// addCardFormValidator.enableValidation();

const initialCards = [
  {
    name: "asterix park paris",
    link: "https://cdn-imgix-open.headout.com/MB/Themepark/Asterix+Park+Paris/Overview+Image/5.jpg",
  },
  {
    name: "Disneyland Tokio",
    link: "https://media1.tokyodisneyresort.jp/images/adventure/event/2157_thumbnail.jpg?mod=20220906160950",
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
  .content.querySelector(".places__item");
const list = document.querySelector(".places__list");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const editModal = document.querySelector(".popup_type_edit");
const addCardModal = document.querySelector(".popup_type_add-card");
const imageModal = document.querySelector(".popup_type_image-modal");
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

const escValue = 27;
export function closeModalByEscape(evt) {
  if (evt.keyCode === escValue) {
    const openedPopup = document.querySelector(".popup_opened");
    closeModal(openedPopup);
  }
}
export function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}
export function openModal(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", closeModalByEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}
function closeModal(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeModalByEscape);
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}

export function handlePreview(element) {
  element.addEventListener("click", () => {
    openModal(imageModal);
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewTitle.textContent = cardData.name;
  });
}

function generateCard(cardData) {
  const listItem = templateListItem.cloneNode(true);
  const title = listItem.querySelector(".card__title");
  const likeButton = listItem.querySelector(".card__like-icon");
  const image = listItem.querySelector(".card__image");
  const deleteButton = listItem.querySelector(".card__delete-button");
  title.textContent = cardData.name;
  image.style.backgroundImage = `url(${cardData.link})`;
  likeButton.addEventListener("click", () => handleLikeButton());
  function handleDeleteButton(item) {
    deleteButton.addEventListener("click", () => {
      item.remove();
      console.log(item);
    });
  }
  function handleLikeButton() {
    likeButton.classList.toggle("card__like-icon_type_active");
  }

  handleDeleteButton(listItem);
  handlePreview(image);
  return listItem;
}
function renderCard(listItem) {
  list.prepend(listItem);
}
function renderInitialCards() {
  initialCards.forEach((cardData) => {
    const card = new Card(cardData, ".card-template");
    const cardElement = card.getCardElement();
    renderCard(cardElement);
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
  const inputs = [...addCardModal.querySelectorAll(".popup__input")];
  const button = addCardModal.querySelector(".popup__button");
  toggleButtonState(inputs, button, setting);
});
const closeButtons = document.querySelectorAll(".popup__close");
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closeModal(popup));
});
