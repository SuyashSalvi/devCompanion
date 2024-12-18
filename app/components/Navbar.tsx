"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Typing Effect State
  const [text, setText] = useState("");
  const fullText = "DevCompanion";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const typingSpeed = isDeleting ? 50 : 150; // Speed for typing and deleting

  // Handle theme toggle
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Typing Effect Logic
  useEffect(() => {
    const handleTyping = () => {
      setText(
        fullText.substring(0, isDeleting ? text.length - 1 : text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop((l) => l + 1); // Restart typing loop
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting,typingSpeed]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-full z-50 px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-3 cursor-pointer">
          <Image src="/logo.png" alt="DevCompanion Logo" width={40} height={40} />
          <span className="text-xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center">
            <span className="min-w-[160px] inline-block">
              {text}
              <span className="blinking-cursor">|</span>
            </span>
          </span>
        </div>
      </Link>

      {/* Desktop Links */}

      <div className="hidden md:flex gap-8 -ml-5">
        <FancyLink href="/" text="Home" />
        <FancyLink href="/notes" text="Notes" />
        <FancyLink href="/leetcode" text="LeetCode" />
      </div>


      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`hidden w-10 h-10 md:flex items-center justify-center rounded-full shadow-lg transition-transform transform bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 ${
          isDarkMode ? "rotate-180" : "rotate-0"
        }`}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? "🌙" : "☀️"}
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
        aria-label="Open Menu"
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{isMenuOpen && (
  <div className="absolute top-full mt-3 right-0 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-5 animate-slideDown">
    {/* Theme Toggle */}
    <div className="flex justify-center mb-4">
      <button
        onClick={toggleTheme}
        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-transform transform bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 ${
          isDarkMode ? "rotate-180" : "rotate-0"
        }`}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? "🌙" : "☀️"}
      </button>
    </div>

    {/* Menu Items */}
    <div className="flex flex-col gap-4">
      <FancyLink href="/" text="Home" mobile />
      <FancyLink href="/notes" text="Notes" mobile />
      <FancyLink href="/leetcode" text="LeetCode" mobile />
    </div>
  </div>
)}

    </nav>
  );
}

// Component for Fancy Links with Blue Glow Effect
function FancyLink({
  href,
  text,
  mobile,
}: {
  href: string;
  text: string;
  mobile?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative ${
        mobile ? "block py-2 text-center" : ""
      } text-lg font-semibold text-gray-800 dark:text-gray-200 transition-all group`}
    >
      <span className="relative z-10">{text}</span>
      <span
        className="absolute -inset-1.5 bg-blue-500 opacity-0 group-hover:opacity-20 rounded-lg blur-md transition-all"
        aria-hidden="true"
      ></span>
    </Link>
  );
}
