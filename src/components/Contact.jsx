// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Контакти
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Зв’яжіться зі мною будь-яким зручним способом або залиште
            повідомлення
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Блок контактної інформації */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-indigo-500" />
              <a
                href="mailto:your.email@example.com"
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition"
              >
                your.email@example.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl text-green-500" />
              <a
                href="tel:+380123456789"
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-green-500 transition"
              >
                +38 (012) 345-67-89
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub className="text-2xl text-gray-800 dark:text-gray-200" />
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition"
              >
                github.com/yourusername
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-2xl text-blue-600" />
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition"
              >
                linkedin.com/in/yourusername
              </a>
            </div>
          </motion.div>

          {/* Форма зворотного зв'язку */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-4"
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Ім’я
              </label>
              <input
                type="text"
                placeholder="Ваше ім’я"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Повідомлення
              </label>
              <textarea
                placeholder="Ваше повідомлення"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Відправити
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
