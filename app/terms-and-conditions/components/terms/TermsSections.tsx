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
        By visiting, browsing, or using any part of theprimecrafters.com — including submitting
        contact forms, requesting consultations, or engaging our team through any channel —
        you agree to be legally bound by these Terms and Conditions.
        These terms constitute a binding agreement between you (the visitor, prospect, or
        client) and The Prime Crafters, an AI automation agency registered and operating
        internationally. If you do not agree with any part of these terms, you must stop using this
        website immediately.
        Accessing any page of this website, sending us an enquiry, or entering into a service
        engagement will be treated as confirmation of your acceptance. These terms apply
        regardless of the device or channel through which you interact with us.
      </p>
    </TermsSection>
  );
}

export function TermsAbout() {
  const coreServices = [
    "AI Automation — end-to-end automation of business processes using artificial intelligence",
    "AI Voice Agents — custom voice AI systems for sales, support, and customer engagement",
    "Workflow Automation — intelligent workflow design, integration, and optimisation",
    "AI Chatbot Development — conversational AI built for lead capture, support, and operations",
    "Custom AI Integrations — connecting AI capabilities with your existing CRM, ERP, and business tools",
  ];

  return (
    <TermsSection id="about" index={2} heading="About The Prime Crafters Services">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        The Prime Crafters is a specialist AI automation agency delivering intelligent systems
        and workflow solutions for businesses across industries. Our core services include:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-6">
        {coreServices.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        These Terms and Conditions apply to all interactions with The Prime Crafters related to
        the above services, whether initiated via this website, email, phone, social media, or any
        other communication channel.
      </p>
    </TermsSection>
  );
}

export function TermsWebsiteUse() {
  const allowed = [
    "Browsing our service pages, case studies, and project portfolio",
    "Submitting genuine enquiries through our contact forms",
    "Requesting discovery calls or consultations",
    "Reviewing our published content, resources, and legal policies",
  ];

  const prohibited = [
    "Unauthorised access — attempting to hack, exploit vulnerabilities, bypass authentication, or access any part of the website or its backend without permission",
    "Spam and fake submissions — submitting false, misleading, or automated enquiries through any form on this website",
    "Automated scraping — using bots, crawlers, or scripts to extract website content, data, or contact information without prior written consent from The Prime Crafters",
    "Malware and malicious code — uploading, transmitting, or distributing any software designed to damage, disrupt, or gain unauthorised access to systems",
    "Impersonation — misrepresenting your identity, company affiliation, or authority in any communication with us",
    "Interference — taking any action that overloads, disrupts, or impairs the performance of this website or its underlying infrastructure",
  ];

  return (
    <TermsSection id="website-use" index={3} heading="Use of Our Website">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        theprimecrafters.com is made available for lawful, good-faith use by businesses and
        individuals seeking information about our services or wishing to engage with us.
        Permitted uses include:
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
        The following activities are strictly prohibited and may result in restricted access,
        account termination, and legal action where applicable:
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
  const contractItems = [
    "Scope of work and deliverables",
    "Project timeline and milestones",
    "Pricing and payment schedule",
    "Revision allowances and change request process",
    "Any confidentiality or data handling provisions",
  ];

  return (
    <TermsSection
      id="consultations"
      index={4}
      heading="Consultations, Proposals, and Project Requests"
    >
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Submitting a contact form, booking a discovery call, or attending a consultation with
        The Prime Crafters does not establish a formal client relationship or create any binding
        obligation on either party.
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        No engagement exists until both The Prime Crafters and the client have reviewed and
        executed a written agreement, signed proposal, or project contract that clearly defines:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-6">
        {contractItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        All verbal discussions, informal conversations, and pre-proposal communications are
        exploratory only and are not legally binding. The Prime Crafters reserves the right to
        decline any project or engagement at any stage prior to contract execution.
      </p>
    </TermsSection>
  );
}

export function TermsClientResponsibilities() {
  const responsibilities = [
    "Provide accurate, complete, and current business, technical, and operational information required for the project",
    "Grant timely access to the systems, platforms, credentials, and tools needed for delivery",
    "Review and provide feedback on work-in-progress deliverables, prototypes, and workflows within agreed timeframes",
    "Ensure that all content, data, and assets provided are owned by the client or properly licensed for use",
    "Communicate openly about changes in business requirements that may affect the project scope or direction",
  ];

  return (
    <TermsSection id="client-responsibilities" index={5} heading="Client Responsibilities">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        The quality and timeliness of AI automation, workflow builds, and integration projects
        are directly dependent on the client's active participation throughout the engagement.
        Clients who engage The Prime Crafters agree to the following responsibilities:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-6">
        {responsibilities.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
        Failure to meet these responsibilities may result in project delays, revised timelines, or
        additional costs. The Prime Crafters will not be held liable for outcomes affected by
        insufficient or late client input.
      </p>

      <h3 id="accuracy" className="text-xl font-semibold mb-3 text-[var(--foreground)]">
        Accuracy of Information Provided
      </h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        AI automation systems, voice agents, chatbot logic, and workflow designs are built on
        the information clients provide during discovery and project scoping. The Prime Crafters
        develops recommendations, architectures, and delivery plans based on the accuracy of
        that input.
        If information provided is found to be inaccurate, incomplete, or materially misleading —
        whether intentionally or otherwise — The Prime Crafters cannot be held responsible for
        resulting delays, rework, additional costs, or underperformance. Clients are strongly
        encouraged to verify all data, credentials, and process documentation before sharing it
        with our team.
      </p>
    </TermsSection>
  );
}

export function TermsAIServices() {
  const endeavours = [
    "Select reliable, enterprise-grade platforms for client deployments",
    "Notify clients promptly of any material changes to tools used in their project",
    "Document third-party dependencies clearly within project agreements",
  ];

  const clientResponsibilities = [
    "Conducting adequate testing in a staging or test environment before go-live",
    "Applying human oversight to AI-generated outputs before they affect operational, financial, or customer-facing processes",
    "Signing off on all automations and workflows as fit for purpose prior to live deployment",
  ];

  return (
    <TermsSection id="ai-services" index={6} heading="AI Automation and Integration Services">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        AI systems built by The Prime Crafters — including voice agents, automated workflows,
        AI chatbots, and custom integrations — may utilise or connect to third-party platforms,
        APIs, and cloud-based services that operate independently of The Prime Crafters.
        The availability, performance, data practices, and pricing of those third-party platforms
        are controlled by their respective providers and are subject to change. The Prime
        Crafters will always endeavour to:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
        {endeavours.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
        However, The Prime Crafters cannot guarantee the uninterrupted availability or
        performance of any third-party service and accepts no liability for disruptions caused by
        external platform changes or outages.
      </p>

      <h3 id="testing" className="text-xl font-semibold mb-3 text-[var(--foreground)]">
        Testing and Human Review
      </h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Before any AI automation, voice agent, chatbot, or workflow is deployed into a live
        business environment, it must be thoroughly tested and reviewed by the client. This is
        not optional — it is an essential part of responsible AI deployment.
        Clients are solely responsible for:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
        {clientResponsibilities.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        The Prime Crafters strongly recommends a structured user acceptance testing (UAT)
        phase for every project. Deploying AI systems without adequate testing, against our
        recommendation, releases The Prime Crafters from liability for any resulting issues.
      </p>
    </TermsSection>
  );
}

export function TermsPayments() {
  const keyPrinciples = [
    "Payment obligations become binding upon written acceptance or signing of a proposal or contract",
    "Scope creep — any request to expand deliverables, add features, or adjust the project direction beyond the agreed scope will be handled via a formal change request and may result in revised fees and timelines",
    "Refunds — refund eligibility, if any, is defined within the individual project agreement",
    "Disputes — any disagreement relating to invoicing, deliverables, or scope is governed exclusively by the terms of the written agreement for that engagement",
  ];

  return (
    <TermsSection id="payments" index={7} heading="Payments, Scope, and Project Changes">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        All commercial terms — including pricing, payment milestones, deliverable definitions,
        project timelines, revision inclusions, refund eligibility, and change request procedures
        — are established within the signed project agreement or proposal for each engagement.
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Key principles:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
        {keyPrinciples.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        The Prime Crafters does not honour informal scope changes requested verbally or
        outside of the agreed change management process.
      </p>
    </TermsSection>
  );
}

export function TermsIP() {
  return (
    <TermsSection id="ip" index={8} heading="Intellectual Property">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        <strong className="text-[var(--foreground)]">The Prime Crafters' Intellectual Property</strong>
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        All content published on theprimecrafters.com — including but not limited to written
        copy, branding, logos, design assets, graphics, images, code, and structural layouts —
        is the exclusive intellectual property of The Prime Crafters. Unauthorised reproduction,
        redistribution, modification, or commercial use of any website content is strictly
        prohibited without prior written consent.
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        <strong className="text-[var(--foreground)]">Client-Owned Assets</strong>
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Any materials, data, content, branding, or systems provided to The Prime Crafters by
        the client during a project engagement remain the exclusive property of the client. The
        Prime Crafters will not use client-owned assets for any purpose beyond delivering the
        contracted services.
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        <strong className="text-[var(--foreground)]">Custom Deliverables</strong>
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        Ownership of custom-built AI systems, automations, chatbots, voice agents, workflow
        logic, and other project deliverables is determined by the terms of the signed project
        agreement. As a general principle, full intellectual property ownership of bespoke
        deliverables transfers to the client upon completion and full payment of all outstanding
        fees.
      </p>
    </TermsSection>
  );
}

export function TermsThirdParty() {
  const platformCategories = [
    "CRM and customer management platforms",
    "AI voice and conversational AI providers",
    "Cloud hosting and infrastructure services",
    "Analytics and data reporting tools",
    "Email marketing and communication platforms",
    "Scheduling and calendar integrations",
    "Payment gateways and invoicing systems",
    "Workflow and automation platforms (e.g. Make, Zapier, n8n)",
  ];

  return (
    <TermsSection id="third-party" index={9} heading="Third-Party Tools and Platforms">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Delivering modern AI automation requires the use of best-in-class third-party tools and
        platforms. Project engagements with The Prime Crafters may involve tools from the
        following categories:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-6">
        {platformCategories.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        Important: Each third-party platform operates under its own terms of service, privacy
        policy, and data processing agreement. The Prime Crafters is not liable for the
        performance, security, data practices, pricing changes, or service interruptions of any
        third-party platform used within a client project.
        Clients are encouraged to review and accept the terms of any tools incorporated into
        their project environment.
      </p>
    </TermsSection>
  );
}

export function TermsNoGuarantee() {
  const noGuarantees = [
    "Revenue growth or sales increases attributed to delivered systems",
    "Volume of leads, enquiries, bookings, or conversions generated",
    "Search engine rankings or organic traffic improvements",
    "Automation cost savings or efficiency metrics",
    "AI system accuracy, response quality, or uptime beyond agreed SLAs in a signed contract",
    "Third-party platform performance or availability",
  ];

  return (
    <TermsSection id="no-guarantee" index={10} heading="No Guaranteed Results">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        The Prime Crafters is committed to delivering excellent work and building AI automation
        solutions that create real, measurable value for clients. However, we do not and cannot
        guarantee specific business outcomes.
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        We make no guarantees regarding:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-6">
        {noGuarantees.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        Results from AI automation deployments are influenced by a wide range of external
        factors including market conditions, business operations, data quality, human decisions,
        and third-party technology performance — none of which are within The Prime Crafters'
        control.
        Any projections, benchmarks, or outcome estimates shared during discovery or
        proposals are indicative only. They represent reasonable expectations based on
        available information and do not constitute contractual guarantees.
      </p>
    </TermsSection>
  );
}

export function TermsLiability() {
  const liabilityItems = [
    "Your use of or inability to use this website",
    "Reliance on any content, advice, or information published on this site",
    "The performance, delay, or non-performance of any contracted services",
    "Third-party platform failures, outages, or data issues",
    "Errors in AI-generated outputs used without adequate human review",
    "Loss of business, revenue, data, goodwill, or opportunity",
  ];

  return (
    <TermsSection id="liability" index={11} heading="Limitation of Liability">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        To the fullest extent permitted by applicable law, The Prime Crafters shall not be held
        liable for any indirect, incidental, special, consequential, or punitive damages arising
        from:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-6">
        {liabilityItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        Cap on liability: In all cases, The Prime Crafters' total financial liability in connection
        with any single engagement shall not exceed the total fees paid by the client for the
        specific service or project giving rise to the claim.
        Nothing in these terms limits liability for death or personal injury caused by negligence,
        fraud, or any other matter that cannot be excluded under applicable law.
        We recommend that clients with significant legal, financial, or regulatory exposure seek
        independent legal advice before entering into any engagement.
      </p>
    </TermsSection>
  );
}

export function TermsUpdates() {
  const updateItems = [
    "The revised terms are published on this page immediately",
    "The \"Last Updated\" date is changed to reflect the revision",
    "Continued use of this website after publication of updated terms constitutes your acceptance",
    "For material changes affecting active client engagements, we will endeavour to notify affected clients directly",
  ];

  return (
    <TermsSection id="updates" index={12} heading="Updates to These Terms">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        These Terms and Conditions were last updated on{" "}
        <strong className="text-[var(--foreground)]">June 2, 2026</strong>. The Prime Crafters
        reserves the right to revise, update, or replace any part of these terms at any time and
        at our sole discretion.
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        When updates are made:
      </p>
      <ul className="space-y-2 text-[var(--text-secondary)] mb-6">
        {updateItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--gold-500)] mt-1">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        We recommend bookmarking this page and reviewing it periodically. The current version
        of these Terms and Conditions is always available at theprimecrafters.com/terms-and-conditions.
      </p>
    </TermsSection>
  );
}

export function TermsContact() {
  return (
    <TermsSection id="contact" index={13} heading="Contact Us About These Terms">
      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
        If you have questions, concerns, or require clarification about any aspect of these Terms
        and Conditions — or about engaging The Prime Crafters for an AI automation project —
        our team is ready to help.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
      <p className="text-[var(--text-secondary)] text-sm">
        <strong className="text-[var(--foreground)]">Last Updated:</strong> June 2, 2026
      </p>
    </TermsSection>
  );
}