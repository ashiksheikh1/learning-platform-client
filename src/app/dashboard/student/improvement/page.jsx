"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  MessageSquareText,
  Target,
  TrendingUp,
} from "lucide-react";

const improvementData = [
  {
    id: 1,
    assignment: "Build a REST API with Next.js",
    difficulty: "Intermediate",
    submittedDate: "Sep 10, 2026",
    status: "Needs Improvement",
    feedback:
      "Your API structure is good, but error handling and validation need improvement.",
    improvements: [
      "Add proper error handling for API requests.",
      "Validate request body before database operations.",
      "Use meaningful HTTP status codes.",
    ],
    score: 62,
  },
  {
    id: 2,
    assignment: "React State Management",
    difficulty: "Beginner",
    submittedDate: "Sep 07, 2026",
    status: "Needs Improvement",
    feedback:
      "The implementation works, but the component structure can be cleaner.",
    improvements: [
      "Separate reusable components.",
      "Avoid unnecessary state.",
      "Improve component naming.",
    ],
    score: 68,
  },
];

const ImprovementPage = () => {
  const averageScore =
    improvementData.length > 0
      ? Math.round(
          improvementData.reduce((total, item) => total + item.score, 0) /
            improvementData.length
        )
      : 0;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 dark:bg-slate-950 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/dashboard/student"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-purple-600 dark:text-slate-300"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30">
              <TrendingUp size={26} />
            </div>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Improvement Center
            </h1>
          </div>

          <p className="max-w-2xl text-slate-600 dark:text-slate-400">
            Review your instructor feedback, identify weak areas, and track
            what you need to improve before your next submission.
          </p>
        </motion.div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          <SummaryCard
            icon={<AlertCircle size={22} />}
            title="Needs Improvement"
            value={improvementData.length}
            description="Assignments requiring attention"
          />

          <SummaryCard
            icon={<Target size={22} />}
            title="Average Score"
            value={`${averageScore}%`}
            description="Across improvement assignments"
          />

          <SummaryCard
            icon={<CheckCircle2 size={22} />}
            title="Focus Area"
            value="2"
            description="Key skills to improve"
          />
        </div>

        {/* Improvement List */}
        <div className="space-y-6">
          {improvementData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Card Header */}
              <div className="flex flex-col justify-between gap-4 border-b border-slate-200 p-5 dark:border-slate-800 md:flex-row md:items-center">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.assignment}
                  </h2>

                  <div className="mt-2 flex flex-wrap gap-2 text-sm">
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                      {item.difficulty}
                    </span>

                    <span className="text-slate-500">
                      Submitted: {item.submittedDate}
                    </span>
                  </div>
                </div>

                <span className="w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                  {item.status}
                </span>
              </div>

              {/* Content */}
              <div className="grid gap-6 p-5 md:grid-cols-2">
                {/* Feedback */}
                <div className="rounded-xl bg-slate-50 p-5 dark:bg-slate-800/50">
                  <div className="mb-3 flex items-center gap-2">
                    <MessageSquareText
                      size={20}
                      className="text-purple-600"
                    />

                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Instructor Feedback
                    </h3>
                  </div>

                  <p className="leading-7 text-slate-600 dark:text-slate-300">
                    {item.feedback}
                  </p>
                </div>

                {/* Improvements */}
                <div className="rounded-xl bg-purple-50 p-5 dark:bg-purple-950/20">
                  <div className="mb-3 flex items-center gap-2">
                    <Lightbulb
                      size={20}
                      className="text-purple-600"
                    />

                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      What You Should Improve
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {item.improvements.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-purple-600"
                        />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom */}
              <div className="flex flex-col gap-4 border-t border-slate-200 p-5 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500">
                    Current Score
                  </span>

                  <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-full rounded-full bg-purple-600"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>

                  <span className="font-bold text-purple-600">
                    {item.score}%
                  </span>
                </div>

                <Link
                  href={`/dashboard/student/submissions/${item.id}`}
                  className="rounded-xl bg-purple-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-purple-700"
                >
                  Review Submission
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {improvementData.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
            <CheckCircle2
              size={50}
              className="mx-auto mb-4 text-green-500"
            />

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Great Job!
            </h2>

            <p className="mt-2 text-slate-500">
              You don't have any assignments that need improvement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


// Summary Card
const SummaryCard = ({
  icon,
  title,
  value,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-3 flex items-center gap-3 text-purple-600">
        {icon}

        <span className="font-medium">
          {title}
        </span>
      </div>

      <p className="text-3xl font-bold text-slate-900 dark:text-white">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>
    </motion.div>
  );
};

export default ImprovementPage;