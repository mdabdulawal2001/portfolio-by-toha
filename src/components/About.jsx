"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import aboutPic from "../assets/tohaabout.png";

const highlights = [
  {
    title: "Full-Stack Development",
    description:
      "Building seamless web applications with React, Next.js, Node.js, and clean component architecture.",
  },
  {
    title: "Problem Solving",
    description:
      "Translating complex requirements into simple, maintainable, and efficient code solutions.",
  },
  {
    title: "User-Centric UI/UX",
    description:
      "Crafting responsive, accessible, and delightful interfaces with modern animation tools.",
  },
  {
    title: "Continuous Growth",
    description:
      "Actively deepening expertise in scalable backend systems and modern engineering trends.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className=" bg-white px-4 py-20 text-slate-900 sm:px-6 lg:px-8 lg:py-28 dark:bg-slate-950 dark:text-slate-100"
    >
      <Container>
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Side: Work/Workspace Image or Code Snapshot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[32px] bg-linear-to-br from-sky-500/20 to-blue-600/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/80 p-3 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
              <div className="relative h-105 sm:h-120 overflow-hidden rounded-[24px] bg-slate-100 dark:bg-slate-800">
                <Image
                  src={aboutPic}
                  alt="MD ABDUL AWAL TOHA working"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
          {/* Right Side: Content & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* SectionTitle Wrapper - Centered on Mobile */}
            <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left">
              <SectionTitle
                eyebrow="About Me"
                title="Designing & engineering thoughtful digital experiences."
                description="I care deeply about balance: clear storytelling, elegant visuals, and reliable backend engineering working together to create scalable products."
              />
            </div>

            {/* 4 Clean Highlight Cards */}
            <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-slate-200/80 bg-slate-50/60 p-5 text-left transition duration-300 hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700"
                >
                  <h3 className="text-base font-semibold text-[#0b14ba] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
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
