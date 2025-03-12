"use client";
import React, { memo, useMemo } from "react";
import { BackgroundBeams } from "@/component/ui/BackgroundBeams";
import { motion } from "framer-motion";

export const BackgroundBeamsDemo = memo(() => {
  // Generate leaves for the forest atmosphere
  const leaves = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotation: Math.random() * 360,
      animationDuration: Math.random() * 20 + 15,
      animationDelay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
      type: Math.floor(Math.random() * 3) // 0, 1, or 2 for different leaf shapes
    }));
  }, []);

  // Generate animals for the forest
  const animals = useMemo(() => {
    // Different animal types: 0 = bird, 1 = butterfly, 2 = dragonfly
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      type: Math.floor(Math.random() * 3),
      size: Math.random() * 5 + 3,
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      speed: Math.random() * 15 + 20,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.2,
      path: i % 2 === 0 ? 
        [[0, 0], [20, -15], [40, 0], [60, -10], [80, 5], [100, 0]] : 
        [[0, 0], [20, 10], [40, -5], [60, 15], [80, 0], [100, 10]]
    }));
  }, []);

  return (
    <div className="h-full w-full absolute inset-0 bg-abyss-dark flex flex-col items-center justify-center antialiased overflow-hidden">
      {/* Ancient forest pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMCAwIEMzMCAyMCA3MCA1MCAxMDAgMzAgTDEwMCAxMDAgTDAgMTAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
      
      {/* Floating leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className={`absolute ${
            leaf.type === 0 ? 'bg-deep-teal/60' : 
            leaf.type === 1 ? 'bg-ocean-teal/60' : 'bg-dark-cyan/60'
          }`}
          style={{
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            top: `${leaf.top}%`,
            left: `${leaf.left}%`,
            opacity: leaf.opacity,
            borderRadius: leaf.type === 0 ? '50% 50% 50% 0' : 
                         leaf.type === 1 ? '50% 0 50% 50%' : '0 50% 50% 50%',
            transform: `rotate(${leaf.rotation}deg)`,
          }}
          animate={{
            y: [0, 50],
            x: [0, Math.random() * 10 - 5],
            rotate: [leaf.rotation, leaf.rotation + 180],
            opacity: [leaf.opacity, leaf.opacity * 0.6],
          }}
          transition={{
            duration: leaf.animationDuration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: leaf.animationDelay,
          }}
        />
      ))}

      {/* Forest animals */}
      {animals.map((animal) => (
        <motion.div
          key={`animal-${animal.id}`}
          className="absolute z-10"
          style={{
            top: `${animal.top}%`,
            left: `${animal.left}%`,
            opacity: animal.opacity,
          }}
          animate={{
            x: animal.path.map(p => p[0]),
            y: animal.path.map(p => p[1]),
          }}
          transition={{
            duration: animal.speed,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            repeat: Infinity,
            repeatType: "reverse",
            delay: animal.delay,
            ease: "easeInOut"
          }}
        >
          {animal.type === 0 && (
            // Bird
            <svg width={animal.size * 3} height={animal.size * 2} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 4C19 4 16 1 12 1C8 1 4 4 2 6C4 8 8 10 12 10C16 10 19 8 22 6" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
              <motion.path 
                d="M12 10C10 12 8 14 6 15" 
                stroke="rgba(161, 124, 56, 0.8)" 
                strokeWidth="0.5" 
                fill="none"
                animate={{ d: ["M12 10C10 12 8 14 6 15", "M12 10C10 13 8 15 6 16"] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              />
            </svg>
          )}
          {animal.type === 1 && (
            // Butterfly
            <motion.svg 
              width={animal.size * 3} 
              height={animal.size * 2.5} 
              viewBox="0 0 24 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path d="M12 1C8 1 4 3 4 6C4 9 8 11 12 11C16 11 20 9 20 6C20 3 16 1 12 1Z" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
              <path d="M12 11C8 11 4 13 4 16C4 19 8 21 12 21C16 21 20 19 20 16C20 13 16 11 12 11Z" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
              <path d="M12 1L12 21" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
            </motion.svg>
          )}
          {animal.type === 2 && (
            // Dragonfly
            <motion.svg 
              width={animal.size * 4} 
              height={animal.size * 2} 
              viewBox="0 0 32 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 8L30 8" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
              <motion.path 
                d="M8 2C6 4 6 6 8 8C10 10 10 12 8 14" 
                stroke="rgba(161, 124, 56, 0.8)" 
                strokeWidth="0.5" 
                fill="none"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.path 
                d="M16 2C14 4 14 6 16 8C18 10 18 12 16 14" 
                stroke="rgba(161, 124, 56, 0.8)" 
                strokeWidth="0.5" 
                fill="none"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: 0.1 }}
              />
            </motion.svg>
          )}
        </motion.div>
      ))}

      {/* Forest glow areas */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-deep-teal/5 blur-[150px] top-1/4 -left-20"></div>
      <div className="absolute w-[350px] h-[350px] rounded-full bg-ocean-teal/5 blur-[120px] bottom-1/4 right-10"></div>
      <div className="absolute w-[450px] h-[450px] rounded-full bg-dark-cyan/5 blur-[180px] top-3/4 left-1/3"></div>

      {/* Ancient civilization structures */}
      <div className="absolute bottom-[15%] left-[10%] opacity-20">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Temple/pyramid structure */}
          <path d="M10 70H110L60 10L10 70Z" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
          <path d="M30 70L60 30L90 70" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
          <path d="M40 70L60 40L80 70" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
          <path d="M50 70L60 50L70 70" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
          <path d="M55 70H65V60H55V70Z" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="absolute top-[20%] right-[15%] opacity-15">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ancient observatory */}
          <circle cx="50" cy="30" r="20" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
          <path d="M50 10V50" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
          <path d="M30 30H70" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
          <path d="M35 15L65 45" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
          <path d="M35 45L65 15" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
          <circle cx="50" cy="30" r="5" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Ancient civilization symbols */}
      <div className="absolute top-1/4 left-1/4 opacity-10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L12 22M12 5L7 10M12 8L5 15" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
          <circle cx="12" cy="3" r="1" fill="rgba(161, 124, 56, 0.8)" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
          <path d="M12 4L12 20M4 12L20 12" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute top-2/3 left-2/3 opacity-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
          <path d="M12 6L18 12L12 18L6 12L12 6Z" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Elaborate vine system */}
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main vine trunk */}
        <path 
          d="M500 1000 C500 900, 550 800, 500 700 C450 600, 400 500, 450 400 C500 300, 600 200, 500 100 C400 0, 300 50, 200 100" 
          stroke="rgba(6, 90, 96, 0.8)" 
          strokeWidth="2" 
          fill="none"
        />
        {/* Vine branches */}
        <path 
          d="M500 700 C600 650, 700 700, 800 650 C850 630, 900 600, 950 650" 
          stroke="rgba(6, 90, 96, 0.8)" 
          strokeWidth="1.5" 
          fill="none"
        />
        <path 
          d="M450 400 C350 350, 250 375, 150 325 C100 300, 50 250, 0 300" 
          stroke="rgba(6, 90, 96, 0.8)" 
          strokeWidth="1.5" 
          fill="none"
        />
        <path 
          d="M500 100 C550 150, 600 100, 650 150 C700 200, 750 150, 800 200" 
          stroke="rgba(6, 90, 96, 0.8)" 
          strokeWidth="1.5" 
          fill="none"
        />
        
        {/* Small leaves on vines */}
        <circle cx="500" cy="700" r="5" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="600" cy="650" r="4" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="700" cy="700" r="5" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="800" cy="650" r="4" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="900" cy="600" r="3" fill="rgba(6, 90, 96, 0.6)" />
        
        <circle cx="450" cy="400" r="5" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="350" cy="350" r="4" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="250" cy="375" r="5" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="150" cy="325" r="4" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="50" cy="250" r="3" fill="rgba(6, 90, 96, 0.6)" />
        
        <circle cx="500" cy="100" r="5" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="550" cy="150" r="4" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="600" cy="100" r="5" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="650" cy="150" r="4" fill="rgba(6, 90, 96, 0.6)" />
        <circle cx="700" cy="200" r="3" fill="rgba(6, 90, 96, 0.6)" />
      </svg>

      {/* Tree roots/vines */}
      <div className="absolute h-[1px] w-full top-1/4 left-0 bg-deep-blue/20"></div>
      <div className="absolute h-[1px] w-full top-3/4 left-0 bg-deep-blue/20"></div>
      <div className="absolute w-[1px] h-full top-0 left-1/4 bg-deep-blue/20"></div>
      <div className="absolute w-[1px] h-full top-0 left-3/4 bg-deep-blue/20"></div>
      
      {/* Forest mist effect */}
      <motion.div 
        className="absolute h-[50px] w-full bg-gradient-to-t from-ocean-teal/5 to-transparent blur-[5px]"
        style={{ bottom: '10%' }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Original beams with adjusted opacity and color */}
      <BackgroundBeams className="z-0 opacity-30" />
    </div>
  );
});

BackgroundBeamsDemo.displayName = "BackgroundBeamsDemo";
