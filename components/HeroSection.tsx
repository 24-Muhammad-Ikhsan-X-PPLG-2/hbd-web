import { motion } from "motion/react";
import { FloatingBalloons } from "./FloatingBalloons";
import { Fireworks } from "./Fireworks";

interface HeroSectionProps {
  onStartSurprise: () => void;
}

export function HeroSection({ onStartSurprise }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <FloatingBalloons />
      <Fireworks />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ scale: 0, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 sm:mb-12"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            馃帀 Happy Birthday, Obi! 馃巶
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            onClick={onStartSurprise}
            className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-purple-600 rounded-full text-lg sm:text-2xl shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.9)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            馃巵 Start the Surprise
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
