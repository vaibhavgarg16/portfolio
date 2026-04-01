import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <CTA />
        <TestimonialCarousel />
      </main>
      <Footer />
    </>
  );
}
