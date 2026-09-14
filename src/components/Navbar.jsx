"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  BookOpen,
  ClipboardList,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  User,
  UserPlus,
  X,
  Info,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/80">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg">
                <BookOpen size={22} />
              </div>

              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  LearnTrack
                </h1>

                <p className="hidden text-[10px] text-gray-500 sm:block">
                  Learning Analytics Platform
                </p>
              </div>
            </motion.div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">

            {/* Static Links */}
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-purple-600 dark:text-gray-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-purple-600 dark:text-gray-300"
            >
              <Info size={17} />
              About
            </Link>

            <Link
              href="/assignments"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-purple-600 dark:text-gray-300"
            >
              <ClipboardList size={17} />
              Assignments
            </Link>


            {/* Student Dashboard */}
            {user?.role === "student" && (
              <Link
                href="/dashboard/student"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-purple-600 dark:text-gray-300"
              >
                <LayoutDashboard size={17} />
                Dashboard
              </Link>
            )}


            {/* Instructor Dashboard */}
            {user?.role === "instructor" && (
              <Link
                href="/dashboard/instructor"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-purple-600 dark:text-gray-300"
              >
                <LayoutDashboard size={17} />
                Dashboard
              </Link>
            )}

          </div>


          {/* Authentication */}
          <div className="hidden items-center gap-3 md:flex">

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  <LogIn size={17} />
                  Login
                </Link>

                <Link href="/signup">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-purple-700"
                  >
                    <UserPlus size={17} />
                    Sign Up
                  </motion.div>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">

                <Link
                  href="/profile"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <User size={18} />
                  <span>{user.name}</span>
                </Link>

                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950"
                >
                  <LogOut size={17} />
                  Logout
                </button>

              </div>
            )}

          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 hover:bg-gray-100 md:hidden dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>


        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-gray-200 md:hidden dark:border-gray-800"
            >

              <div className="space-y-1 px-4 py-4">

                {/* Static Links */}

                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-purple-50 hover:text-purple-600"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-purple-50 hover:text-purple-600"
                >
                  About
                </Link>

                <Link
                  href="/assignments"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-purple-50 hover:text-purple-600"
                >
                  Assignments
                </Link>


                {/* Student Dashboard */}

                {user?.role === "student" && (
                  <Link
                    href="/dashboard/student"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-purple-50 hover:text-purple-600"
                  >
                    Dashboard
                  </Link>
                )}


                {/* Instructor Dashboard */}

                {user?.role === "instructor" && (
                  <Link
                    href="/dashboard/instructor"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-purple-50 hover:text-purple-600"
                  >
                    Dashboard
                  </Link>
                )}


                {/* Auth */}

                <div className="mt-3 border-t border-gray-200 pt-3 dark:border-gray-800">

                  {!user ? (
                    <>
                      <Link
                        href="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="mb-2 block rounded-lg px-3 py-3 font-medium"
                      >
                        Login
                      </Link>

                      <Link
                        href="/signup"
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-lg bg-purple-600 px-3 py-3 text-center font-medium text-white"
                      >
                        Sign Up
                      </Link>
                    </>
                  ) : (
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-3 text-red-500"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  )}

                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </>
  );
};

export default Navbar;