"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle,
  Clock,
  ExternalLink,
  Search,
  UserRound,
} from "lucide-react";

const ApprovedPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo data
    const approvedSubmissions = [
      {
        id: 1,
        studentName: "Rahim Ahmed",
        email: "rahim@gmail.com",
        assignment: "Build a Portfolio Website",
        difficulty: "Intermediate",
        submittedAt: "Sep 10, 2026",
        score: 92,
        feedback: "Excellent work. Clean UI and good component structure.",
        submissionUrl: "https://github.com/example/portfolio",
        status: "Accepted",
      },
      {
        id: 2,
        studentName: "Karim Hasan",
        email: "karim@gmail.com",
        assignment: "JavaScript DOM Project",
        difficulty: "Beginner",
        submittedAt: "Sep 09, 2026",
        score: 88,
        feedback: "Good implementation. Keep improving code organization.",
        submissionUrl: "https://github.com/example/dom-project",
        status: "Accepted",
      },
      {
        id: 3,
        studentName: "Nusrat Jahan",
        email: "nusrat@gmail.com",
        assignment: "React Dashboard",
        difficulty: "Advanced",
        submittedAt: "Sep 08, 2026",
        score: 95,
        feedback: "Great job! The dashboard is responsive and well structured.",
        submissionUrl: "https://github.com/example/react-dashboard",
        status: "Accepted",
      },
      {
        id: 4,
        studentName: "Sakib Khan",
        email: "sakib@gmail.com",
        assignment: "REST API Integration",
        difficulty: "Intermediate",
        submittedAt: "Sep 07, 2026",
        score: 90,
        feedback: "API integration is working correctly.",
        submissionUrl: "https://github.com/example/api-project",
        status: "Accepted",
      },
    ];

    setSubmissions(approvedSubmissions);
    setLoading(false);
  }, []);

  const filteredSubmissions = submissions.filter((submission) => {
    const value = search.toLowerCase();

    return (
      submission.studentName.toLowerCase().includes(value) ||
      submission.assignment.toLowerCase().includes(value) ||
      submission.email.toLowerCase().includes(value)
    );
  });

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 dark:bg-slate-950 md:p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle className="text-green-600" size={28} />

                <h1 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
                  Approved Submissions
                </h1>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Review all successfully accepted student assignments.
              </p>
            </div>

            {/* Total */}
            <div className="rounded-2xl border bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm text-slate-500">
                Total Approved
              </p>

              <p className="text-2xl font-bold text-green-600">
                {submissions.length}
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 rounded-2xl border bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search student or assignment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        {/* Empty */}
        {filteredSubmissions.length === 0 ? (
          <div className="rounded-2xl border bg-white py-16 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <CheckCircle
              size={50}
              className="mx-auto mb-4 text-slate-300"
            />

            <h2 className="text-xl font-semibold text-slate-700 dark:text-white">
              No approved submissions found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try searching with another student or assignment name.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full">
                <thead className="border-b bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm font-semibold">
                      Student
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-semibold">
                      Assignment
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-semibold">
                      Difficulty
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-semibold">
                      Score
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-semibold">
                      Submitted
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-semibold">
                      Status
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredSubmissions.map((submission) => (
                    <tr
                      key={submission.id}
                      className="border-b last:border-none hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
                    >
                      {/* Student */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                            <UserRound size={18} />
                          </div>

                          <div>
                            <p className="font-semibold text-slate-800 dark:text-white">
                              {submission.studentName}
                            </p>

                            <p className="text-xs text-slate-500">
                              {submission.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Assignment */}
                      <td className="px-5 py-4">
                        <p className="font-medium text-slate-800 dark:text-white">
                          {submission.assignment}
                        </p>
                      </td>

                      {/* Difficulty */}
                      <td className="px-5 py-4">
                        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                          {submission.difficulty}
                        </span>
                      </td>

                      {/* Score */}
                      <td className="px-5 py-4">
                        <span className="font-bold text-green-600">
                          {submission.score}%
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock size={15} />
                          {submission.submittedAt}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4">
                        <span className="flex w-fit items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                          <CheckCircle size={14} />
                          {submission.status}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="px-5 py-4">
                        <a
                          href={submission.submissionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-fit items-center gap-1 rounded-lg bg-purple-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
                        >
                          View
                          <ExternalLink size={15} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-4 p-4 md:hidden">
              {filteredSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className="rounded-xl border p-4 dark:border-slate-700"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <UserRound size={18} />
                    </div>

                    <div>
                      <h3 className="font-semibold dark:text-white">
                        {submission.studentName}
                      </h3>

                      <p className="text-xs text-slate-500">
                        {submission.email}
                      </p>
                    </div>
                  </div>

                  <h2 className="font-semibold dark:text-white">
                    {submission.assignment}
                  </h2>

                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-slate-500">Difficulty</p>
                      <p className="font-medium dark:text-white">
                        {submission.difficulty}
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-500">Score</p>
                      <p className="font-bold text-green-600">
                        {submission.score}%
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      <CheckCircle size={14} />
                      Approved
                    </span>

                    <a
                      href={submission.submissionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-lg bg-purple-600 px-3 py-2 text-sm text-white"
                    >
                      View
                      <ExternalLink size={15} />
                    </a>
                  </div>

                  <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                    <p className="text-xs font-semibold text-slate-500">
                      Instructor Feedback
                    </p>

                    <p className="mt-1 text-sm dark:text-slate-200">
                      {submission.feedback}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApprovedPage;