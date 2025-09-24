// Accessibility: focus visible and skip-link already styled via CSS
// Small scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const reveal = document.querySelectorAll('.reveal');
  const onScroll = () => {
    reveal.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add('visible');
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
});