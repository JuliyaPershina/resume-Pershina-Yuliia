import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Юлія Першина
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Frontend Developer (Trainee / Junior) · React · Next.js · TypeScript
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Дивитись проєкти
      </motion.a>
    </section>
  );
}
