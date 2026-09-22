"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  ClipboardCheck,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Plus,
  Eye,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { FcAcceptDatabase, FcBusinessman } from "react-icons/fc";
import { RiPassPendingFill } from "react-icons/ri";
import { FaUserNurse } from "react-icons/fa";
import { MdSelfImprovement, MdSendAndArchive } from "react-icons/md";
import { LuScanFace } from "react-icons/lu";

const InstructorDashboard = ({allsubmision,getAssignmentsAll}) => {
 console.log("alllsubbbbbbb",allsubmision)

  const assignments = [
    {
      id: 1,
      title: "React Component Architecture",
      difficulty: "Intermediate",
      deadline: "Sep 15, 2026",
      submissions: 32,
    },
    {
      id: 2,
      title: "JavaScript Problem Solving",
      difficulty: "Beginner",
      deadline: "Sep 18, 2026",
      submissions: 45,
    },
    {
      id: 3,
      title: "Next.js Authentication",
      difficulty: "Advanced",
      deadline: "Sep 20, 2026",
      submissions: 27,
    },
    {
      id: 4,
      title: "MongoDB CRUD Project",
      difficulty: "Intermediate",
      deadline: "Sep 22, 2026",
      submissions: 38,
    },
  ];

  const submissions = [
    {
      student: "Rahim Ahmed",
      assignment: "React Component Architecture",
      status: "Pending",
      date: "Today",
    },
    {
      student: "Nusrat Jahan",
      assignment: "JavaScript Problem Solving",
      status: "Accepted",
      date: "Today",
    },
    {
      student: "Tanvir Hasan",
      assignment: "Next.js Authentication",
      status: "Needs Improvement",
      date: "Yesterday",
    },
    {
      student: "Sadia Islam",
      assignment: "MongoDB CRUD Project",
      status: "Pending",
      date: "Yesterday",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-950 md:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>
            <p className="mb-1 text-sm font-medium text-purple-600">
              Instructor Dashboard
            </p>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Welcome back, Instructor 👋
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Monitor assignments, review submissions and track student
              performance.
            </p>
          </div>

          {/* <Link href="/dashboard/instructor/assignments/create">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 dark:shadow-none"
            >
              <Plus size={20} />
              Create Assignment
            </motion.button>
          </Link> */}

        </div>
      </motion.div>


      {/* Statistics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

       
            <motion.div
            
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            //   transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >

              <div className="mb-4 flex items-center justify-between">

              

                <FaUserNurse
                  size={38}
                  className="text-purple-600"
                />

              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {getAssignmentsAll.length}
              </h2>

              <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                Total Assignment
              </p>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
             
                create instructor
              </p>

            </motion.div>
            <motion.div
            
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            //   transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >

              <div className="mb-4 flex items-center justify-between">

              

                <MdSendAndArchive
                  size={38}
                  className="text-purple-600"
                />

              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {allsubmision.length}
              </h2>

              <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                Total Submission
              </p>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
             
                create Student
              </p>

            </motion.div>
            <motion.div
            
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            //   transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >

              <div className="mb-4 flex items-center justify-between">

              

                <RiPassPendingFill 
                  size={38}
                className="text-purple-600"
                />

              </div>
   <div>
            <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
  <p className="text-sm text-gray-500">
    {/* Active Assignments */}
  </p>

  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
    {allsubmision.filter(
      (item) => item.status === "Pending"
    ).length}
  </h2>
</div>

              <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                Total Pending  
              </p>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
             
                create Student
              </p>
              </div>

            </motion.div>
            <motion.div
            
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            //   transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >

              <div className="mb-4 flex items-center justify-between">

              

                <LuScanFace
                  size={38}
                  className="text-purple-600"
                />

              </div>
   <div>
            <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
  <p className="text-sm text-gray-500">
    {/* Active Assignments */}
  </p>

  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
    {allsubmision.filter(
      (item) => item.status === "Accepted"
    ).length}
  </h2>
</div>

              <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                Total Accepted  
              </p>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
             
                create instructor
              </p>
              </div>

            </motion.div>
            <motion.div
            
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            //   transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >

              <div className="mb-4 flex items-center justify-between">

              

                <MdSelfImprovement
                  size={38}
                  className="text-purple-600"
                />

              </div>
              {/* statuce */}
             <div>
            <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
  <p className="text-sm text-gray-500">
    {/* Active Assignments */}
  </p>

  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
    {allsubmision.filter(
      (item) => item.status === "Needs Improvement"
    ).length}
  </h2>
</div>

              <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                Total Improvement
              </p>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
             
                create instructor
              </p>
              </div>

            </motion.div>
         

      </div>


      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Recent Assignments */}
        {/* <div className="xl:col-span-2">

          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">

            <div className="flex items-center justify-between border-b border-gray-200 p-5 dark:border-gray-800">

              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Recent Assignments
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Manage your latest assignments
                </p>
              </div>

              <Link
                href="/dashboard/instructor/assignments"
                className="flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-700"
              >
                View All
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="divide-y divide-gray-100 dark:divide-gray-800">

              {assignments.map((assignment) => (

                <div
                  key={assignment.id}
                  className="flex flex-col gap-4 p-5 transition hover:bg-gray-50 dark:hover:bg-gray-800/50 md:flex-row md:items-center md:justify-between"
                >

                  <div className="flex items-start gap-4">

                    <div className="rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-950">
                      <BookOpen size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {assignment.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-2 text-xs">

                        <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                          {assignment.difficulty}
                        </span>

                        <span className="text-gray-500">
                          Deadline: {assignment.deadline}
                        </span>

                      </div>
                    </div>

                  </div>


                  <div className="flex items-center justify-between gap-5 md:justify-end">

                    <div className="text-center">
                      <p className="font-bold text-gray-900 dark:text-white">
                        {assignment.submissions}
                      </p>

                      <p className="text-xs text-gray-500">
                        Submissions
                      </p>
                    </div>

                    <Link
                      href={`/dashboard/instructor/assignments/${assignment.id}`}
                      className="rounded-lg border border-gray-200 p-2 text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      <Eye size={19} />
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div> */}


        {/* Quick Actions */}
        {/* <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">

          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Frequently used instructor tools
          </p>


          <div className="mt-5 space-y-3">

            <Link
              href="/dashboard/instructor/assignments/create"
              className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:hover:bg-purple-950/30"
            >
              <div className="rounded-lg bg-purple-100 p-2 text-purple-600 dark:bg-purple-950">
                <Plus size={20} />
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Create Assignment
                </p>

                <p className="text-xs text-gray-500">
                  Add a new learning task
                </p>
              </div>
            </Link>


            <Link
              href="/dashboard/instructor/submissions"
              className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:hover:bg-purple-950/30"
            >
              <div className="rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-950">
                <ClipboardCheck size={20} />
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Review Submissions
                </p>

                <p className="text-xs text-gray-500">
                  Check pending student work
                </p>
              </div>
            </Link>


            <Link
              href="/dashboard/instructor/analytics"
              className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:hover:bg-purple-950/30"
            >
              <div className="rounded-lg bg-green-100 p-2 text-green-600 dark:bg-green-950">
                <TrendingUp size={20} />
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Learning Analytics
                </p>

                <p className="text-xs text-gray-500">
                  Analyze student performance
                </p>
              </div>
            </Link>


            <Link
              href="/dashboard/instructor/students"
              className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:hover:bg-purple-950/30"
            >
              <div className="rounded-lg bg-orange-100 p-2 text-orange-600 dark:bg-orange-950">
                <Users size={20} />
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Students
                </p>

                <p className="text-xs text-gray-500">
                  View student progress
                </p>
              </div>
            </Link>

          </div>

        </div> */}

      </div>


      {/* Recent Submissions */}
      {/* <div className="mt-6 rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">

        <div className="flex items-center justify-between border-b border-gray-200 p-5 dark:border-gray-800">

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Recent Submissions
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Latest student submissions
            </p>
          </div>

          <Link
            href="/dashboard/instructor/submissions"
            className="flex items-center gap-1 text-sm font-semibold text-purple-600"
          >
            View All
            <ArrowRight size={16} />
          </Link>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead className="bg-gray-50 dark:bg-gray-800/50">

              <tr>
                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Student
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Assignment
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Status
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Submitted
                </th>
              </tr>

            </thead>


            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">

              {submissions.map((submission, index) => (

                <tr
                  key={index}
                  className="transition hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 font-semibold text-purple-600 dark:bg-purple-950">
                        {submission.student.charAt(0)}
                      </div>

                      <span className="font-medium text-gray-900 dark:text-white">
                        {submission.student}
                      </span>

                    </div>
                  </td>


                  <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {submission.assignment}
                  </td>


                  <td className="px-5 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        submission.status === "Accepted"
                          ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                          : submission.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
                          : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                      }`}
                    >
                      {submission.status}
                    </span>

                  </td>


                  <td className="px-5 py-4 text-sm text-gray-500">
                    {submission.date}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div> */}


      {/* Performance */}
      {/* <div className="mt-6 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>
            <div className="flex items-center gap-2">
              <TrendingUp size={22} />

              <h2 className="text-xl font-bold">
                Student Performance
              </h2>
            </div>

            <p className="mt-2 max-w-2xl text-sm text-purple-100">
              Your students are maintaining a strong performance this month.
              Review the analytics dashboard to identify students who may need
              additional support.
            </p>
          </div>

          <Link href="/dashboard/instructor/analytics">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-purple-700"
            >
              View Analytics
              <ArrowRight size={18} />
            </motion.button>
          </Link>

        </div>

      </div> */}

    </div>
  );
};

export default InstructorDashboard;