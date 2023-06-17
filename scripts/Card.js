const imageModal = document.querySelector(".popup_type_image-modal");
const previewImage = document.querySelector(".popup__preview-image");
const previewTitle = document.querySelector(".popup__preview-title");

// Please observe syntax, and missingg code blocks.
export class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;
  }

  _handleLikeButton() {
    likeButton.classList.toggle("card__like-icon_type_active");
  }
  _handleDeleteCard() {
    // need to use an arrow function like this:
    // _handleDeleteCard = () => {}
    //  and to call it on set event listeners
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
}
new Card();
