import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFloatingButton = () => {
  return (
    <motion.a
      href="https://wa.me/919990909338?text=Hello%20I%20need%20ambulance%20service"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-8 z-40 bg-green-600 hover:bg-green-700 text-white rounded-full p-5 shadow-2xl transition-all duration-300 group"
      aria-label="WhatsApp chat"
    >
      {/* ICON */}
      <MessageCircle className="h-7 w-7 animate-pulse relative z-10" />

      {/* RIPPLE EFFECT */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-600 pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.a>
  );
};

export default WhatsAppFloatingButton;
