import type { Metadata } from "next";
import { Navbar } from "@/components";
import Casehero from "../case-studies/components/Casehero";
import Proofstrip from "../case-studies/components/Proofstrip";
import Faq from "../case-studies/components/Faq";
import Casedetail from "../case-studies/components/Casedetail";
import Outcome from "../case-studies/components/Outcome";
import Category from "../case-studies/components/Category";
import Casestudygrid from "../case-studies/components/Casestudygrid";
import  Footer  from "@/components/Footer"
export const metadata: Metadata = {
  
  alternates: {
    canonical: "https://www.theprimecrafters.com/case-studies",
  },
   
};

export default function TermsAndConditionsPage() {
  return (
    <main>
         <Navbar/>
         <Casehero/>
         <Proofstrip/>
         <Casestudygrid/>
         <Category/>
         <Outcome/>
         <Casedetail/>
         <Faq/>
         <Footer/>

    </main>
   



  );
}