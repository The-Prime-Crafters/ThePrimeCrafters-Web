import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full scroll-smooth">
        <section className="min-h-screen w-full">
          <Hero />
        </section>
        <section className="w-full">
          <Services />
        </section>
        <section className="w-full">
          <Projects />
        </section>
        <section className="w-full">
          <Stats />
        </section>
        <section className="w-full">
          <Testimonials />
        </section>
        <section className="w-full">
          <CTA />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </main>
    </>
  );
}
