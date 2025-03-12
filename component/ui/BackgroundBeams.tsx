"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackgroundBeams({
  className,
}: {
  className?: string;
}) {
  const beamContainerRef = useRef<HTMLDivElement>(null);
  const [beams, setBeams] = useState<
    {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      color: string;
    }[]
  >([]);

  useEffect(() => {
    if (!beamContainerRef.current) return;

    // Ancient forest theme colors
    const colors = [
      "rgba(11, 82, 91, 0.4)",  // deep-teal
      "rgba(6, 90, 96, 0.4)",   // ocean-teal
      "rgba(0, 100, 102, 0.4)", // dark-cyan
      "rgba(27, 58, 75, 0.4)",  // deep-blue
      "rgba(161, 124, 56, 0.3)" // ancient-gold
    ];

    const { width, height } = beamContainerRef.current.getBoundingClientRect();
    const numBeams = 8; // Fewer beams for a more mystical look
    const newBeams = [];

    for (let i = 0; i < numBeams; i++) {
      const radius = Math.random() * (width < 768 ? 70 : 100) + 50;
      newBeams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        opacity: Math.random() * 0.15 + 0.05, // Lower opacity for a subtle effect
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setBeams(newBeams);
  }, []);

  return (
    <div
      ref={beamContainerRef}
      className={cn(
        "h-full w-full absolute inset-0 overflow-hidden [--beam-light:theme(colors.deep-teal.500)] [--beam-dark:theme(colors.deep-blue.900)]",
        className
      )}
    >
      {beams.map((beam, i) => (
        <motion.div
          key={i}
          className="absolute opacity-50 bg-gradient-to-r from-transparent via-deep-teal/20 to-transparent"
          style={{
            width: `${beam.radius * 2}px`,
            height: `${beam.radius * 2}px`,
            borderRadius: "50%",
            backgroundColor: beam.color,
            opacity: beam.opacity,
            left: `${beam.x - beam.radius}px`,
            top: `${beam.y - beam.radius}px`,
            boxShadow: `0 0 40px 20px ${beam.color}`,
          }}
          animate={{
            opacity: [beam.opacity, beam.opacity * 0.5, beam.opacity],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 10, // Slower animation for mystical effect
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ancient forest light rays */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
        <defs>
          <pattern
            id="forest-pattern"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
            patternTransform="scale(0.75) rotate(0)"
          >
            <path
              d="M50 0 L100 50 L50 100 L0 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M50 0 L50 100 M0 50 L100 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#forest-pattern)"
          className="text-deep-teal"
        />
      </svg>

      {/* Ancient symbols overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-16 h-16">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" className="text-ancient-gold" />
            <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="0.5" className="text-ancient-gold" />
          </svg>
        </div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="currentColor" strokeWidth="0.5" className="text-ancient-gold" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="0.5" className="text-ancient-gold" />
            <path d="M22 2L12 12" stroke="currentColor" strokeWidth="0.5" className="text-ancient-gold" />
          </svg>
        </div>
      </div>
    </div>
  );
}
