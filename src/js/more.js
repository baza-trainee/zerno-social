(() => {
  const refs = {
    readMore: document.querySelectorAll('[readMoreBtn]'),
    closeMore: document.querySelectorAll('[closeMoreBtn]'),
    onTittleClick: document.querySelectorAll('[onTittleClick]'),
  };

  refs.readMore.forEach(button => {
    button.addEventListener('click', showMore);
  });

  refs.closeMore.forEach(button => {
    button.addEventListener('click', hideMore);
  });

  function handleStyles(allTittleCard, articleId, isActive) {
    allTittleCard.forEach(title => {
      const isCurrent = title.getAttribute('readMore') === articleId;
      title.style.backgroundColor = '#727D57';
      title.style.color = 'white';
      if (window.innerWidth >= 1024 && !isCurrent) {
        title.style.backgroundColor = isActive ? 'white' : '#727D57';
        title.style.color = isActive ? '#727D57' : 'white';
      }
    });
  }

  function showMore(event) {
    const articleId = event.currentTarget.getAttribute('readMoreBtn');
    const allTittleCard = document.querySelectorAll('[onTittleClick]');

    handleStyles(allTittleCard, articleId, true);
    toggleCard(articleId);
  }

  function hideMore(event) {
    const articleId = event.currentTarget.getAttribute('closeMoreBtn');
    const allTittleCard = document.querySelectorAll('[onTittleClick]');

    handleStyles(allTittleCard, articleId, false);
    toggleCard(articleId);
  }

  function toggleCard(articleId) {
    const selectedCard = document.querySelector(`[data-card =${articleId}]`);
    const selectedCardMore = document.querySelector(
      `[data-more="${articleId}"]`
    );

    selectedCard.classList.toggle('hidden');
    selectedCardMore.classList.toggle('hidden');

    if (window.innerWidth >= 1024) {
      const allCard = document.querySelectorAll(`[data-card]`);

      allCard.forEach(card => {
        card.classList.toggle('hidden');
      });
      selectedCard.classList.toggle('hidden');
    }
  }
})();
