"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataFrom = Object.fromEntries(formData.entries());

    console.log(dataFrom);

    // এখানে তোমার registration API call করবে
     const { data, error } = await authClient.signUp.email({
    name: dataFrom.name,
    email: dataFrom.email,
    password: dataFrom.password,
    image: dataFrom.image,
    // isBlock: false,
  });

      console.log("data, error",{ data, error});
      if(data){
        redirect("/")
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-violet-100 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-violet-950">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >

        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-3xl shadow-lg"
          >
            🎓
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create Your Account
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Join our learning and assignment platform
          </p>
        </div>


        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-xl backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80"
        >

          {/* Name */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>


          {/* Email */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Image
            </label>

            <input
             name="image"
            type="url"
              placeholder="Image URL"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>


          {/* Password */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                minLength={6}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-20 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-violet-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="mt-1 text-xs text-gray-500">
              Password must contain at least 6 characters.
            </p>
          </div>


          {/* Role */}
          {/* <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Select Role
            </label>

            <select
              name="role"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-violet-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Choose your role</option>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
          </div> */}


          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white shadow-lg transition hover:from-violet-700 hover:to-indigo-700"
          >
            Create Account
          </motion.button>


          {/* Login */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-violet-600 hover:text-violet-700"
            >
              Login
            </Link>
          </p>

        </form>

      </motion.div>
    </div>
  );
};

export default RegisterPage;