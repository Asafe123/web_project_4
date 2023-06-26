import { openModal } from "./index.js";

const imageModal = document.querySelector(".popup_type_image-modal");
const previewImage = document.querySelector(".popup__preview-image");
const previewTitle = document.querySelector(".popup__preview-title");

export class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;
  }

  _handleLikeButton = () => {
    this.likeButton.classList.toggle("card__like-icon_type_active");
  };
  _handleDeleteButton = () => {
    this._element.remove();
  };

  _handlePreview = () => {
    openModal(imageModal);
    previewImage.src = this._link;
    previewImage.alt = this._name;
    previewTitle.textContent = this._name;
  };

  _setEventListeners() {
    this.likeButton.addEventListener("click", this._handleLikeButton);
    this.deleteButton.addEventListener("click", this._handleDeleteButton);
    this.image.addEventListener("click", this._handlePreview);
  }
  _getCardElement() {
    this._element = document
      .querySelector(this._templateCardSelector)
      .content.querySelector(".places__item")
      .cloneNode(true);
    this.likeButton = this._element.querySelector(".card__like-icon");
    this.image = this._element.querySelector(".card__image");
    this.deleteButton = this._element.querySelector(".card__delete-button");
    const cardName = this._name;
    this._element.querySelector(".card__title").textContent = cardName;
    this.image.style.backgroundImage = `url(${this._link})`;
    this._setEventListeners();
    return this._element;
  }
}
