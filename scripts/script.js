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

// queryselectors//
const templateListItem = document
  .querySelector(".card-template")
  .content.querySelector(".card");
const list = document.querySelector(".places__list");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
//modals
const editProfileModal = document.querySelector(".popup_type_edit");
const addCardModal = document.querySelector(".popup_type_add-card");
const imageModal = document.querySelector(".popup_type_image-modal");
//close buttons
const editModalCloseButton = editProfileModal.querySelector(".popup__close");
const addCardModalCloseButton = addCardModal.querySelector(".popup__close");
const popupPreviewCloseButton = document.querySelector(
  ".popup__close_type_preview"
);
//open modal
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
// open preview
const previewImage = document.querySelector(".popup__preview-image");
const previewTitle = document.querySelector(".popup__preview-title");
//inputs
const profileNameInput = document.querySelector(".popup__input_type_name");
const profileOccupationInput = document.querySelector(
  ".popup__input_type_occupation"
);
const cardNameInput = document.querySelector(".popup__input_type_card-title");
const cardLinkInput = document.querySelector(".popup__input_type_card-link");
// forms
const editForm = editProfileModal.querySelector(".popup__form");
const addCardForm = addCardModal.querySelector(".popup__form");
//event listeners
function toggleModal(modal) {
  modal.classList.toggle("popup_opened");
}
addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generateCard({ name: cardNameInput.value, link: cardLinkInput.value });
  toggleModal(addCardModal);
  addCardForm.reset();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileOccupation.textContent = profileOccupationInput.value;
  toggleModal(editProfileModal);
});

editProfileButton.addEventListener("click", () => {
  toggleModal(editProfileModal);
});

editModalCloseButton.addEventListener("click", () => {
  toggleModal(editProfileModal);
});
addCardButton.addEventListener("click", () => {
  toggleModal(addCardModal);
  addCardForm.reset();
});

addCardModalCloseButton.addEventListener("click", () => {
  toggleModal(addCardModal);
});

function generateCard(cardData) {
  const listItem = templateListItem.cloneNode(true);
  const title = listItem.querySelector(".card__title");
  const image = listItem.querySelector(".card__image");
  const deleteButton = listItem.querySelector(".card__delete-button");
  const likeButton = listItem.querySelector(".card__like-icon");

  title.textContent = cardData.name;
  image.style.backgroundImage = `url(${cardData.link})`;
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-icon_type_active");
  });
  // Delete card
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });
  //Open preview
  image.addEventListener("click", () => {
    imageModal.classList.toggle("popup_opened");
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewTitle.textContent = cardData.name;
  });

  list.append(listItem);
}
initialCards.forEach(generateCard);
popupPreviewCloseButton.addEventListener("click", () => {
  imageModal.classList.remove("popup_opened");
});
