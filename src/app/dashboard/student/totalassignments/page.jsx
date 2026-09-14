"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const TotalAssignments = ({ total = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400">
          <BookOpen size={24} />
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900/30 dark:text-green-400">
          Active
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Total Assignments
        </p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-2 text-4xl font-bold text-gray-900 dark:text-white"
        >
          {total}
        </motion.h2>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          All assignments created by instructors
        </p>
      </div>

      {/* Link */}
      <Link
        href="/dashboard/instructor/assignments"
        className="mt-5 flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400"
      >
        View Assignments
        <ArrowUpRight size={16} />
      </Link>
    </motion.div>
  );
};

export default TotalAssignments;