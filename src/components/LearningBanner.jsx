"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, BarChart3, Sparkles } from "lucide-react";

const slides = [
  {
    title: "Learn. Submit. Improve.",
    description:
      "Manage assignments, track your progress, receive feedback, and build better learning habits in one platform.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Turn Feedback Into Progress",
    description:
      "Get meaningful instructor feedback and continuously improve your assignments and learning performance.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    title: "Smarter Learning With Analytics",
    description:
      "Understand your performance through clear analytics and discover where you can improve.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];

const LearningBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-[600px] overflow-hidden">

      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-purple-900/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-5 py-16 lg:px-8">

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md"
            >
              <Sparkles size={17} />
              Smart Learning Platform
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              {slide.description}
            </p>

            {/* Feature cards */}
            <div className="mt-8 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md">
                <BookOpen size={19} />
                <span>Assignments</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md">
                <BarChart3 size={19} />
                <span>Learning Analytics</span>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link href="/assignments">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold shadow-lg shadow-purple-900/30 transition hover:bg-purple-500"
                >
                  Explore Assignments
                  <ArrowRight size={18} />
                </motion.button>
              </Link>

              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md transition hover:bg-white/20"
                >
                  Go to Dashboard
                </motion.button>
              </Link>

            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              current === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50"
            }`}
          />
        ))}

      </div>

    </section>
  );
};

export default LearningBanner;