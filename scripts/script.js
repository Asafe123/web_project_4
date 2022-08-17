//cards info
const initialCards = [
  {
    title: "Tel-Aviv Landscape",
    link: "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/06/Best-areas-to-stay-in-Tel-Aviv-scaled-e1593008399620.jpg?w=1506&ssl=1",
  },
  {
    title: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
//////////////////////////////
///wrappers///////////////////
//////////////////////////////
const placesList = document.querySelector(".places__list");

/////////////////////
// queryselectors////
/////////////////////
const editProfileButton = document.querySelector(".profile__edit-button");
const addImageButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const closeButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const profileForm = document.querySelector(".popup__form");
const profileInputName = document.querySelector(".popup__form-input_type_name");
const profileInputOccupation = document.querySelector(
  ".popup__form-input_type_occupation"
);
const popupAddBtn = document.querySelector(".popup_type_add");
const popupImageCloseButton = document.querySelector(".popup-image_type_close");
// objects of add image form:
const formImageTitle = document.querySelector(
  ".popup__form-input_type_image-title"
);
const formImageLink = document.querySelector(".popup__form-input_type_link");
const formImageSubmit = document.querySelector(
  ".popup__submit-button_type_submit-image"
);

/////////////////////
// functions/////////
/////////////////////

function activePopup() {
  popup.classList.add("popup_opened");
  profileInputName.value = profileName.textContent;
  profileInputOccupation.value = profileOccupation.textContent;
}
function activeAddImagePopup() {
  popupAddBtn.classList.add("popup_opened");
}
function closeProfilePopup() {
  popup.classList.remove("popup_opened");
}
function closeImagePopup() {
  popupAddBtn.classList.remove("popup_opened");
}
function saveProfileForm(evt) {
  //erase defualt settings
  evt.preventDefault();
  //close popup
  closeProfilePopup();
  //enter values on profile window
  profileName.textContent = profileInputName.value;
  profileOccupation.textContent = profileInputOccupation.value;
}

function makeNewCard() {}

//////////////////////
//EVENT LISTENERS/////
//////////////////////
editProfileButton.addEventListener("click", activePopup);
addImageButton.addEventListener("click", activeAddImagePopup);
closeButton.addEventListener("click", closeProfilePopup);
profileForm.addEventListener("submit", saveProfileForm);
popupImageCloseButton.addEventListener("click", closeImagePopup);
formImageSubmit.addEventListener("submit", makeNewCard);

//////////////////////
//TEMPLATES///////////
//////////////////////

function generateCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__title").textContent = card.title;
  cardElement.querySelector(
    ".card__image"
  ).style.backgroundImage = `url(${card.link})`;
  return cardElement;
}
function renderCard(card, container) {
  container.append(card);
}

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".places__item");

initialCards.forEach(function (card) {
  const newCard = generateCard(card);
  renderCard(newCard, placesList);
});
