"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { educationData } from "@/data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8 lg:py-28 dark:bg-slate-950 dark:text-slate-100"
    >
      <Container>
        {/* Section Title Wrapper: Centered on small devices, left-aligned on lg */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <SectionTitle
            eyebrow="Education"
            title="A solid foundation for thoughtful product engineering."
            description="My academic path and intensive technical training continue to strengthen my ability to solve problems with rigor, focus, and clarity."
          />
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12 pl-0 md:border-l md:border-slate-200/80 md:pl-8 dark:md:border-slate-800">
          {educationData.map((item, index) => (
            <motion.div
              key={item.institution + index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative mb-6 rounded-[24px] border border-slate-200/80 bg-slate-50/50 p-5 transition-all duration-300 hover:border-sky-400/50 hover:bg-white hover:shadow-lg sm:p-8 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-sky-500/30 dark:hover:bg-slate-900/80"
            >
              {/* Timeline Indicator Dot (Desktop Only) */}
              <div className="absolute top-9 left-[-2.2rem] hidden h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow-md transition-transform duration-300 group-hover:scale-125 md:block dark:border-slate-950" />

              {/* Top Header Section */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Duration Badge */}
                    <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                      {item.duration}
                    </span>

                    {/* Program Type Badge */}
                    {item.type && (
                      <span className="rounded-full bg-sky-100/80 px-2.5 py-0.5 text-[11px] font-semibold text-sky-800 dark:bg-sky-950/80 dark:text-sky-300">
                        {item.type}
                      </span>
                    )}
                  </div>

                  {/* Institution Name */}
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-[#0b14ba] sm:text-2xl dark:text-white">
                    {item.institution}
                  </h3>
                </div>

                {/* Status & Location Badges */}
                <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                  {item.result && (
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300">
                      {item.result}
                    </span>
                  )}
                  {item.location && (
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-300">
                      {item.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Degree / Certificate Title */}
              <p className="mt-3 text-base font-semibold text-slate-800 sm:text-lg dark:text-slate-200">
                {item.degree}
              </p>

              {/* Description */}
              {item.description && (
                <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              )}

              {/* Skills / Key Highlights */}
              {item.skills && item.skills.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-200/60 px-3 py-1 text-xs font-medium text-slate-700 transition-colors group-hover:bg-sky-50 group-hover:text-sky-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-slate-800/80 dark:group-hover:text-sky-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;