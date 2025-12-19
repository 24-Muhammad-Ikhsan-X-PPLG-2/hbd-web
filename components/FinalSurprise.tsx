import { motion } from "motion/react";
import { useState } from "react";

interface FinalSurpriseProps {
  onOpenGift: () => void;
}

export function FinalSurprise({ onOpenGift }: FinalSurpriseProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl text-white mb-12 sm:mb-16"
        >
          馃巵 One Final Surprise... 馃巵
        </motion.h2>

        <div className="relative inline-block">
          {/* Glowing particles */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 100;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, x, 0],
                  y: [0, y, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            );
          })}

          {/* Gift Box */}
          <motion.div
            animate={{
              rotate: isHovering ? [0, -5, 5, -5, 5, 0] : 0,
            }}
            transition={{
              duration: 0.5,
              repeat: isHovering ? Infinity : 0,
              repeatDelay: 0.5,
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl shadow-2xl relative overflow-hidden cursor-pointer"
            >
              {/* Gift ribbon vertical */}
              <div className="absolute left-1/2 top-0 w-8 sm:w-12 h-full bg-yellow-300 transform -translate-x-1/2" />

              {/* Gift ribbon horizontal */}
              <div className="absolute top-1/2 left-0 w-full h-8 sm:h-12 bg-yellow-300 transform -translate-y-1/2" />

              {/* Bow */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full shadow-lg"
                />
              </div>

              {/* Sparkles */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="absolute top-4 right-4 text-2xl sm:text-4xl"
              >
                鉁�
              </motion.div>

              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.7,
                }}
                className="absolute bottom-4 left-4 text-2xl sm:text-4xl"
              >
                鉁�
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16"
        >
          <motion.button
            onClick={onOpenGift}
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
            馃巵 Open the Gift
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
