"use client";

import { updateProfile } from "@/lib/api/user";
import { authClient } from "@/lib/auth-client";
import { motion, AnimatePresence } from "framer-motion";

import {
  Mail,
  User,
  ShieldCheck,
  BookOpen,
  Award,
  Edit,
  CalendarDays,
  X,
  Camera,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  // Open modal
  const handleEditProfile = () => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setImage(user?.image || "");

    setIsModalOpen(true);
  };

  // Update profile
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const updatedData = {
      name,
      email,
      image,
    };
      console.log("Updated Profile:", updatedData);
  const result = await updateProfile(user.id, updatedData);
    console.log("Updated Profile:", result);

    // এখানে তোমার backend API call করবে
    // await updateProfile(updatedData)

    setIsModalOpen(false);
  };

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
    <>
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
                  onClick={handleEditProfile}
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
          {/* <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

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

          </div> */}

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


      {/* ================= MODAL ================= */}

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl dark:bg-gray-900"
            >

              {/* Modal Header */}
              <div className="mb-6 flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Edit Profile
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Update your profile information
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X size={22} />
                </button>

              </div>


              {/* Form */}
              <form
                onSubmit={handleUpdateProfile}
                className="space-y-5"
              >

                {/* Name */}
                <div>

                  <label className="mb-2 block text-sm font-medium dark:text-white">
                    Name
                  </label>

                  <div className="relative">

                    <User
                      size={19}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      required
                    />

                  </div>

                </div>


                {/* Email */}
                <div>

                  <label className="mb-2 block text-sm font-medium dark:text-white">
                    Email
                  </label>

                  <div className="relative">

                    <Mail
                      size={19}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      required
                    />

                  </div>

                </div>


                {/* Picture URL */}
                <div>

                  <label className="mb-2 block text-sm font-medium dark:text-white">
                    Profile Picture URL
                  </label>

                  <div className="relative">

                    <Camera
                      size={19}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="url"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="https://example.com/profile.jpg"
                      className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />

                  </div>

                </div>


                {/* Preview */}
                {image && (
                  <div className="flex justify-center">

                    <img
                      src={image}
                      alt="Profile preview"
                      className="h-20 w-20 rounded-full object-cover ring-4 ring-purple-100"
                    />

                  </div>
                )}


                {/* Buttons */}
                <div className="flex gap-3 pt-2">

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 rounded-xl border border-gray-300 px-5 py-3 font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 dark:text-white"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-purple-600 px-5 py-3 font-medium text-white transition hover:bg-purple-700"
                  >
                    Save Changes
                  </button>

                </div>

              </form>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
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