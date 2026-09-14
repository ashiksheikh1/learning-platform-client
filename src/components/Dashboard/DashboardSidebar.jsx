import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import Link from "next/link";
import Image from "next/image";

import { Button, Drawer } from "@heroui/react";
import { Bars, House } from "@gravity-ui/icons";

import {
  MdOutlineDashboard,
  MdAssignment,
  MdRateReview,
  MdAnalytics,
  MdAutoAwesome,
  MdPeople,
  MdPerson,
  MdSchool,
  MdCreate,
} from "react-icons/md";

import { FaTasks } from "react-icons/fa";


export async function DashboardSidebar() {

  // Get logged-in user
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const role = user?.role;


  // =========================
  // STUDENT SIDEBAR
  // =========================

  const studentItems = [
    
    {
      icon: MdOutlineDashboard,
      label: "Overview",
      href: "/dashboard/student",
    },
    {
      icon: MdAssignment,
      label: "Total Assignments",
      href: "/dashboard/student/totalassignments",
    },
    {
      icon: FaTasks,
      label: "My Submissions",
      href: "/dashboard/student/submitted",
    },
    {
      icon: MdAnalytics,
      label: "Upcoming",
      href: "/dashboard/student/upcoming",
    },
    {
      icon: MdPerson,
      label: "Approved",
      href: "/dashboard/student/approved",
    },
    {
      icon: MdPerson,
      label: "Improvement",
      href: "/dashboard/student/improvement",
    },
    {
      icon: MdPerson,
      label: "Profile",
      href: "/dashboard/student/profile",
    },
  ];


  // =========================
  // INSTRUCTOR SIDEBAR
  // =========================

  const instructorItems = [
    {
      icon: MdOutlineDashboard,
      label: "Overview",
      href: "/dashboard/instructor",
    },
    {
      icon: MdCreate,
      label: "Create Assignment",
      href: "/dashboard/instructor/create-assignment",
    },
    {
      icon: MdAssignment,
      label: "Manage Assignments",
      href: "/dashboard/instructor/assignments",
    },
    {
      icon: MdRateReview,
      label: "Student Submissions",
      href: "/dashboard/instructor/submissions",
    },
    {
      icon: MdAnalytics,
      label: "Learning Analytics",
      href: "/dashboard/instructor/analytics",
    },
    {
      icon: MdAutoAwesome,
      label: "AI Assistant",
      href: "/dashboard/instructor/ai-assistant",
    },
    {
      icon: MdPeople,
      label: "Students",
      href: "/dashboard/instructor/students",
    },
    {
      icon: MdPerson,
      label: "Profile",
      href: "/dashboard/instructor/profile",
    },
  ];


  // Select menu based on role
  const navItems =
    role === "instructor"
      ? instructorItems
      : role === "student"
      ? studentItems
      : [];


  // =========================
  // NAVIGATION
  // =========================

  const NavigationItems = () => (
    <nav className="flex flex-col gap-2">

      {navItems.map((item) => {

        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className="
              group
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-sm
              font-medium
              text-purple-100
              transition-all
              duration-200
              hover:bg-white/10
              hover:text-white
              hover:translate-x-1
            "
          >

            <Icon
              className="
                size-5
                text-purple-300
                transition-colors
                group-hover:text-white
              "
            />

            <span>{item.label}</span>

          </Link>
        );
      })}

    </nav>
  );


  return (
    <>
      {/* ================================================= */}
      {/* DESKTOP SIDEBAR */}
      {/* ================================================= */}

      <aside
        className="
          hidden
          min-h-screen
          w-64
          shrink-0
          border-r
          border-purple-800/50
          bg-gradient-to-br
          from-purple-950
          via-purple-900
          to-indigo-950
          p-4
          text-white
          lg:block
        "
      >

        {/* Logo */}

        <Link
          href="/"
          className="
            mb-8
            flex
            items-center
            justify-center
          "
        >

          <Image
            height={50}
            width={150}
            loading="eager"
            src="/logo.png"
            alt="Assignment Learning Platform"
            className="object-contain"
          />

        </Link>


        {/* Dashboard Role */}

        <div className="mb-5 rounded-xl bg-white/10 p-3">

          <div className="flex items-center gap-3">

            <MdSchool
              className="
                text-2xl
                text-purple-300
              "
            />

            <div>

              <p className="text-xs text-purple-300">
                Dashboard
              </p>

              <p className="text-sm font-semibold capitalize">
                {role || "User"}
              </p>

            </div>

          </div>

        </div>


        {/* Navigation */}

        <NavigationItems />

      </aside>


      {/* ================================================= */}
      {/* MOBILE SIDEBAR */}
      {/* ================================================= */}

      <div className="lg:hidden">

        <Drawer>

          <Button
            variant="secondary"
            className="m-3"
          >
            <Bars />
            Menu
          </Button>


          <Drawer.Backdrop>

            <Drawer.Content placement="left">

              <Drawer.Dialog>

                <Drawer.CloseTrigger />


                {/* Header */}

                <Drawer.Header>

                  <Drawer.Heading>

                    <Image
                      height={50}
                      width={150}
                      loading="eager"
                      src="/logo.png"
                      alt="Assignment Learning Platform"
                    />

                  </Drawer.Heading>

                </Drawer.Header>


                {/* Body */}

                <Drawer.Body>

                  <NavigationItems />

                </Drawer.Body>

              </Drawer.Dialog>

            </Drawer.Content>

          </Drawer.Backdrop>

        </Drawer>

      </div>
    </>
  );
}