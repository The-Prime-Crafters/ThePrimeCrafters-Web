import React from "react";

interface UseItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const useItems: UseItem[] = [
  {
    icon: <MessageIcon />,
    title: "Respond to Inquiries",
    desc: "We use your contact details to reply to questions, follow up on form submissions, and keep communication flowing.",
  },
  {
    icon: <CalendarIcon />,
    title: "Schedule Consultations",
    desc: "Booking data helps us confirm calls, send reminders, and prepare for your discovery session.",
  },
  {
    icon: <FileTextIcon />,
    title: "Prepare Proposals",
    desc: "Project details you share allow us to scope your requirements and put together accurate, tailored proposals.",
  },
  {
    icon: <ChartIcon />,
    title: "Improve Our Website",
    desc: "Analytics data helps us understand what's working, fix issues, and make the site faster and more useful for everyone.",
  },
  {
    icon: <CpuIcon />,
    title: "Deliver AI Automation Services",
    desc: "Client project data is used exclusively to build, test, and deploy the AI systems you've engaged us for.",
  },
  {
    icon: <HeadsetIcon />,
    title: "Support Existing Clients",
    desc: "We retain relevant information to assist with ongoing projects, answer support questions, and maintain service continuity.",
  },
  {
    icon: <ShieldIcon />,
    title: "Prevent Misuse",
    desc: "Technical and usage data helps us detect fraud, spam, or abuse and protect the integrity of our systems and clients.",
  },
];

const PrivacyHowWeUse: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        .pp-hwu-section {
          position: relative;
          background-color: #07070a;
          font-family: 'DM Sans', sans-serif;
          padding: 100px 100px;
          overflow: hidden;
        }

        .pp-hwu-topline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(201,168,76,0.3),
            transparent
          );
        }

        .pp-hwu-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .pp-hwu-inner {
          position: relative;
          max-width: 1300px;
          margin: 0 auto;
        }

        /* HEADER */

        .pp-hwu-header {
          margin-bottom: 80px;
          max-width: 760px;
        }

        .pp-hwu-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
        }

        .pp-hwu-label-line {
          width: 24px;
          height: 1px;
          background: #C9A84C;
        }

        .pp-hwu-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.1;
          color: #F5E6B8;
          margin: 0 0 24px;
        }

        .pp-hwu-header-desc {
          color: #8f825e;
          font-size: 16px;
          line-height: 1.9;
          max-width: 620px;
        }

        /* SPLIT */

        .pp-hwu-split {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: start;
        }

        /* LEFT */

        .pp-hwu-left {
          position: relative;
        }

        .pp-hwu-sticky {
          position: sticky;
          top: 120px;
        }

        .pp-hwu-left-badge {
          display: inline-flex;
          align-items: center;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.14);
          color: #C9A84C;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .pp-hwu-left-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.2;
          color: #F5E6B8;
          margin: 0 0 24px;
        }

        .pp-hwu-left-text {
          color: #847858;
          font-size: 15px;
          line-height: 1.9;
          max-width: 500px;
        }

        /* LEFT NOTICE */

        .pp-hwu-left-note {
          margin-top: 40px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 22px;
          border-radius: 14px;
          background: rgba(201,168,76,0.05);
          border: 1px solid rgba(201,168,76,0.1);
          max-width: 520px;
        }

        .pp-hwu-left-note-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pp-hwu-left-note-text {
          margin: 0;
          color: #8f825e;
          line-height: 1.8;
          font-size: 14px;
        }

        .pp-hwu-left-note-text strong {
          color: #C9A84C;
          font-weight: 500;
        }

        /* RIGHT */

        .pp-hwu-right {
          display: flex;
          flex-direction: column;
          gap: 34px;
          position: relative;
        }

        .pp-hwu-bullet {
          position: relative;
          display: flex;
          gap: 20px;
          padding-left: 10px;
        }

        .pp-hwu-bullet:last-child .pp-hwu-bullet-line {
          display: none;
        }

        .pp-hwu-bullet-line {
          position: absolute;
          left: 25px;
          top: 52px;
          width: 1px;
          height: calc(100% + 34px);
          background: linear-gradient(
            to bottom,
            rgba(201,168,76,0.3),
            rgba(201,168,76,0.02)
          );
        }

        .pp-hwu-bullet-icon {
          width: 50px;
          height: 50px;
          min-width: 50px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(201,168,76,0.06);
          border: 1px solid rgba(201,168,76,0.14);
          position: relative;
          z-index: 2;
        }

        .pp-hwu-bullet-content {
          flex: 1;
          padding-top: 4px;
        }

        .pp-hwu-bullet-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 10px;
        }

        .pp-hwu-bullet-number {
          font-size: 11px;
          letter-spacing: 0.08em;
          color: rgba(201,168,76,0.55);
          min-width: 22px;
        }

        .pp-hwu-bullet-title {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          color: #E8D5A0;
          line-height: 1.3;
        }

        .pp-hwu-bullet-desc {
          margin: 0;
          font-size: 14px;
          line-height: 1.9;
          color: #7f7251;
          max-width: 95%;
        }

        /* TABLET */

        @media (max-width: 1024px) {
          .pp-hwu-section {
            padding: 80px 40px;
          }

          .pp-hwu-split {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .pp-hwu-sticky {
            position: relative;
            top: unset;
          }
        }

        /* MOBILE */

        @media (max-width: 640px) {
          .pp-hwu-section {
            padding: 60px 20px;
          }

          .pp-hwu-bullet {
            gap: 16px;
          }

          .pp-hwu-bullet-title {
            font-size: 16px;
          }

          .pp-hwu-bullet-desc {
            font-size: 13px;
            max-width: 100%;
          }

          .pp-hwu-bullet-line {
            left: 22px;
          }

          .pp-hwu-bullet-icon {
            width: 44px;
            height: 44px;
            min-width: 44px;
          }
        }
      `}</style>

      <section className="pp-hwu-section">
        <div className="pp-hwu-topline" />
        <div className="pp-hwu-grid-bg" />

        <div className="pp-hwu-inner">
          {/* HEADER */}
          <div className="pp-hwu-header">
            <div className="pp-hwu-label">
              <span className="pp-hwu-label-line" />
              Data Usage
            </div>

            <h2 className="pp-hwu-h2">
              How We Use
              <br />
              Your Information
            </h2>

            <p className="pp-hwu-header-desc">
              Your data is used only for the purposes listed below.
              We do not use it for advertising, profiling, or
              unrelated third-party activities.
            </p>
          </div>

          {/* SPLIT */}
          <div className="pp-hwu-split">
            {/* LEFT */}
            <div className="pp-hwu-left">
              <div className="pp-hwu-sticky">
                <div className="pp-hwu-left-badge">
                  Privacy & Transparency
                </div>

                <h3 className="pp-hwu-left-heading">
                  Your data is used carefully,
                  securely, and only when necessary.
                </h3>

                <p className="pp-hwu-left-text">
                  We believe privacy should feel transparent —
                  not hidden behind complicated systems.
                  Every piece of information shared with
                  The Prime Crafters is used solely to
                  improve communication, support,
                  automation, and service delivery.
                </p>

                {/* LEFT NOTICE */}
                <div className="pp-hwu-left-note">
                  <div className="pp-hwu-left-note-icon">
                    <InfoIcon />
                  </div>

                  <p className="pp-hwu-left-note-text">
                    <strong>
                      We never use your data for advertising or third-party marketing.
                    </strong>{" "}
                    Information shared with us is strictly used to deliver,
                    improve, and support the services you request from
                    The Prime Crafters.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="pp-hwu-right">
              {useItems.map((item, index) => (
                <div className="pp-hwu-bullet" key={item.title}>
                  <div className="pp-hwu-bullet-line" />

                  <div className="pp-hwu-bullet-icon">
                    {item.icon}
                  </div>

                  <div className="pp-hwu-bullet-content">
                    <div className="pp-hwu-bullet-top">
                      <span className="pp-hwu-bullet-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h4 className="pp-hwu-bullet-title">
                        {item.title}
                      </h4>
                    </div>

                    <p className="pp-hwu-bullet-desc">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ICONS */

function MessageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export default PrivacyHowWeUse;