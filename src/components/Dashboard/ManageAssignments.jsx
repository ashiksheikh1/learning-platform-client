"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Edit,
  Trash2,
  CalendarDays,
  Users,
  ClipboardList,
  MoreVertical,
} from "lucide-react";
import { deleteAssignment } from "@/lib/api/createAssignment";

// const assignmentsData = [
//   {
//     id: 1,
//     title: "JavaScript Fundamentals",
//     description:
//       "Complete the basic JavaScript problems and demonstrate your understanding of variables, functions and arrays.",
//     deadline: "2026-09-18",
//     difficulty: "Beginner",
//     submissions: 24,
//     status: "Active",
//   },
 
// ];

const ManageAssignments = ({assignment}) => {

  const [assignments, setAssignments] = useState(assignment);
console.log("submission", assignments)
  const handleDelete = async(id) => {
    const result = await deleteAssignment(id);
console.log("delete", result)
  // if (result.deletedCount > 0) {
  //   console.log("Assignment deleted successfully");
  // }
       
    // if (!confirmDelete) return;

    // setAssignments((prev) =>
    //   prev.filter((assignment) => assignment.id !== id)
    // );
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
        <div className="mb-8">
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


        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Total Assignments */}
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


          {/* Active Assignments */}
          <div className="rounded-2xl border bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4">
              <div className="w-fit rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10">
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
            <div className="mb-4">
              <div className="w-fit rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10">
                <ClipboardList size={22} />
              </div>
            </div>

            <p className="text-sm text-slate-500">
              Pending Assignments
            </p>

            <h2 className="mt-1 text-2xl font-bold dark:text-white">
              {
                assignments.filter(
                  (item) => item.status === "Pending"
                ).length
              }
            </h2>
          </div>


          {/* Total Submissions */}
          {/* <div className="rounded-2xl border bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4">
              <div className="w-fit rounded-xl bg-green-100 p-3 text-green-600 dark:bg-green-500/10">
                <Users size={22} />
              </div>
            </div>

            <p className="text-sm text-slate-500">
              Total Submissions
            </p>

            <h2 className="mt-1 text-2xl font-bold dark:text-white">
              {
                assignments.reduce(
                  (total, item) => total + item.submissions,
                  0
                )
              }
            </h2>
          </div> */}


          {/* Completed */}
          <div className="rounded-2xl border bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4">
              <div className="w-fit rounded-xl bg-orange-100 p-3 text-orange-600 dark:bg-orange-500/10">
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


        {/* Assignment Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {assignments.map((assignment, index) => (

            <motion.div
              key={assignment._id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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

                    {/* Difficulty */}
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyStyle(
                        assignment.difficulty
                      )}`}
                    >
                      {assignment.difficulty}
                    </span>


                    {/* Status */}
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
                    {assignment.assignmentId}
                  </h2>

                </div>


                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <MoreVertical size={20} />
                </button>

              </div>


              {/* Description */}
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {assignment.note}
              </p>


              {/* Info */}
              <div className="mt-5 grid grid-cols-2 gap-3">

                {/* Deadline */}
                <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">

                  <div className="flex items-center gap-2 text-slate-500">
                    <CalendarDays size={17} />

                    <span className="text-xs">
                      Deadline
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-semibold dark:text-white">
                    {assignment.submittedAt}
                  </p>

                </div>


                {/* Submissions */}
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

                {/* View Submissions */}
                {/* <Link
                  href={`/dashboard/instructor/assignments/${assignment._id}`}
                  className="flex-1 rounded-xl border px-4 py-2.5 text-center text-sm font-semibold transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  View Submissions
                </Link> */}


                {/* Edit */}
                {/* <Link
                  href={`/dashboard/instructor/assignments/${assignment._id}/edit`}
                  className="rounded-xl border p-2.5 text-blue-600 transition hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-blue-500/10"
                >
                  <Edit size={19} />
                </Link> */}


                {/* Delete */}
                <button
                  onClick={() => handleDelete(assignment._id)}
                  className="rounded-xl border p-2.5 text-red-500 transition hover:bg-red-50 dark:border-slate-700 dark:hover:bg-red-500/10"
                >
                  <Trash2 size={19} />
                </button>

              </div>

            </motion.div>

          ))}

        </div>


        {/* Empty State */}
        {assignments.length === 0 && (
          <div className="rounded-2xl border bg-white py-16 text-center dark:border-slate-800 dark:bg-slate-900">

            <ClipboardList
              size={45}
              className="mx-auto mb-4 text-slate-400"
            />

            <h2 className="text-xl font-bold dark:text-white">
              No assignments found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              You have not created any assignments yet.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

export default ManageAssignments;