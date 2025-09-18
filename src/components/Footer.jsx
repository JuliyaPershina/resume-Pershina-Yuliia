// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        {/* Ліцензія або ім’я */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Юлія Першина.
        </p>

        {/* Соціальні іконки */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/JuliyaPershina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/juliya-pershina-021341281/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:Jpershina79@gmail.com"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
