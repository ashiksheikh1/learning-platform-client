"use client";

import { motion } from "framer-motion";
import { HelpCircle, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const StudentSupport = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      subject,
      message,
    });

    setSubject("");
    setMessage("");
  };

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
            <HelpCircle size={28} />
          </div>

          <h2 className="text-3xl font-bold">
            Need Help With Your Assignment?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            If you face any problem while understanding or completing an
            assignment, you can contact your instructor and get the support
            you need.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Support Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-8 text-white"
          >
            <MessageCircle size={35} />

            <h3 className="mt-5 text-2xl font-bold">
              Communicate With Your Instructor
            </h3>

            <p className="mt-4 leading-7 text-purple-100">
              Learning becomes easier when you can ask questions at the right
              time. Share your problem, explain where you are stuck, and your
              instructor can guide you toward the right solution.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-semibold">
                  Assignment Problem
                </h4>
                <p className="text-sm text-purple-100">
                  Ask questions about requirements or assignment topics.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Technical Support
                </h4>
                <p className="text-sm text-purple-100">
                  Get guidance when you face technical difficulties.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Feedback & Improvement
                </h4>
                <p className="text-sm text-purple-100">
                  Understand instructor feedback and improve your submission.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Support Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl border bg-white p-8 shadow-sm dark:bg-gray-900"
          >
            <h3 className="text-xl font-bold">
              Send a Support Request
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Describe your problem clearly so your instructor can help you.
            </p>

            <div className="mt-6 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Problem / Subject
                </label>

                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="e.g. I don't understand the API requirement"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Explain Your Problem
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  placeholder="Explain your problem or question..."
                  className="w-full resize-none rounded-xl border px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
              >
                <Send size={18} />
                Send Request
              </button>

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default StudentSupport;