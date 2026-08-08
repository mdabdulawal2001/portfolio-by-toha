"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const highlights = [
  {
    title: "Fast Learner",
    description:
      "I adapt quickly and enjoy translating ideas into clean interfaces.",
  },
  {
    title: "Team Player",
    description:
      "Collaboration and clear communication shape how I build products.",
  },
  {
    title: "Creative Thinker",
    description:
      "I focus on delightful details that make experiences feel distinctive.",
  },
  {
    title: "Continuous Learner",
    description:
      "I’m always refining my craft with modern tools and product trends.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-white px-4 py-24 text-slate-900 sm:px-6 lg:px-8 lg:py-32 dark:bg-slate-950 dark:text-slate-100"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-400/20 to-blue-700/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 p-3 shadow-[0_30px_90px_-30px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-950">
              <div className="relative h-[500px] overflow-hidden rounded-[24px] bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/images/profile/profile.jpg"
                  alt="About illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              eyebrow="About Me"
              title="Designing thoughtful interfaces from first idea to launch."
              description="I care deeply about balance: clear storytelling, elegant visuals, and reliable engineering working together to create products people enjoy using."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-sky-200 bg-sky-50 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Programming Journey
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  My path has been shaped by building real projects, refining UI
                  details, and turning product ideas into maintainable software.
                </p>
              </div>
              <div className="rounded-[24px] border border-sky-200 bg-sky-50 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Career Goal
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  I want to help teams ship thoughtful digital experiences that
                  are both beautiful and measurable in impact.
                </p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Problem Solving
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  I dig into constraints, simplify complexity, and make
                  decisions that improve the end-user experience.
                </p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Current Learning
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  I’m deepening my expertise in motion systems, component
                  design, and modern full-stack workflows.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-sky-200 bg-sky-50 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
