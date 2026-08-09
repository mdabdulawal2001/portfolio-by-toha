"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { experienceData } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8 lg:py-28 dark:bg-slate-950 dark:text-slate-100"
    >
      <Container>
        {/* Section Title Wrapper */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <SectionTitle
            eyebrow="Practical Experience"
            title="Focused on craft, practical projects, and continuous learning."
            description="Hands-on experience gained by architecting, styling, and engineering real-world web applications."
          />
        </div>

        {/* Experience Cards Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.category || index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative flex flex-col justify-between rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:border-sky-400/50 hover:shadow-lg sm:p-8 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-sky-500/30"
            >
              <div>
                {/* Header Section */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold tracking-widest text-sky-600 uppercase dark:text-sky-400">
                    {item.duration}
                  </span>
                  {item.category && (
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-950/60 dark:text-sky-300">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Role Title */}
                <h3 className="mt-3 text-xl font-bold tracking-tight text-[#1822d8] sm:text-2xl dark:text-white">
                  {item.role}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

                {/* Highlights / Accomplishments */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-700 sm:text-sm dark:text-slate-300"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-sky-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Technologies Badges with Next.js Image */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="mt-8 border-t border-slate-100 pt-5 dark:border-slate-800/80">
                  <p className="mb-3 text-xs font-semibold tracking-wider text-slate-600 uppercase dark:text-slate-500">
                    Key Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-800 transition-colors group-hover:border-sky-200 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-200 dark:group-hover:border-slate-700"
                      >
                        {tech.icon && (
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={16}
                            height={16}
                            className="h-4 w-4 object-contain dark:invert-[0.15]"
                          />
                        )}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;