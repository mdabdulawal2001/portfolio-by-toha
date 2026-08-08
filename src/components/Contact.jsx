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
} from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { socialLinks } from "@/data/socialLinks";

const contactItems = [
  {
    label: "Email",
    value: "mdabdulawal@example.com",
    href: socialLinks.email,
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    value: "+880 1700 000000",
    href: socialLinks.phone,
    icon: <FaPhoneAlt />,
  },
  {
    label: "WhatsApp",
    value: "+880 1700 000000",
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
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] border border-sky-200 bg-sky-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Contact Details
            </h3>
            <div className="mt-6 space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-500 hover:bg-white dark:border-slate-700 dark:bg-slate-800/70 dark:hover:bg-slate-800"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href={socialLinks.github}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-sky-600 hover:text-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-sky-600 dark:hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href={socialLinks.linkedin}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-sky-600 hover:text-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-sky-600 dark:hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href={socialLinks.facebook}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-sky-600 hover:text-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-sky-600 dark:hover:text-white"
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
            className="rounded-[32px] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <form className="space-y-5">
              <Input
                label="Name"
                placeholder="Your name"
                className="rounded-2xl bg-white/10 text-white"
              />
              <Input
                label="Email"
                placeholder="you@example.com"
                className="rounded-2xl bg-white/10 text-white"
              />
              <Input
                label="Subject"
                placeholder="Project inquiry"
                className="rounded-2xl bg-white/10 text-white"
              />
              <TextArea
                label="Message"
                placeholder="Tell me about your idea..."
                rows={6}
                className="rounded-2xl bg-white/10 text-white"
              />
              <Button
                type="submit"
                className="rounded-full bg-gradient-to-r from-sky-500 to-blue-700 px-6 py-6 text-sm font-semibold text-white"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
