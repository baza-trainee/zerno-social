const activitiesBlock = document.querySelector('.activities');
const categoriesContainer = document.querySelector('.categories');
const categoryItems = categoriesContainer.querySelectorAll('.category');
const cards = activitiesBlock.querySelectorAll('.swiper-slide');
const filterButton = activitiesBlock.querySelector('.filter');
const closeButton = activitiesBlock.querySelector('.close');

categoryItems.forEach(item => {
  let selectedCategory = '';

  item.addEventListener('click', () => {
    if (!item.classList.contains('active')) {
      categoryItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      item.classList.add('active');
      selectedCategory = item.innerText.toLowerCase().trim();

      cards.forEach(card => {
        const categoryTags = Array.from(
          card.querySelectorAll('.inline-block')
        ).map(tag => tag.innerText.toLowerCase().trim());
        const isVisible =
          categoryTags.includes(selectedCategory) || selectedCategory === 'усі';

        card.style.display = isVisible ? 'block' : 'none';
        categoriesContainer.classList.add('max-lg:hidden');
      });
      activitiesSwiper.update();
    }
  });
});

filterButton.addEventListener('click', () => {
  categoriesContainer.classList.remove('max-lg:hidden');
});

closeButton.addEventListener('click', () => {
  categoriesContainer.classList.add('max-lg:hidden');
});
