import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


/* ✅ SEO FIX: Canonical + Robots */
export function generateMetadata() {
  return {
    title: "AI Automation Solutions | PrimeCrafters",
    description:
      "PrimeCrafters delivers cutting-edge AI automation solutions that streamline operations, boost efficiency, and drive measurable ROI for businesses worldwide.",

    alternates: {
      canonical: "https://www.theprimecrafters.com/", // ✅ IMPORTANT
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

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