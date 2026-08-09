"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { experienceData } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-50 px-4 py-24 text-slate-900 sm:px-6 lg:px-8 lg:py-32 dark:bg-slate-950 dark:text-slate-100"
    >
      <Container>
        <SectionTitle
          eyebrow="Experience"
          title="Focused on craft, momentum, and product quality."
          description="My work has centered on building polished, reliable experiences that balance design and engineering."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] border border-sky-200 bg-sky-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                {item.duration}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100!">
                {item.company}
              </h3>
              <p className="mt-2 text-base font-medium text-slate-700 dark:text-slate-200!">
                {item.designation}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
              <div className="mt-6 rounded-2xl bg-sky-50 p-4 text-sm text-sky-700 dark:bg-slate-800 dark:text-slate-200">
                {item.technology}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
