"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowCircleDown } from 'react-icons/fa';

const MovingArrow: React.FC = () => {
  return (
    <motion.div className="relative py-64"
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y: 0}}
    transition={{delay: 1}}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: [0, 1, 0], // Animating opacity from 0 to 1 and back to 0
          y: [0, 10, 20] // Animating y position
        }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, repeat: Infinity }}
        className="relative bottom-0 left-1/2 transform -translate-x-1/2 text-white"
      >
        <FaArrowCircleDown size={24} />
      </motion.div>
    </motion.div>
  );
};

export default MovingArrow;
