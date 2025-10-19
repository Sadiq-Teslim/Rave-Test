/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

// Define the navigation links for easy mapping
const navLinks = [
  { title: "Features", href: "#features" },
  { title: "For Institutions", href: "#" },
  { title: "For Candidates", href: "#" },
  { title: "Pricing", href: "#" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Variants for the mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 },
    },
    open: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -15, transition: { type: "spring", stiffness: 400, damping: 40 } },
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <motion.div
          animate={{ paddingTop: isScrolled ? '0rem' : '1rem' }}
          className="px-4"
        >
          <div
            className={`
              max-w-6xl mx-auto transition-all duration-300
              ${isScrolled
                ? 'bg-[#0a192f]/80 backdrop-blur-lg border-b border-white/10 rounded-none'
                : 'md:bg-white/5 md:backdrop-blur-sm md:border md:border-white/10 md:rounded-xl'
              }
            `}
          >
            <div className="flex justify-between items-center py-3 px-4">
              <div className="text-2xl font-bold text-white tracking-wider">RaveTest</div>
              <div className="hidden md:flex items-center gap-8 text-gray-300">
                {navLinks.map((link) => (
                  <a key={link.title} href={link.href} className="hover:text-white transition-colors">{link.title}</a>
                ))}
              </div>
              <a href="#" className="hidden md:block bg-gradient-to-r from-purple-500 to-teal-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                Request a Demo
              </a>
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl z-50">
                  {isOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 w-full h-screen bg-[#0a192f] pt-24 px-8 flex flex-col z-40"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.title}
                href={link.href}
                variants={itemVariants as any }
                onClick={() => setIsOpen(false)}
                className="text-gray-300 text-2xl font-semibold py-4 border-b border-white/10"
              >
                {link.title}
              </motion.a>
            ))}
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