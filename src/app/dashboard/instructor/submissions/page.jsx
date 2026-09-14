"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

const initialSubmissions = [
  {
    id: 1,
    studentName: "Rahim Ahmed",
    studentEmail: "rahim@example.com",
    assignmentTitle: "Build a Todo App",
    difficulty: "Beginner",
    submittedAt: "Sep 12, 2026",
    status: "Pending",
    submissionUrl: "https://github.com/rahim/todo-app",
    note: "I built the Todo app using React and Tailwind CSS.",
    feedback: "",
  },
  {
    id: 2,
    studentName: "Karim Hasan",
    studentEmail: "karim@example.com",
    assignmentTitle: "E-commerce Dashboard",
    difficulty: "Intermediate",
    submittedAt: "Sep 11, 2026",
    status: "Accepted",
    submissionUrl: "https://github.com/karim/ecommerce",
    note: "Completed the dashboard with responsive design.",
    feedback: "Great work. The UI and functionality are well implemented.",
  },
  {
    id: 3,
    studentName: "Nusrat Jahan",
    studentEmail: "nusrat@example.com",
    assignmentTitle: "Authentication System",
    difficulty: "Advanced",
    submittedAt: "Sep 10, 2026",
    status: "Needs Improvement",
    submissionUrl: "https://github.com/nusrat/auth-system",
    note: "Implemented login and registration using JWT.",
    feedback: "Please improve error handling and form validation.",
  },
];

const StudentSubmissions = () => {
  const [submissions, setSubmissions] = useState(initialSubmissions);

  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [feedback, setFeedback] = useState("");

  const updateStatus = (id, status) => {
    setSubmissions((previous) =>
      previous.map((submission) =>
        submission.id === id
          ? {
              ...submission,
              status,
            }
          : submission
      )
    );
  };

  const openFeedback = (submission) => {
    setSelectedSubmission(submission);
    setFeedback(submission.feedback || "");
  };

  const saveFeedback = () => {
    setSubmissions((previous) =>
      previous.map((submission) =>
        submission.id === selectedSubmission.id
          ? {
              ...submission,
              feedback,
            }
          : submission
      )
    );

    setSelectedSubmission(null);
    setFeedback("");
  };

  const getStatusStyle = (status) => {
    if (status === "Accepted") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Needs Improvement") {
      return "bg-red-100 text-red-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-8">

      {/* Header */}
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Student Submissions
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Review student assignments, update their status and provide
            feedback.
          </p>
        </motion.div>


        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-5 shadow dark:bg-gray-900">
            <p className="text-sm text-gray-500">
              Total Submissions
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {submissions.length}
            </h2>
          </div>


          <div className="rounded-2xl bg-white p-5 shadow dark:bg-gray-900">
            <p className="text-sm text-gray-500">
              Accepted
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {
                submissions.filter(
                  (item) => item.status === "Accepted"
                ).length
              }
            </h2>
          </div>


          <div className="rounded-2xl bg-white p-5 shadow dark:bg-gray-900">
            <p className="text-sm text-gray-500">
              Pending
            </p>

            <h2 className="mt-2 text-3xl font-bold text-yellow-600">
              {
                submissions.filter(
                  (item) => item.status === "Pending"
                ).length
              }
            </h2>
          </div>


          <div className="rounded-2xl bg-white p-5 shadow dark:bg-gray-900">
            <p className="text-sm text-gray-500">
              Needs Improvement
            </p>

            <h2 className="mt-2 text-3xl font-bold text-red-600">
              {
                submissions.filter(
                  (item) => item.status === "Needs Improvement"
                ).length
              }
            </h2>
          </div>

        </div>


        {/* Submission Cards */}
        <div className="mt-8 space-y-5">

          {submissions.map((submission) => (

            <motion.div
              key={submission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900"
            >

              <div className="flex flex-col justify-between gap-5 lg:flex-row">

                {/* Student Information */}
                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3">

                    <h2 className="text-xl font-bold">
                      {submission.studentName}
                    </h2>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                        submission.status
                      )}`}
                    >
                      {submission.status}
                    </span>

                  </div>


                  <p className="mt-1 text-sm text-gray-500">
                    {submission.studentEmail}
                  </p>


                  <h3 className="mt-5 font-semibold">
                    {submission.assignmentTitle}
                  </h3>


                  <div className="mt-2 flex flex-wrap gap-3 text-sm">

                    <span className="rounded-lg bg-purple-100 px-3 py-1 text-purple-700">
                      {submission.difficulty}
                    </span>

                    <span className="text-gray-500">
                      Submitted: {submission.submittedAt}
                    </span>

                  </div>


                  {/* Student Note */}
                  <div className="mt-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">

                    <p className="text-sm font-semibold">
                      Student Note
                    </p>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {submission.note}
                    </p>

                  </div>


                  {/* Feedback */}
                  {submission.feedback && (
                    <div className="mt-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">

                      <p className="text-sm font-semibold text-blue-700">
                        Instructor Feedback
                      </p>

                      <p className="mt-1 text-sm">
                        {submission.feedback}
                      </p>

                    </div>
                  )}

                </div>


                {/* Actions */}
                <div className="flex flex-col gap-3 lg:w-52">

                  <Link
                    href={submission.submissionUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <ExternalLink size={17} />
                    View Submission
                  </Link>


                  <button
                    onClick={() =>
                      updateStatus(
                        submission.id,
                        "Accepted"
                      )
                    }
                    className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-700"
                  >
                    <CheckCircle size={17} />
                    Accept
                  </button>


                  <button
                    onClick={() =>
                      updateStatus(
                        submission.id,
                        "Pending"
                      )
                    }
                    className="flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-yellow-600"
                  >
                    <Clock size={17} />
                    Pending
                  </button>


                  <button
                    onClick={() =>
                      updateStatus(
                        submission.id,
                        "Needs Improvement"
                      )
                    }
                    className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700"
                  >
                    <AlertCircle size={17} />
                    Needs Improvement
                  </button>


                  <button
                    onClick={() =>
                      openFeedback(submission)
                    }
                    className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-purple-700"
                  >
                    <MessageSquare size={17} />
                    Give Feedback
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>


      {/* Feedback Modal */}
      {selectedSubmission && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg rounded-2xl bg-white p-6 dark:bg-gray-900"
          >

            <h2 className="text-2xl font-bold">
              Give Feedback
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {selectedSubmission.studentName}
            </p>


            <textarea
              value={feedback}
              onChange={(e) =>
                setFeedback(e.target.value)
              }
              placeholder="Write your feedback..."
              rows={6}
              className="mt-5 w-full rounded-xl border p-4 outline-none focus:border-purple-500 dark:bg-gray-800"
            />


            <div className="mt-4 flex justify-end gap-3">

              <button
                onClick={() => {
                  setSelectedSubmission(null);
                  setFeedback("");
                }}
                className="rounded-xl border px-5 py-2"
              >
                Cancel
              </button>

              <button
                onClick={saveFeedback}
                className="rounded-xl bg-purple-600 px-5 py-2 text-white"
              >
                Save Feedback
              </button>

            </div>

          </motion.div>

        </div>

      )}

    </div>
  );
};

export default StudentSubmissions;