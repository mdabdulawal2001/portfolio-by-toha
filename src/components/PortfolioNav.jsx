"use client";
import { useEffect, useRef, useState } from "react";
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
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
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

  useEffect(() => {
    if (!isMenuOpen) return;

    const menuButton = menuButtonRef.current;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  return (
    <>
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
                  Full Stack Web Developer
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
            ref={menuButtonRef}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="portfolio-mobile-sidebar"
            className={`flex h-11 w-11 items-center justify-center rounded-xl border shadow-[0_8px_24px_rgba(15,23,42,0.08)] outline-none transition focus-visible:ring-2 focus-visible:ring-sky-500/50 sm:hidden ${isDarkMode ? "border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-slate-800" : "border-slate-300 bg-white/90 text-slate-950 hover:bg-slate-100"}`}
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
    </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1000] overflow-hidden sm:hidden"
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 h-full w-full bg-slate-950/45 backdrop-blur-[2px]"
            />

            <motion.aside
              id="portfolio-mobile-sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 35 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="absolute right-0 top-0 flex h-full w-[min(68vw,320px)] flex-col overflow-hidden border-l border-slate-200 bg-white shadow-2xl shadow-slate-900/25 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex h-19 min-h-19 shrink-0 items-center justify-between border-b border-slate-200 bg-linear-to-r from-white via-blue-50/80 to-cyan-50/70 px-4 dark:border-slate-800 dark:from-slate-950 dark:via-blue-950/40 dark:to-slate-950">
                <Link
                  href="/#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg bg-linear-to-r from-[#0b14ba] to-sky-500 bg-clip-text text-base font-extrabold text-transparent outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
                >
                  MD. ABDUL AWAL TOHA
                </Link>
                <button
                  type="button"
                  ref={closeButtonRef}
                  aria-label="Close navigation menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:text-sky-400"
                >
                  <FaTimes aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5">
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
                      {isDarkMode ? <FaSun className="text-amber-400" /> : <FaMoon />}
                      <span>{isDarkMode ? "Light" : "Dark"}</span>
                    </button>
                  </div>
                </div>

                <nav aria-label="Mobile navigation" className="space-y-1.5">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={`/#${item.href}`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={activeSection === item.href ? "location" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 ${activeSection === item.href ? "border border-sky-500/30 bg-sky-500/10 text-[#0b14ba] shadow-sm dark:text-sky-400" : "text-slate-600 hover:bg-sky-500/5 hover:text-[#0b14ba] dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-sky-400"}`}
                    >
                      <span>{item.label}</span>
                      {activeSection === item.href && (
                        <span className="h-2 w-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-600 shadow-sm" />
                      )}
                    </Link>
                  ))}
                </nav>

                <div className="my-4 h-px bg-slate-200 dark:bg-slate-800" />

                <div className="flex items-center gap-3 px-2">
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
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioNav;
