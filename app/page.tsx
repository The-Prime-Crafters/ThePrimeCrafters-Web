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
      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section className="h-screen w-full snap-start">
          <Hero />
        </section>
        <section className="min-h-screen lg:h-screen w-full snap-start flex flex-col justify-center">
          <Services />
        </section>
        <section className="min-h-screen lg:h-screen w-full snap-start flex flex-col justify-center">
          <Projects />
        </section>
        <section className="min-h-screen w-full snap-start flex flex-col justify-center">
          <Stats />
        </section>
        <section className="min-h-screen w-full snap-start flex flex-col justify-center">
          <Testimonials />
        </section>
        <section className="min-h-screen w-full snap-start flex flex-col justify-center">
          <CTA />
        </section>
        <section className="w-full snap-start">
          <Footer />
        </section>
      </main>
    </>
  );
}
