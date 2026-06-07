import type { Metadata } from "next";
import { Navbar } from "@/components";
import Casehero from "../case-studies/components/Casehero";
import Proofstrip from "../case-studies/components/Proofstrip";
import Faq from "../case-studies/components/Faq";
import Casedetail from "../case-studies/components/Casedetail";
import Outcome from "../case-studies/components/Outcome";
import Category from "../case-studies/components/Category";
import Casestudygrid from "../case-studies/components/Casestudygrid";
import Aisearch from "../case-studies/components/Aisearch";
import Howwebuild from "../case-studies/components/Howwebuild";
import Ctacase from "../case-studies/components/Ctacase";

import  Footer  from "@/components/Footer"
export const metadata: Metadata = {
  title:
"AI Automation Case Studies | The Prime Crafters",
  description:
"Explore The Prime Crafters' AI automation case studies — real projects delivering 250% higher deal closure, 10K+ calls/month, and 50K+ leads/month across voice AI, healthcare, sales, and more.",  
  alternates: {
    canonical: "https://www.theprimecrafters.com/case-studies",
  },
   
};

export default function CaseStudiesPage() {
  return (
    <main>
         <Navbar/>
         <Casehero/>
         <Proofstrip/>
         <Casestudygrid/>
         <Category/>
         <Outcome/>
         <Casedetail/>
         <Howwebuild/>
         <Aisearch/>
         <Faq/>
         <Ctacase/>
         <Footer/>
         
    </main>
   
  );
}