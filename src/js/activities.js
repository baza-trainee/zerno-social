const activitiesBlock = document.querySelector('.activities');
const categoriesContainer = document.querySelector('.categories');
const categoryItems = categoriesContainer.querySelectorAll('.category');
const cards = activitiesBlock.querySelectorAll('.swiper-slide');
const filterButton = activitiesBlock.querySelector('.filter');
const closeButton = activitiesBlock.querySelector('.close');
const activitiesTitles = activitiesBlock.querySelectorAll('h3');

const currentLanguage = localStorage.language || 'UA';

var activitiesSwiper = new Swiper('.activitiesSwiper', {
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.custom-next-button',
    prevEl: '.custom-prev-button',
  },
  breakpoints: {
    320: {
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 'auto',
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
  },
});

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
        let isVisible = false;

        if (currentLanguage === 'EN') {
          isVisible =
            categoryTags.includes(selectedCategory) ||
            selectedCategory === 'all';
        } else if (currentLanguage === 'UA') {
          isVisible =
            categoryTags.includes(selectedCategory) ||
            selectedCategory === 'усі';
        }

        card.style.display = isVisible ? 'block' : 'none';
      });

      activitiesSwiper.update();
      categoriesContainer.classList.add('max-lg:hidden');
    }
  });
});

filterButton.addEventListener('click', () => {
  categoriesContainer.classList.remove('max-lg:hidden');
});

closeButton.addEventListener('click', () => {
  categoriesContainer.classList.add('max-lg:hidden');
});

if (currentLanguage === 'EN') {
  activitiesTitles.forEach(title => {
    title.classList.add('activities_title')
  })
} else if (currentLanguage === 'UA') {
  activitiesTitles.forEach(title => {
    title.classList.remove('activities_title')
  })
}
