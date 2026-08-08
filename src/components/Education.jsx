"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { educationData } from "@/data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-white px-4 py-24 text-slate-900 sm:px-6 lg:px-8 lg:py-32 dark:bg-slate-950 dark:text-slate-100"
    >
      <Container>
        <SectionTitle
          eyebrow="Education"
          title="A solid foundation for thoughtful product engineering."
          description="My academic path continues to strengthen my ability to solve problems with rigor and clarity."
        />
        <div className="mt-12 relative border-l border-slate-200 pl-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative mb-8 rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="absolute -left-[2.2rem] top-8 h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow-md" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                    {item.duration}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                    {item.institution}
                  </h3>
                </div>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {item.location}
                </span>
              </div>
              <p className="mt-4 text-lg font-medium text-slate-800 dark:text-slate-200">
                {item.degree}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
