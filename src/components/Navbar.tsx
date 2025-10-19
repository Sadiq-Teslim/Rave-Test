/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

// Define the navigation links for easy mapping
const navLinks = [
  { title: "Features", href: "#features" },
  { title: "For Institutions", href: "#" },
  { title: "For Candidates", href: "#" },
  { title: "Pricing", href: "#" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variants for the mobile menu container
  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for the individual menu items
  const itemVariants = {
    closed: {
      opacity: 0,
      y: -15,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <>
      {/* --- Main Navbar --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Adjusted padding: smaller on mobile, larger on desktop
        className="fixed top-0 left-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-lg border-b border-white/10"
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-3">
          {/* Logo */}
          <div className="text-2xl font-bold text-white tracking-wider">
            RaveTest
          </div>

          {/* Desktop Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button (hidden on mobile) */}
          <a
            href="#"
            className="hidden md:block bg-gradient-to-r from-purple-500 to-teal-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Request a Demo
          </a>

          {/* Mobile Menu Toggler (visible on mobile only) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl z-50"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- Animated Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 w-full h-screen bg-[#0a192f] pt-24 px-8 flex flex-col z-40"
          >
            {/* Map over links to create animated list items */}
            {navLinks.map((link) => (
              <motion.a
                key={link.title}
                href={link.href}
                variants={itemVariants as any}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-gray-300 text-2xl font-semibold py-4 border-b border-white/10"
              >
                {link.title}
              </motion.a>
            ))}

            {/* Mobile CTA Button */}
            <motion.a
              href="#"
              variants={itemVariants as any}
              className="mt-8 w-full text-center bg-gradient-to-r from-purple-500 to-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-lg"
            >
              Request a Demo
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
