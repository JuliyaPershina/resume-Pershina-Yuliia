// src/components/About.jsx
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="flex items-center gap-3 mb-8">
          <FaUser className="text-indigo-600 dark:text-indigo-400 text-3xl" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Про мене
          </h2>
        </div>

        {/* Контент */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 transition-colors duration-500"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Привіт! Мене звати{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Юлія Першина
            </span>
            . Я — Frontend-розробниця, яка захоплюється створенням сучасних,
            адаптивних та зручних веб-застосунків.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Маю досвід роботи з <strong>React</strong>,{' '}
            <strong>Tailwind CSS</strong> та{' '}
            <strong>JavaScript/TypeScript</strong>. Завжди прагну вивчати нові
            технології та вдосконалювати свої навички.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            У вільний час люблю працювати над пет-проєктами, експериментувати з
            UI/UX та покращувати продуктивність веб-додатків.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
