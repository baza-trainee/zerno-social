(() => {
  const refs = {
    readMore: document.querySelectorAll('[readMoreBtn]'),
    closeMore: document.querySelectorAll('[closeMoreBtn]'),
  };

  refs.readMore.forEach(button => {
    button.addEventListener('click', showMore);
  });

  refs.closeMore.forEach(button => {
    button.addEventListener('click', hideMore);
  });

  function showMore(event) {
    const articleId = event.currentTarget.getAttribute('readMoreBtn');
    toggleCard(articleId, true);
  }

  function hideMore(event) {
    const articleId = event.currentTarget.getAttribute('closeMoreBtn');
    toggleCard(articleId, false);
  }

  function toggleCard(articleId, show) {
    const selectedCard = document.querySelectorAll(`[data-card]`);
    const selectedCardMore = document.querySelector(
      `[data-more="${articleId}"]`
    );

    selectedCard.forEach(card => {
      card.classList.toggle('hidden', show);
    });
    selectedCardMore.classList.toggle('hidden', !show);
  }
})();

// function readMore(event) {
//   const btn = event.target;
//   const card = btn.parentNode.parentNode;
//   const cardMore = card.parentNode.querySelector('[data-more]');
//   card.classList.add('hidden');
//   cardMore.classList.remove('hidden');
// }

// function closeMore(event) {
//   const btn = event.target;
//   const cardMore = btn.parentNode.parentNode;
//   const card = cardMore.parentNode.querySelector('[data-card]');
//   card.classList.remove('hidden');
//   cardMore.classList.add('hidden');
// }
