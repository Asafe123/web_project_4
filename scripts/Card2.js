class Card {
  constructor(data, templateCardSelector) {
    this._data = data;
    this._templateCardSelector = templateCardSelector;

    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".places__item");
  }
  _handleLikeButton() {
    likeButton.classList.toggle("card__like-icon_type_active");
  }
  _handleDeleteButton(item) {
    deleteButton.addEventListener("click", () => {
      item.remove();
    });
  }
  _handlePreview() {
    image.addEventListener("click", () => {
      openModal(imageModal);
      previewImage.src = cardData.link;
      previewImage.alt = cardData.name;
      previewTitle.textContent = cardData.name;
    });
  }

  _generateCard() {
    this._cardElement = this._cardTemplate.cloneNode(true);

    this._cardElement.querySelector(".card__title").textContent =
      this._data.name;

    const title = this._cardElement.querySelector(".card__title");
    const link = this._cardElement.querySelector(".card__image");
    const likeButton = this._cardElement.querySelector(".card__like-icon");
    const deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );

    // likeButton.addEventListener("click", this._handleLikeButton);
    // deleteButton.addEventListener("click", this._handleDeleteButton);
    // this._cardElement.addEventListener("click", this._handlePreview)
  }
}

// function generateCard(cardData) {
//     const listItem = templateListItem.cloneNode(true);
//     const title = listItem.querySelector(".card__title");
//     const likeButton = listItem.querySelector(".card__like-icon");
//     const image = listItem.querySelector(".card__image");
//     const deleteButton = listItem.querySelector(".card__delete-button");
//     title.textContent = cardData.name;
//     image.style.backgroundImage = `url(${cardData.link})`;
//     likeButton.addEventListener("click", () => {
//       likeButton.classList.toggle("card__like-icon_type_active");
//     });
//     function handleDeleteButton(item) {
//       deleteButton.addEventListener("click", () => {
//         item.remove();
//       });
//     }
//     function handlePreview() {
//       image.addEventListener("click", () => {
//         openModal(imageModal);
//         previewImage.src = cardData.link;
//         previewImage.alt = cardData.name;
//         previewTitle.textContent = cardData.name;
//       });
//     }
//     handleDeleteButton(listItem);
//     handlePreview();
//     return listItem;
//   }
