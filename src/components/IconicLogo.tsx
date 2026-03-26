import React from 'react';
import { motion } from 'motion/react';

export default function IconicLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        {/* Outer Shield/Hexagon */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M50 5L90 25V75L50 95L10 75V25L50 5Z"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary/30"
        />
        
        {/* Inner Book Shape */}
        <motion.path
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          d="M30 35C30 32.2386 32.2386 30 35 30H65C67.7614 30 70 32.2386 70 35V65C70 67.7614 67.7614 70 65 70H35C32.2386 70 30 67.7614 30 65V35Z"
          fill="currentColor"
          className="text-primary/10"
        />
        
        {/* Stylized 'H' or Pages */}
        <motion.path
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          d="M40 40V60M60 40V60M40 50H60"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-primary"
        />
        
        {/* Graduation Cap Accent */}
        <motion.path
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          d="M50 20L75 30L50 40L25 30L50 20Z"
          fill="currentColor"
          className="text-amber-400"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          d="M75 30V45"
          stroke="currentColor"
          strokeWidth="2"
          className="text-amber-400"
        />
        
        {/* Bottom Glow */}
        <circle cx="50" cy="85" r="10" fill="currentColor" className="text-primary/20 blur-md" />
      </svg>
    </div>
  );
}
