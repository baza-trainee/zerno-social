function readMore(event) {
  const btn = event.target;
  const card = btn.parentNode.parentNode;
  const cardMore = card.parentNode.querySelector('[data-more]');
  card.classList.add('hidden');
  cardMore.classList.remove('hidden');
}

function closeMore(event) {
  const btn = event.target;
  const cardMore = btn.parentNode.parentNode;
  const card = cardMore.parentNode.querySelector('[data-card]');
  card.classList.remove('hidden');
  cardMore.classList.add('hidden');
}
