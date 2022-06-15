//cards info
const initialCards = [
  {
    title: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
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
//wrappers querySelectors
const placesList = document.querySelector(".places__list");

// queryselectors
const editButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const closeButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const profileForm = document.querySelector(".popup__form");
const profileInputName = document.querySelector(".popup__form-input_type_name");
const profileInputOccupation = document.querySelector(
  ".popup__form-input_type_occupation"
);

// functions
function activePopup() {
  popup.classList.add("popup_opened");
  profileInputName.value = profileName.textContent;
  profileInputOccupation.value = profileOccupation.textContent;
}
function closePopup() {
  popup.classList.remove("popup_opened");
}
function saveProfileForm(evt) {
  //erase defualt settings
  evt.preventDefault();
  // close popup
  closePopup();
  //enter values on profile window
  profileName.textContent = profileInputName.value;
  profileOccupation.textContent = profileInputOccupation.value;
}
//EVENT LISTENERS
editButton.addEventListener("click", activePopup);
closeButton.addEventListener("click", closePopup);
profileForm.addEventListener("submit", saveProfileForm);

//TEMPLATES
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".places__item");
initialCards.forEach(function (card) {
  //clone template
  const cardElement = cardTemplate.cloneNode(true);
  // query title element
  cardElement.querySelector(".card__title").textContent = card.title;
  // query image element
  cardElement.querySelector(".card__image").style.backgroundImage = card.link;
  // add event listeners

  someList.append(cardElement);
  console.log(cardElement);
  // append it to the list
});
