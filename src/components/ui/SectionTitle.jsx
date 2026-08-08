import { motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, description }) => {
  const [firstWord, ...restWords] = title.split(" ");
  const remainder = restWords.join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="max-w-2xl"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-600 dark:text-sky-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        <span className="text-sky-600 dark:text-sky-400">{firstWord}</span>
        {remainder ? ` ${remainder}` : ""}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
