const imageModal = document.querySelector(".popup_type_image-modal");
const previewImage = document.querySelector(".popup__preview-image");
const previewTitle = document.querySelector(".popup__preview-title");

export class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;

    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("card__like-icon_type_active");
  }
  _handleDeleteCard() {
    this._listItem.remove();
  }
  _handlePreview() {
    openModal(imageModal);
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewTitle.textContent = cardData.name;
  }
  _getCardElement() {
    this._listItem = this._templateCardSelector.cloneNode(true);

    const likeButton = this._listItem.querySelector(".card__like-icon");
    const image = this._listItem.querySelector(".card__image");
    const deleteButton = this._listItem.querySelector(".card__delete-button");
    this._listItem.querySelector(".card__title").textContent = this._name;
    image.style.backgroundImage = `url(${this._link})`;
    likeButton.addEventListener("click", this._handleLikeButton);
    deleteButton.addEventListener("click", this._handleDeleteCard);
    image.addEventListener("click", this._handlePreview);

    return this._listItem;
  }

  // function generateCard(cardData) {

  //   const likeButton = listItem.querySelector(".card__like-icon");
  //   const image = listItem.querySelector(".card__image");
  //   const deleteButton = listItem.querySelector(".card__delete-button");

  //   image.style.backgroundImage = `url(${cardData.link})`;
  //   likeButton.addEventListener("click", () => {
  //     likeButton.classList.toggle("card__like-icon_type_active");
  //   });
  //   deleteButton.addEventListener("click", () => {
  //     listItem.remove();
  //   });
  //   image.addEventListener("click", () => {
  //     openModal(imageModal);
  //     previewImage.src = cardData.link;
  //     previewImage.alt = cardData.name;
  //     previewTitle.textContent = cardData.name;
  //   });
  //   return listItem;

  _addCardElements() {}
}
new Card();
