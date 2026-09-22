"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Lock, Mail, ArrowRight } from "lucide-react";
import { authClient } from './../../lib/auth-client';
import { redirect } from "next/navigation";

const LoginPage = () => {
  // const [showPassword, setShowPassword] = useState(false);
  
    const handleSubmit = async(e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      const dataFrom = Object.fromEntries(formData.entries());
  
      console.log(dataFrom);
  
      // এখানে তোমার registration API call করবে
       const { data, error } = await authClient.signIn.email({
    
      email: dataFrom.email,
      password: dataFrom.password,
     
      // isBlock: false,
    });
  
        console.log("data, error",{ data, error});
        if(data){
          redirect("/")
        }
    };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 flex items-center justify-center px-4 py-10">

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-900 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden bg-gradient-to-br from-purple-600 to-indigo-700 p-10 text-white lg:flex lg:flex-col lg:justify-center"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-white/20 p-3">
              <BookOpen size={30} />
            </div>

            <h1 className="text-2xl font-bold">
              LearnTrack
            </h1>
          </div>

          <h2 className="text-4xl font-bold leading-tight">
            Learn better.
            <br />
            Track your progress.
          </h2>

          <p className="mt-5 max-w-md text-purple-100">
            Manage assignments, track your learning progress, and get
            meaningful feedback from instructors.
          </p>

          <div className="mt-8 space-y-3 text-sm text-purple-100">
            <p>✓ Assignment Management</p>
            <p>✓ Student Progress Tracking</p>
            <p>✓ Instructor Feedback</p>
            <p>✓ Learning Analytics</p>
          </div>
        </motion.div>


        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 lg:p-12"
        >

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome Back 👋
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Sign in to continue your learning journey.
            </p>
          </div>


          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>


            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-purple-600 hover:text-purple-700"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>


            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition hover:from-purple-700 hover:to-indigo-700 dark:shadow-none"
            >
              Sign In
              <ArrowRight size={19} />
            </motion.button>

          </form>


          {/* Register */}
          <p className="mt-7 text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-purple-600 hover:text-purple-700"
            >
              Create Account
            </Link>
          </p>

        </motion.div>

      </div>
    </div>
  );
};

export default LoginPage;