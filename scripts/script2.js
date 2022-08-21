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

const templateListItem = document
  .querySelector(".card-template")
  .content.querySelector(".card");
const list = document.querySelector(".places__list");
// queryselectors
const ProfileName = document.querySelector(".profile__name");
const ProfileOccupation = document.querySelector(".profile__occupation");

//modals
const editModal = document.querySelector(".popup_type_edit");
const addCardModal = document.querySelector(".popup_type_add-card");
//close buttons
const editModalCloseButton = editModal.querySelector(".popup__close");
const addCardModalModalCloseButton =
  addCardModal.querySelector(".popup__close");

//open modal
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

//inputs
const profileNameInput = document.querySelector(".popup__input_type_name");
const profileOccupationInput = document.querySelector(
  ".popup__input_type_occupation"
);
const CardNameInput = document.querySelector(".popup__input_type_card-title");
const CardLinkInput = document.querySelector(".popup__input_type_card-link");

// forms
const editform = editModal.querySelector(".popup__form");
const addCardForm = addCardModal.querySelector(".popup__form");

//event listeners
function toggleModal(modal) {
  modal.classList.toggle("popup_opened");
}

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generateCard({ name: CardNameInput.value, link: CardLinkInput.value });
  toggleModal(addCardModal);
});

editform.addEventListener("submit", (e) => {
  e.preventDefault();
  ProfileName.textContent = profileNameInput.value;
  ProfileOccupation.textContent = profileOccupationInput.value;
  toggleModal(editModal);
});

editProfileButton.addEventListener("click", () => {
  toggleModal(editModal);
});

editModalCloseButton.addEventListener("click", () => {
  toggleModal(editModal);
});
addCardButton.addEventListener("click", () => {
  toggleModal(addCardModal);
});
addCardModalModalCloseButton.addEventListener("click", () => {
  toggleModal(addCardModal);
});

function generateCard(cardData) {
  const listItem = templateListItem.cloneNode(true);

  const title = listItem.querySelector(".card__title");
  const image = listItem.querySelector(".card__image");

  title.textContent = cardData.name;
  image.style.backgroundImage = `url(${cardData.link})`;
  list.append(listItem);
}

initialCards.forEach(generateCard);
