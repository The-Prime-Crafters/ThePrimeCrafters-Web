
import { Navbar } from '@/components';
import ContactHero from './components/ContactHero';
import ContactFormSection from './components/ContactFormSection';
import QuickContactOptions from './components/QuickContactOptions';
import WhyContactUs from './components/WhyContactUs';
import ServicesSnapshot from './components/ServicesSnapshot';
import CaseStudiesPreview from './components/CaseStudiesPreview';
import IndustriesSection from './components/IndustriesSection';
import ContactFAQ from './components/ContactFAQ';
import FinalCTA from './components/FinalCTA';
import { Footer } from '@/components';

export default function ContactPage() {
  return (
    <main className="bg-[#050505]">
      <Navbar/>
      <ContactHero />
      <ContactFormSection />
      <QuickContactOptions />
      <WhyContactUs />
      <ServicesSnapshot />
      <CaseStudiesPreview />
      <IndustriesSection />
      <ContactFAQ />
      <FinalCTA />
      <Footer/>
    </main>
  );
}
