import { motion } from 'framer-motion';

export const FinalCTA = () => {
    return (
        <section className="py-20 text-center" id="get-started">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Ready to Revolutionize Your Exams?</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    Join leading institutions who trust RaveTest to deliver secure, scalable, and superior testing experiences.
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-teal-500 text-white font-bold py-4 px-10 rounded-full shadow-lg text-lg hover:scale-105 transition-transform">
                    Request a Demo
                </button>
            </motion.div>
        </section>
    );
};