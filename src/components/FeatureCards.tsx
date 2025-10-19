import { motion } from 'framer-motion';
import { FiCpu, FiShield, FiBarChart2, FiUsers, FiEye, FiLock } from 'react-icons/fi';

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const MotionCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full flex flex-col"
  >
    <div className="text-[#ffab00] text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{children}</p>
  </motion.div>
);

export const AdminFeatures = () => (
  <motion.section
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.3 }}
    className="py-20 px-4"
  >
    <h2 className="text-4xl font-bold text-center mb-12 text-white">An Administrator's <span className="text-[#ffab00]">Command Center</span></h2>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <MotionCard icon={<FiCpu />} title="AI-Powered Test Creation">
        Generate flawless questions with simple prompts. Let our AI build your question bank, complete with correct answers and plausible distractors.
      </MotionCard>
      <MotionCard icon={<FiShield />} title="Automated Quality Control">
        Our system automatically scans every question for grammatical errors, confusing syntax, and potential bias, ensuring fairness and professionalism.
      </MotionCard>
      <MotionCard icon={<FiUsers />} title="Dynamic & Cheat-Proof Assembly">
        Assemble unique exams for every student by pulling dynamically from the question bank. Automatically randomize questions and answers.
      </MotionCard>
      <MotionCard icon={<FiBarChart2 />} title="Live Monitoring & Insights">
        Monitor candidate progress in real-time from a live dashboard. Get instant security flags from our advanced proctoring system.
      </MotionCard>
    </div>
  </motion.section>
);

export const CandidateExperience = () => (
    <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-4"
    >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">An Exam Experience <span className="text-[#ffab00]">You Can Trust</span></h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <MotionCard icon={<FiEye />} title="Distraction-Free Environment">
                Our minimalist UI keeps you focused. No clutter, no confusion. A prominent timer and progress bar keep you on track.
            </MotionCard>
            <MotionCard icon={<FiShield />} title="Flawless & Fair Proctoring">
                Our AI-powered system ensures a fair testing environment with simple ID verification and a secure lockdown browser.
            </MotionCard>
            <MotionCard icon={<FiLock />} title="Uninterrupted & Supported">
                Lose your internet? Your progress is saved locally. Our platform guides you on how to reconnect instantly. Support is available in seconds.
            </MotionCard>
        </div>
    </motion.section>
);