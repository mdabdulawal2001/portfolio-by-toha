import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectById, getProjectBySlug } from "@/data/projects";
import Container from "@/components/ui/Container";

export async function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id) || getProjectBySlug(id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | MD Abdul Awal`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id) || getProjectBySlug(id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-28 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container className="space-y-10">
        {/* Top Hero Banner */}
        <div className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900/60">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:bg-sky-400/20 dark:text-sky-300">
                  {project.category}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  {project.date}
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                {project.shortDescription}
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologyStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-slate-200/80 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-75 bg-slate-100 lg:min-h-full dark:bg-slate-800">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
          {/* Main Sections */}
          <div className="space-y-8">
            {/* Overview */}
            <section className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-100!">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {project.fullDescription}
              </p>
            </section>

            {/* Features */}
            <section className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-100!">
                Key Features
              </h2>
              <ul className="mt-5 space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-100!">
                Challenges & Solutions
              </h2>
              <ul className="mt-5 space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Future Plans */}
            <section className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-100!">
                Future Roadmap
              </h2>
              <ul className="mt-5 space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {project.futurePlans.map((plan) => (
                  <li key={plan} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Links Card */}
            <div className="rounded-[28px] border border-slate-200/80 bg-slate-900 p-7 text-white shadow-md dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-bold">Project Links</h3>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-sky-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-500"
                >
                  Live Preview ↗
                </a>
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-center text-sm font-medium transition hover:bg-white/10"
                >
                  Repository ↗
                </a>
                <Link
                  href="/#projects"
                  className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
                >
                  ← Back to Projects
                </Link>
              </div>
            </div>

            {/* Gallery Images */}
            <div className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100!">
                Screenshots & Gallery
              </h3>
              <div className="mt-5 space-y-4">
                {project.galleryImages.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative h-44 overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Previous / Next Project Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
            >
              <span>←</span>
              <span className="truncate max-w-50 sm:max-w-75">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
            >
              <span className="truncate max-w-50 sm:max-w-75">
                {nextProject.title}
              </span>
              <span>→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </main>
  );
}