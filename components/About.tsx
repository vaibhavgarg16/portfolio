import { Section } from "./Section";

const focusAreas = [
  {
    title: "Engineering stack",
    text: "Production interfaces in React and TypeScript, using Next.js or comparable frameworks for routing, rendering strategies, and structured component libraries that scale with the product.",
  },
  {
    title: "Visual design & CSS",
    text: "Responsive layouts, systematic styling with tokens, Tailwind or modular CSS, and purposeful motion—balanced against Core Web Vitals, accessibility requirements, and brand consistency.",
  },
  {
    title: "Reliability & performance",
    text: "Semantic markup, keyboard support, and regression coverage for critical paths. Continuous profiling to address layout shift, long tasks, asset weight, and real-device behavior.",
  },
  {
    title: "Collaboration",
    text: "Clear version history, constructive code review, close coordination with design on edge cases, and explicit API contracts with backend so loading, error, and empty states are handled deliberately.",
  },
];

export function About() {
  return (
    <Section id="about" className="scroll-mt-20 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Introduction
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink dark:text-zinc-50 md:text-4xl">
            About
          </h2>
        </div>

        <div className="mt-10 space-y-6 text-left text-muted leading-relaxed dark:text-zinc-400">
          <p>
            I am a senior front-end engineer with a focus on how software
            presents itself in the browser and on device: rendering behavior,
            interaction design, and perceived quality under varied hardware and
            network conditions. I translate product requirements and design
            direction into modular interfaces and shared patterns that remain
            legible and extensible as teams and roadmaps evolve.
          </p>
          <p>
            My work spans client architecture—including state, data loading,
            and caching—alongside measurable performance, inclusive design
            practices, and disciplined delivery. I emphasize both visible
            refinement—layout, motion, and microcopy—and foundational concerns
            such as stability, load characteristics, and maintainability across
            releases.
          </p>
          <p>
            In addition to web, I have delivered production user interfaces with
            React Native, applying the same engineering rigor to native
            navigation patterns, list performance, and platform-appropriate
            polish.
          </p>
        </div>

        <ul className="mt-12 space-y-8 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          {focusAreas.map((item) => (
            <li key={item.title}>
              <h3 className="font-display text-lg font-bold text-ink dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted dark:text-zinc-400">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center md:text-left">
          <a
            href="https://drive.google.com/file/d/1aoE3BaengonVRUFudfbRu_JnKFLMxonB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white dark:hover:text-white"
          >
            Download résumé
          </a>
        </div>
      </div>
    </Section>
  );
}
