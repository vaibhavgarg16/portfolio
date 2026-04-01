import { SiteImage } from "@/components/SiteImage";
import { Section } from "./Section";

const services = [
  {
    title: "Product design support",
    body: "Structured discovery through wireframes, high-fidelity mockups, and interactive prototypes so engineering and design align before implementation—reducing rework and clarifying acceptance criteria.",
    icon: "/imgs/pencil-case.svg",
  },
  {
    title: "Web & mobile interfaces",
    body: "Responsive web applications and React Native screens with disciplined state management, secure API integration, and attention to navigation, gestures, and motion at production quality.",
    icon: "/imgs/responsive.svg",
  },
  {
    title: "Quality assurance & tuning",
    body: "Automated and exploratory testing, profiling, and defect resolution to keep experiences fast and stable—grounded in Core Web Vitals, device testing, and observable metrics.",
    icon: "/imgs/toolbox.svg",
  },
  {
    title: "Release & lifecycle",
    body: "CI-aligned builds, staged releases to web and app stores, and sustained maintenance: monitoring, compatibility updates, and iterative improvement as platforms and requirements change.",
    icon: "/imgs/analytics.svg",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      className="scroll-mt-20 bg-zinc-50 px-5 py-20 dark:bg-zinc-900/50 md:px-8"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Capabilities
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink dark:text-zinc-50 md:text-4xl">
          Skills &amp; services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted dark:text-zinc-400">
          Representative areas of practice; engagement scope is tailored to each
          project and team.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-100 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-primary/10"
            >
              <SiteImage
                src={s.icon}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <h3 className="mt-6 font-display text-lg font-bold text-ink dark:text-zinc-100">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted dark:text-zinc-400">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
