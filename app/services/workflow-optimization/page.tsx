import type { Metadata } from "next";

import { Navbar, Footer } from "@/components";
import WorkflowOptimizationHero from '../workflow-optimization/components/WorkflowOptimizationHero';
import WorkflowOptimizationProblem from '../workflow-optimization/components/WorkflowOptimizationProblem';
import WorkflowOptimizationService from '../workflow-optimization/components/WorkflowOptimizationService';
import WorkflowOptimizationDeliverables from '../workflow-optimization/components/WorkflowOptimizationDeliverables';
import WorkflowOptimizationFramework from '../workflow-optimization/components/WorkflowOptimizationFramework';
import WorkflowOptimizationProcess from '../workflow-optimization/components/WorkflowOptimizationProcess';
import WorkflowOptimizationUseCases from '../workflow-optimization/components/WorkflowOptimizationUseCases';
import WorkflowOptimizationBenefits from '../workflow-optimization/components/WorkflowOptimizationBenefits';
import WorkflowOptimizationCaseStudies from '../workflow-optimization/components/WorkflowOptimizationCaseStudies';
import WorkflowOptimizationWhyUs from '../workflow-optimization/components/WorkflowOptimizationWhyUs';
import WorkflowOptimizationAbout from '../workflow-optimization/components/WorkflowOptimizationAbout';
import WorkflowOptimizationCTA from '../workflow-optimization/components/WorkflowOptimizationCTA';
import WorkflowOptimizationFAQ from '../workflow-optimization/components/WorkflowOptimizationFAQ';

export const metadata = {
 
  alternates: {
    canonical: 'https://www.theprimecrafters.com/services/workflow-optimization',
  },
};

export default function WorkflowOptimizationPage() {
  return (
    <main>
      <Navbar/>
      <WorkflowOptimizationHero />
      <WorkflowOptimizationProblem />
      <WorkflowOptimizationService />
      <WorkflowOptimizationDeliverables />
      <WorkflowOptimizationFramework />
      <WorkflowOptimizationProcess />
      <WorkflowOptimizationUseCases />
      <WorkflowOptimizationBenefits />
      <WorkflowOptimizationCaseStudies />
      <WorkflowOptimizationWhyUs />
      <WorkflowOptimizationAbout />
      <WorkflowOptimizationCTA />
      <WorkflowOptimizationFAQ />
      <Footer/>
    </main>
  );
}