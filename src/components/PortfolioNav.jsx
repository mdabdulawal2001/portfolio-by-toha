"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/data/socialLinks";
import Image from "next/image";

const PortfolioNav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = storedTheme ? storedTheme === "dark" : prefersDark || false;

    let raf = 0;
    raf = requestAnimationFrame(() => {
      if (initial !== isDarkMode) setIsDarkMode(initial);
    });

    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const updateActiveFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && navigationItems.some((item) => item.href === hash)) {
        setActiveSection(hash);
        return;
      }

      if (window.location.pathname.startsWith("/projects")) {
        setActiveSection("projects");
        return;
      }

      setActiveSection("home");
    };

    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navigationItems
        .map((item) => document.getElementById(item.href))
        .filter(Boolean);

      const current = sections.findLast(
        (section) => window.scrollY >= section.offsetTop - 140,
      );

      if (current) {
        setActiveSection(current.id);
      } else if (window.location.pathname.startsWith("/projects")) {
        setActiveSection("projects");
      } else {
        setActiveSection("home");
      }
    };

    updateActiveFromHash();
    requestAnimationFrame(onScroll);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", updateActiveFromHash);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", updateActiveFromHash);
    };
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
    window.localStorage.setItem(
      "portfolio-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent transition-all duration-300 ${isScrolled ? "bg-white/95 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100" : "bg-white/90 text-slate-900 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100"}`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 text-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
        <Link
          href="/#home"
          className="flex items-center gap-3 text-slate-950 dark:text-slate-100"
        >
          {/* Profile Image */}
          {/* <div className="hidden flex h-10 w-10 items-center justify-center rounded-full text-white">
            <Image
              className="rounded-full"
              width={500}
              height={500}
              src={}
              alt="Profile"
            />
          </div> */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`text-[20px] font-semibold tracking-tight ${
                isDarkMode ? "text-slate-100" : "text-slate-950"
              }`}
            >
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative inline-block cursor-default font-bold text-[#0b14ba] dark:text-sky-400"
              >
                {/* Light & Dark Adaptive Breathing Glow */}
                <motion.span
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [0.98, 1.03, 0.98],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 z-0 rounded-md bg-blue-600/20 blur-md dark:bg-sky-400/35"
                  aria-hidden="true"
                />

                {/* Clean Main Text */}
                <span className="relative z-10">MD. ABDUL AWAL TOHA</span>
              </motion.span>
            </motion.p>
            <div className="overflow-hidden whitespace-nowrap w-full">
              <motion.p
                className={`inline-block text-sm font-medium ${
                  isDarkMode ? "text-slate-400" : "text-slate-700"
                }`}
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 10,
                  ease: "linear",
                }}
              >
                <i className="font-semibold text-[17px] text-[#5055bd]">
                  Full Stack Developer
                </i>
              </motion.p>
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-2 sm:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={`/#${item.href}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeSection === item.href ? "bg-[#0a14d3] text-white shadow-sm dark:bg-sky-400 dark:text-slate-950" : "text-slate-700 hover:bg-sky-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            aria-pressed={isDarkMode}
            onClick={() => setIsDarkMode((prev) => !prev)}
            className={`hidden h-11 items-center justify-center rounded-full border px-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition sm:flex cursor-pointer ${isDarkMode ? "border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-slate-800" : "border-slate-300 bg-[#0b14ba] text-slate-950 hover:bg-[#474fe9]"}`}
          >
            {isDarkMode ? (
              <FaSun className="text-amber-400" />
            ) : (
              <FaMoon className="text-white/90" />
            )}
            <span
              className={`ml-2 text-sm font-medium ${isDarkMode ? "text-slate-100" : "text-white/90"}`}
            >
              {isDarkMode ? "Light" : "Dark"}
            </span>
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            className={`flex h-11 w-11 items-center justify-center rounded-full border px-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition sm:hidden ${isDarkMode ? "border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-slate-800" : "border-slate-300 bg-white/90 text-slate-950 hover:bg-slate-100"}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <FaTimes
                className={isDarkMode ? "text-slate-100" : "text-slate-950"}
              />
            ) : (
              <FaBars
                className={isDarkMode ? "text-slate-100" : "text-slate-950"}
              />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-xl backdrop-blur-xl sm:hidden dark:border-slate-700 dark:bg-slate-950/95"
          >
            <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Theme
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Switch between light and dark UI
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Toggle theme"
                  aria-pressed={isDarkMode}
                  onClick={() => setIsDarkMode((prev) => !prev)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium shadow-sm transition ${isDarkMode ? "border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700" : "border-slate-300 bg-white text-slate-950 hover:bg-slate-100"}`}
                >
                  {isDarkMode ? (
                    <FaSun className="text-amber-400" />
                  ) : (
                    <FaMoon className="text-slate-950" />
                  )}
                  <span
                    className={isDarkMode ? "text-slate-100" : "text-slate-950"}
                  >
                    {isDarkMode ? "Light" : "Dark"}
                  </span>
                </button>
              </div>
            </div>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={`/#${item.href}`}
                className={`mb-2 flex rounded-2xl px-4 py-3 text-base font-medium transition ${activeSection === item.href ? "bg-sky-600 text-white shadow-sm dark:bg-sky-400 dark:text-slate-950" : "text-slate-800 hover:bg-sky-50 dark:text-slate-200 dark:hover:bg-slate-800"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-5 flex items-center gap-3 px-2">
              <a
                href={socialLinks.github}
                aria-label="GitHub"
                className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href={socialLinks.linkedin}
                aria-label="LinkedIn"
                className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href={socialLinks.facebook}
                aria-label="Facebook"
                className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default PortfolioNav;
