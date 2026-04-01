"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Skills" },
  { href: "#portfolio", label: "Work" },
  { href: "#testimonial", label: "Testimonials" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="inline-flex h-10 w-10 shrink-0 rounded-full border border-zinc-200 bg-zinc-100 dark:border-white/15 dark:bg-white/5"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-800 transition hover:bg-zinc-200 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
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
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-[#212529]/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white"
          onClick={() => setOpen(false)}
        >
          ꧁ꪚG꧂
        </a>

        <ul
          className={`absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-zinc-200/80 bg-white/98 p-4 backdrop-blur-md dark:border-white/10 dark:bg-[#212529]/95 md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-center md:gap-8 md:border-0 md:bg-transparent md:p-0 ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block rounded-lg px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white md:inline md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-zinc-900 transition dark:bg-white ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-zinc-900 transition dark:bg-white ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-zinc-900 transition dark:bg-white ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
