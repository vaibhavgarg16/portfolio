"use client";

import { SiteImage } from "@/components/SiteImage";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "We have engaged Vaibhav on mobile application initiatives and value his ability to deliver well-structured, user-centered solutions. His work reflects a strong grasp of current platforms and a consistent focus on quality execution.",
    name: "VMixs Technology",
    image: "/imgs/vmixs.png",
  },
  {
    quote:
      "In our collaboration at Nian Technologies, Vaibhav demonstrates clear ownership of the front-end craft—thoughtful implementation, attention to detail, and alignment with our standards for reliable, modern software delivery.",
    name: "Nian Technologies",
    image: "/imgs/nian.png",
  },
];

/** Time between automatic slide changes (ms) */
const AUTOPLAY_INTERVAL_MS = 8200;

/** Slide motion: softer spring, less travel, coordinated opacity/scale with ease-out */
const SLIDE_SPRING = {
  type: "spring" as const,
  stiffness: 210,
  damping: 42,
  mass: 0.85,
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 72 : -72,
    opacity: 0,
    scale: 0.985,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 72 : -72,
    opacity: 0,
    scale: 0.985,
  }),
};

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((prev) => {
      if (i === prev) return prev;
      setDirection(i > prev ? 1 : -1);
      return i;
    });
  }, []);

  const paginate = useCallback((delta: number) => {
    setDirection(delta);
    setIndex((prev) => (prev + delta + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="testimonial"
      className="scroll-mt-20 bg-zinc-50 px-5 py-20 dark:bg-zinc-900/50 md:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Client references
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink dark:text-zinc-50 md:text-4xl">
          Testimonials
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted dark:text-zinc-400">
          Feedback from organizations I have supported on product and mobile
          initiatives.
        </p>

        <div className="relative mt-14 min-h-[320px] sm:min-h-[280px]">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-100 bg-white p-8 shadow-xl shadow-primary/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-primary/10 sm:p-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: SLIDE_SPRING,
                  opacity: { duration: 0.48, ease: EASE_OUT },
                  scale: { duration: 0.52, ease: EASE_OUT },
                }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.08,
                    type: "spring",
                    stiffness: 200,
                    damping: 28,
                  }}
                  className="relative h-20 w-20 overflow-hidden rounded-2xl shadow-md ring-2 ring-primary/20 dark:ring-primary/30"
                >
                  <SiteImage
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </motion.div>
                <blockquote className="mt-8 text-lg leading-relaxed text-ink dark:text-zinc-200 md:text-xl">
                  &ldquo;{testimonials[index].quote}&rdquo;
                </blockquote>
                <p className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-primary">
                  {testimonials[index].name}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="group p-1"
                >
                  <motion.span
                    className={`block h-2.5 rounded-full ${
                      i === index
                        ? "bg-primary"
                        : "bg-zinc-300 dark:bg-zinc-600"
                    }`}
                    animate={{ width: i === index ? 28 : 10 }}
                    transition={{
                      type: "spring",
                      stiffness: 360,
                      damping: 30,
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <motion.button
            type="button"
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white p-3 text-ink shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 sm:flex sm:-translate-x-4"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            type="button"
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-2 rounded-full border border-zinc-200 bg-white p-3 text-ink shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 sm:flex sm:translate-x-4"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
