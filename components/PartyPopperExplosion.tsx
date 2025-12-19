import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ParticleProps {
  color: string;
  delay: number;
  x: number;
  y: number;
  type: "confetti" | "streamer" | "sparkle";
}

const Particle = ({ color, delay, x, y, type }: ParticleProps) => {
  const randomX = (Math.random() - 0.5) * 600;
  const randomY = Math.random() * 800 + 400;
  const randomRotate = Math.random() * 720;

  return (
    <motion.div
      initial={{ x, y, scale: 0, rotate: 0, opacity: 1 }}
      animate={{
        x: x + randomX,
        y: y + randomY,
        scale: type === "sparkle" ? [0, 1, 0] : 1,
        rotate: randomRotate,
        opacity: 0,
      }}
      transition={{
        duration: type === "sparkle" ? 1.5 : 3,
        delay,
        ease: "easeOut",
      }}
      className="absolute pointer-events-none"
      style={{
        width:
          type === "streamer" ? "4px" : type === "sparkle" ? "8px" : "12px",
        height:
          type === "streamer" ? "40px" : type === "sparkle" ? "8px" : "12px",
        backgroundColor: color,
        borderRadius: type === "sparkle" ? "50%" : "2px",
        boxShadow: type === "sparkle" ? `0 0 10px ${color}` : "none",
      }}
    />
  );
};

interface PartyPopperExplosionProps {
  onComplete?: () => void;
}

export function PartyPopperExplosion({
  onComplete,
}: PartyPopperExplosionProps) {
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  useEffect(() => {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#FFE66D",
      "#FF6B9D",
      "#95E1D3",
      "#F38181",
      "#AA96DA",
      "#FCBAD3",
    ];
    const newParticles: ParticleProps[] = [];

    // Top-left popper
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.3,
        x: 100,
        y: 100,
        type: i % 3 === 0 ? "streamer" : i % 5 === 0 ? "sparkle" : "confetti",
      });
    }

    // Top-right popper
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.3,
        x: window.innerWidth - 100,
        y: 100,
        type: i % 3 === 0 ? "streamer" : i % 5 === 0 ? "sparkle" : "confetti",
      });
    }

    // Center popper
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.4,
        x: window.innerWidth / 2,
        y: 150,
        type: i % 3 === 0 ? "streamer" : i % 5 === 0 ? "sparkle" : "confetti",
      });
    }

    setParticles(newParticles);

    if (onComplete) {
      setTimeout(onComplete, 3500);
    }
  }, [onComplete]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      ))}
    </div>
  );
}
