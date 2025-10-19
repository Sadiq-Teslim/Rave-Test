import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start({
        backgroundColor: 'rgba(10, 25, 47, 0.5)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      });
    } else {
      controls.start({
        backgroundColor: 'rgba(10, 25, 47, 0)',
        backdropFilter: 'blur(0px)',
        boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
      });
    }
  }, [isScrolled, controls]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50"
    >
      <motion.div
        animate={controls}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center p-4 rounded-xl border border-white/10"
      >
        <div className="text-2xl font-bold text-white tracking-wider">RaveTest</div>
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">For Institutions</a>
          <a href="#" className="hover:text-white transition-colors">For Candidates</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 to-teal-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Request a Demo
        </a>
      </motion.div>
    </motion.nav>
  );
};