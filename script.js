// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/04/gta.jpg?tf=1200x",
  'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg',
  'https://m.media-amazon.com/images/I/51J6PtRgQrL._SX300_SY300_QL70_FMwebp_.jpg',
  'https://store-images.s-microsoft.com/image/apps.34631.14293400522343232.ff4bf536-ec75-44c3-889f-731ca1db2127.d22625f3-a1bf-4c21-8d06-62085c900806',
  'https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png'
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}