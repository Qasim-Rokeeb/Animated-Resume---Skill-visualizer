import { motion } from "framer-motion";

export default function Section({ title, items }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-3"
    >
      <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-1">
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 shadow-sm">
            {item.school ? (
              <>
                <strong className="text-slate-900 dark:text-slate-100">
                  {item.degree}
                </strong>{" "}
                <span className="text-slate-600 dark:text-slate-300">
                  @ {item.school}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">
                  ({item.year})
                </span>
              </>
            ) : (
              <>
                <strong className="text-slate-900 dark:text-slate-100">
                  {item.role}
                </strong>{" "}
                <span className="text-slate-600 dark:text-slate-300">
                  @ {item.company}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">
                  ({item.duration})
                </span>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {item.description}
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}