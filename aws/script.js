document.querySelectorAll('[data-animated]').forEach(card => {
  const src = card.dataset.animated;
  const swap = card.querySelector('.svg-swap, .line-svg-swap');
  if (!swap) return;

  card.addEventListener('mouseenter', () => {
    // Create a fresh <object> each time so the SVG animation restarts
    const obj = document.createElement('object');
    obj.type = 'image/svg+xml';
    obj.data = src;
    obj.style.pointerEvents = 'none';
    obj.setAttribute('aria-hidden', 'true');
    swap.appendChild(obj);
    // Hide the static image
    swap.querySelector('img').style.opacity = '0';
  });

  card.addEventListener('mouseleave', () => {
    // Remove the animated object and restore the static image
    const obj = swap.querySelector('object');
    if (obj) obj.remove();
    swap.querySelector('img').style.opacity = '1';
  });
});
