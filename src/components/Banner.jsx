"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@heroui/react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import { socialLinks } from "@/data/socialLinks";
import profileImage from "@/assets/profilePic.jpeg";

const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1R6qtfufMvCk3PCZhZ3jnLETRd7P7yOo6";

const Banner = () => {
  const shouldReduceMotion = useReducedMotion();

  const socialItems = [
    { icon: <FaGithub />, href: socialLinks.github, label: "GitHub" },
    { icon: <FaLinkedin />, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: <FaFacebook />, href: socialLinks.facebook, label: "Facebook" },
    { icon: <FaEnvelope />, href: socialLinks.email, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_28%),linear-gradient(135deg,#f8fbff_0%,#f8fafc_50%,#eef4ff_100%)] px-4 py-16 text-slate-900 sm:px-6 lg:px-8 lg:py-24 dark:bg-[radial-gradient(circle_at_top_left,rgba(2,132,199,0.22),transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)] dark:text-slate-100"
    >
      <Container className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-5%] top-10 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute right-[-4%] top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Hero Content */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <p className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-medium text-[#0b14ba] shadow-sm dark:border-sky-800/60 dark:bg-slate-900/60 dark:text-sky-300">
              <span className="flex h-3 w-3 items-center justify-center rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(56,189,248,0.12)]">
                <span className="h-2 w-2 rounded-full bg-[#0b14ba] dark:bg-sky-500" />
              </span>
              Available for ambitious product teams
            </p>

            <h1 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-[#2730d8] sm:text-5xl lg:text-7xl dark:text-white">
              Building polished web experiences with modern frontend craft.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I’m MD ABDUL AWAL TOHA, a full-stack web developer focused on
              creating memorable, performant products with thoughtful UI and
              scalable architecture.
            </p>

            {/* Hero Buttons */}
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.25,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="w-[90%] sm:w-auto"
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1R6qtfufMvCk3PCZhZ3jnLETRd7P7yOo6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-[#0b14ba] px-7 p-2.75 text-sm font-semibold text-white shadow-[0_18px_45px_-25px_rgba(14,165,233,0.75)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-sky-500 hover:shadow-[0_22px_60px_-30px_rgba(14,165,233,0.85)] focus:outline-none focus:ring-2 focus:ring-sky-400/40 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
                >
                  <FaDownload className="mr-3 h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.33,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="w-[90%] sm:w-auto"
              >
                <Button
                  as={Link}
                  href="#projects"
                  variant="bordered"
                  className="w-full whitespace-nowrap rounded-full border border-slate-900 bg-slate-900 px-7 py-5 text-sm font-semibold text-white shadow-sm transition duration-300 ease-out hover:border-slate-800 hover:bg-slate-800 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-950 dark:hover:border-slate-400 dark:hover:bg-slate-200"
                >
                  View Projects
                  <span className="-mr-1 ml-3 inline-flex">
                    <FaArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex justify-center gap-3 lg:justify-start">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-lg text-slate-700 shadow-sm transition hover:-translate-y-1 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image — Gentle Floating Animation */}
          <motion.div
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1, y: 0, scale: 1 }
                : {
                    opacity: 1,
                    y: [0, -6, 0],
                    scale: 1,
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    opacity: { duration: 0.6 },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    scale: { duration: 0.6 },
                  }
            }
            className="relative mx-auto w-full max-w-lg"
          >
            {/* Static, Subtle Background Accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-sky-400/10 to-blue-700/15 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white/80 p-3 shadow-[0_30px_100px_-30px_rgba(15,23,42,0.35)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
              <div className="relative h-130 overflow-hidden rounded-[28px] bg-slate-950">
                <Image
                  src={profileImage}
                  alt="MD ABDUL AWAL portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
