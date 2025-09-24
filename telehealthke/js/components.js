function injectHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  header.innerHTML = `
  <div class="container header-inner">
    <a href="index.html" class="logo" aria-label="TeleHealthKE">TeleHealthKE</a>
    <nav aria-label="Primary">
      <a href="index.html" data-i18n="nav_home">Home</a>
      <a href="book.html" data-i18n="nav_book">Triage & Book</a>
      <a href="map.html" data-i18n="nav_map">Clinic Map</a>
      <a href="dashboard.html" data-i18n="nav_dashboard">Dashboard</a>
      <a href="about.html" data-i18n="nav_about">About</a>
    </nav>
    <div class="controls">
      <button id="langToggle" class="btn" aria-label="Toggle language">EN/KI</button>
      <button id="themeToggle" class="btn" aria-label="Toggle theme">☀︎/☾</button>
    </div>
  </div>`;
}
function injectFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  footer.innerHTML = `
  <div class="container">
    <p>&copy; ${new Date().getFullYear()} TeleHealthKE</p>
    <small data-i18n="footer_disclaimer">Demo only. Not for emergencies.</small>
  </div>`;
}
document.addEventListener('DOMContentLoaded', () => { injectHeader(); injectFooter(); });