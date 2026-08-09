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
        {/* স্মল ডিভাইসে টেক্সট সেন্টারে রাখার জন্য wrapper div যুক্ত করা হয়েছে */}
        <div className="text-center lg:text-left">
          <SectionTitle
            eyebrow="Selected Work"
            title="Projects crafted to feel premium, useful, and memorable."
            description="Each experience is designed to balance clarity, motion, and modern product thinking."
          />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const extraTechCount = project.technologyStack.length - 3;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-50/50 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/30 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-sky-500/30"
              >
                <div>
                  {/* Banner Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-slate-200 border border-white/10">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            project.status === "Featured" || project.status === "Live"
                              ? "bg-emerald-400 animate-pulse"
                              : "bg-sky-400"
                          }`}
                        />
                        {project.status}
                      </span>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-400/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 text-left">
                    <h3 className="text-xl font-bold tracking-tight text-[#2730e6] transition-colors group-hover:text-[#040fe7] dark:text-slate-100! dark:group-hover:text-sky-400">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3 dark:text-slate-400">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {project.technologyStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-xs dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {extraTechCount > 0 && (
                        <span className="rounded-lg bg-slate-200/60 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                          +{extraTechCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="border-t border-slate-200/60 p-6 pt-4 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xl bg-[#1b24cd] px-3 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all hover:bg-sky-700 hover:shadow-md dark:bg-sky-500 dark:hover:bg-sky-600"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                    >
                      GitHub
                    </a>
                    <Link
                      href={`/projects/${project.id}`}
                      className="rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs font-medium text-slate-700 transition-all hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-400"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;