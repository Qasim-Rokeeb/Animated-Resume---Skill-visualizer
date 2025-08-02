import { motion } from "framer-motion";

export default function Header({ name, title }) {
  return (
    <motion.header
      className="text-center space-y-1"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        {name}
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-300">{title}</p>
    </motion.header>
  );
}