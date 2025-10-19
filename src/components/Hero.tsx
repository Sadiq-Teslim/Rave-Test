import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <section className="h-[70vh] md:min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24">
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          The Future of Exams is <span className="text-[#ffab00]">Here.</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          A secure, AI-powered, and flawlessly stable platform for high-stakes
          testing. Built for administrators who demand excellence and candidates
          who deserve a fair chance.
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          {/* 2. Added responsive width to the buttons */}
          <a
            href="#get-started"
            className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Get Started for Free
          </a>
          <a
            href="#features"
            className="w-full md:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-[#0a192f] transition-colors flex items-center justify-center gap-2"
          >
            See How It Works <FiArrowDown />
          </a>
        </motion.div>

        {/* --- MODIFICATION END --- */}
      </motion.div>
    </section>
  );
};
