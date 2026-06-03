import Link from "next/link";

// ─── Icons ────────────────────────────────────────────────────────────────────

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ToolsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const KeyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="M21 2 11.5 11.5" />
    <path d="M15 5l4 4" />
    <path d="M19 1l2 2" />
  </svg>
);

const AlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

interface SecurityPillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const securityPillars: SecurityPillar[] = [
  {
    icon: <ShieldIcon />,
    title: "Industry-Standard Encryption",
    description:
      "Data transmitted to and from our website is encrypted via HTTPS/TLS, protecting your information in transit against interception or tampering.",
  },
  {
    icon: <UsersIcon />,
    title: "Restricted Access Controls",
    description:
      "Personal and client data is accessible only to team members and service providers who genuinely need it for their role.",
  },
  {
    icon: <ToolsIcon />,
    title: "Secure Platform Selection",
    description:
      "We prefer tools and platforms that maintain strong security certifications, regular audits, and transparent data practices.",
  },
  {
    icon: <KeyIcon />,
    title: "Post-Project Credential Management",
    description:
      "Access credentials and sensitive data shared during client projects are managed securely and removed when no longer required.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function DataSecurity() {
  return (
    <section
      aria-labelledby="data-security-heading"
      className="bg-[#0a0a0a] px-6 py-20 text-[#F5E6B8]"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* LEFT CONTENT */}
        <div>
          

          {/* H2 */}
          <h2
            id="data-security-heading"
            className="text-3xl font-semibold leading-tight sm:text-5xl"
          >
            Data Security
          </h2>

       

          {/* Intro */}
          <p className="max-w-xl text-[14px] leading-7 text-[#8a8680] sm:text-[15px]">
            Protecting the information you share with us is a responsibility we take seriously.
            The Prime Crafters applies layered security practices across our systems, tools,
            and processes.
          </p>

          <p className="mt-5 max-w-xl text-[13px] leading-6 text-[#8a8680]">
            Our security approach includes:
          </p>

          {/* Disclaimer */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-[#c9a84c]">
                <AlertIcon />
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-white">
                  Important: No digital system — however well protected — can be guaranteed 100% secure
                </h3>
                <p className="text-[13px] leading-6 text-[#8a8680]">
                  While we apply every reasonable safeguard, we cannot warrant absolute
                  security against all possible threats.
                </p>
              </div>
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#c9a84c]/10 bg-[#c9a84c]/[0.04] p-5">
            <div className="mt-0.5 text-[#c9a84c]">
              <LockIcon />
            </div>
            <p className="text-[13px] leading-6 text-[#8a8680]">
              If you have any concerns about the security of your data, please{" "}
              <Link
                href="/contact"
                className="text-[#c9a84c] transition hover:text-[#e5c56b]"
              >
                contact us immediately
              </Link>
              . We treat all security concerns as a priority.
            </p>
            
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid gap-3">
          {securityPillars.map((pillar) => (
            <div
              key={pillar.title}
             className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#c9a84c]/30 hover:bg-[#141414]"
            >
              {/* Icon */}
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#c9a84c]/20 bg-[#c9a84c]/10 text-[#c9a84c]">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-[16px] font-medium text-[#E8D5A0]">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-[12px] leading-5 text-[#7f7251]">
                {pillar.description}
              </p>
               
            </div>
          ))}
           
        </div>
      </div>
    </section>
  );
}