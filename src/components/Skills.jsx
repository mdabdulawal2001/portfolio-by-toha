"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillsData } from "@/data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-50 px-4 py-24 text-slate-900 sm:px-6 lg:px-8 lg:py-32 dark:bg-slate-950 dark:text-slate-100"
    >
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="A practical toolkit for modern product development."
          description="I blend thoughtful UI craft with dependable engineering practices to ship polished experiences."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100!">
                  {group.category}
                </h3>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-700 dark:bg-slate-800 dark:text-sky-300">
                  {group.items.length} skills
                </span>
              </div>
              <div className="mt-7 space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className={`h-2.5 rounded-full bg-linear-to-r ${skill.color}`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
