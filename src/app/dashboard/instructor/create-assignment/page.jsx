"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Plus } from "lucide-react";
import { createAssignment } from "@/lib/api/createAssignment";

const CreateAssignmentPage = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    difficulty: "beginner",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.deadline
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      console.log("Assignment Data:", formData);

      // তোমার API এখানে call করবে
      // const res = await fetch("/api/assignments", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
     const createAssignmentss = await createAssignment(formData)
console.log(createAssignmentss,"")
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Assignment created successfully!");

      setFormData({
        title: "",
        description: "",
        deadline: "",
        difficulty: "beginner",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 px-4 py-8 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">

      <div className="mx-auto max-w-4xl">

        {/* Back Button */}
        <Link
          href="/dashboard/instructor"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-purple-600 dark:text-gray-300"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>


        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
            <Plus size={16} />
            Instructor Panel
          </div>

          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Create Assignment
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Create a structured assignment for your students.
          </p>
        </motion.div>


        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl md:p-8 dark:border-gray-800 dark:bg-gray-900"
        >

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
              >
                Assignment Title
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Example: Build a React Todo Application"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>


            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the assignment clearly. Explain what students need to build or submit..."
                className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>


            {/* Deadline + Difficulty */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* Deadline */}
              <div>
                <label
                  htmlFor="deadline"
                  className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
                >
                  Deadline
                </label>

                <div className="relative">

                  <CalendarDays
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="deadline"
                    name="deadline"
                    type="datetime-local"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />

                </div>
              </div>


              {/* Difficulty */}
              <div>
                <label
                  htmlFor="difficulty"
                  className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200"
                >
                  Difficulty Level
                </label>

                <select
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

            </div>


            {/* Preview */}
            <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">

              <p className="mb-2 text-sm font-semibold text-purple-800 dark:text-purple-300">
                Assignment Preview
              </p>

              <div className="text-sm text-gray-600 dark:text-gray-400">

                <p>
                  <span className="font-medium">Difficulty:</span>{" "}
                  {formData.difficulty}
                </p>

                <p className="mt-1">
                  <span className="font-medium">Deadline:</span>{" "}
                  {formData.deadline || "Not selected"}
                </p>

              </div>

            </div>


            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end dark:border-gray-800">

              <Link
                href="/dashboard/instructor"
                className="rounded-xl border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Cancel
              </Link>


              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                type="submit"
                className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating..." : "Create Assignment"}
              </motion.button>

            </div>

          </form>

        </motion.div>

      </div>
    </div>
  );
};

export default CreateAssignmentPage;