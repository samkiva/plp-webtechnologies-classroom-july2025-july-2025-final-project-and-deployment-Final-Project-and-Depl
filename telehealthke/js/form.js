const RED_FLAGS = ['chest pain','difficulty breathing','heavy bleeding','unresponsive','high fever','lethargy','severe dehydration','pregnancy bleeding'];
const YELLOW_FLAGS = ['fever','abdominal pain','persistent cough','rash','moderate dehydration'];

function triageLevel(text) {
  const t = (text || '').toLowerCase();
  if (RED_FLAGS.some(k => t.includes(k))) return 'RED';
  if (YELLOW_FLAGS.some(k => t.includes(k))) return 'YELLOW';
  return 'GREEN';
}

function triageAdvice(level) {
  const lang = localStorage.getItem('thke_lang') || 'en';
  const adv = {
    en: {
      RED: 'Seek urgent care immediately.',
      YELLOW: 'Consult a clinician promptly.',
      GREEN: 'Self-care advice: rest, fluids, monitor symptoms.'
    },
    ki: {
      RED: 'Tafuta huduma za dharura mara moja.',
      YELLOW: 'Wasiliana na daktari haraka.',
      GREEN: 'Ushauri wa kujitunza: pumzika, kunywa maji, fuatilia dalili.'
    }
  };
  return adv[lang][level];
}

function saveAppointment(data) {
  const all = JSON.parse(localStorage.getItem('thke_appointments') || '[]');
  all.push({ id: Date.now(), status: 'New', createdAt: new Date().toISOString(), ...data });
  localStorage.setItem('thke_appointments', JSON.stringify(all));
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const triageCard = document.getElementById('triageCard');
  const triageResult = document.getElementById('triageResult');
  const triageAdviceEl = document.getElementById('triageAdvice');
  const submitNotice = document.getElementById('submitNotice');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const consent = form.querySelector('#consent').checked;
    if (!consent) return alert((localStorage.getItem('thke_lang') || 'en') === 'en' ? 'Please consent to proceed.' : 'Tafadhali kubali kuendelea.');

    const payload = {
      firstName: form.firstName.value.trim(),
      phone: form.phone.value.trim(),
      subCounty: form.subCounty.value.trim(),
      symptoms: form.symptoms.value.trim(),
      urgency: form.urgency.value,
      preferredTime: form.preferredTime.value,
    };

    if (!payload.firstName || !payload.phone || !payload.subCounty || !payload.symptoms || !payload.urgency || !payload.preferredTime) {
      return alert('Please complete all fields.');
    }

    const level = triageLevel(payload.symptoms);
    triageResult.textContent = level;
    triageAdviceEl.textContent = triageAdvice(level);
    triageCard.classList.remove('hidden');

    try { saveAppointment({ ...payload, triage: level }); submitNotice.classList.remove('hidden'); }
    catch { alert('Saved locally for demo.'); }

    form.reset();
  });
});