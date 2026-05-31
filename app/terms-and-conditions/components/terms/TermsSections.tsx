"use client"
import Link from "next/link";
interface TermsSectionProps {
  id: string;
  index: number;
  heading: string;
  children: React.ReactNode;
}

export function TermsSection({ id, index, heading, children }: TermsSectionProps) {
  return (
    <div
      id={id}
      className="scroll-mt-24 border-t border-[var(--border-subtle)] pt-12 first:border-t-0 first:pt-0"
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-[var(--gold-500)] text-sm font-mono mt-1 opacity-60">
          {String(index).padStart(2, "0")}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold">{heading}</h2>
      </div>
      <div className="pl-10">{children}</div>
    </div>
  );
}

// ─── Individual section components ───────────────────────────────────────────

export function TermsAgreement() {
  return (
    <TermsSection id="agreement" index={1} heading="Agreement to These Terms">
      <p className="text-[var(--text-secondary)] leading-relaxed">
        By accessing or using The Prime Crafters website, submitting inquiries, or contacting our
        team in any capacity, you agree to be bound by these Terms and Conditions. These terms
        constitute a legally binding agreement between you (the visitor or prospective client) and
        The Prime Crafters. If you do not agree with any part of these terms, please discontinue
        use of this website immediately. These website terms, terms of use, and any related policies
        govern your interaction with all content and services made available through this site.
      </p>
    </TermsSection>
  );
}

export function TermsAbout() {
  return (
    <TermsSection id="about" index={2} heading="About The Prime Crafters Services">
      <p className="text-[var(--text-secondary)] leading-relaxed">
        The Prime Crafters is a technology services company specialising in AI automation services,
        AI voice agents, workflow automation, AI chatbot development, and intelligent system
        integrations for businesses of all sizes. Our work is designed to streamline operations,
        enhance customer engagement, and drive measurable results through modern AI-powered
        solutions. These Terms apply to all interactions related to our services, whether initiated
        via this website, email, discovery calls, or any other communication channel.
      </p>
    </TermsSection>
  );
}

export function TermsWebsiteUse() {
  const allowed = [
    "Browsing our content, case studies, and service offerings",
    "Submitting genuine inquiries through our contact forms",
    "Requesting consultations or discovery sessions",
    "Learning about our AI automation and workflow services",
  ];

  const prohibited = [
    "Hacking, exploiting vulnerabilities, or unauthorized access attempts",
    "Submitting spam, fake, or fraudulent inquiries",
    "Automated scraping or data harvesting without written consent",
    "Uploading or distributing malware, viruses, or malicious code",
    "Any activity that disrupts or interferes with website functionality",
    "Impersonating another person or entity",
  ];

  return (
    <TermsSection id="website-use" index={3} heading="Use of Our Website">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        You are permitted to use this website for lawful purposes only. Acceptable uses include:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-6">
        {allowed.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 id="prohibited" className="text-xl font-semibold mb-3 text-[var(--foreground)]">
        Prohibited Website Activity
      </h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        The following activities are strictly prohibited on this website:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)]">
        {prohibited.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-red-400 mt-1">✕</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </TermsSection>
  );
}

export function TermsConsultations() {
  return (
    <TermsSection
      id="consultations"
      index={4}
      heading="Consultations, Proposals, and Project Requests"
    >
      <p className="text-[var(--text-secondary)] leading-relaxed">
        Completing a contact form, scheduling a discovery call, or participating in any
        consultation session does not constitute a binding client relationship. No formal
        engagement exists until both parties have executed a written agreement, signed proposal,
        or project contract outlining the scope, deliverables, and commercial terms. AI
        consultation terms and project proposal terms are governed exclusively by those written
        agreements. Any verbal or informal discussions prior to contract execution are non-binding.
      </p>
    </TermsSection>
  );
}

export function TermsClientResponsibilities() {
  return (
    <TermsSection id="client-responsibilities" index={5} heading="Client Responsibilities">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
        Successful delivery of AI automation and workflow projects depends on active client
        collaboration. Clients are expected to provide accurate information, necessary system
        access, timely approvals, required content and data, and constructive feedback throughout
        the project lifecycle. Delays caused by a lack of client input may affect timelines and
        outcomes.
      </p>

      <h3 id="accuracy" className="text-xl font-semibold mb-3 text-[var(--foreground)]">
        Accuracy of Information Provided
      </h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        Project timelines, system recommendations, and anticipated outcomes are dependent on the
        accuracy of business, technical, and workflow information provided by the client. The
        Prime Crafters cannot be held responsible for delays, suboptimal results, or additional
        costs arising from inaccurate or incomplete information supplied during the project
        engagement. Clients are encouraged to verify all data shared with our team prior to
        project kick-off.
      </p>
    </TermsSection>
  );
}

export function TermsAIServices() {
  return (
    <TermsSection id="ai-services" index={6} heading="AI Automation and Integration Services">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
        Our AI systems, voice agents, chatbots, automated workflows, and third-party integrations
        may rely on external platforms, APIs, and services that are beyond The Prime Crafters'
        direct control. Service availability, performance, and data handling of those third-party
        systems are governed by their respective providers. We will always endeavour to select
        reliable, enterprise-grade platforms and to notify clients of any material changes to the
        tools in use.
      </p>

      <h3 id="testing" className="text-xl font-semibold mb-3 text-[var(--foreground)]">
        Testing and Human Review
      </h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        All AI automations, voice agents, and chatbot systems should be thoroughly tested and
        reviewed by the client prior to deployment in any business-critical environment. Clients
        are responsible for applying appropriate human oversight and quality assurance processes
        before relying on AI-driven outputs for operational, financial, or customer-facing
        decisions. AI testing and human review are essential steps that The Prime Crafters
        strongly recommends as part of every go-live process.
      </p>
    </TermsSection>
  );
}

export function TermsPayments() {
  return (
    <TermsSection id="payments" index={7} heading="Payments, Scope, and Project Changes">
      <p className="text-[var(--text-secondary)] leading-relaxed">
        All pricing, payment schedules, deliverables, project timelines, revision allowances,
        refund conditions, and change request procedures are defined within the written project
        agreement or signed proposal for each engagement. Payment terms are binding upon execution
        of that agreement. Any requests to expand project scope, alter deliverables, or adjust
        timelines will be handled through a formal change request process and may result in
        revised pricing or scheduling. Disputes relating to payment terms, project scope, or
        deliverables are subject to the terms of the applicable written agreement.
      </p>
    </TermsSection>
  );
}

export function TermsIP() {
  return (
    <TermsSection id="ip" index={8} heading="Intellectual Property">
      <p className="text-[var(--text-secondary)] leading-relaxed">
        All website content, branding, design assets, copy, graphics, code, and materials
        published by The Prime Crafters are the exclusive intellectual property of The Prime
        Crafters unless otherwise stated in a written agreement. Reproduction, redistribution,
        or use of any such materials without prior written consent is strictly prohibited.
        Client-owned assets, data, and materials provided to us during a project remain the
        property of the client. Any intellectual property created as a project deliverable will
        be addressed in the relevant project agreement, which governs ownership transfer upon
        completion and payment.
      </p>
    </TermsSection>
  );
}

export function TermsThirdParty() {
  return (
    <TermsSection id="third-party" index={9} heading="Third-Party Tools and Platforms">
      <p className="text-[var(--text-secondary)] leading-relaxed">
        AI automation projects and integrations delivered by The Prime Crafters may utilise
        third-party tools and platforms including but not limited to CRMs, analytics software,
        hosting providers, AI voice platforms, API services, email marketing systems, scheduling
        tools, and payment processors. The use of such third-party tools is subject to those
        providers' own terms of service, privacy policies, and data handling agreements. The
        Prime Crafters is not liable for the performance, security, or availability of any
        third-party platform. Clients are encouraged to review the terms of any tools used
        within their project environment.
      </p>
    </TermsSection>
  );
}

export function TermsNoGuarantee() {
  return (
    <TermsSection id="no-guarantee" index={10} heading="No Guaranteed Results">
      <p className="text-[var(--text-secondary)] leading-relaxed">
        The Prime Crafters is committed to delivering high-quality AI automation solutions and
        strives to meet agreed project objectives. However, we do not guarantee specific revenue
        outcomes, lead volumes, search engine rankings, conversion rates, or any other business
        performance metric. Results from AI automation, workflow optimisation, and chatbot
        deployments are influenced by numerous external factors including market conditions,
        business operations, and platform performance that are beyond our control. All projections
        or estimates shared during consultations are indicative only and do not constitute a
        guarantee of results.
      </p>
    </TermsSection>
  );
}

export function TermsLiability() {
  return (
    <TermsSection id="liability" index={11} heading="Limitation of Liability">
      <p className="text-[var(--text-secondary)] leading-relaxed">
        To the fullest extent permitted by applicable law, The Prime Crafters shall not be liable
        for any indirect, incidental, consequential, special, or punitive damages arising from the
        use of this website, reliance on our content, or the performance or non-performance of any
        services. Our total liability in connection with any project or engagement shall not exceed
        the fees paid by the client for the specific service giving rise to the claim. We recommend
        that clients with complex legal requirements have these terms reviewed by qualified legal
        counsel before entering into any engagement.
      </p>
    </TermsSection>
  );
}

export function TermsUpdates() {
  return (
    <TermsSection id="updates" index={12} heading="Updates to These Terms">
      <p className="text-[var(--text-secondary)] leading-relaxed">
        These Terms and Conditions were last updated on{" "}
        <strong className="text-[var(--foreground)]">1 June 2025</strong>. The Prime Crafters
        reserves the right to update, modify, or replace these terms at any time at our sole
        discretion. Continued use of this website following the publication of any revised terms
        constitutes your acceptance of those changes. We encourage you to review this page
        periodically to stay informed of any updates to our terms of use and website policy.
      </p>
    </TermsSection>
  );
}

export function TermsContact() {
  return (
    <TermsSection id="contact" index={13} heading="Contact Us About These Terms">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
        If you have any questions, concerns, or requests relating to these Terms and Conditions,
        please do not hesitate to reach out to us. Our team is happy to clarify any aspect of
        our legal or service terms.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--gold-500)] text-black font-semibold hover:bg-[var(--gold-400)] transition-colors text-sm"
        >
          Contact Us
        </Link>
        <a
          href="mailto:hello@theprimecrafters.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--gold-500)] hover:border-[var(--gold-500)] transition-colors text-sm"
        >
          hello@theprimecrafters.com
        </a>
      </div>
    </TermsSection>
  );
}