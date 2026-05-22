/* Campaign Flow popup - open full chapter on card click */
(function(){
  const template = document.getElementById('ljChapters');
  const modal    = document.getElementById('ljModal');
  const body     = document.getElementById('ljModalBody');
  const scrim    = document.getElementById('ljModalScrim');
  const closeBtn = document.getElementById('ljModalClose');
  const prevBtn  = document.getElementById('ljModalPrev');
  const nextBtn  = document.getElementById('ljModalNext');
  if (!template || !modal) return;

  const cards = Array.from(document.querySelectorAll('.lj-tlh-card[data-ch]'));
  const TOTAL = 6;
  let currentCh = 0;

  // Make every card clickable + keyboard accessible
  cards.forEach(card => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openChapter(parseInt(card.dataset.ch, 10)));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openChapter(parseInt(card.dataset.ch, 10));
      }
    });
  });

  function openChapter(ch){
    const src = template.content.querySelector('article[data-ch="' + ch + '"]');
    if (!src) return;
    currentCh = ch;
    body.innerHTML = src.innerHTML;
    body.scrollTop = 0;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    updateNav();
    setTimeout(() => closeBtn && closeBtn.focus(), 150);
  }

  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateNav(){
    if (prevBtn) prevBtn.disabled = currentCh <= 1;
    if (nextBtn) nextBtn.disabled = currentCh >= TOTAL;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { if (currentCh > 1) openChapter(currentCh - 1); });
  if (nextBtn) nextBtn.addEventListener('click', () => { if (currentCh < TOTAL) openChapter(currentCh + 1); });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (scrim) scrim.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowLeft' && currentCh > 1) openChapter(currentCh - 1);
    else if (e.key === 'ArrowRight' && currentCh < TOTAL) openChapter(currentCh + 1);
  });
})();
