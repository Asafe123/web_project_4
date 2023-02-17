class Card {
  constructor(cardData, cardTemplateElement) {
    this._text = cardData.name;
    this._link = cardData.link;

    this._cardTemplate = cardTemplateElement;
  }

  _addCardElements() {}
}
