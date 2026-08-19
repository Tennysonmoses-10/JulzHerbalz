"use client";

import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  symbol: string;
  size: number;
  rotation: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

const FLORAL_SYMBOLS = ["🌸", "🌿", "🍃", "🌱", "🌺", "✨", "🌼"];

export function FloralCursorEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const createParticle = (x: number, y: number, isClick = false) => {
      const count = isClick ? 6 : 1; // More particles on click!
      const newParticles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        particleId++;
        const symbol = FLORAL_SYMBOLS[Math.floor(Math.random() * FLORAL_SYMBOLS.length)];
        const angle = isClick ? (Math.PI * 2 * i) / count : Math.random() * Math.PI * 2;
        const speed = isClick ? Math.random() * 2 + 1 : Math.random() * 0.8 + 0.2;

        newParticles.push({
          id: particleId,
          x: x + (Math.random() * 10 - 5),
          y: y + (Math.random() * 10 - 5),
          symbol,
          size: isClick ? Math.random() * 14 + 14 : Math.random() * 10 + 10,
          rotation: Math.random() * 360,
          opacity: 1,
          speedX: Math.cos(angle) * speed,
          speedY: isClick ? Math.sin(angle) * speed : -(Math.random() * 1.5 + 0.5),
        });
      }

      setParticles((prev) => [...prev.slice(-30), ...newParticles]);
    };

    let lastTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 60) { // Limit spawn rate on move
        createParticle(e.clientX, e.clientY, false);
        lastTime = now;
      }
    };

    const handleClick = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY, true);
    };

    const handleScroll = () => {
      // Spawn subtle leaf at center bottom during scroll
      if (Math.random() > 0.6) {
        createParticle(
          window.innerWidth / 2 + (Math.random() * 200 - 100),
          window.innerHeight - 50,
          false
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            opacity: p.opacity - 0.03,
            rotation: p.rotation + 2,
          }))
          .filter((p) => p.opacity > 0)
      );
    }, 30);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none transition-transform duration-75"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            filter: "drop-shadow(0px 2px 4px rgba(46, 125, 50, 0.2))",
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
