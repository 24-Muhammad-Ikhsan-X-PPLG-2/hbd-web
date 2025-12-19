import { motion } from "motion/react";
import { FloatingConfetti } from "./FloatingConfetti";

export function BirthdayMessage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <FloatingConfetti />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="text-6xl sm:text-8xl">馃巿</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-center text-purple-600 mb-6 sm:mb-8"
        >
          A Special Message for You
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed"
        >
          <p>Dear Obi,</p>
          <p>
            Today is YOUR day! A day to celebrate the incredible person you are
            and all the joy you bring into the lives of everyone around you.
            Your kindness, your laughter, and your amazing spirit make the world
            a brighter place.
          </p>
          <p>
            As you blow out your candles and make a wish, know that you deserve
            all the happiness in the world. May this year bring you exciting
            adventures, unforgettable moments, and dreams come true.
          </p>
          <p className="text-purple-600">
            Here's to another year of being absolutely awesome! 馃専
          </p>
          <p className="text-right">
            With love and celebration,
            <br />
            <span className="text-pink-500">Your Friends & Family 馃挄</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
