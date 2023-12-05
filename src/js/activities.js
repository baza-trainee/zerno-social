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