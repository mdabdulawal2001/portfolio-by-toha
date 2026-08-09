export const projects = [
  {
    id: 1,
    slug: "skillsphere",
    title: "SkillSphere — Modern Online Learning Platform",
    shortDescription:
      "A modern online learning platform built with Next.js App Router and BetterAuth featuring course discovery, protected routes, and profile management.",
    fullDescription:
      "SkillSphere is a modern and fully responsive online learning platform designed to deliver an engaging educational experience. Built with Next.js App Router and BetterAuth, the app allows users to explore skill-based courses, view detailed curriculum pages, manage personal profiles, and securely authenticate via email or 1-click Google Sign-In. It highlights top-rated courses on the homepage, features real-time course title searching, and ensures privacy with protected route handlers.",
    coverImage:
      "https://github.com/user-attachments/assets/a0a8ec22-2a9f-4b93-b51f-662e5819c981",
    galleryImages: [
      "https://github.com/user-attachments/assets/a0a8ec22-2a9f-4b93-b51f-662e5819c981",
      "https://github.com/user-attachments/assets/e9a10b51-ed22-4419-b4e2-8d44dbca931d",
    ],
    technologyStack: [
      "Next.js",
      "BetterAuth",
      "Tailwind CSS",
      "HeroUI",
      "DaisyUI",
      "React Hook Form",
      "Framer Motion",
    ],
    features: [
      "Skill-based course search and top-rated featured section on homepage",
      "Secure authentication system supporting Email/Password and 1-click Google login",
      "Protected routes ensuring course details are accessible only to authenticated users",
      "Dynamic user profile updating (Name, Photo URL) with instant feedback via Toast notifications",
      "Interactive UI built with Motion animations, Swiper sliders, and a custom 404 page",
    ],
    challenges: [
      "Implementing secure authentication and handling protected route redirects within Next.js App Router",
      "Balancing rich UI animations and dynamic loading states without affecting page performance",
    ],
    futurePlans: [
      "Personalized learning paths based on user history",
      "Live cohort dashboards with real-time student progress tracking",
    ],
    liveLink: "https://skill-sphere-project-by-toha.vercel.app/",
    githubClient:
      "https://github.com/mdabdulawal2001/skill-sphere-project-by-toha",
    category: "Full Stack",
    status: "Featured",
    featured: true,
    date: "2026",
  },
  {
    id: 2,
    slug: "keenkeeper",
    title: "KeenKeeper — Friendship & Relationship Tracker",
    shortDescription:
      "A calm productivity dashboard designed to keep track of contact intervals, communication logs, and personal friendship goals.",
    fullDescription:
      "KeenKeeper is a minimalist productivity web application that helps users maintain meaningful relationships with friends and colleagues without clutter. It monitors contact gaps, automatically highlights overdue check-ins through color-coded badges, and allows single-click interaction logging (Call, Text, Video) that populates a persistent interaction timeline and visualizes analytics using Recharts.",
    coverImage: "https://i.ibb.co.com/BVwvDz2Z/579934486-51fe2c1f-1f50-424f-a9d1-53b62709688e.png",
    galleryImages: [
      "https://i.ibb.co.com/5hKF4FVY/579934929-0d45f953-a586-48ac-bfcd-6d297aa1e6dc.png",
      "https://i.ibb.co.com/Q7s3f3pw/579935401-5636d1c5-2385-44d0-973f-158fab76fd20.png",
    ],
    technologyStack: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Recharts",
      "React Router",
      "React-Toastify",
    ],
    features: [
      "Interactive Friend Directory with contact status badges (overdue, almost due, on-track)",
      "Detailed 2-column Friend Profile view with custom contact interval goals",
      "Quick Check-In actions (Call, Text, Video) that populate a real-time interaction timeline",
      "Friendship Analytics page with Recharts Pie Chart visualising communication channels",
      "Timeline filtering by interaction type and smooth responsive card views",
    ],
    challenges: [
      "Maintaining synchronized interaction logs across detail pages and central timeline state",
      "Calculating overdue statuses dynamically based on exact dates and target interval goals",
    ],
    futurePlans: [
      "Automated email reminders for overdue check-ins",
      "AI-driven conversation starters tailored to friend bios",
    ],
    liveLink: "https://keen-keeper-project-by-toha.netlify.app/",
    githubClient: "https://github.com/mdabdulawal2001/Keen-Keeper-Project-By-Toha",
    category: "SaaS / Dashboard",
    status: "Live",
    featured: true,
    date: "2026",
  },
  {
    id: 3,
    slug: "digital-tools-store",
    title: "Digital Tools Buying Website",
    shortDescription:
      "An e-commerce store for purchasing digital assets featuring dynamic view toggling, real-time cart counts, and Toast alerts.",
    fullDescription:
      "Digital Tools Buying Website is a responsive web application built for browsing and purchasing digital assets, SaaS utilities, and templates. The platform features dynamic toggling between the product grid and cart view, real-time cart item counts in the navbar, batch item clearing during checkout, and active feedback alerts powered by React-Toastify.",
    coverImage: "https://i.ibb.co.com/yMt6Y9v/576044604-85f79a82-85ab-4ace-86bc-132dfa4f6bb3.png",
    galleryImages: [
      "https://i.ibb.co.com/6R3QGW50/576044830-ab3d1c28-5853-465c-badd-90d23ea8cd04.png",
      "https://i.ibb.co.com/GQxN4pRz/576045009-f00b6ffc-7a96-4b70-b106-61ec7df93ebd.png",
    ],
    technologyStack: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "React-Toastify",
      "JavaScript (ES6+)",
    ],
    features: [
      "Dynamic view switching between catalog grid and active cart layout",
      "Navbar badge reflecting live item counts and total price calculations",
      "Single-item removal from cart and complete cart clearing upon proceeding to checkout",
      "Toast notifications providing instant feedback for every cart action",
    ],
    challenges: [
      "Syncing cart state seamlessly between product card buttons and top navigation badges",
      "Designing clean pricing cards with DaisyUI utility classes",
    ],
    futurePlans: [
      "Stripe payment gateway integration",
      "User ratings and product review features",
    ],
    liveLink: "https://digital-tools-platform-by-abdul-awal.netlify.app/",
    githubClient: "https://github.com/mdabdulawal2001/Digital-Tools-Platform",
    category: "E-Commerce",
    status: "Live",
    featured: true,
    date: "2026",
  },
  {
    id: 4,
    slug: "github-issues-tracker",
    title: "GitHub Issues Tracker",
    shortDescription:
      "A dynamic DOM-driven issue tracking application featuring real-time filtering, search, event delegation, and state persistence.",
    fullDescription:
      "GitHub Issues Tracker is an interactive vanilla JavaScript web app built to replicate GitHub's issue management system. It showcases advanced DOM manipulation, custom event handling via Event Delegation, real-time search filtering, dynamic element insertion, and state persistence using browser LocalStorage.",
    coverImage: "https://i.ibb.co.com/KcdW81Rq/576026452-c7d288f7-8bb4-424f-b637-5727b653ad57.png",
    galleryImages: [
      "https://i.ibb.co.com/1tSVTfG0/576026564-3322eaf4-f691-4d24-bc6b-7eda386fe3d6.png",
      "https://i.ibb.co.com/qYvYYq6Q/576026660-74840ae1-7edb-41c4-b41f-a860ec09d94f.png",
    ],
    technologyStack: ["JavaScript", "DOM API", "HTML5", "CSS3", "Tailwind CSS"],
    features: [
      "Dynamic issue node creation and attribute setting with pure JavaScript",
      "High-performance user interactions built with Event Delegation",
      "Real-time issue title search and tag-based state filtering",
      "Data persistence across page refreshes via browser LocalStorage",
    ],
    challenges: [
      "Preventing event bubbling issues during button clicks inside dynamically rendered issue cards",
      "Managing DOM updates efficiently without triggering unnecessary full-page reflows",
    ],
    futurePlans: [
      "Integration with GitHub REST API for real repository data fetching",
      "Drag-and-drop support for reordering issue cards",
    ],
    liveLink: "https://github-issues-tracker-by-abdul-awal.netlify.app/",
    githubClient: "https://github.com/mdabdulawal2001/B13-A5-Github-Issue-Tracker",
    category: "DOM Application",
    status: "Completed",
    featured: false,
    date: "2026",
  },
  {
  id: 5,
  title: "Job Application Tracker",
  slug: "job-application-tracker",
  category: "DOM Manipulation / Web App",
  status: "Featured",
  date: "2026",
  coverImage: "https://i.ibb.co.com/1tfc86ks/576032880-99e46bbd-c1a5-4e0a-8079-bb124096a91e.png",
  galleryImages: [
    "https://i.ibb.co.com/HpKPSn0v/576033018-022e8e93-91f9-4da9-8214-91a1b7e4e51c.png",
    "https://i.ibb.co.com/N2Ttw1Bx/Screenshot-2026-08-09-173300.png",
  ],
  shortDescription:
    "A fully responsive web application designed to track and manage job application statuses efficiently using dynamic DOM logic.",
  fullDescription:
    "Job Application Tracker is a practical productivity tool created to streamline job hunting. It features a real-time dashboard and dynamic status management, allowing applicants to keep clear visibility over their progress. Building this project served as a foundational milestone in practicing real-world functionality and complex state updates using pure JavaScript DOM manipulation.",
  technologyStack: [
    "JavaScript (DOM)",
    "Tailwind CSS",
    "DaisyUI",
    "HTML5",
    "CSS3",
  ],
  liveLink: "https://job-application-tracker-by-toha.netlify.app/",
  githubClient: "https://github.com/mdabdulawal2001/B13-A4-PH-Job-Tracker",
  features: [
    "Dynamic Status Management: Users can update application states to 'Interview' or 'Rejected' on the fly.",
    "Real-Time Dashboard: Metrics and application counts update instantly across the user interface whenever changes occur.",
    "Interactive Toggle States: Smooth switching between 'Interview' and 'Rejected' statuses.",
    "Tab-Based Filtering: Convenient tabbed navigation to organize and filter job applications seamlessly.",
    "Instant Deletion & UI Sync: Deleting an application cleans up both the UI card and dashboard counters immediately.",
  ],
  challenges: [
    "Building real-world functional logic using pure DOM manipulation without relying on modern component frameworks.",
    "Maintaining synchronized state counts across the dashboard when dynamic events (like deletion or status toggles) occur.",
    "Handling dynamic element removal smoothly while ensuring responsive visual layout.",
  ],
  futurePlans: [
    "Integrate LocalStorage or IndexedDB for persistent data storage across browser sessions.",
    "Add search functionality and sorting options (e.g., by date applied or company name).",
    "Implement salary tracking and interview reminder notifications.",
  ],
},
];

export const getProjectById = (id) =>
  projects.find((project) => project.id === Number(id));

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);