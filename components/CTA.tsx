import { Section } from "./Section";

export function CTA() {
  return (
    <Section className="bg-primary px-5 py-14 dark:bg-primary-dark md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div>
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            Open to collaboration
          </h2>
          <p className="mt-2 text-white/85">
            For front-end engineering, mobile UI, or related consulting
            engagements, please reach out by email.
          </p>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavgarg621@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 rounded-full bg-white px-10 py-4 font-display text-sm font-bold text-primary shadow-lg transition hover:bg-zinc-100"
        >
          Get in touch
        </a>
      </div>
    </Section>
  );
}
