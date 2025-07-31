import { motion } from "framer-motion";

export default function Section({ title, items }) {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-xl font-semibold text-purple-600 mb-2">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="bg-white rounded p-4 shadow-md">
            {item.school ? (
              <>
                <strong>{item.degree}</strong> - {item.school} ({item.year})
              </>
            ) : (
              <>
                <strong>{item.role}</strong> at {item.company} ({item.duration})
                <p className="text-sm text-gray-600">{item.description}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
