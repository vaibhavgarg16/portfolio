import Image from "next/image";
import { Section } from "./Section";

const projects = [
  {
    title: "Marketing & content platforms",
    category: "Layout · responsive UI · accessibility",
    image: "/imgs/folio-1.jpg",
    href: "#",
  },
  {
    title: "Design systems & npm libraries",
    category: "React · TypeScript · published packages",
    image: "/imgs/folio-2.jpg",
    href: "#",
  },
  {
    title: "Firebase-integrated products",
    category: "Authentication · Firestore · Cloud Functions",
    image: "/imgs/folio-3.jpg",
    href: "#",
  },
  {
    title: "Native mobile (iOS & Android)",
    category: "React Native · platform APIs · app store delivery",
    image: "/imgs/header.jpg",
    href: "#",
  },
  {
    title: "AI-driven experiences",
    category: "LLM APIs · intelligent UX · automation",
    image: "/imgs/img-1.jpg",
    href: "#",
  },
  {
    title: "Modern front-end delivery",
    category: "TypeScript · performance · testing · tooling",
    image: "/imgs/img-2.jpg",
    href: "#",
  },
];

export function Projects() {
  return (
    <Section id="portfolio" className="scroll-mt-20 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Portfolio
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink dark:text-zinc-50 md:text-4xl">
          Selected work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted dark:text-zinc-400">
          Representative focus areas: Firebase integration, native development
          for iOS and Android, AI-assisted interfaces, reusable npm packages,
          design systems, and the broader modern front-end stack—performance,
          TypeScript, and quality practices. Replace placeholders below with
          live case studies or repository links when ready.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group relative block overflow-hidden rounded-2xl bg-zinc-900 shadow-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-90 transition group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white">
                  <p className="text-xs uppercase tracking-wider text-white/70">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold leading-snug sm:text-xl">
                    {p.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
