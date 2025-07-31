import { motion } from "framer-motion";

export default function Header({ name, title }) {
  return (
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-3xl font-bold text-purple-700">{name}</h1>
      <p className="text-xl text-gray-600">{title}</p>
    </motion.div>
  );
}
