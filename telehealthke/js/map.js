async function loadClinics() {
  try {
    const res = await fetch('data/clinics.json', { cache: 'no-store' });
    return await res.json();
  } catch {
    alert('Unable to load clinic data. Check your connection.');
    return [];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('showMap');
  const mapEl = document.getElementById('map');
  let map;

  btn?.addEventListener('click', async () => {
    btn.disabled = true;
    mapEl.classList.remove('hidden');
    map = L.map('map').setView([-1.286389, 36.817223], 7); // Nairobi center, zoom Kenya
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18, attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const clinics = await loadClinics();
    clinics.forEach(c => {
      L.marker([c.lat, c.lng]).addTo(map).bindPopup(`<strong>${c.name}</strong><br>${c.services}`);
    });
  });
});
