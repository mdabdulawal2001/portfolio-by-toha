import { motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="max-w-2xl"
    >
      <p className="mb-6 text-3xl border-sky-600 font-semibold uppercase tracking-[0.32em] text-sky-600 dark:text-sky-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-[#0b14ba] dark:text-slate-100!">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
