export const projects = [
  {
    id: 1,
    slug: "skillsphere",
    title: "SkillSphere",
    shortDescription:
      "A polished learning platform with immersive course discovery and smart onboarding flows.",
    fullDescription:
      "SkillSphere is a modern education product designed to connect learners with curated courses through a refined, product-led experience. The platform blends storytelling, search, and structured onboarding to make discovery feel effortless and elevated.",
    coverImage: "/images/projects/skillsphere.jpg",
    galleryImages: [
      "/images/projects/skillsphere.jpg",
      "/images/projects/skillsphere-2.jpg",
    ],
    technologyStack: ["Next.js", "Tailwind CSS", "HeroUI", "Framer Motion"],
    features: [
      "Interactive learning journey",
      "Course discovery experience",
      "Responsive onboarding screens",
    ],
    challenges: [
      "Balancing performance with motion-rich interfaces",
      "Creating an elegant information architecture for course content",
    ],
    futurePlans: ["Personalized learning paths", "Live cohort dashboards"],
    liveLink: "https://example.com",
    githubClient: "https://github.com",
    category: "Product Design",
    status: "Featured",
    featured: true,
    date: "2024",
  },
  {
    id: 2,
    slug: "keenkeeper",
    title: "KeenKeeper",
    shortDescription:
      "A productivity dashboard for teams who value calm, focused work and clear progress.",
    fullDescription:
      "KeenKeeper brings planning and execution together in one minimalist workspace. It helps teams track priorities, deadlines, and momentum without overwhelming them with clutter.",
    coverImage: "/images/projects/keenkeeper.jpg",
    galleryImages: [
      "/images/projects/keenkeeper.jpg",
      "/images/projects/keenkeeper-2.jpg",
    ],
    technologyStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Focused task planning",
      "Shared team workspace",
      "Insightful progress views",
    ],
    challenges: [
      "Designing a calm interface for high-volume data",
      "Maintaining fast interactions across dashboards",
    ],
    futurePlans: ["AI task suggestions", "Advanced reporting"],
    liveLink: "https://example.com",
    githubClient: "https://github.com",
    category: "SaaS",
    status: "Live",
    featured: true,
    date: "2024",
  },
  {
    id: 3,
    slug: "techwave",
    title: "TechWave",
    shortDescription:
      "A content-first experience that turns complex product storytelling into a premium launch site.",
    fullDescription:
      "TechWave is designed for a fast-moving product launch with an emphasis on narrative, clarity, and conversion. Every block is crafted to feel modern and intentional.",
    coverImage: "/images/projects/techwave.jpg",
    galleryImages: [
      "/images/projects/techwave.jpg",
      "/images/projects/techwave-2.jpg",
    ],
    technologyStack: ["Next.js", "Framer Motion", "HeroUI", "Stripe"],
    features: [
      "Narrative-driven landing flow",
      "Conversion focused sections",
      "Refined motion system",
    ],
    challenges: [
      "Maintaining page performance while keeping visuals rich",
      "Structuring sections to support fast iteration",
    ],
    futurePlans: ["CMS integration", "Localized experiences"],
    liveLink: "https://example.com",
    githubClient: "https://github.com",
    category: "Marketing",
    status: "In Development",
    featured: true,
    date: "2025",
  },
];

export const getProjectById = (id) =>
  projects.find((project) => project.id === Number(id));
export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
