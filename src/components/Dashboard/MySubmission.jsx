"use client";

import Link from "next/link";
import {
  ExternalLink,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
} from "lucide-react";

// const submissions = [
//   {
//     id: 1,
//     assignmentTitle: "Build a Responsive Landing Page",
//     difficulty: "Beginner",
//     submittedAt: "Sep 12, 2026",
//     deadline: "Sep 13, 2026",
//     status: "Accepted",
//     feedback: "Excellent work! Your layout and responsiveness are very good.",
//     url: "https://github.com/example/project-1",
//   },
//   {
//     id: 2,
//     assignmentTitle: "React Todo Application",
//     difficulty: "Intermediate",
//     submittedAt: "Sep 10, 2026",
//     deadline: "Sep 11, 2026",
//     status: "Pending",
//     feedback: "",
//     url: "https://github.com/example/project-2",
//   },
//   {
//     id: 3,
//     assignmentTitle: "Authentication System",
//     difficulty: "Advanced",
//     submittedAt: "Sep 7, 2026",
//     deadline: "Sep 8, 2026",
//     status: "Needs Improvement",
//     feedback:
//       "Authentication works, but please improve error handling and validation.",
//     url: "https://github.com/example/project-3",
//   },
// ];


// Status configuration
const statusConfig = {
  Accepted: {
    icon: CheckCircle2,
    className:
      "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
  },

 
};


const MySubmissions = ({submissions}) => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-purple-600">
            Student Dashboard
          </p>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Submissions
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Track your submitted assignments, review feedback, and monitor
            your learning progress.
          </p>
        </div>


        {/* Submission Cards */}
        <div className="grid gap-5">

          {submissions.map((submission) => {

            // const status = statusConfig[submission.status];

            // const StatusIcon = status.icon;

            return (
              <div
                key={submission.id}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-5
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                  dark:border-gray-800
                  dark:bg-gray-900
                "
              >

                {/* Top */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div className="flex gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                      <FileText size={24} />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {submission.note}
                      </h2>

                      <div className="mt-2 flex flex-wrap gap-2 text-xs">

                        <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                          {submission.difficulty}
                        </span>

                        <span className="text-gray-500">
                          Submitted: {submission.submittedAt}
                        </span>

                      </div>
                    </div>

                  </div>


                  {/* Status */}
                  <span
                    className={`flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${status.className}`}
                  >
                    {/* <StatusIcon size={16} /> */}
                    {submission.status}
                  </span>

                </div>


                {/* Details */}
                <div className="mt-5 grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-2 dark:border-gray-800">

                  <div>
                    <p className="text-xs text-gray-500">
                      Deadline
                    </p>

                    <p className="mt-1 font-medium text-gray-800 dark:text-gray-200">
                      {submission.deadline}
                    </p>
                  </div>


                  <div>
                    <p className="text-xs text-gray-500">
                      Submission
                    </p>

                    <a
                      href={submission.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 font-medium text-purple-600 hover:underline"
                    >
                      View submitted work
                      <ExternalLink size={15} />
                    </a>
                  </div>

                </div>


                {/* Feedback */}
                {submission.feedback && (
                  <div className="mt-5 rounded-xl bg-gray-50 p-4 dark:bg-gray-800/60">

                    <p className="mb-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                      Instructor Feedback
                    </p>

                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {submission.feedback}
                    </p>

                  </div>
                )}

              </div>
            );
          })}

        </div>


        {/* Empty State */}
        {submissions.length === 0 && (
          <div className="rounded-2xl border border-dashed p-12 text-center">

            <FileText
              size={45}
              className="mx-auto mb-4 text-gray-400"
            />

            <h2 className="text-xl font-semibold">
              No submissions yet
            </h2>

            <p className="mt-2 text-gray-500">
              You haven't submitted any assignments yet.
            </p>

            <Link
              href="/assignments"
              className="mt-5 inline-block rounded-xl bg-purple-600 px-5 py-2.5 text-white hover:bg-purple-700"
            >
              Browse Assignments
            </Link>

          </div>
        )}

      </div>
    </section>
  );
};

export default MySubmissions;