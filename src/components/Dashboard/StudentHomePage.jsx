"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Assignment Management",
    description:
      "Create structured assignments with descriptions, deadlines, and difficulty levels.",
  },
  {
    icon: CheckCircle2,
    title: "Smart Review System",
    description:
      "Review student submissions and update their progress with meaningful feedback.",
  },
  {
    icon: Brain,
    title: "AI Smart Assistance",
    description:
      "Use AI-powered tools to improve assignment clarity and generate preliminary feedback.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description:
      "Understand student performance through visual charts and actionable insights.",
  },
  {
    icon: GraduationCap,
    title: "Student Progress",
    description:
      "Students can track assignments, submissions, feedback, and their overall growth.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description:
      "Separate instructor and student experiences with secure role-based access control.",
  },
];

const stats = [
  {
    value: "2",
    label: "User Roles",
    icon: Users,
  },
  {
    value: "3",
    label: "Difficulty Levels",
    icon: LineChart,
  },
  {
    value: "24/7",
    label: "Progress Tracking",
    icon: Clock3,
  },
  {
    value: "AI",
    label: "Smart Assistance",
    icon: Sparkles,
  },
];

export default function StudentHomePage({submissions}) {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-950 dark:via-indigo-950/40 dark:to-purple-950/40" />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-purple-500 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-indigo-500 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm backdrop-blur dark:border-purple-800 dark:bg-gray-900/70 dark:text-purple-300">
              <Sparkles size={16} />
              Smart Learning & Analytics Platform
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learn Better.
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Improve Faster.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              A modern platform where instructors can manage assignments,
              review student work, analyze performance, and use smart AI
              assistance to improve learning outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/assignments">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/20"
                >
                  Explore Assignments
                  <ArrowRight size={18} />
                </motion.button>
              </Link>

              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                >
                  Go to Dashboard
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Dashboard Preview */}
     {/* Hero Dashboard Preview */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative"
>
  <div className="rounded-3xl border border-gray-200 bg-white/80 p-5 shadow-2xl backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">

    {/* Header */}
    <div className="mb-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">
          Learning Overview
        </p>

        <h3 className="text-xl font-bold">
          Student Performance
        </h3>
      </div>

      <div className="rounded-xl bg-green-100 p-3 text-green-600 dark:bg-green-950">
        <BarChart3 />
      </div>
    </div>


    {/* Dynamic Chart */}
    <div className="flex h-52 items-end gap-3 rounded-2xl bg-gray-50 p-5 dark:bg-gray-950">

      {submissions?.map((submission, index) => {

        // status অনুযায়ী percentage
        let height = 30;

        if (submission.status === "Accepted") {
          height = 90;
        } else if (submission.status === "Pending") {
          height = 60;
        } else if (submission.status === "Needs Improvement") {
          height = 40;
        }

        return (
          <motion.div
            key={submission._id || submission.id || index}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
            title={`${submission.status || "Pending"}`}
            className="flex-1 rounded-t-lg bg-gradient-to-t from-indigo-600 to-purple-400"
          />
        );
      })}

    </div>


    {/* Dynamic Status */}
    <div className="mt-5 grid grid-cols-3 gap-3">

      {/* Accepted */}
      <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/40">
        <p className="text-xs text-gray-500">
          Accepted
        </p>

        <p className="mt-1 text-xl font-bold text-indigo-600">
          {
            submissions?.filter(
              submission => submission.status === "Accepted"
            ).length
          }
        </p>
      </div>


      {/* Pending */}
      <div className="rounded-xl bg-yellow-50 p-4 dark:bg-yellow-950/40">
        <p className="text-xs text-gray-500">
          Pending
        </p>

        <p className="mt-1 text-xl font-bold text-yellow-600">
          {
            submissions?.filter(
              submission => submission.status === "Pending"
            ).length
          }
        </p>
      </div>


      {/* Needs Improvement */}
      <div className="rounded-xl bg-red-50 p-4 dark:bg-red-950/40">
        <p className="text-xs text-gray-500">
          Improve
        </p>

        <p className="mt-1 text-xl font-bold text-red-600">
          {
            submissions?.filter(
              submission => submission.status === "Needs Improvement"
            ).length
          }
        </p>
      </div>

    </div>

  </div>
</motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-10 md:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Icon className="mx-auto mb-2 text-purple-600" size={24} />

                <h3 className="text-2xl font-bold">
                  {item.value}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-semibold text-purple-600">
            PLATFORM FEATURES
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Everything You Need to Improve Learning
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Designed for instructors and students to make assignment-based
            learning more organized, measurable, and effective.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= ROLE SECTION ================= */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-12 text-center">
            <p className="font-semibold text-purple-600">
              BUILT FOR BOTH SIDES
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              One Platform, Two Powerful Experiences
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Instructor */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white shadow-xl"
            >
              <GraduationCap size={40} />

              <h3 className="mt-6 text-2xl font-bold">
                For Instructors
              </h3>

              <p className="mt-3 text-indigo-100">
                Create assignments, review submissions, provide feedback,
                monitor acceptance rates, and identify students who need
                additional support.
              </p>

              <ul className="mt-6 space-y-3">
                <li>✓ Assignment management</li>
                <li>✓ Submission review</li>
                <li>✓ AI-powered assistance</li>
                <li>✓ Performance analytics</li>
              </ul>
            </motion.div>

            {/* Student */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              <BookOpen size={40} className="text-purple-600" />

              <h3 className="mt-6 text-2xl font-bold">
                For Students
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Discover assignments, submit your work, track your progress,
                and use instructor feedback to continuously improve.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>✓ Browse assignments</li>
                <li>✓ Submit work with URL and notes</li>
                <li>✓ Track submission status</li>
                <li>✓ Receive instructor feedback</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-10 text-center text-white shadow-2xl sm:p-16"
        >
          <Sparkles className="mx-auto mb-5" size={38} />

          <h2 className="text-3xl font-bold sm:text-4xl">
            Start Improving Learning Outcomes Today
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Manage assignments, track progress, review submissions, and turn
            learning data into meaningful action.
          </p>

          <Link href="/assignments">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-indigo-700 shadow-lg"
            >
              Get Started
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}