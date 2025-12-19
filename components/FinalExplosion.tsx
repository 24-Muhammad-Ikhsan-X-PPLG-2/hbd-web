import { motion } from 'motion/react';
import { PartyPopperExplosion } from './PartyPopperExplosion';

export function FinalExplosion() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 pointer-events-none">
      <PartyPopperExplosion />
      
      {/* Fireworks bursts */}
      {[...Array(8)].map((_, i) => {
        const positions = [
          { x: 20, y: 20 },
          { x: 80, y: 20 },
          { x: 50, y: 30 },
          { x: 30, y: 50 },
          { x: 70, y: 50 },
          { x: 40, y: 70 },
          { x: 60, y: 70 },
          { x: 50, y: 85 },
        ];
        const pos = positions[i];
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF6B9D', '#95E1D3', '#F38181'];
        const color = colors[i % colors.length];
        
        return (
          <div
            key={i}
            className="absolute"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          >
            {[...Array(16)].map((_, j) => {
              const angle = (j / 16) * Math.PI * 2;
              const distance = 80;
              
              return (
                <motion.div
                  key={j}
                  className="absolute w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    ease: 'easeOut',
                  }}
                />
              );
            })}
          </div>
        );
      })}
      
      {/* Floating confetti */}
      {[...Array(100)].map((_, i) => {
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF6B9D', '#95E1D3', '#F38181'];
        const startX = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-sm"
            style={{
              backgroundColor: colors[i % colors.length],
              left: `${startX}%`,
              top: '-5%',
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, (Math.random() - 0.5) * 200],
              rotate: [0, Math.random() * 720],
              opacity: [1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        );
      })}
      
      {/* Final message */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1,
          type: 'spring',
          stiffness: 200,
          damping: 15,
        }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white"
          animate={{
            textShadow: [
              '0 0 30px rgba(255,255,255,0.5)',
              '0 0 60px rgba(255,255,255,1)',
              '0 0 30px rgba(255,255,255,0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          We Love You, Obi ❤️🎉
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-xl sm:text-3xl text-white mt-6 sm:mt-8"
        >
          Hope your birthday is as special as you are! 🌟
        </motion.p>
      </motion.div>
    </div>
  );
}
