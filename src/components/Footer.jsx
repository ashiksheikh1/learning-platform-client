"use client";

import Link from "next/link";
import { GitBranch, Mail, BookOpen, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Logo / About */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600">
                <BookOpen size={22} />
              </div>

              <span className="text-xl font-bold">
                LearnTrack
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              A smart assignment and learning analytics platform designed
              to help instructors manage student performance and help
              students track their learning progress.
            </p>
          </div>


          {/* Platform */}
          <div>
            <h3 className="mb-4 font-semibold">
              Platform
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">

              <li>
                <Link
                  href="/assignments"
                  className="transition hover:text-white"
                >
                  Assignments
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="transition hover:text-white"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/progress"
                  className="transition hover:text-white"
                >
                  My Progress
                </Link>
              </li>

              <li>
                <Link
                  href="/analytics"
                  className="transition hover:text-white"
                >
                  Analytics
                </Link>
              </li>

            </ul>
          </div>


          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <a
                  href="mailto:support@example.com"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Mail size={16} />
                  Support
                </a>
              </li>

              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <GitBranch size={16} />
                  GitHub
                </a>
              </li>

            </ul>
          </div>

        </div>


        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} LearnTrack. All rights reserved.
          </p>

          <motion.p
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-1"
          >
            Built with
            <Heart
              size={16}
              className="fill-current text-red-500"
            />
            for better learning
          </motion.p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;