"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  ShieldCheck,
  BookOpen,
  Award,
  Edit,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-600 border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold">Please Login</h1>

        <p className="mt-2 text-gray-500">
          You need to login to view your profile.
        </p>

        <Link
          href="/signin"
          className="mt-5 rounded-xl bg-purple-600 px-6 py-3 text-white hover:bg-purple-700"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-4 py-10 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Profile
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage your profile and learning information.
          </p>
        </motion.div>


        {/* Profile Card */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900"
        >

          {/* Cover */}
          <div className="h-36 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600" />


          {/* User Info */}
          <div className="px-6 pb-7">

            <div className="-mt-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">

                {/* Avatar */}
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-purple-100 text-4xl font-bold text-purple-700 shadow-lg dark:border-gray-900 dark:bg-purple-900 dark:text-purple-200">

                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name || "User"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    user.name?.charAt(0)?.toUpperCase()
                  )}

                </div>


                {/* Name */}
                <div className="pb-1">

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {user.name}
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400">
                    {user.email}
                  </p>

                </div>

              </div>


              {/* Edit Button */}
              <button
                className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 font-medium text-white transition hover:bg-purple-700"
              >
                <Edit size={18} />
                Edit Profile
              </button>

            </div>


            {/* Information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {/* Name */}
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                  <User size={20} />
                </div>

                <p className="text-sm text-gray-500">
                  Full Name
                </p>

                <p className="mt-1 font-semibold dark:text-white">
                  {user.name}
                </p>
              </div>


              {/* Email */}
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <Mail size={20} />
                </div>

                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 break-all font-semibold dark:text-white">
                  {user.email}
                </p>
              </div>


              {/* Role */}
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                  <ShieldCheck size={20} />
                </div>

                <p className="text-sm text-gray-500">
                  Role
                </p>

                <p className="mt-1 font-semibold capitalize dark:text-white">
                  {user.role || "Student"}
                </p>
              </div>

            </div>

          </div>

        </motion.section>


        {/* Learning Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={<BookOpen />}
            title="Assignments"
            value="12"
          />

          <StatCard
            icon={<Award />}
            title="Accepted"
            value="8"
          />

          <StatCard
            icon={<CalendarDays />}
            title="Pending"
            value="3"
          />

          <StatCard
            icon={<ShieldCheck />}
            title="Success Rate"
            value="67%"
          />

        </div>


        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl border bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900"
        >

          <h2 className="text-xl font-bold dark:text-white">
            About Learning Progress
          </h2>

          <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
            Keep track of your assignments, submission status, instructor
            feedback, and overall learning progress from your profile.
            Consistent practice and reviewing feedback can help improve
            your performance.
          </p>

        </motion.section>

      </div>
    </main>
  );
};


// Statistics Card
const StatCard = ({ icon, title, value }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border bg-white p-5 shadow-md dark:border-gray-800 dark:bg-gray-900"
    >

      <div className="flex items-center justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
          {icon}
        </div>

        <p className="text-2xl font-bold dark:text-white">
          {value}
        </p>

      </div>

      <p className="mt-4 text-sm text-gray-500">
        {title}
      </p>

    </motion.div>
  );
};


export default ProfilePage;