const imageModal = document.querySelector(".popup_type_image-modal");
const previewImage = document.querySelector(".popup__preview-image");
const previewTitle = document.querySelector(".popup__preview-title");

export class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;
  }

  _handleLikeButton() {
    likeButton.classList.toggle("card__like-icon_type_active");
  }
  _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  };
  _handlePreview() {
    openModal(imageModal);
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewTitle.textContent = cardData.name;
  }
  _getElement(templateCardSelector) {
    return document.querySelector(templateCardSelector);
  }
  _setEventListeners() {
    const likeButton = this._element.querySelector(".card__like-icon");
    const deleteButton = this._element.querySelector(".card__delete-button");
    const image = this._element.querySelector(".card__image");
    likeButton.addEventListener("click", this._handleLikeButton);
    deleteButton.addEventListener("click", this._handleDeleteCard);
    image.addEventListener("click", this._handlePreview);
  }
  _getCardElement() {
    this._element = this._getElement(this._templateCardSelector).cloneNode(
      true
    );
    const name = this._name;
    image.style.backgroundImage = `url(${this._link})`;
    title.textContent = this._element._name;
    this._listItem.querySelector(".card__title").textContent = name;
    this._setEventListeners();
    return this._element;
  }
}
