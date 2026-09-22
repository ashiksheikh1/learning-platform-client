
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  FileText,
  MessageSquare,
  Copy,
  Check,
  Loader2,
} from "lucide-react";

const AIAssistantPage = () => {
  const [activeTool, setActiveTool] = useState("description");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const tools = [
    {
      id: "description",
      title: "Improve Assignment",
      description:
        "Make your assignment description clearer and more professional.",
      icon: FileText,
    },
    {
      id: "feedback",
      title: "Generate Feedback",
      description:
        "Generate AI-powered preliminary feedback from a student's submission.",
      icon: MessageSquare,
    },
  ];

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResult("");

    try {
      // Later connect your actual AI API here
      const response = await fetch("/api/ai-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: activeTool,
          input: input.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate AI response");
      }

      const data = await response.json();

      setResult(data.result);
    } catch (error) {
      console.error(error);
      setResult(
        "Something went wrong while generating the AI response. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;

    await navigator.clipboard.writeText(result);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleToolChange = (toolId) => {
    setActiveTool(toolId);
    setInput("");
    setResult("");
    setCopied(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-4 py-8 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg">
            <Bot size={34} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            AI Teaching Assistant
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            Use AI-powered tools to improve assignments and generate useful
            feedback for your students.
          </p>
        </motion.div>

        {/* Tools */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Smart Tools
            </h2>

            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <button
                  key={tool.id}
                  onClick={() => handleToolChange(tool.id)}
                  className={`w-full rounded-2xl border p-5 text-left transition ${
                    activeTool === tool.id
                      ? "border-purple-500 bg-purple-100 shadow-md dark:bg-purple-900/30"
                      : "border-gray-200 bg-white hover:border-purple-300 dark:border-gray-700 dark:bg-gray-900"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-purple-600 p-3 text-white">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {tool.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Main Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-900 md:p-8">

              {/* Tool Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <Sparkles size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {activeTool === "description"
                      ? "Improve Assignment Description"
                      : "Generate AI Feedback"}
                  </h2>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activeTool === "description"
                      ? "Enter your assignment description below."
                      : "Enter the student's submission note below."}
                  </p>
                </div>
              </div>

              {/* Input */}
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {activeTool === "description"
                  ? "Assignment Description"
                  : "Student Submission Note"}
              </label>

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={8}
                placeholder={
                  activeTool === "description"
                    ? "Example: Build a React application where users can..."
                    : "Example: I completed the assignment using React and..."
                }
                className="w-full resize-none rounded-2xl border border-gray-300 bg-gray-50 p-4 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-purple-900"
              />

              {/* Generate Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading || !input.trim()}
                onClick={handleGenerate}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Generate with AI
                  </>
                )}
              </motion.button>

              {/* Result */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      AI Result
                    </h3>

                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                      {copied ? (
                        <>
                          <Check size={16} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          Copy
                        </>
                      )}
                    </button>
                  </div>

                  <div className="whitespace-pre-line rounded-2xl bg-gray-50 p-5 text-sm leading-7 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {result}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;

