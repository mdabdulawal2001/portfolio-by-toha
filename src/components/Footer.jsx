"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Container from "@/components/ui/Container";
import { socialLinks } from "@/data/socialLinks";

const Footer = () => {
  // 🟢 Scroll Navigation Logic
  const [scrollDirection, setScrollDirection] = useState("down");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      // পেইজ একদম টপে (১০০px এর ভেতরে) থাকলে বাটন হাইড থাকবে
      if (scrollY < 100) {
        setShowButton(false);
        return;
      }

      setShowButton(true);

      // নিচে স্ক্রোল করলে Up বাটন, উপরে স্ক্রোল করলে Down বাটন দেখাবে
      if (scrollY > lastScrollY) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 px-4 pb-12 pt-20 text-slate-300 sm:px-6 lg:px-8">
      
      {/* 📦 Main Content Container */}
      <Container className="relative z-10">
        <div className="rounded-[32px] border border-sky-500/20 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-md text-center sm:text-left">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">
            
            {/* Name & Title */}
            <div className="max-w-xl">
              <p className="text-lg font-bold uppercase tracking-[0.2em] text-sky-400 sm:text-xl">
                MD. ABDUL AWAL TOHA
              </p>
              
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Crafting polished experiences for modern brands and startups.
              </h2>
              
              <p className="mt-4 text-sm leading-7 text-slate-400">
                I build clear, elegant interfaces with strong frontend
                fundamentals and a product-first mindset.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-300 transition-all hover:border-sky-400 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-500/30"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-300 transition-all hover:border-sky-400 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-500/30"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-300 transition-all hover:border-sky-400 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-500/30"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>

          {/* Copyright & Navigation */}
          <div className="mt-10 flex flex-col items-center gap-6 border-t border-slate-800/80 pt-8 text-sm text-slate-400 sm:flex-row sm:justify-between">
            <p className="text-center sm:text-left">
              © 2026 MD. ABDUL AWAL TOHA. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#home" className="transition hover:text-sky-400">
                Home
              </Link>
              <Link href="#projects" className="transition hover:text-sky-400">
                Projects
              </Link>
              <Link href="#contact" className="transition hover:text-sky-400">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* 🌊 Premium Animated Fluid Wave Overlay */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-56 w-full overflow-hidden pointer-events-none opacity-70">
        
        {/* Layer 1 - Slow Swaying Deep Sky Glow */}
        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["0px", "12px", "0px"],
            rotate: [0, 2, -1, 0],
            scaleY: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-10 -left-1/4 h-48 w-[150%] rounded-[100%] bg-linear-to-r from-sky-500/20 via-cyan-400/25 to-blue-600/20 blur-2xl"
        />

        {/* Layer 2 - Fast Interactive Dynamic Ripple Glow */}
        <motion.div
          animate={{
            x: ["10%", "-10%", "10%"],
            y: ["8px", "-6px", "8px"],
            skewX: [0, -3, 3, 0],
            scaleY: [1, 0.85, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-14 -left-1/4 h-44 w-[150%] rounded-[100%] bg-linear-to-r from-indigo-500/15 via-sky-400/20 to-teal-400/15 blur-xl"
        />

        {/* Dynamic Curved Vector Wave SVG with Motion */}
        <motion.div
          animate={{
            x: ["-3%", "3%", "-3%"],
            y: [0, 6, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[105%] h-32 text-sky-400/35"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 60 C 360 120, 720 0, 1080 60 C 1260 90, 1380 30, 1440 20 L 1440 120 L 0 120 Z"
              fill="url(#footer-dynamic-gradient)"
            />
            <defs>
              <linearGradient id="footer-dynamic-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* 🚀 Dynamic Scroll Navigation Button (Up / Down) */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6"
          >
            {scrollDirection === "up" ? (
              /* Up Arrow Button */
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2730e6] text-sm text-white shadow-lg shadow-sky-500/40 transition hover:scale-110 hover:bg-sky-400 sm:h-12 sm:w-12 sm:text-base"
              >
                <FaArrowUp />
              </button>
            ) : (
              /* Down Arrow Button */
              <button
                onClick={scrollToBottom}
                aria-label="Scroll to bottom"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2730e6] text-sm text-white shadow-lg shadow-sky-500/40 transition hover:scale-110 hover:bg-sky-400 sm:h-12 sm:w-12 sm:text-base"
              >
                <FaArrowDown />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;