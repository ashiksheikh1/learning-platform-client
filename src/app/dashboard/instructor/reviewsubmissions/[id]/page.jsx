import { getSubmissionById } from "@/lib/api/submit-assignment-student";
import Link from "next/link";
import React from "react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const submission = await getSubmissionById(id);

  if (!submission) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Submission Not Found</h2>
          <p className="mt-2 text-gray-500">
            This submission does not exist.
          </p>
        </div>
      </div>
    );
  }

  const {
    assignmentId,
    submissionUrl,
    note,
    status,
    feedback,
    submittedAt,
    user,
  } = submission;

  const statusStyle = {
    Accepted: "bg-green-100 text-green-700 border-green-200",
    Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
    "Needs Improvement":
      "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-purple-600">
            Submission Review
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            Assignment Submission Details
          </h1>

          <p className="mt-2 text-gray-500">
            Review the student's submission and provide feedback.
          </p>
        </div>


        <div className="grid gap-6 lg:grid-cols-3">

          {/* Student Information */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">

            <h2 className="mb-5 text-xl font-bold dark:text-white">
              Student Information
            </h2>

            <div className="flex items-center gap-4">

              {user?.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-xl font-bold text-purple-600">
                  {user?.name?.charAt(0)}
                </div>
              )}

              <div>
                <h3 className="font-semibold dark:text-white">
                  {user?.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {user?.email}
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-4">

              <div>
                <p className="text-xs text-gray-500">
                  Assignment ID
                </p>

                <p className="font-medium dark:text-white">
                  {assignmentId}
                </p>
              </div>


              <div>
                <p className="text-xs text-gray-500">
                  Submitted At
                </p>

                <p className="font-medium dark:text-white">
                  {new Date(submittedAt).toLocaleString()}
                </p>
              </div>

            </div>

          </div>


          {/* Submission */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:col-span-2">

            <div className="flex flex-wrap items-center justify-between gap-3">

              <h2 className="text-xl font-bold dark:text-white">
                Student Submission
              </h2>

              <span
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${
                  statusStyle[status] ||
                  "bg-gray-100 text-gray-700"
                }`}
              >
                {status}
              </span>

            </div>


            {/* Submission URL */}
            <div className="mt-6">

              <p className="mb-2 text-sm font-medium text-gray-500">
                Submission URL
              </p>

              <a
                href={submissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block break-all rounded-xl bg-gray-100 p-4 text-sm text-purple-600 hover:underline dark:bg-gray-800"
              >
                {submissionUrl}
              </a>

            </div>


            {/* Student Note */}
            <div className="mt-6">

              <p className="mb-2 text-sm font-medium text-gray-500">
                Student Note
              </p>

              <div className="rounded-xl bg-gray-50 p-4 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {note || "No note provided."}
              </div>

            </div>


            {/* Feedback */}
            <div className="mt-6">

              <p className="mb-2 text-sm font-medium text-gray-500">
                Instructor Feedback
              </p>

              <div className="rounded-xl border border-purple-100 bg-purple-50 p-4 text-gray-700 dark:border-purple-900 dark:bg-purple-950/30 dark:text-gray-300">
                {feedback || "No feedback provided yet."}
              </div>

            </div>

          </div>

        </div>


        {/* Review Actions */}
        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">

          <h2 className="text-xl font-bold dark:text-white">
            Review Submission
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">

            <button className="rounded-xl bg-green-600 px-5 py-2.5 font-medium text-white transition hover:bg-green-700">
              ✓ Accept
            </button>

            <button className="rounded-xl bg-yellow-500 px-5 py-2.5 font-medium text-white transition hover:bg-yellow-600">
              ⏳ Pending
            </button>

            <button className="rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700">
              ⚠ Needs Improvement
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DetailsPage;