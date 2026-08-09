"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white px-4 py-24 text-slate-900 sm:px-6 lg:px-8 lg:py-32 dark:bg-slate-950 dark:text-slate-100"
    >
      <Container>
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects crafted to feel premium, useful, and memorable."
          description="Each experience is designed to balance clarity, motion, and modern product thinking."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-sky-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:bg-sky-500/20 dark:text-sky-300">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {project.category}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.shortDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologyStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-sky-50/80 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.liveLink}
                    className="rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubClient}
                    className="rounded-full border border-sky-300 px-4 py-2 text-sm font-medium text-sky-700 transition hover:border-sky-500 hover:text-sky-700 dark:border-slate-700 dark:text-sky-300 dark:hover:border-sky-400"
                  >
                    GitHub
                  </a>
                  <Link
                    href={`/projects/${project.id}`}
                    className="rounded-full border border-sky-300 px-4 py-2 text-sm font-medium text-sky-700 transition hover:border-sky-500 hover:text-sky-700 dark:border-slate-700 dark:text-sky-300 dark:hover:border-sky-400"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
