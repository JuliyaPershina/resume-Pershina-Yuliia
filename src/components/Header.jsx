import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
  const [theme, setTheme] = useState('light'); // <-- за замовчуванням світла

  // При першому завантаженні беремо тему з localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Слідкуємо за зміною theme і застосовуємо клас
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-10 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Юлія Першина
        </h1>
        <nav className="space-x-6 text-gray-700 dark:text-gray-300">
          <a href="#about" className="hover:text-indigo-600">
            Про мене
          </a>
          <a href="#skills" className="hover:text-indigo-600">
            Навички
          </a>
          <a href="#projects" className="hover:text-indigo-600">
            Проєкти
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            Контакти
          </a>
        </nav>
        <button
          onClick={toggleTheme}
          className="text-2xl text-yellow-500 dark:text-yellow-300"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}
