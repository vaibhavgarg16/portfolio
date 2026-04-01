"use client";

import { SiteImage } from "@/components/SiteImage";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <header
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-900"
    >
      <div className="absolute inset-0 opacity-40">
        <SiteImage
          src="/imgs/header.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/70 to-zinc-900" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          className="mb-2 font-display text-sm uppercase tracking-[0.35em] text-primary-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Welcome
        </motion.p>
        <motion.h1
          className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
        >
          Vaibhav Garg
        </motion.h1>
        <motion.p
          className="mt-4 font-display text-lg text-primary-light sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
        >
          Senior Front-End Developer
        </motion.p>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I design and deliver performant, accessible interfaces with React,
          TypeScript, and modern CSS, from shared design systems through
          production web applications to React Native delivery.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/vaibhavgarg16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
          >
            View GitHub
          </a>
          <a
            href="#portfolio"
            className="inline-flex rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
          >
            Selected work
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full border-2 border-white/25">
        <motion.span
          className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded-full bg-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </header>
  );
}
