import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:+919990909338"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-8 z-40 bg-red-700 hover:bg-red-800 text-white rounded-full p-5 shadow-2xl transition-all duration-300 group"
      aria-label="Call now"
    >
      <Phone className="h-7 w-7 animate-pulse" />
      <motion.div
        className="absolute inset-0 rounded-full bg-red-700"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.a>
  );
};

export default FloatingCallButton;