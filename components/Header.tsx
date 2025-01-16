import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { FiDownload } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md"; // Icons for light/dark mode
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    // Persist dark mode state across page loads
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Save dark mode state to localStorage
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  }, [isDarkMode]);

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex flex-row items-center"
      >
        {/* React social icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="text-gray-400 dark:text-lightBackground focus:outline-none"
        >
          {isDarkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
        </button>

        <Link href="/resume.pdf" download>
          <motion.div
            initial={{
              x: 500,
              opacity: 0.5,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <FiDownload className="text-xl text-gray-400 mr-2" /> {/* Download Icon */}
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 dark:text-lightBackground">
              Download Resume
            </p>
          </motion.div>
        </Link>
      </div>
    </header>
  );
}
