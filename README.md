# ✨ MD. ABDUL AWAL TOHA — Developer Portfolio

<p align="center">
  A responsive developer portfolio showcasing selected web projects, technical skills, experience, education, and contact options.
</p>

<p align="center">
  <a href="https://portfolio-by-toha.vercel.app/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Live%20Portfolio-Visit%20Website-brightgreen?style=for-the-badge&logo=vercel" alt="Live Portfolio" />
  </a>
  <a href="https://github.com/mdabdulawal2001" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github" alt="GitHub Profile" />
  </a>
  <a href="https://www.linkedin.com/in/md-abdul-awal-toha/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn Profile" />
  </a>
  <a href="mailto:mdabdulawal2001@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

## 📝 Project Overview

This portfolio presents **MD. Abdul Awal Toha's** work and professional background in one responsive website. Visitors can explore the projects, review their technologies and details, learn about skills and experience, and get in touch.

The site is built with **Next.js App Router** and includes:

* 🧭 Section navigation with a mobile slide-in sidebar
* 👨‍💻 Hero introduction, profile photo, social links, and resume download
* 🙋 About, skills, education, and experience sections
* 🚀 Project cards linked to individual project detail pages
* ✉️ Contact information and an EmailJS contact form
* 🌙 Light and dark themes
* 📱 Responsive layouts and motion effects

This repository contains the **portfolio frontend**. Some showcased projects have separate repositories and services; they are linked from their project details.

---

## 🔗 Portfolio & Contact Links

<p align="center">
  <a href="https://portfolio-by-toha.vercel.app/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Live%20Portfolio-Open%20Site-brightgreen?style=for-the-badge&logo=vercel" alt="Live Portfolio Website" />
  </a>
  <a href="https://github.com/mdabdulawal2001" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/GitHub-Visit%20Profile-black?style=for-the-badge&logo=github" alt="GitHub Profile" />
  </a>
  <a href="https://www.linkedin.com/in/md-abdul-awal-toha/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/LinkedIn-View%20Profile-blue?style=for-the-badge&logo=linkedin" alt="LinkedIn Profile" />
  </a>
  <a href="mailto:mdabdulawal2001@gmail.com">
    <img src="https://img.shields.io/badge/Email-Send%20a%20Message-red?style=for-the-badge&logo=gmail&logoColor=white" alt="Email MD. Abdul Awal Toha" />
  </a>
</p>

---

## 📸 Screenshots

<p align="center">
<img width="1453" height="840" alt="Screenshot 2026-10-23 181235" src="https://github.com/user-attachments/assets/4c3ccf7a-c028-4efa-8753-b7e0c58210d8" />
</p>


---

## 🚀 Portfolio Features

### 🧭 Navigation

* Desktop navigation links move between portfolio sections.
* On small screens, the menu opens as a right-side sidebar with a dimmed backdrop.
* The sidebar closes from its close button, backdrop, Escape key, or after selecting a section.
* Theme switching is available in the desktop navigation and mobile sidebar.

### 👨‍💻 Hero & Resume

* Professional introduction and local profile photo.
* GitHub, LinkedIn, Facebook, and email links.
* Resume button links to the supplied Google Drive file.
* The profile image uses a gentle floating animation and respects reduced-motion preferences.

### 🙋 Professional Sections

* About section and development highlights.
* Skills grouped by category.
* Education and practical experience timelines.
* Contact details for email, phone, and WhatsApp.

### ✉️ Contact Form

* The form sends messages through EmailJS when configured.
* SweetAlert2 displays draggable success and error messages.
* If EmailJS is unavailable, visitors can still contact the developer directly by email.

### 🚀 Projects & Details

Project cards include a cover image, summary, technology badges, live demo, repository, and a details link. Each project has a dynamic page at `/projects/[id]` with its overview, technology stack, screenshots, challenges, future improvements, and project links.

Current featured work includes:

* Trip Swift — Online Ticket Booking Platform
* IdeaVault — Modern Idea Management Platform
* SkillSphere — Modern Online Learning Platform
* KeenKeeper — Friendship & Relationship Tracker
* Digital Tools Buying Website
* GitHub Issues Tracker
* Job Application Tracker

---

## 🛠️ Technologies Used

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animation-0055FF?style=for-the-badge&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/HeroUI-Components-7828C8?style=for-the-badge" alt="HeroUI" />
  <img src="https://img.shields.io/badge/EmailJS-Contact_Form-FFB400?style=for-the-badge" alt="EmailJS" />
  <img src="https://img.shields.io/badge/SweetAlert2-Alerts-7066E0?style=for-the-badge" alt="SweetAlert2" />
  <img src="https://img.shields.io/badge/React_Icons-Icons-E91E63?style=for-the-badge" alt="React Icons" />
</p>

---

## 🏗️ Application Structure

```text
src/
├── app/
│   ├── projects/[id]/page.js   # Dynamic project detail route
│   ├── globals.css             # Global styles and theme foundations
│   ├── layout.js               # Root layout, metadata, and navigation
│   └── page.js                 # Portfolio sections and homepage
├── assets/                     # Profile and About images
├── components/                 # Navigation, sections, and reusable UI
└── data/                       # Navigation, projects, skills, and profile data
```

---

## 📦 Getting Started

### Requirements

* Node.js and npm
* EmailJS account credentials only if you want the contact form to send email

### Install and Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev    # Start the Next.js development server
npm run lint   # Run ESLint
npm run build  # Create a production build
npm run start  # Start the production server
```

### EmailJS Configuration

Create a `.env.local` file in the project root and provide the EmailJS values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

These values are used by the browser-based EmailJS integration. Do not put private server credentials in `NEXT_PUBLIC_*` variables. Without EmailJS configuration, the site shows direct email contact options.

---

## 🌐 Deployment

Deploy this Next.js application to a platform that supports Next.js. Configure the EmailJS public values in the hosting provider if the contact form should be enabled. Project detail pages are generated from the project data in `src/data/projects.js`.

---

## 🧠 What I Learned

* Building reusable, responsive portfolio sections with React and Next.js.
* Organizing project content as data and rendering dynamic detail routes.
* Creating accessible mobile navigation and theme controls.
* Combining animation, image optimization, and responsive layouts.
* Integrating a browser-based contact form with clear success and error feedback.

---

## 🔮 Future Improvements

* Add polished screenshots to this README.
* Add automated checks for project data and navigation links.
* Continue improving accessibility and performance across devices.

---

## 👨‍💻 Developer

<p align="center">
  <strong>MD. ABDUL AWAL TOHA</strong><br />
  Full Stack Web Developer
</p>

<p align="center">
  <a href="https://github.com/mdabdulawal2001" target="_blank" rel="noreferrer">GitHub</a> ·
  <a href="https://www.linkedin.com/in/md-abdul-awal-toha/" target="_blank" rel="noreferrer">LinkedIn</a> ·
  <a href="https://www.facebook.com/md.toha.509994" target="_blank" rel="noreferrer">Facebook</a> ·
  <a href="mailto:mdabdulawal2001@gmail.com">Email</a>
</p>

---

## ⭐ Support

If you find this portfolio or one of its projects interesting, feel free to connect through the links above.
