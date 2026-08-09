"use client";

import { motion } from "framer-motion";
import { Input, TextArea, Button } from "@heroui/react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { socialLinks } from "@/data/socialLinks";

const contactItems = [
  {
    label: "Email",
    value: "mdabdulawal2001@gmail.com",
    href: socialLinks.email,
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    value: "+880 1304341383",
    href: socialLinks.phone,
    icon: <FaPhoneAlt />,
  },
  {
    label: "WhatsApp",
    value: "+880 1304341383",
    href: socialLinks.whatsapp,
    icon: <FaWhatsapp />,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-50 px-4 py-24 text-slate-900 sm:px-6 lg:px-8 lg:py-32 dark:bg-slate-950 dark:text-slate-100"
    >
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something polished together."
          description="Whether you need a refined landing page, a product experience, or a scalable frontend system, I’m ready to help."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] border border-slate-200 bg-white md:px-8 px-4 py-8 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.18)] dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-[0_20px_50px_-28px_rgba(15,23,42,0.5)]"
          >
            <div>
              <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                Let’s connect
              </span>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-100!">
                Contact Details
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                Reach out for collaborations, freelance work, or project
                support. I usually respond within 24 hours.
              </p>
            </div>
            <div className="mt-8 grid gap-7">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 transition duration-200 hover:border-sky-500 hover:bg-white dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-sky-500 dark:hover:bg-slate-800"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950 dark:text-slate-100!">
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a
                href={socialLinks.github}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition duration-200 hover:border-transparent hover:bg-sky-600 hover:text-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-sky-600"
              >
                <FaGithub />
              </a>
              <a
                href={socialLinks.linkedin}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition duration-200 hover:border-transparent hover:bg-sky-600 hover:text-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-sky-600"
              >
                <FaLinkedin />
              </a>
              <a
                href={socialLinks.facebook}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition duration-200 hover:border-transparent hover:bg-sky-600 hover:text-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-sky-600"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 md:px-8 px-4 py-8 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.18)] dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-[0_20px_50px_-24px_rgba(15,23,42,0.45)] text-slate-950 dark:text-slate-100"
          >
            <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-r from-sky-200 to-slate-100 opacity-90 blur-3xl dark:from-sky-500/20 dark:to-slate-800/80" />
            <div className="relative mb-8">
              <span className="inline-flex rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Get in touch
              </span>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-100!">
                Send me a message
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                Share your project vision, timeline, or questions, and I’ll
                reply with practical next steps.
              </p>
            </div>

            <div className="rounded-[28px] border-none p-0 md:border md:border-slate-200 md:bg-white md:p-6 md:shadow-xl md:shadow-slate-200/40 transition duration-200 dark:md:border-slate-700 dark:md:bg-slate-950/95 dark:md:shadow-slate-950/20">
              <form className="w-full grid gap-5 bg-transparent">
                <div className="grid gap-5 grid-cols-1 w-full">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-950 shadow-sm placeholder:text-slate-400 transition duration-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                  />
                  <Input
                    label="Email"
                    placeholder="Your email address"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-950 shadow-sm placeholder:text-slate-400 transition duration-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                  />
                </div>
                <Input
                  label="Subject"
                  placeholder="Project inquiry"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-950 shadow-sm placeholder:text-slate-400 transition duration-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
                <TextArea
                  label="Message"
                  placeholder="Tell me about your idea..."
                  rows={6}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-950 shadow-sm placeholder:text-slate-400 transition duration-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
                <Button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus:ring-2 focus:ring-sky-500/30"
                >
                  <FaPaperPlane className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
