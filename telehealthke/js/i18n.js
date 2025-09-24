const LANG_KEY = 'thke_lang';
const messages = {
  en: {
    nav_home: 'Home', nav_book: 'Triage & Book', nav_map: 'Clinic Map',
    nav_dashboard: 'Dashboard', nav_about: 'About',
    home_title: 'TeleHealthKE: Remote triage and booking',
    home_intro: 'Get guidance fast, then request an appointment with nearby clinics.',
    cta_start: 'Start triage', cta_map: 'Find clinics',
    disclaimer: 'Demo only. Not a substitute for emergency care. If urgent, call local emergency services.',
    how_title: 'How it works', how_1: 'Answer simple symptom questions.', how_2: 'Get guidance: self-care, prompt consult, or urgent.', how_3: 'Request an appointment (stored locally for demo).',
    book_title: 'Symptom check & appointment', form_help: 'Fill the form. Your data stays on your device for demo.',
    label_firstname: 'First name', label_phone: 'Phone', label_subcounty: 'Location (Sub-county)', label_symptoms: 'Symptoms',
    label_urgency: 'Your sense of urgency', urgency_select: 'Select…', urgency_low: 'Low', urgency_medium: 'Medium', urgency_high: 'High',
    label_time: 'Preferred time', label_consent: 'I consent to submit this information for demo evaluation.',
    btn_submit: 'Submit', triage_result_title: 'Triage result', triage_level: 'Level', submit_notice: 'Appointment saved locally for demo.',
    map_title: 'Nearby clinics', map_disclaimer: 'Sample OSM-derived data. Not comprehensive.', btn_showmap: 'Show clinics',
    dash_title: 'Appointment requests (Demo)', btn_reset: 'Reset demo data',
    th_time: 'Time', th_name: 'Name', th_phone: 'Phone', th_location: 'Location', th_triage: 'Triage', th_status: 'Status', th_action: 'Action',
    dash_chart_title: 'Appointments per day',
    about_title: 'About TeleHealthKE', about_body: 'TeleHealthKE is a demo MVP for rural triage and booking. No real backend or PII collection.',
    contact_title: 'Contact', contact_name: 'Name', contact_msg: 'Message', btn_send: 'Send (demo)',
    footer_disclaimer: 'Demo only. Not for emergencies.'
  },
  ki: {
    nav_home: 'Nyumbani', nav_book: 'Uchunguzi & Uhifadhi', nav_map: 'Ramani ya Kliniki',
    nav_dashboard: 'Dashibodi', nav_about: 'Kuhusu',
    home_title: 'TeleHealthKE: Uchunguzi wa mbali na uhifadhi',
    home_intro: 'Pata ushauri haraka, kisha uombe miadi na kliniki zilizo karibu.',
    cta_start: 'Anza uchunguzi', cta_map: 'Tafuta kliniki',
    disclaimer: 'Jaribio tu. Sio mbadala wa huduma za dharura. Ikiwa ni dharura, piga huduma za dharura.',
    how_title: 'Jinsi inavyofanya kazi', how_1: 'Jibu maswali rahisi ya dalili.', how_2: 'Pata ushauri: kujitunza, wasiliana haraka, au dharura.', how_3: 'Omba miadi (inahifadhiwa kwenye kifaa chako kwa jaribio).',
    book_title: 'Uchunguzi wa dalili & miadi', form_help: 'Jaza fomu. Data yako inabaki kwenye kifaa chako kwa jaribio.',
    label_firstname: 'Jina la kwanza', label_phone: 'Simu', label_subcounty: 'Mahali (Kaunti Ndogo)', label_symptoms: 'Dalili',
    label_urgency: 'Hisia ya uharaka', urgency_select: 'Chagua…', urgency_low: 'Chini', urgency_medium: 'Kati', urgency_high: 'Juu',
    label_time: 'Muda unaopendwa', label_consent: 'Nakubali kutuma taarifa hizi kwa madhumuni ya jaribio.',
    btn_submit: 'Tuma', triage_result_title: 'Matokeo ya uchunguzi', triage_level: 'Kiwango', submit_notice: 'Miadi imehifadhiwa kwenye kifaa chako (jaribio).',
    map_title: 'Kliniki zilizo karibu', map_disclaimer: 'Data ya mfano kutoka OSM. Sio kamili.', btn_showmap: 'Onyesha kliniki',
    dash_title: 'Maombi ya miadi (Jaribio)', btn_reset: 'Weka upya data ya jaribio',
    th_time: 'Muda', th_name: 'Jina', th_phone: 'Simu', th_location: 'Mahali', th_triage: 'Uchunguzi', th_status: 'Hali', th_action: 'Kitendo',
    dash_chart_title: 'Miadi kwa siku',
    about_title: 'Kuhusu TeleHealthKE', about_body: 'TeleHealthKE ni MVP ya jaribio kwa uchunguzi wa vijijini na uhifadhi. Hakuna backend halisi au ukusanyaji wa PII.',
    contact_title: 'Mawasiliano', contact_name: 'Jina', contact_msg: 'Ujumbe', btn_send: 'Tuma (jaribio)',
    footer_disclaimer: 'Jaribio tu. Sio kwa dharura.'
  }
};

function t(key) {
  const lang = localStorage.getItem(LANG_KEY) || 'en';
  return messages[lang][key] || key;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
}

function initLang() {
  const saved = localStorage.getItem(LANG_KEY) || 'en';
  localStorage.setItem(LANG_KEY, saved);
  document.getElementById('langToggle')?.addEventListener('click', () => {
    const next = (localStorage.getItem(LANG_KEY) === 'en') ? 'ki' : 'en';
    localStorage.setItem(LANG_KEY, next); applyI18n();
  });
  applyI18n();
}
document.addEventListener('DOMContentLoaded', initLang);
