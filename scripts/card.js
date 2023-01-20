export class card {
  constructor(cardData, cardTampleteElement) {
    this._text = cardData.name;
    this._link = cardData.link;
    this._templete = cardTampleteElement;
  }
  _handleLike() {
    likeButton.classList.toggle("card__like-icon_type_active");
  }
  _handleDelete() {
    listItem.remove();
  }
  _handlePreview() {
    openModal(imageModal);
    previewImage.src = this._link;
    previewImage.alt = this._text;
    previewTitle.textContent = this._text;
  }

  _addEventListeners() {
    const title = listItem.querySelector(".card__title");
    const likeButton = listItem.querySelector(".card__like-icon");
    const image = listItem.querySelector(".card__image");
    const deleteButton = listItem.querySelector(".card__delete-button");
    title.textContent = cardData.name;
    image.style.backgroundImage = `url(${this._link})`;
    likeButton.addEventListener("click", this._handleLike);
    deleteButton.addEventListener("click", this._handleDelete);
    image.addEventListener("click", this._handlePreview);
  }

  render() {
    this._listItem = this._templateListItem.cloneNode(true);
    this._addEventListeners();
    return this._listItem;
  }
}
const myCard = new card();
console.log(myCard);
