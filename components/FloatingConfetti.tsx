import { motion } from "motion/react";

export function FloatingConfetti() {
  const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#FF6B9D", "#95E1D3"];
  const confettiPieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    x: Math.random() * 100,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-2 h-2 rounded-sm"
          style={{
            backgroundColor: piece.color,
            left: `${piece.x}%`,
          }}
          initial={{ y: -20, rotate: 0, opacity: 0.8 }}
          animate={{
            y: ["0vh", "100vh"],
            rotate: [0, 360],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
