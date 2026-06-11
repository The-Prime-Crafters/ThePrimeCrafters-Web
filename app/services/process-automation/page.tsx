import type { Metadata } from "next";

import { Navbar, Footer } from "@/components";
import Pahero from "./components/Pahero";
import Paproblem from "./components/Paproblem";
import Paservicedefinition from "./components/Paservicedefinition";
import Padeliverables from "./components/Padeliverables";
import Paintegration from "./components/Paintegration";
import Paprocess from "./components/Paprocess";
import Pausecases from "./components/Pausecases";
import Pabenefits from "./components/Pabenefits";
import Pacasestudies from "./components/Pacasestudies";
import Pawhychooseus from "./components/Pawhychooseus";
import Paentity from "./components/Paentity";
import PaCTA from "./components/PaCTA";
import Pafaq from "./components/Pafaq";

export const metadata: Metadata = {
  
  alternates: {
    canonical: "https://www.theprimecrafters.com/services/process-automation",
  },
 
};

export default function ProcessAutomationPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <Navbar />
      <Pahero />
      <Paproblem />
      <Paservicedefinition />
      <Padeliverables />
      <Paintegration />
      <Paprocess />
      <Pausecases />
      <Pabenefits />
      <Pacasestudies />
      <Pawhychooseus />
      <Paentity />
      <PaCTA />
      <Pafaq />
      <Footer />
    </main>
  );
}
