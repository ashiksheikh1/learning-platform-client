"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpenCheck, Sparkles } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 text-white">
      
      {/* Background decorations */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 lg:py-28">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur"
          >
            <Sparkles size={17} />
            Smart Learning & Analytics
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Learn Better.
            <br />
            <span className="text-violet-200">
              Track Progress.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-violet-100 sm:text-lg">
            A smart assignment and learning analytics platform that helps
            instructors manage assignments, review submissions, and track
            student performance while students can monitor their learning
            progress.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <Link href="/assignments">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-purple-700 shadow-lg transition hover:bg-violet-50"
              >
                Explore Assignments
                <ArrowRight size={19} />
              </motion.button>
            </Link>

            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
              >
                Get Started
              </motion.button>
            </Link>

          </div>
        </motion.div>


        {/* Right Side - Dashboard Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >

          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">

            {/* Dashboard Header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-violet-200">
                  Learning Overview
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  Student Progress
                </h3>
              </div>

              <div className="rounded-xl bg-white/10 p-3">
                <BarChart3 size={25} />
              </div>
            </div>


            {/* Progress */}
            <div className="rounded-2xl bg-white/10 p-4">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-2">
                    <BookOpenCheck size={22} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Assignment Progress
                    </p>

                    <p className="text-sm text-violet-200">
                      18 of 24 completed
                    </p>
                  </div>
                </div>

                <span className="text-xl font-bold">
                  75%
                </span>
              </div>


              {/* Progress Bar */}
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="h-full rounded-full bg-white"
                />
              </div>

            </div>


            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-3">

              <div className="rounded-2xl bg-white/10 p-4 text-center">
                <p className="text-2xl font-bold">24</p>
                <p className="mt-1 text-xs text-violet-200">
                  Assignments
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center">
                <p className="text-2xl font-bold">18</p>
                <p className="mt-1 text-xs text-violet-200">
                  Completed
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center">
                <p className="text-2xl font-bold">82%</p>
                <p className="mt-1 text-xs text-violet-200">
                  Acceptance
                </p>
              </div>

            </div>

          </div>


          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-5 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <p className="text-xs text-violet-200">
              AI Smart Assistance
            </p>

            <p className="mt-1 font-semibold">
              Improve your feedback ✨
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroBanner;