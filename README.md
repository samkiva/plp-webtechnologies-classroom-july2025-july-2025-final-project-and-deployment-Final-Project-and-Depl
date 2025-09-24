
🏨TeleHealthKE — Kenya Telemedicine MVP

TeleHealthKE is a bilingual, accessible, static web application that enables remote symptom triage and appointment requests for rural patients in Kenya. It includes a clinic map, a demo dashboard, and interactive features to simulate a realistic telemedicine workflow.

---

🌍 Live Site

👉 Live URL: https://samkiva.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/telehealthke/map.html

---

🎯 Purpose

This MVP addresses limited clinical access in rural Kenya by allowing patients to:
- Complete a symptom triage form
- Receive immediate guidance (self-care / consult / urgent)
- Request appointments (stored locally for demo)
- View nearby clinics on an interactive map
- Simulate clinician dashboard with status updates and analytics

---

👥 Target Users

- Primary: Rural patients and caregivers
- Secondary: Community health workers and local clinicians
- Stakeholders: NGOs, health administrators, and small clinics

---

🗂️ Pages & Navigation

| Page         | Description                                      |
|--------------|--------------------------------------------------|
| index.html | Mission, CTA to start triage                     |
| book.html  | Symptom triage + appointment booking form        |
| map.html   | Leaflet map with sample Kenya clinics            |
| dashboard.html | Demo dashboard with appointment list + chart |
| about.html | Project purpose, privacy notes, contact form     |
| 404.html   | Custom not-found page                            |

---

🧪 Interactive Features

- Bilingual toggle (English / Kiswahili)
- Theme switcher (light/dark) persisted via localStorage
- Rule-based symptom triage (red/yellow/green)
- Validated booking form (HTML5 + JS)
- Leaflet map with markers from data/clinics.json
- Dashboard with status cycling and canvas chart
- Scroll reveal animations and hover effects

---

🛠️ Tech Stack

- Frontend: HTML5, CSS3, Vanilla JavaScript
- Maps: Leaflet + OpenStreetMap tiles
- Storage: localStorage for demo appointment data
- Charts: Canvas-based bar chart (no external libraries)

---

📁 File Structure

`
telehealthke/
├── index.html
├── book.html
├── map.html
├── dashboard.html
├── about.html
├── 404.html
├── css/
│   ├── styles.css
│   └── theme.css
├── js/
│   ├── components.js
│   ├── main.js
│   ├── theme.js
│   ├── i18n.js
│   ├── form.js
│   ├── map.js
│   └── dashboard.js
├── data/
│   ├── clinics.json
│   └── appointments.json
├── images/
│   └── hospital-hero.jpg
└── README.md
`

---

🚀 How to Run Locally

1. Clone the repo:
   `bash
   git clone https://github.com/samkiva/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl.git
   `
2. Navigate to the project folder:
   `bash
   cd telehealthke
   `
3. Open index.html in your browser  
   For full functionality (e.g. JSON fetch), use a local server:
   `bash
   python -m http.server 8080
   `

---

🌐 Deployment

- Platform: GitHub Pages
- Branch: main
- Folder: /telehealthke
- Live URL: Paste your final link here after deployment

---

🔒 Privacy & Security

- No backend or real data collection
- All data stored locally for demo purposes
- Consent checkbox required before submission
- No PII logged or transmitted

---

✅ QA Checklist

- [x] All internal links work across pages
- [x] Form validation enforced (required fields, phone pattern)
- [x] Triage logic displays correct result
- [x] Map loads clinics after button click
- [x] Dashboard shows demo appointments and chart
- [x] Theme and language toggles persist
- [x] Responsive layout (mobile and desktop)
- [x] Accessibility: keyboard nav, focus styles, ARIA labels, color contrast AA
- [x] 404 page displays for broken links
- [x] No console errors or broken assets

---
