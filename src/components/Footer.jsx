"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import { socialLinks } from "@/data/socialLinks";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 px-4 pb-10 pt-24 text-slate-300 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_100px_-40px_rgba(2,8,23,0.8)] backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-400">
                MD Abdul Awal
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Crafting polished experiences for modern brands and startups.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                I build clear, elegant interfaces with strong frontend
                fundamentals and a product-first mindset.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={socialLinks.github}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white hover:text-slate-900"
              >
                <FaGithub />
              </a>
              <a
                href={socialLinks.linkedin}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white hover:text-slate-900"
              >
                <FaLinkedin />
              </a>
              <a
                href={socialLinks.facebook}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white hover:text-slate-900"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 MD Abdul Awal. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="#home" className="transition hover:text-white">
                Home
              </Link>
              <Link href="#projects" className="transition hover:text-white">
                Projects
              </Link>
              <Link href="#contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30 transition hover:scale-105"
      >
        <FaArrowUp />
      </motion.a>
    </footer>
  );
};

export default Footer;
