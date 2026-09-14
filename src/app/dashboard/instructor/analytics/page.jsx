"use client";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  ClipboardList,
  Users,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
} from "lucide-react";


// -----------------------------
// Fake Analytics Data
// -----------------------------

const submissionData = [
  {
    name: "Accepted",
    value: 65,
  },
  {
    name: "Pending",
    value: 20,
  },
  {
    name: "Needs Improvement",
    value: 15,
  },
];


const assignmentData = [
  {
    name: "JS Basics",
    submissions: 42,
    accepted: 35,
  },
  {
    name: "React Hooks",
    submissions: 38,
    accepted: 27,
  },
  {
    name: "Next.js",
    submissions: 31,
    accepted: 20,
  },
  {
    name: "API Project",
    submissions: 25,
    accepted: 18,
  },
  {
    name: "Full Stack",
    submissions: 20,
    accepted: 12,
  },
];


const difficultyData = [
  {
    name: "Beginner",
    assignments: 8,
  },
  {
    name: "Intermediate",
    assignments: 6,
  },
  {
    name: "Advanced",
    assignments: 3,
  },
];


const recentSubmissions = [
  {
    student: "Rahim Ahmed",
    assignment: "React Hooks Assignment",
    status: "Accepted",
    score: 92,
  },
  {
    student: "Karim Hasan",
    assignment: "Next.js Assignment",
    status: "Pending",
    score: 78,
  },
  {
    student: "Nusrat Jahan",
    assignment: "JavaScript Basics",
    status: "Accepted",
    score: 88,
  },
  {
    student: "Sadia Islam",
    assignment: "API Integration",
    status: "Needs Improvement",
    score: 61,
  },
  {
    student: "Tanvir Hossain",
    assignment: "Full Stack Project",
    status: "Pending",
    score: 74,
  },
];


const COLORS = [
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];


// -----------------------------
// Analytics Page
// -----------------------------

const AnalyticsPage = () => {

  const totalAssignments = 17;
  const totalSubmissions = 125;
  const accepted = 81;
  const pending = 25;
  const needsImprovement = 19;

  const acceptanceRate = Math.round(
    (accepted / totalSubmissions) * 100
  );


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 md:p-6">

      {/* Header */}

      <div className="mb-8">

        <p className="text-sm font-medium text-purple-600">
          Instructor Dashboard
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-1">
          Learning Analytics
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Monitor student performance and assignment progress.
        </p>

      </div>



      {/* Stats Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">


        {/* Assignments */}

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border dark:border-gray-800">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Assignments
              </p>

              <h2 className="text-3xl font-bold mt-2 dark:text-white">
                {totalAssignments}
              </h2>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
              <ClipboardList className="text-purple-600" size={24} />
            </div>

          </div>

        </div>



        {/* Submissions */}

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border dark:border-gray-800">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Submissions
              </p>

              <h2 className="text-3xl font-bold mt-2 dark:text-white">
                {totalSubmissions}
              </h2>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
              <Users className="text-blue-600" size={24} />
            </div>

          </div>

        </div>



        {/* Accepted */}

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border dark:border-gray-800">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Accepted
              </p>

              <h2 className="text-3xl font-bold mt-2 text-green-600">
                {accepted}
              </h2>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
              <CheckCircle className="text-green-600" size={24} />
            </div>

          </div>

        </div>



        {/* Acceptance Rate */}

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border dark:border-gray-800">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Acceptance Rate
              </p>

              <h2 className="text-3xl font-bold mt-2 text-purple-600">
                {acceptanceRate}%
              </h2>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
              <TrendingUp className="text-purple-600" size={24} />
            </div>

          </div>

        </div>

      </div>



      {/* Charts */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">


        {/* Pie Chart */}

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border dark:border-gray-800">

          <div className="mb-4">

            <h2 className="text-xl font-bold dark:text-white">
              Submission Status
            </h2>

            <p className="text-sm text-gray-500">
              Overall submission distribution
            </p>

          </div>


          <div className="h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={submissionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >

                  {submissionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                    />
                  ))}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>



        {/* Bar Chart */}

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border dark:border-gray-800">

          <div className="mb-4">

            <h2 className="text-xl font-bold dark:text-white">
              Assignment Performance
            </h2>

            <p className="text-sm text-gray-500">
              Compare submissions and accepted work
            </p>

          </div>


          <div className="h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={assignmentData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="submissions"
                  fill="#8b5cf6"
                  radius={[5, 5, 0, 0]}
                />

                <Bar
                  dataKey="accepted"
                  fill="#22c55e"
                  radius={[5, 5, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>



      {/* Difficulty + Status */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">


        {/* Difficulty */}

        <div className="lg:col-span-1 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border dark:border-gray-800">

          <h2 className="text-xl font-bold dark:text-white mb-5">
            Difficulty Overview
          </h2>

          <div className="space-y-5">

            {difficultyData.map((item) => (

              <div key={item.name}>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-medium dark:text-gray-300">
                    {item.name}
                  </span>

                  <span className="text-sm font-bold dark:text-white">
                    {item.assignments}
                  </span>

                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">

                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{
                      width: `${item.assignments * 10}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>



        {/* Status Summary */}

        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border dark:border-gray-800">

          <h2 className="text-xl font-bold dark:text-white mb-5">
            Submission Summary
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">


            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-900/20">

              <CheckCircle className="text-green-600 mb-3" />

              <p className="text-sm text-gray-500">
                Accepted
              </p>

              <h3 className="text-2xl font-bold text-green-600">
                {accepted}
              </h3>

            </div>


            <div className="p-5 rounded-xl bg-yellow-50 dark:bg-yellow-900/20">

              <Clock className="text-yellow-600 mb-3" />

              <p className="text-sm text-gray-500">
                Pending
              </p>

              <h3 className="text-2xl font-bold text-yellow-600">
                {pending}
              </h3>

            </div>


            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-900/20">

              <AlertCircle className="text-red-600 mb-3" />

              <p className="text-sm text-gray-500">
                Needs Improvement
              </p>

              <h3 className="text-2xl font-bold text-red-600">
                {needsImprovement}
              </h3>

            </div>

          </div>

        </div>

      </div>



      {/* Recent Submissions */}

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border dark:border-gray-800 overflow-hidden">

        <div className="p-6 border-b dark:border-gray-800">

          <h2 className="text-xl font-bold dark:text-white">
            Recent Submissions
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Latest student assignment submissions
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50 dark:bg-gray-800">

              <tr>

                <th className="text-left p-4 text-sm">
                  Student
                </th>

                <th className="text-left p-4 text-sm">
                  Assignment
                </th>

                <th className="text-left p-4 text-sm">
                  Score
                </th>

                <th className="text-left p-4 text-sm">
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {recentSubmissions.map((submission, index) => (

                <tr
                  key={index}
                  className="border-t dark:border-gray-800"
                >

                  <td className="p-4 font-medium dark:text-white">
                    {submission.student}
                  </td>

                  <td className="p-4 text-gray-600 dark:text-gray-400">
                    {submission.assignment}
                  </td>

                  <td className="p-4 font-semibold dark:text-white">
                    {submission.score}%
                  </td>

                  <td className="p-4">

                    <span
                      className={`
                        px-3 py-1 rounded-full text-xs font-medium
                        ${
                          submission.status === "Accepted"
                            ? "bg-green-100 text-green-700"
                            : submission.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {submission.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AnalyticsPage;