"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  MessageCircle,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";

const InstructorCommunication = () => {
  const [reply, setReply] = useState("");

  const supportRequests = [
    {
      id: 1,
      student: "Rahim Ahmed",
      assignment: "React Authentication",
      problem:
        "I am having trouble understanding how to protect private routes.",
      status: "Pending",
    },
    {
      id: 2,
      student: "Nusrat Jahan",
      assignment: "Node.js API",
      problem:
        "My POST request is returning a 400 error. I am not sure what is wrong.",
      status: "Pending",
    },
    {
      id: 3,
      student: "Tanvir Hasan",
      assignment: "MongoDB CRUD",
      problem:
        "I completed the assignment but I need clarification about the update operation.",
      status: "Resolved",
    },
  ];

  const handleReply = (id) => {
    console.log({
      requestId: id,
      reply,
    });

    setReply("");
  };

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <MessageCircle />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Student Support Requests
              </h2>

              <p className="mt-1 text-gray-500">
                Help students overcome problems and continue their learning.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Requests */}
        <div className="space-y-6">

          {supportRequests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-gray-900"
            >

              {/* Student */}
              <div className="flex flex-wrap items-start justify-between gap-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <User size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {request.student}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {request.assignment}
                    </p>
                  </div>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    request.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {request.status}
                </span>

              </div>

              {/* Problem */}
              <div className="mt-5 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">

                <p className="text-sm font-medium">
                  Student's Question
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {request.problem}
                </p>

              </div>

              {/* Reply */}
              {request.status === "Pending" && (
                <div className="mt-5">

                  <label className="mb-2 block text-sm font-medium">
                    Instructor Response
                  </label>

                  <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    rows={4}
                    placeholder="Write helpful guidance for the student..."
                    className="w-full resize-none rounded-xl border px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <button
                    onClick={() => handleReply(request.id)}
                    className="mt-3 flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-700"
                  >
                    <Send size={17} />
                    Send Response
                  </button>

                </div>
              )}

              {request.status === "Resolved" && (
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green-600">
                  <CheckCircle size={18} />
                  Student support request resolved
                </div>
              )}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InstructorCommunication;