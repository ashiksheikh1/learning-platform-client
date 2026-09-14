"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  CalendarDays,
  Users,
  ClipboardList,
  MoreVertical,
} from "lucide-react";

const assignmentsData = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description:
      "Complete the basic JavaScript problems and demonstrate your understanding of variables, functions and arrays.",
    deadline: "2026-09-18",
    difficulty: "Beginner",
    submissions: 24,
    status: "Active",
  },
  {
    id: 2,
    title: "React Todo Application",
    description:
      "Build a responsive Todo application using React hooks and component based architecture.",
    deadline: "2026-09-20",
    difficulty: "Intermediate",
    submissions: 18,
    status: "Active",
  },
  {
    id: 3,
    title: "Next.js Full Stack Project",
    description:
      "Create a full-stack application using Next.js, API routes and MongoDB.",
    deadline: "2026-09-25",
    difficulty: "Advanced",
    submissions: 12,
    status: "Active",
  },
  {
    id: 4,
    title: "HTML & CSS Landing Page",
    description:
      "Create a responsive landing page using semantic HTML and modern CSS.",
    deadline: "2026-09-10",
    difficulty: "Beginner",
    submissions: 30,
    status: "Completed",
  },
];

const ManageAssignments = () => {
  const [assignments, setAssignments] = useState(assignmentsData);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const filteredAssignments = assignments.filter((assignment) => {
    const matchSearch = assignment.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDifficulty =
      difficulty === "All" ||
      assignment.difficulty === difficulty;

    return matchSearch && matchDifficulty;
  });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this assignment?"
    );

    if (!confirmDelete) return;

    setAssignments((prev) =>
      prev.filter((assignment) => assignment.id !== id)
    );
  };

  const difficultyStyle = (difficulty) => {
    if (difficulty === "Beginner") {
      return "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400";
    }

    if (difficulty === "Intermediate") {
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400";
    }

    return "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400";
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="mb-1 text-sm font-medium text-purple-600">
              Instructor Dashboard
            </p>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Manage Assignments
            </h1>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Create, manage and monitor your student assignments.
            </p>
          </div>

          <Link href="/dashboard/instructor/assignments/create">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-700"
            >
              <Plus size={20} />
              Create Assignment
            </motion.button>
          </Link>

        </div>


        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-500/10">
                <ClipboardList size={22} />
              </div>

              <span className="text-sm text-green-500">
                +12%
              </span>
            </div>

            <p className="text-sm text-slate-500">
              Total Assignments
            </p>

            <h2 className="mt-1 text-2xl font-bold dark:text-white">
              {assignments.length}
            </h2>
          </div>


          <div className="rounded-2xl border bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10">
                <ClipboardList size={22} />
              </div>
            </div>

            <p className="text-sm text-slate-500">
              Active Assignments
            </p>

            <h2 className="mt-1 text-2xl font-bold dark:text-white">
              {
                assignments.filter(
                  (item) => item.status === "Active"
                ).length
              }
            </h2>
          </div>


          <div className="rounded-2xl border bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-green-100 p-3 text-green-600 dark:bg-green-500/10">
                <Users size={22} />
              </div>
            </div>

            <p className="text-sm text-slate-500">
              Total Submissions
            </p>

            <h2 className="mt-1 text-2xl font-bold dark:text-white">
              {assignments.reduce(
                (total, item) => total + item.submissions,
                0
              )}
            </h2>
          </div>


          <div className="rounded-2xl border bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-orange-100 p-3 text-orange-600 dark:bg-orange-500/10">
                <CalendarDays size={22} />
              </div>
            </div>

            <p className="text-sm text-slate-500">
              Completed
            </p>

            <h2 className="mt-1 text-2xl font-bold dark:text-white">
              {
                assignments.filter(
                  (item) => item.status === "Completed"
                ).length
              }
            </h2>
          </div>

        </div>


        {/* Search & Filter */}
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border bg-white p-4 dark:border-slate-800 dark:bg-slate-900 md:flex-row">

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search assignments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-4 outline-none transition focus:border-purple-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>


          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="rounded-xl border bg-slate-50 px-4 py-3 outline-none focus:border-purple-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="All">All Difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

        </div>


        {/* Assignment Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {filteredAssignments.map((assignment, index) => (

            <motion.div
              key={assignment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >

              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">

                <div className="flex-1">

                  <div className="mb-3 flex flex-wrap items-center gap-2">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyStyle(
                        assignment.difficulty
                      )}`}
                    >
                      {assignment.difficulty}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        assignment.status === "Active"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      }`}
                    >
                      {assignment.status}
                    </span>

                  </div>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {assignment.title}
                  </h2>

                </div>


                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <MoreVertical size={20} />
                </button>

              </div>


              {/* Description */}
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {assignment.description}
              </p>


              {/* Info */}
              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                  <div className="flex items-center gap-2 text-slate-500">
                    <CalendarDays size={17} />

                    <span className="text-xs">
                      Deadline
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-semibold dark:text-white">
                    {assignment.deadline}
                  </p>
                </div>


                <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users size={17} />

                    <span className="text-xs">
                      Submissions
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-semibold dark:text-white">
                    {assignment.submissions}
                  </p>
                </div>

              </div>


              {/* Actions */}
              <div className="mt-5 flex gap-3 border-t pt-5 dark:border-slate-800">

                <Link
                  href={`/dashboard/instructor/assignments/${assignment.id}`}
                  className="flex-1 rounded-xl border px-4 py-2.5 text-center text-sm font-semibold transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  View Submissions
                </Link>


                <Link
                  href={`/dashboard/instructor/assignments/${assignment.id}/edit`}
                  className="rounded-xl border p-2.5 text-blue-600 transition hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-blue-500/10"
                >
                  <Edit size={19} />
                </Link>


                <button
                  onClick={() => handleDelete(assignment.id)}
                  className="rounded-xl border p-2.5 text-red-500 transition hover:bg-red-50 dark:border-slate-700 dark:hover:bg-red-500/10"
                >
                  <Trash2 size={19} />
                </button>

              </div>

            </motion.div>

          ))}

        </div>


        {/* Empty State */}
        {filteredAssignments.length === 0 && (

          <div className="rounded-2xl border bg-white py-16 text-center dark:border-slate-800 dark:bg-slate-900">

            <ClipboardList
              size={45}
              className="mx-auto mb-4 text-slate-400"
            />

            <h2 className="text-xl font-bold dark:text-white">
              No assignments found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filter.
            </p>

          </div>

        )}

      </div>
    </div>
  );
};

export default ManageAssignments;