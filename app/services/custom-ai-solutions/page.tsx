import type { Metadata } from "next";

import { Navbar } from "@/components";
import S1hero from "../custom-ai-solutions/components/S1hero";
import S1problem from "../custom-ai-solutions/components/S1problem";
import S1servicedefinition from "../custom-ai-solutions/components/S1servicedefinition";
import S1deliverables from "../custom-ai-solutions/components/S1deliverables";
import S1process from "../custom-ai-solutions/components/S1process";
import S1usecases from "../custom-ai-solutions/components/S1usecases";
import S1benefits from "../custom-ai-solutions/components/S1benefits";
import S1casestudiesproof from "../custom-ai-solutions/components/S1casestudiesproof";
import S1whychooseus from "../custom-ai-solutions/components/S1whychooseus";
import S1entity from "../custom-ai-solutions/components/S1entity";
import ServicesCTA from "../components/ServicesCTA";
import S1faq from "../custom-ai-solutions/components/S1faq";
import { Footer } from "@/components";

export const metadata: Metadata = {
  
  alternates: {
    canonical: "https://www.theprimecrafters.com/custom-ai-solutions",
  },
  
};

export default function CustomAiSolutionsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <Navbar/>
      <S1hero/>
      <S1problem/>
      <S1servicedefinition/>
      <S1deliverables/>
      <S1process/>
      <S1usecases/>
      <S1benefits/>
      <S1casestudiesproof/>
      <S1whychooseus/>
      <S1entity/>
      <S1faq/>
      <ServicesCTA/>
      <Footer/>
    </main>
  );
}