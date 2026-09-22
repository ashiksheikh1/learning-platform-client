"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  FileText,
  Loader2,
  Send,
} from "lucide-react";

import { submitAssignment } from "@/lib/api/submit-assignment-student";
import { authClient } from "@/lib/auth-client";

const SubmitAssignmentPage = () => {
  const [formData, setFormData] = useState({
    submissionUrl: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Demo assignment data
  // পরে API থেকে আনবে
  const assignment = {
    id: "assignment-1",
    title: "Build a Responsive Portfolio Website",
    description:
      "Create a responsive portfolio website using modern web technologies. Your project should include a homepage, about section, projects section, contact section, and responsive navigation.",
    difficulty: "Intermediate",
    deadline: "September 15, 2026",
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!formData.submissionUrl.trim()) {
      setMessage("Please provide your project URL.");
      return;
    }

    if (!formData.note.trim()) {
      setMessage("Please write a submission note.");
      return;
    }

    try {
      setLoading(true);

      console.log("Assignment Data:", {
        assignmentId: assignment.id,
        user,
        ...formData,
      });

      const result = await submitAssignment({
        assignmentId: assignment.id,
        ...formData,
        user,
      });

      console.log("Submission Result:", result);

      setMessage("Assignment submitted successfully!");

      setFormData({
        submissionUrl: "",
        note: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);

      setMessage(
        error?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 px-4 py-10 dark:from-slate-950 dark:via-slate-950 dark:to-purple-950/30">
      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <Link
          href="/student/assignments"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
        >
          <ArrowLeft size={18} />
          Back to Assignments
        </Link>

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-600">
            Student Submission
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Submit Your Assignment
          </h1>

          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-400">
            Submit your project URL and explain your work to help your
            instructor understand your approach.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Assignment Information */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <FileText size={24} />
              </div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {assignment.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {assignment.description}
              </p>

              {/* Difficulty */}
              <div className="mt-6">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Difficulty
                </p>

                <span className="mt-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                  {assignment.difficulty}
                </span>
              </div>

              {/* Deadline */}
              <div className="mt-5 flex items-center gap-3">
                <CalendarDays
                  size={19}
                  className="text-purple-600"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Deadline
                  </p>

                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {assignment.deadline}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 dark:border-gray-800 dark:bg-gray-900">

              <div className="mb-7">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Submit Your Work
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Make sure your project link is publicly accessible.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Project URL */}
                <div>
                  <label
                    htmlFor="submissionUrl"
                    className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                  >
                    Project URL
                  </label>

                  <div className="relative">
                    <ExternalLink
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="submissionUrl"
                      name="submissionUrl"
                      type="url"
                      required
                      value={formData.submissionUrl}
                      onChange={handleChange}
                      placeholder="https://github.com/username/project"
                      className="w-full rounded-xl border border-gray-300 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                    />
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    GitHub, live website, or deployed project URL.
                  </p>
                </div>

                {/* Student Note */}
                <div>
                  <label
                    htmlFor="note"
                    className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                  >
                    Submission Note
                  </label>

                  <textarea
                    id="note"
                    name="note"
                    rows={7}
                    required
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="Explain what you have completed, challenges you faced, and anything you want your instructor to know..."
                    className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Give a brief explanation of your work.
                  </p>
                </div>

                {/* Message */}
                {message && (
                  <div
                    className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${
                      message.includes("successfully")
                        ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    }`}
                  >
                    {message.includes("successfully") && (
                      <CheckCircle2 size={18} />
                    )}

                    <span>{message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={20}
                        className="animate-spin"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={19} />
                      Submit Assignment
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SubmitAssignmentPage;