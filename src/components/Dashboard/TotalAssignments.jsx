"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowUpRight,
  CalendarDays,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const TotalAssignments = ({ allAssignment = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
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

      {/* Total */}
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
          {allAssignment.length}
        </motion.h2>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          All assignments created by instructors
        </p>
      </div>

      {/* Assignment Details */}
      <div className="mt-6 space-y-3">
        {allAssignment.map((assignment, index) => (
          <motion.div
            key={assignment._id || assignment.id || index}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1 * index,
              duration: 0.3,
            }}
            className="rounded-xl border border-gray-200 p-4 transition hover:shadow-md dark:border-gray-700"
          >
            <div className="flex items-start justify-between gap-3">
              {/* Title & Description */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {assignment.title}
                </h3>

                <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                  {assignment.description}
                </p>
              </div>

              {/* Difficulty */}
              <span className="shrink-0 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600 dark:bg-purple-900/40 dark:text-purple-400">
                {assignment.difficulty}
              </span>
            </div>

            {/* Bottom Info */}
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <CalendarDays size={15} />
                {assignment.deadline}
              </span>

              {assignment.submissionCount !== undefined && (
                <span className="flex items-center gap-1">
                  <BarChart3 size={15} />
                  {assignment.submissionCount} Submissions
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {allAssignment.length === 0 && (
        <div className="py-8 text-center">
          <BookOpen
            size={40}
            className="mx-auto text-gray-400"
          />

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            No assignments found.
          </p>
        </div>
      )}

      {/* Link */}
      {/* <Link
        href="/dashboard/instructor/assignments"
        className="mt-5 flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400"
      >
        View All Assignments
        <ArrowUpRight size={16} />
      </Link> */}
    </motion.div>
  );
};

export default TotalAssignments;