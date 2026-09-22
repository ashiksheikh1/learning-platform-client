"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* Illustration */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-950"
        >
          <SearchX
            size={60}
            className="text-purple-600 dark:text-purple-400"
          />
        </motion.div>

        {/* Error Code */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-extrabold tracking-tight text-purple-600 md:text-8xl"
        >
          404
        </motion.h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        {/* Button */}
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-purple-700"
          >
            <Home size={20} />
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;