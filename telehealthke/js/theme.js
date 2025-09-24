const THEME_KEY = 'thke_theme';
function applyTheme(t) { document.documentElement.setAttribute('data-theme', t); }
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(saved);
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const next = (localStorage.getItem(THEME_KEY) === 'dark') ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next); applyTheme(next);
  });
}
document.addEventListener('DOMContentLoaded', initTheme);
