import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
}

export function Fireworks() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#FF6B9D", "#95E1D3"];
      const newFirework: Firework = {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 40 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setFireworks((prev) => [...prev, newFirework]);

      setTimeout(() => {
        setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id));
      }, 1500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute"
          style={{ left: `${firework.x}%`, top: `${firework.y}%` }}
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const distance = 60;

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: firework.color }}
                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                animate={{
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance,
                  scale: 0,
                  opacity: 0,
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
