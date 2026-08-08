import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectById, getProjectBySlug } from "@/data/projects";
import Container from "@/components/ui/Container";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

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

  const currentIndex = [1, 2, 3].findIndex((value) => value === project.id);
  const prevProject = currentIndex > 0 ? { id: 1, title: "SkillSphere" } : null;
  const nextProject = currentIndex < 2 ? { id: 2, title: "KeenKeeper" } : null;

  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-28">
      <Container className="space-y-12">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_-30px_rgba(2,8,23,0.35)]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-600">
                {project.category}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                {project.fullDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologyStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
          <div className="space-y-8">
            <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Overview
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                {project.fullDescription}
              </p>
            </section>
            <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Features
              </h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Challenges
              </h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-400" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Future Improvements
              </h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                {project.futurePlans.map((plan) => (
                  <li key={plan} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    {plan}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <h3 className="text-xl font-semibold">Project Links</h3>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={project.liveLink}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm font-medium transition hover:bg-white/20"
                >
                  Live Project
                </a>
                <a
                  href={project.githubClient}
                  className="rounded-2xl border border-white/20 px-4 py-3 text-center text-sm font-medium transition hover:bg-white/10"
                >
                  GitHub
                </a>
                <Link
                  href="/"
                  className="rounded-2xl border border-white/20 px-4 py-3 text-center text-sm font-medium transition hover:bg-white/10"
                >
                  Back Home
                </Link>
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Gallery</h3>
              <div className="mt-5 grid gap-4">
                {project.galleryImages.map((image) => (
                  <div
                    key={image}
                    className="relative h-40 overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="flex flex-wrap justify-between gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="text-sm font-medium text-slate-700"
            >
              ← Previous Project
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="text-sm font-medium text-slate-700"
            >
              Next Project →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </Container>
    </main>
  );
}
