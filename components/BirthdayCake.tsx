import { motion } from 'motion/react';
import { useState } from 'react';

export function BirthdayCake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleBlowCandles = () => {
    if (!candlesBlown) {
      setCandlesBlown(true);
      setTimeout(() => {
        setShowMessage(true);
      }, 1000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-400 via-teal-400 to-blue-400">
      <div className="max-w-4xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl text-white mb-8 sm:mb-12"
        >
          {candlesBlown ? '🎊 Happy Birthday! 🎊' : '🎂 Blow Out the Candles! 🎂'}
        </motion.h2>

        {!candlesBlown && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl sm:text-2xl text-white mb-12 sm:mb-8"
          >
            Click the cake to blow out the candles! 🕯️
          </motion.p>
        )}

        {/* Birthday Cake */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative cursor-pointer"
            onClick={handleBlowCandles}
            whileHover={!candlesBlown ? { scale: 1.05 } : {}}
            whileTap={!candlesBlown ? { scale: 0.95 } : {}}
          >
            {/* Candles */}
            <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6">
              {[0, 1, 2, 3, 4].map((index) => (
                <div key={index} className="relative">
                  {/* Candle stick */}
                  <motion.div
                    className="w-3 sm:w-4 h-12 sm:h-16 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-sm"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3)',
                    }}
                  />
                  
                  {/* Flame */}
                  {!candlesBlown && (
                    <motion.div
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                      animate={{
                        scale: [1, 1.1, 1],
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                    >
                      {/* Outer flame */}
                      <div className="relative">
                        <div className="w-4 h-6 sm:w-5 sm:h-7 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full"
                          style={{
                            filter: 'blur(1px)',
                          }}
                        />
                        {/* Inner flame */}
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-4 sm:w-2.5 sm:h-5 bg-gradient-to-t from-yellow-300 to-white rounded-full opacity-80" />
                      </div>
                      
                      {/* Glow */}
                      <motion.div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-300 rounded-full opacity-30 blur-md"
                        animate={{
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                  )}
                  
                  {/* Smoke after blowing */}
                  {candlesBlown && (
                    <motion.div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 1, y: 0, scale: 0.5 }}
                      animate={{ opacity: 0, y: -30, scale: 1 }}
                      transition={{ duration: 2, delay: index * 0.1 }}
                    >
                      <div className="text-2xl">💨</div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Cake - Top Layer */}
            <div className="relative">
              <motion.div
                className="w-64 h-16 sm:w-80 sm:h-20 bg-gradient-to-b from-pink-400 to-pink-500 rounded-t-3xl relative overflow-hidden"
                style={{
                  boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.1)',
                }}
              >
                {/* Frosting decoration */}
                <div className="absolute top-0 left-0 right-0 flex justify-around">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-3 sm:w-8 sm:h-4 bg-white rounded-b-full opacity-80"
                    />
                  ))}
                </div>
                
                {/* Sprinkles */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-2 rounded-full"
                    style={{
                      backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF6B9D'][i % 4],
                      left: `${10 + (i * 4)}%`,
                      top: `${30 + (i % 3) * 20}%`,
                      transform: `rotate(${i * 15}deg)`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Cake - Middle Layer */}
              <motion.div
                className="w-72 h-20 sm:w-96 sm:h-24 bg-gradient-to-b from-purple-400 to-purple-500 relative -mt-1"
                style={{
                  boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.1)',
                  marginLeft: '-1rem',
                  marginRight: '-1rem',
                }}
              >
                {/* Frosting decoration */}
                <div className="absolute top-0 left-0 right-0 flex justify-around">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-3 sm:w-8 sm:h-4 bg-white rounded-b-full opacity-80"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Cake - Bottom Layer */}
              <motion.div
                className="w-80 h-24 sm:w-[28rem] sm:h-28 bg-gradient-to-b from-blue-400 to-blue-500 rounded-b-3xl relative -mt-1"
                style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  marginLeft: '-2rem',
                  marginRight: '-2rem',
                }}
              >
                {/* Frosting decoration */}
                <div className="absolute top-0 left-0 right-0 flex justify-around">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-3 sm:w-8 sm:h-4 bg-white rounded-b-full opacity-80"
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Plate */}
            <div className="w-96 h-4 sm:w-[32rem] sm:h-5 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full -mt-2 mx-auto"
              style={{
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                marginLeft: '-3rem',
                marginRight: '-3rem',
              }}
            />
          </motion.div>
        </div>

        {/* Confetti after blowing */}
        {candlesBlown && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(50)].map((_, i) => {
              const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF6B9D', '#95E1D3'];
              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-sm"
                  style={{
                    backgroundColor: colors[i % colors.length],
                    left: `${Math.random() * 100}%`,
                    top: '40%',
                  }}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{
                    y: [0, -200 - Math.random() * 200, 400],
                    x: [(Math.random() - 0.5) * 300],
                    rotate: [0, Math.random() * 360],
                    opacity: [1, 1, 0],
                    scale: [0, 1, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.02,
                    ease: 'easeOut',
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Success Message */}
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="mt-8"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-4xl text-purple-600 mb-4">
                May All Your Dreams Come True! ✨
              </h3>
              <p className="text-lg sm:text-xl text-gray-700">
                Happy Birthday, Obi! May your day be filled with joy and the year ahead bring incredible success! 🎉🎂
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}