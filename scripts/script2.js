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

const templateListItem = document
  .querySelector(".card-template")
  .content.querySelector(".card");
const list = document.querySelector(".places__list");

const listItem = templateListItem.cloneNode(true);

const title = listItem.querySelector(".card__title");
const image = listItem.querySelector(".card__image");

title.textContent = "qwerty";
image.style.backgroundImage = `url(https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/06/Best-areas-to-stay-in-Tel-Aviv-scaled-e1593008399620.jpg?w=1506&ssl=1)`;
list.append(listItem);

initialCards.forEach(function (cardData) {
  const listItem = templateListItem.cloneNode(true);

  const title = listItem.querySelector(".card__title");
  const image = listItem.querySelector(".card__image");

  title.textContent = cardData.name;
  image.style.backgroundImage = `url(${cardData.link}))`;
  list.append(listItem);
});
