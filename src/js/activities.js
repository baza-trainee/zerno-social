const categoriesContainer = document.querySelector('.categories');
const categoryItems = categoriesContainer.querySelectorAll('button');

categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    if (!item.classList.contains('active')) {
      categoryItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      item.classList.add('active');
    }
  });
});


  const cardList = document.querySelector(".activities-cards");
  const cards = cardList.querySelectorAll(".swiper-slide");

  cards.forEach((card) => {
    const contentParagraph = card.querySelector("p");
    const maxCharacters = 135;

    if (contentParagraph.textContent.length > maxCharacters) {
      const shortContent = contentParagraph.textContent.substring(0, maxCharacters);
      contentParagraph.textContent = shortContent.trim() + '...';
    }
  });