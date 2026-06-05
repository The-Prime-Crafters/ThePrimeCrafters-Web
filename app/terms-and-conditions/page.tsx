import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components";
import TermsHero from "../terms-and-conditions/components/terms/ TermsHero";
import TermsTableOfContents from "../terms-and-conditions/components/terms/TermsTableOfContents";
import { Footer } from "@/components";
import {
  TermsAgreement,
  TermsAbout,
  TermsWebsiteUse,
  TermsConsultations,
  TermsClientResponsibilities,
  TermsAIServices,
  TermsPayments,
  TermsIP,
  TermsThirdParty,
  TermsNoGuarantee,
  TermsLiability,
  TermsUpdates,
  TermsContact,
} from "../terms-and-conditions/components/terms/TermsSections";

export const metadata: Metadata = {
  title:
    "Terms and Conditions | The Prime Crafters AI Automation Agency",
  description:
    "Read The Prime Crafters’ Terms and Conditions before using our website or engaging our AI automation services. Clear, plain-language terms for clients and visitors.",
  
    
  alternates: {
    canonical: "https://www.theprimecrafters.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      
      <Navbar/>
      {/* Hero */}
      <TermsHero />

      {/* Table of Contents */}
      <TermsTableOfContents />

      {/* All Sections */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <TermsAgreement />
          <TermsAbout />
          <TermsWebsiteUse />
          <TermsConsultations />
          <TermsClientResponsibilities />
          <TermsAIServices />
          <TermsPayments />
          <TermsIP />
          <TermsThirdParty />
          <TermsNoGuarantee />
          <TermsLiability />
          <TermsUpdates />
          <TermsContact />
        </div>
      </section>
      <Footer/>

    </div>
  );
}