'use client';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/10">
          {children}
        </div>
      </motion.main>
    </div>
  );
}