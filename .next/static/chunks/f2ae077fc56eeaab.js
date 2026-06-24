(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4107,e=>{"use strict";var i=e.i(339416);let t=()=>(0,i.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,i.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,i.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,i.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),r=()=>(0,i.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,i.jsx)("polyline",{points:"9 12 11 14 15 10"})]}),o=()=>(0,i.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,i.jsx)("polyline",{points:"22 6 12 13 2 6"})]});e.s(["default",0,()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        .pp-hero-section {
          position: relative;
          background: #080806;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 24px 80px;
          overflow: hidden;
          box-sizing: border-box;
          font-family: 'DM Sans', sans-serif;
        }

        .pp-hero-container {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          z-index: 2;
        }

        .pp-hero-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: min(900px, 100%);
          height: 420px;
          background: radial-gradient(
            ellipse,
            rgba(201,168,76,0.14) 0%,
            transparent 72%
          );
          pointer-events: none;
          z-index: 0;
        }

        .pp-hero-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(201,168,76,0.45),
            transparent
          );
          z-index: 1;
        }

        .pp-hero-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12px;
          color: #4b4535;
          margin-bottom: 26px;
          letter-spacing: 0.04em;
          flex-wrap: wrap;
        }

        .pp-hero-breadcrumb a {
          color: #C9A84C;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .pp-hero-breadcrumb a:hover {
          color: #F5E6B8;
        }

        .pp-hero-breadcrumb-sep {
          color: #3a3320;
        }

        .pp-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(48px, 7vw, 90px);
          font-weight: 700;
          color: #F5E6B8;
          margin: 0 0 22px;
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .pp-hero-subtitle {
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 300;
          color: #7a6e54;
          max-width: 760px;
          margin: 0 auto 52px;
          line-height: 1.9;
        }

        .pp-hero-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 22px;
          border-top: 1px solid rgba(201,168,76,0.08);
          padding-top: 30px;
        }

        .pp-hero-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6b5e38;
          font-size: 13px;
        }

        .pp-hero-meta-item a {
          color: #6b5e38;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .pp-hero-meta-item a:hover {
          color: #C9A84C;
        }

        .pp-hero-meta-divider {
          width: 1px;
          height: 16px;
          background: rgba(201,168,76,0.14);
        }

        /* 1440px */
        @media (max-width: 1440px) {
          .pp-hero-section {
            padding: 130px 40px 70px;
          }
        }

        /* Laptops */
        @media (max-width: 1200px) {
          .pp-hero-section {
            min-height: auto;
            padding: 120px 32px 70px;
          }

          .pp-hero-container {
            max-width: 900px;
          }
        }

        /* Tablets */
        @media (max-width: 1024px) {
          .pp-hero-section {
            padding: 110px 28px 64px;
          }

          .pp-hero-h1 {
            font-size: clamp(44px, 9vw, 72px);
          }

          .pp-hero-subtitle {
            max-width: 640px;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .pp-hero-section {
            min-height: auto;
            padding: 105px 20px 52px;
          }

          .pp-hero-container {
            max-width: 100%;
          }

          .pp-hero-h1 {
            font-size: 42px;
            line-height: 1.08;
            margin-bottom: 18px;
          }

          .pp-hero-subtitle {
            font-size: 15px;
            line-height: 1.75;
            margin-bottom: 40px;
          }

          .pp-hero-meta {
            flex-direction: column;
            gap: 14px;
            padding-top: 24px;
          }

          .pp-hero-meta-divider {
            display: none;
          }
        }
      `}),(0,i.jsxs)("section",{className:"pp-hero-section",children:[(0,i.jsx)("div",{className:"pp-hero-glow","aria-hidden":"true"}),(0,i.jsx)("div",{className:"pp-hero-shimmer","aria-hidden":"true"}),(0,i.jsxs)("div",{className:"pp-hero-container",children:[(0,i.jsxs)("nav",{className:"pp-hero-breadcrumb","aria-label":"Breadcrumb",children:[(0,i.jsx)("a",{href:"/",children:"Home"}),(0,i.jsx)("span",{className:"pp-hero-breadcrumb-sep",children:"/"}),(0,i.jsx)("span",{children:"Privacy Policy"})]}),(0,i.jsx)("h1",{className:"pp-hero-h1",children:"Privacy Policy"}),(0,i.jsx)("p",{className:"pp-hero-subtitle",children:"At The Prime Crafters, your privacy is not an afterthought — it is built into everything we do. This policy explains clearly and honestly how we collect, use, store, and protect the information you share with us when you visit our website or engage our AI automation services."}),(0,i.jsxs)("div",{className:"pp-hero-meta",children:[(0,i.jsxs)("div",{className:"pp-hero-meta-item",children:[(0,i.jsx)(t,{}),(0,i.jsx)("span",{children:"Last updated: June 2, 2026"})]}),(0,i.jsx)("div",{className:"pp-hero-meta-divider","aria-hidden":"true"}),(0,i.jsxs)("div",{className:"pp-hero-meta-item",children:[(0,i.jsx)(r,{}),(0,i.jsx)("span",{children:"The Prime Crafters"})]}),(0,i.jsx)("div",{className:"pp-hero-meta-divider","aria-hidden":"true"}),(0,i.jsxs)("div",{className:"pp-hero-meta-item",children:[(0,i.jsx)(o,{}),(0,i.jsx)("a",{href:"mailto:aman@theprimecrafters.com",children:"aman@theprimecrafters.com"})]})]})]})]})]})])},884136,e=>{"use strict";var i=e.i(339416);let t=[{icon:(0,i.jsx)(function(){return(0,i.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,i.jsx)("rect",{x:"9",y:"11",width:"6",height:"5",rx:"1"}),(0,i.jsx)("path",{d:"M12 11V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"})]})},{}),title:"Data Protection",sub:"Industry-standard safeguards applied"},{icon:(0,i.jsx)(function(){return(0,i.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),(0,i.jsx)("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),(0,i.jsx)("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})},{}),title:"Never Sold",sub:"Your data is never sold or rented"},{icon:(0,i.jsx)(function(){return(0,i.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,i.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,i.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,i.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]})},{}),title:"Full Transparency",sub:"Clear policy, plain language"},{icon:(0,i.jsx)(function(){return(0,i.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,i.jsx)("circle",{cx:"12",cy:"7",r:"4"}),(0,i.jsx)("polyline",{points:"16 11 17 12 20 9"})]})},{}),title:"Your Rights",sub:"Request access, updates, or deletion"}];e.s(["default",0,()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        * {
          box-sizing: border-box;
        }

        .pp-commit-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #080806;
          font-family: 'DM Sans', sans-serif;
          padding: 90px 24px;
        }

        .pp-commit-topline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(201,168,76,0.25),
            transparent
          );
        }

        .pp-commit-inner {
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.85fr 1.4fr;
  gap: 72px;
  align-items: start;
}
        /* LEFT */

        .pp-commit-left {
          position: sticky;
          top: 120px;
        }

        .pp-commit-label {
          display: flex;
          align-items: center;
          gap: 10px;

          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A84C;

          margin-bottom: 22px;
        }

        .pp-commit-label-line {
          width: 24px;
          height: 1px;
          background: #C9A84C;
          flex-shrink: 0;
        }

        .pp-commit-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.12;
          font-weight: 700;
          color: #F5E6B8;

          margin: 0 0 28px;
        }

        .pp-commit-para {
          font-size: 15px;
          line-height: 1.9;
          font-weight: 300;
          color: #7a6e54;

          margin: 0 0 22px;
          max-width: 560px;
        }

        /* RIGHT */

        .pp-commit-right {
          width: 100%;
        }

       .pp-commit-pillars {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.pp-commit-pillar {
  background: rgba(201,168,76,0.05);
  border: 1px solid rgba(201,168,76,0.12);
  border-radius: 18px;

  padding: 32px;
  min-height: 180px;

  display: flex;
  align-items: flex-start;
  gap: 20px;

  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;
}

        .pp-commit-pillar:hover {
          background: rgba(201,168,76,0.08);
          border-color: rgba(201,168,76,0.28);
          transform: translateY(-2px);
        }

        .pp-commit-pillar-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

       .pp-commit-pillar-title {
  font-size: 20px;
  font-weight: 600;
  color: #E8D5A0;
  line-height: 1.35;
  margin-bottom: 10px;
}

        .pp-commit-pillar-sub {
  font-size: 15px;
  line-height: 1.8;
  color: #7a6e54;
  font-weight: 300;
}

        /* Large laptop */

        @media (max-width: 1400px) {
          .pp-commit-inner {
            gap: 56px;
          }
        }

        /* Laptop */

        @media (max-width: 1200px) {
          .pp-commit-section {
            padding: 80px 40px;
          }

          .pp-commit-inner {
            grid-template-columns: 1fr;
            gap: 56px;
          }

          .pp-commit-left {
            position: relative;
            top: unset;
          }

          .pp-commit-para {
            max-width: 100%;
          }
        }

        /* Tablet */

        @media (max-width: 768px) {
          .pp-commit-section {
            padding: 70px 24px;
          }

          .pp-commit-pillars {
            grid-template-columns: 1fr;
          }

          .pp-commit-h2 {
            font-size: 42px;
          }
        }

        /* Mobile */

        @media (max-width: 640px) {
          .pp-commit-section {
            padding: 60px 20px;
          }

          .pp-commit-inner {
            gap: 44px;
          }

          .pp-commit-h2 {
            font-size: 36px;
            line-height: 1.14;
          }

          .pp-commit-para {
            font-size: 14px;
            line-height: 1.85;
          }

          .pp-commit-pillar {
            padding: 18px;
            gap: 14px;
          }

          .pp-commit-pillar-title {
            font-size: 14px;
          }

          .pp-commit-pillar-sub {
            font-size: 12px;
          }
        }
      `}),(0,i.jsxs)("section",{className:"pp-commit-section",children:[(0,i.jsx)("div",{className:"pp-commit-topline","aria-hidden":"true"}),(0,i.jsxs)("div",{className:"pp-commit-inner",children:[(0,i.jsxs)("div",{className:"pp-commit-left",children:[(0,i.jsxs)("h2",{className:"pp-commit-h2",children:["Our Commitment",(0,i.jsx)("br",{}),"to Your Privacy"]}),(0,i.jsx)("p",{className:"pp-commit-para",children:"Your trust makes our work possible. The Prime Crafters is an AI automation agency that works closely with businesses to build intelligent systems — and we understand better than most how sensitive data can be."}),(0,i.jsx)("p",{className:"pp-commit-para",children:"We are committed to protecting the privacy of every visitor, enquirer, and client who interacts with us, whether through this website, our contact forms, discovery calls, or active project engagements. This policy covers what information we collect, why we collect it, how it is used, and what rights you have over it."}),(0,i.jsx)("p",{className:"pp-commit-para",children:"We do not sell your data. We do not use it for advertising. We handle it with the same care we would want applied to our own."})]}),(0,i.jsx)("div",{className:"pp-commit-right",children:(0,i.jsx)("div",{className:"pp-commit-pillars",children:t.map(e=>(0,i.jsxs)("div",{className:"pp-commit-pillar",children:[(0,i.jsx)("div",{className:"pp-commit-pillar-icon",children:e.icon}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"pp-commit-pillar-title",children:e.title}),(0,i.jsx)("div",{className:"pp-commit-pillar-sub",children:e.sub})]})]},e.title))})})]})]})]})])},701805,e=>{"use strict";var i=e.i(339416),t=e.i(997904);let r=[{id:"you-provide",tag:"Direct Input",title:"Information You Provide Directly",intro:"When you contact us, complete a form, book a discovery call, or begin an engagement with The Prime Crafters, you may share the following:",items:["Full name and email address — to identify you and respond to your enquiry","Phone number — if provided, used only for scheduled calls or follow-ups","Company name and website URL — to understand your business context before any consultation","Service interest and project details — to scope your requirements and prepare relevant proposals","Messages, notes, and uploaded files — any content you choose to share to support your enquiry or project"],footer:"You are always in control of what you share. We only ask for what is necessary.",icon:(0,i.jsx)(function(){return(0,i.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,i.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})},{})},{id:"auto-collected",tag:"Automatic",title:"Information Collected Automatically",intro:"When you browse theprimecrafters.com, certain technical data is collected automatically by our website infrastructure and analytics tools. This may include:",items:["IP address — used to understand approximate geographic location and detect abuse","Device type, operating system, and browser — used to ensure the website displays correctly","Pages visited, session duration, and navigation path — used to understand how visitors engage with our content","Referral source — helps us understand how visitors find our website","Cookie data — from tools including Google Analytics and Google Tag Manager"],footer:"This information is collected and processed in aggregate. It is not used to personally identify individual visitors.",icon:(0,i.jsx)(function(){return(0,i.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),(0,i.jsx)("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),(0,i.jsx)("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{})},{id:"project-data",tag:"Client Projects",title:"Client Project & Automation Data",intro:"Clients who engage The Prime Crafters for AI automation, AI voice agent development, workflow automation, AI chatbot builds, or custom AI integrations may share business-sensitive information as part of active project delivery. This can include:",items:["Business process documentation and workflow data","CRM access, API credentials, or system login details (shared securely and deleted post-project unless retained by agreement)","Customer data relevant to the automation being built","Internal communications, scripts, or operational content"],footer:"All client project data is used exclusively for the purpose it was shared — scoping, building, testing, and delivering the agreed service. It is never accessed for any unrelated purpose, shared with third parties outside our delivery stack, or retained beyond the agreed engagement period.",icon:(0,i.jsx)(function(){return(0,i.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),(0,i.jsx)("rect",{x:"9",y:"9",width:"6",height:"6"}),(0,i.jsx)("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),(0,i.jsx)("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),(0,i.jsx)("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),(0,i.jsx)("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),(0,i.jsx)("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),(0,i.jsx)("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),(0,i.jsx)("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),(0,i.jsx)("line",{x1:"1",y1:"14",x2:"4",y2:"14"})]})},{})}];e.s(["default",0,()=>{let[e,o]=(0,t.useState)("you-provide"),a=r.find(i=>i.id===e);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        .pp-ic-section {
          position: relative;
          background: #080806;
          font-family: 'DM Sans', sans-serif;
          padding: 96px 120px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .pp-ic-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent);
        }

        .pp-ic-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .pp-ic-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          gap: 32px;
          flex-wrap: wrap;
        }

        .pp-ic-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }
        .pp-ic-label-line {
          display: inline-block;
          width: 24px;
          height: 1px;
          background: #C9A84C;
          flex-shrink: 0;
        }

        .pp-ic-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 700;
          color: #F5E6B8;
          line-height: 1.2;
          margin: 0;
        }

        .pp-ic-header-note {
          font-size: 14px;
          font-weight: 300;
          color: #5a4f35;
          max-width: 340px;
          line-height: 1.7;
          text-align: right;
        }

        /* Tabs */
        .pp-ic-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .pp-ic-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          border: 0.5px solid rgba(201,168,76,0.15);
          background: transparent;
          color: #5a4f35;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.22s ease;
          white-space: nowrap;
        }
        .pp-ic-tab:hover {
          border-color: rgba(201,168,76,0.35);
          color: #C9A84C;
          background: rgba(201,168,76,0.05);
        }
        .pp-ic-tab.active {
          border-color: rgba(201,168,76,0.5);
          background: rgba(201,168,76,0.08);
          color: #E8D5A0;
        }
        .pp-ic-tab-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #C9A84C;
          opacity: 0;
          transition: opacity 0.2s;
          flex-shrink: 0;
        }
        .pp-ic-tab.active .pp-ic-tab-dot { opacity: 1; }

        /* Content panel */
        .pp-ic-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          background: rgba(201,168,76,0.03);
          border: 0.5px solid rgba(201,168,76,0.12);
          border-radius: 14px;
          padding: 48px 52px;
          align-items: start;
        }

        .pp-ic-panel-left {}

        .pp-ic-panel-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A84C;
          background: rgba(201,168,76,0.1);
          border: 0.5px solid rgba(201,168,76,0.2);
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 20px;
        }

        .pp-ic-panel-h3 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.2vw, 30px);
          font-weight: 700;
          color: #F5E6B8;
          line-height: 1.25;
          margin: 0 0 20px;
        }

        .pp-ic-panel-intro {
          font-size: clamp(14px, 1.1vw, 15px);
          font-weight: 300;
          color: #7a6e54;
          line-height: 1.85;
          margin: 0 0 16px;
        }

        .pp-ic-panel-footer {
          font-size: clamp(13px, 1vw, 14px);
          font-weight: 300;
          color: #5a4f35;
          line-height: 1.85;
          margin: 0;
          font-style: italic;
        }

        .pp-ic-panel-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 14px;
          background: rgba(201,168,76,0.07);
          border: 0.5px solid rgba(201,168,76,0.18);
          margin-bottom: 28px;
        }

        /* Items list */
        .pp-ic-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pp-ic-list-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 18px;
          background: rgba(201,168,76,0.04);
          border: 0.5px solid rgba(201,168,76,0.1);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 300;
          color: #8a7a5a;
          line-height: 1.6;
          transition: border-color 0.2s, background 0.2s;
        }
        .pp-ic-list-item:hover {
          border-color: rgba(201,168,76,0.25);
          background: rgba(201,168,76,0.07);
          color: #a89060;
        }

        .pp-ic-list-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C9A84C;
          flex-shrink: 0;
          margin-top: 7px;
        }

        /* Large laptops */
        @media (max-width: 1440px) {
          .pp-ic-section { padding: 96px 80px; }
        }

        /* Tablets */
        @media (max-width: 1023px) {
          .pp-ic-section { padding: 72px 48px; }
          .pp-ic-panel {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 36px 32px;
          }
          .pp-ic-header-note { text-align: left; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .pp-ic-section { padding: 56px 20px; }
          .pp-ic-tabs { gap: 8px; }
          .pp-ic-tab { padding: 8px 14px; font-size: 12px; }
          .pp-ic-panel { padding: 28px 20px; }
        }
      `}),(0,i.jsxs)("section",{className:"pp-ic-section",children:[(0,i.jsx)("div",{className:"pp-ic-topline","aria-hidden":"true"}),(0,i.jsxs)("div",{className:"pp-ic-inner",children:[(0,i.jsxs)("div",{className:"pp-ic-header",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"pp-ic-label",children:[(0,i.jsx)("span",{className:"pp-ic-label-line"}),"Data Collection"]}),(0,i.jsx)("h2",{className:"pp-ic-h2",children:"Information We Collect"})]}),(0,i.jsx)("p",{className:"pp-ic-header-note",children:"Understanding what data we hold starts with knowing how it reaches us. We collect information in three ways: directly from you, automatically through your use of our website, and through active project work with clients."})]}),(0,i.jsx)("div",{className:"pp-ic-tabs",role:"tablist",children:r.map(t=>(0,i.jsxs)("button",{role:"tab","aria-selected":e===t.id,"aria-controls":`panel-${t.id}`,className:`pp-ic-tab${e===t.id?" active":""}`,onClick:()=>o(t.id),children:[(0,i.jsx)("span",{className:"pp-ic-tab-dot","aria-hidden":"true"}),t.title]},t.id))}),(0,i.jsxs)("div",{className:"pp-ic-panel",id:`panel-${a.id}`,role:"tabpanel",children:[(0,i.jsxs)("div",{className:"pp-ic-panel-left",children:[(0,i.jsx)("div",{className:"pp-ic-panel-icon-wrap","aria-hidden":"true",children:a.icon}),(0,i.jsx)("div",{className:"pp-ic-panel-tag",children:a.tag}),(0,i.jsx)("h3",{className:"pp-ic-panel-h3",children:a.title}),(0,i.jsx)("p",{className:"pp-ic-panel-intro",children:a.intro}),a.footer&&(0,i.jsx)("p",{className:"pp-ic-panel-footer",children:a.footer})]}),(0,i.jsx)("ul",{className:"pp-ic-list","aria-label":`${a.title} details`,children:a.items.map((e,t)=>(0,i.jsxs)("li",{className:"pp-ic-list-item",children:[(0,i.jsx)("span",{className:"pp-ic-list-bullet","aria-hidden":"true"}),e]},t))})]})]})]})]})}])},833360,e=>{"use strict";var i=e.i(339416);let t=[{label:"Website hosting and infrastructure",desc:"for reliable, secure website delivery"},{label:"Analytics and tag management",desc:"for aggregated site performance data"},{label:"CRM and client management tools",desc:"for organising enquiries and client records"},{label:"Scheduling and calendar platforms",desc:"for managing discovery calls and consultations"},{label:"Email and communication tools",desc:"for sending replies, proposals, and project updates"},{label:"Payment processors",desc:"for handling project invoices securely"},{label:"Security and monitoring tools",desc:"for protecting the website and client systems"},{label:"Automation platforms",desc:"used within client project delivery stacks"}],r=["Comply with a legal obligation, court order, or lawful government request","Investigate or prevent fraud, data breaches, or illegal activity","Protect the rights, safety, or property of The Prime Crafters, our clients, or the general public","Enforce our Terms and Conditions or other agreements"],o=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,i.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),a=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M12 3v18M3 9l9-6 9 6M5 11l-2 7h18l-2-7"})});function s(){return(0,i.jsxs)("section",{className:"tpc-section","aria-labelledby":"share-heading",style:{background:"#0a0a0a",color:"#f0ede6",padding:"80px 40px",maxWidth:"900px",margin:"0 auto",fontFamily:"'Inter', sans-serif"},children:[(0,i.jsx)("h2",{id:"share-heading",style:{fontSize:"36px",fontWeight:600,color:"#F5E6B8",lineHeight:1.2,margin:"0 0 16px"},children:"How We Share Your Information"}),(0,i.jsx)("p",{style:{fontSize:"16px",color:"#8a8680",lineHeight:1.7,maxWidth:"640px",marginBottom:"48px"},children:"The Prime Crafters does not sell, rent, lease, or trade your personal data — under any circumstances. Your information is shared only in the two specific situations described below."}),(0,i.jsxs)("div",{style:{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"28px 28px 24px",marginBottom:"20px",transition:"border-color 0.2s"},onMouseEnter:e=>e.currentTarget.style.borderColor="rgba(201,168,76,0.25)",onMouseLeave:e=>e.currentTarget.style.borderColor="#2a2a2a",children:[(0,i.jsxs)("h3",{style:{fontSize:"18px",fontWeight:500,color:"#f0ede6",margin:"0 0 12px",display:"flex",alignItems:"center",gap:"10px"},children:[(0,i.jsx)("span",{style:{color:"#c9a84c"},children:(0,i.jsx)(o,{})}),"Trusted Service Providers"]}),(0,i.jsx)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.65,margin:"0 0 12px"},children:"To operate our website and deliver AI automation services to clients, we work with a curated set of third-party tools and platforms. These providers are permitted to process your data only to the extent needed to support the specific service they provide to us. They are contractually prohibited from using it for any other purpose."}),(0,i.jsx)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.65,margin:"0 0 16px"},children:"Relevant categories of service providers include:"}),(0,i.jsx)("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"8px"},"aria-label":"Service provider categories",children:t.map(e=>(0,i.jsxs)("li",{style:{fontSize:"13px",color:"#8a8680",lineHeight:1.6,display:"flex",alignItems:"baseline",gap:"8px"},children:[(0,i.jsx)("span",{style:{color:"#c9a84c",fontSize:"10px",flexShrink:0},children:"◆"}),(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{style:{color:"#e8d5a0",fontWeight:500},children:e.label})," ","— ",e.desc]})]},e.label))})]}),(0,i.jsxs)("div",{style:{background:"rgba(201,168,76,0.04)",border:"1px solid rgba(201,168,76,0.10)",borderRadius:"12px",padding:"28px 28px 24px",marginBottom:"40px",transition:"border-color 0.2s"},onMouseEnter:e=>e.currentTarget.style.borderColor="rgba(201,168,76,0.25)",onMouseLeave:e=>e.currentTarget.style.borderColor="#2a2a2a",children:[(0,i.jsxs)("h3",{style:{fontSize:"18px",fontWeight:500,color:"#f0ede6",margin:"0 0 12px",display:"flex",alignItems:"center",gap:"10px"},children:[(0,i.jsx)("span",{style:{color:"#c9a84c"},children:(0,i.jsx)(a,{})}),"Legal or Security Requirements"]}),(0,i.jsx)("p",{style:{fontSize:"14px",color:"#7f7251",lineHeight:1.65,margin:"0 0 16px"},children:"In rare circumstances, we may be required or permitted by law to disclose personal information, including to:"}),(0,i.jsx)("ul",{style:{listStyle:"none",padding:0,margin:"0 0 16px",display:"flex",flexDirection:"column",gap:"8px"},children:r.map(e=>(0,i.jsxs)("li",{style:{fontSize:"13px",color:"#8a8680",lineHeight:1.6,display:"flex",alignItems:"baseline",gap:"8px"},children:[(0,i.jsx)("span",{style:{color:"#c9a84c",fontSize:"10px",flexShrink:0},children:"◆"}),e]},e))}),(0,i.jsx)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.65,margin:0},children:"Any such disclosure will be limited to what is strictly necessary and handled through appropriate legal channels."})]})]})}e.s(["default",()=>s])},759825,e=>{"use strict";var i=e.i(339416),t=e.i(997904);let r=[{name:"Essential Cookies",status:"Always Active",purpose:"Required for the website to load and function. Covers security, session management, and core page features.",example:"Session tokens, CSRF protection",canDisable:!1},{name:"Analytics Cookies",status:"Optional",purpose:"Records anonymised visit data including pages viewed, session duration, and traffic source. Helps us understand how the site is used.",example:"Google Analytics (_ga, _gid)",canDisable:!0},{name:"Tag Management Cookies",status:"Optional",purpose:"Manages the loading of third-party tracking scripts such as ad pixels and analytics tools through Google Tag Manager.",example:"GTM container cookies (_gtm)",canDisable:!0}],o=[{label:"Chrome",desc:"Settings → Privacy & Security → Cookies and other site data"},{label:"Safari",desc:"Preferences → Privacy → Manage Website Data"},{label:"Firefox",desc:"Settings → Privacy & Security → Cookies and Site Data"},{label:"Edge",desc:"Settings → Cookies and Site Permissions → Cookies"}];function a(){return(0,i.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,i.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,i.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}e.s(["default",0,()=>{let[e,s]=(0,t.useState)(null);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        .pp-ck-section {
          position: relative;
          background: #080806;
          font-family: 'DM Sans', sans-serif;
          padding: 96px 120px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .pp-ck-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent);
        }

        .pp-ck-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .pp-ck-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }

        .pp-ck-label-line {
          display: inline-block;
          width: 24px;
          height: 1px;
          background: #C9A84C;
        }

        .pp-ck-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 700;
          color: #F5E6B8;
          margin-bottom: 16px;
        }

        .pp-ck-intro {
          font-size: 14px;
          color: #7a6a45;
          line-height: 1.8;
          max-width: 760px;
          margin-bottom: 12px;
        }

        .pp-ck-meta {
          font-size: 13px;
          color: #5a4f35;
          line-height: 1.8;
          max-width: 760px;
          margin-bottom: 8px;
        }

        .pp-ck-meta strong {
          color: #9a8560;
          font-weight: 500;
        }

        .pp-ck-body {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          margin-top: 48px;
        }

        .pp-ck-table {
          width: 100%;
          border-collapse: collapse;
        }

        .pp-ck-table th {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #C9A84C;
          border-bottom: 0.5px solid rgba(201,168,76,0.2);
          padding: 0 12px 12px;
          text-align: left;
        }

        .pp-ck-table td {
          padding: 18px 12px;
          font-size: 13px;
          color: #6b5e38;
          border-bottom: 0.5px solid rgba(201,168,76,0.07);
          line-height: 1.7;
          vertical-align: top;
        }

        .pp-ck-table td:first-child {
          color: #E8D5A0;
          font-size: 13px;
          white-space: nowrap;
        }

        .pp-ck-status-badge {
          display: inline-block;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 20px;
          white-space: nowrap;
        }

        .pp-ck-status-active {
          background: rgba(201,168,76,0.1);
          color: #C9A84C;
          border: 0.5px solid rgba(201,168,76,0.25);
        }

        .pp-ck-status-optional {
          background: rgba(255,255,255,0.04);
          color: #6b5e38;
          border: 0.5px solid rgba(255,255,255,0.08);
        }

        .pp-ck-example {
          font-family: monospace;
          font-size: 11px;
          color: #4a4030;
        }

        .pp-ck-right-title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }

        .pp-ck-browser-item {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          background: transparent;
          border: none;
          border-bottom: 0.5px solid rgba(201,168,76,0.08);
          cursor: pointer;
          color: #9a8560;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
        }

        .pp-ck-browser-item:hover {
          color: #E8D5A0;
        }

        .pp-ck-browser-chevron {
          font-size: 10px;
          color: #C9A84C;
          transition: transform 0.2s;
        }

        .pp-ck-browser-chevron.open {
          transform: rotate(180deg);
        }

        .pp-ck-browser-desc {
          display: none;
          padding: 8px 0 14px;
          color: #5a4f35;
          font-size: 12px;
          line-height: 1.6;
        }

        .pp-ck-browser-desc.open {
          display: block;
        }

        .pp-ck-optout {
          margin-top: 28px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #5a4f35;
          font-size: 12px;
          line-height: 1.7;
        }

        .pp-ck-optout a {
          color: #C9A84C;
          text-decoration: none;
        }

        .pp-ck-optout a:hover {
          text-decoration: underline;
        }

        @media (max-width: 1023px) {
          .pp-ck-section {
            padding: 64px 24px;
          }
          .pp-ck-body {
            grid-template-columns: 1fr;
          }
        }
      `}),(0,i.jsxs)("section",{className:"pp-ck-section",children:[(0,i.jsx)("div",{className:"pp-ck-topline"}),(0,i.jsxs)("div",{className:"pp-ck-inner",children:[(0,i.jsx)("h2",{className:"pp-ck-h2",children:"Cookies and Analytics"}),(0,i.jsx)("p",{className:"pp-ck-intro",children:"Like most professional websites, theprimecrafters.com uses cookies to function correctly and to gather anonymised usage data that helps us improve the experience for all visitors."}),(0,i.jsxs)("p",{className:"pp-ck-meta",children:[(0,i.jsx)("strong",{children:"What is a cookie?"})," A cookie is a small text file placed on your device when you visit a website. It does not give us access to your device or personal files."]}),(0,i.jsxs)("p",{className:"pp-ck-meta",children:[(0,i.jsx)("strong",{children:"Managing your cookies:"})," You can control and delete cookies at any time through your browser settings. Disabling optional cookies will not affect core website functionality. You may also opt out of Google Analytics tracking directly using Google's Analytics Opt-Out Browser Add-on."]}),(0,i.jsxs)("div",{className:"pp-ck-body",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("table",{className:"pp-ck-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Cookie Category"}),(0,i.jsx)("th",{children:"Status"}),(0,i.jsx)("th",{children:"What It Does"}),(0,i.jsx)("th",{children:"Examples"})]})}),(0,i.jsx)("tbody",{children:r.map(e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.name}),(0,i.jsx)("td",{children:(0,i.jsx)("span",{className:`pp-ck-status-badge ${e.canDisable?"pp-ck-status-optional":"pp-ck-status-active"}`,children:e.status})}),(0,i.jsx)("td",{children:e.purpose}),(0,i.jsx)("td",{className:"pp-ck-example",children:e.example})]},e.name))})]})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"pp-ck-right-title",children:"Manage by Browser"}),o.map(t=>(0,i.jsxs)("div",{children:[(0,i.jsxs)("button",{type:"button",className:"pp-ck-browser-item",onClick:()=>s(e=>e===t.label?null:t.label),children:[t.label,(0,i.jsx)("span",{className:`pp-ck-browser-chevron ${e===t.label?"open":""}`,children:"▼"})]}),(0,i.jsx)("div",{className:`pp-ck-browser-desc ${e===t.label?"open":""}`,children:t.desc})]},t.label)),(0,i.jsxs)("div",{className:"pp-ck-optout",children:[(0,i.jsx)(a,{}),(0,i.jsxs)("span",{children:["You may also opt out of Google Analytics tracking directly using"," ",(0,i.jsx)("a",{href:"https://tools.google.com/dlpage/gaoptout",target:"_blank",rel:"noopener noreferrer",children:"Google's Analytics Opt-Out Browser Add-on"}),"."]})]})]})]})]})]})]})}])},871501,e=>{"use strict";var i=e.i(339416),t=e.i(770170);let r=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,i.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),o=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,i.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),a=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,i.jsx)("polyline",{points:"22 6 12 13 2 6"}),(0,i.jsx)("line",{x1:"2",y1:"2",x2:"22",y2:"22"})]}),s=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,i.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,i.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),n=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,i.jsx)("polyline",{points:"12 5 19 12 12 19"})]}),l=[{icon:(0,i.jsx)(r,{}),title:"Right of Access",description:"Request a copy of all personal data we hold about you, along with information about how it is processed."},{icon:(0,i.jsx)(o,{}),title:"Right to Rectification",description:"Ask us to correct any inaccurate or incomplete information we hold about you."},{icon:(0,i.jsx)(()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,i.jsx)("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),(0,i.jsx)("path",{d:"M10 11v6M14 11v6"}),(0,i.jsx)("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]}),{}),title:"Right to Erasure",description:"Request deletion of your personal data where we no longer have a legal basis to retain it."},{icon:(0,i.jsx)(a,{}),title:"Right to Restrict Processing",description:"Ask us to pause the processing of your data in certain circumstances."},{icon:(0,i.jsx)(r,{}),title:"Right to Data Portability",description:"Request your data in a structured, machine-readable format where technically feasible."},{icon:(0,i.jsx)(o,{}),title:"Right to Object",description:"Object to our processing of your data for direct marketing or legitimate interest purposes."},{icon:(0,i.jsx)(a,{}),title:"Right to Withdraw Consent",description:"Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing."}];function p(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .rights-section {
          background: #0a0a0a;
          padding: 100px 100px;
          color: #f0ede6;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .rights-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .rights-split {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 70px;
          align-items: start;
        }

        /* LEFT SIDE */

        .rights-left {
          position: sticky;
          top: 120px;
        }

        .rights-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 18px;
        }

        .rights-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 5vw, 50px);
          line-height: 1.08;
          color: #f5e6b8;
          margin: 0 0 22px;
        }

        .rights-line {
          width: 50px;
          height: 3px;
          border-radius: 999px;
          background: #c9a84c;
          margin-bottom: 28px;
        }

        .rights-text {
          font-size: 15px;
          line-height: 1.9;
          color: #8a8680;
          margin-bottom: 22px;
          max-width: 560px;
        }

        .rights-location {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 36px;
        }

        .rights-location p {
          margin: 0;
          font-size: 13px;
          line-height: 1.7;
          color: #77736d;
        }

        .rights-box {
          background: #161616;
          border: 1px solid #2a2a2a;
          border-radius: 14px;
          padding: 30px;
          max-width: 560px;
        }

        .rights-box h3 {
          font-size: 28px;
          font-weight: 500;
          margin: 0 0 14px;
          color: #f0ede6;
        }

        .rights-box p {
          font-size: 15px;
          line-height: 1.75;
          color: #8a8680;
          margin: 0 0 22px;
        }

        .rights-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 8px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.3);
          color: #c9a84c;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .rights-btn:hover {
          background: rgba(201,168,76,0.14);
          border-color: rgba(201,168,76,0.5);
        }

        .rights-footer {
          margin-top: 30px;
          font-size: 14px;
          color: #7d7871;
          line-height: 1.7;
          max-width: 560px;
        }

        .rights-footer a {
          color: #c9a84c;
          text-decoration: none;
        }

        
         .rights-right {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* BULLET ITEM */
.rights-bullet {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 6px 0;
}

/* small golden icon */
.rights-bullet-icon {
  width: 26px;
  height: 26px;
  min-width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9a84c;
  margin-top: 2px;
}

/* text block */
.rights-bullet-content h3 {
  
  font-size: 18px;
  font-weight: 500;
}
  color: #f0ede6;
  margin: 0 0 4px;
}

.rights-bullet-content p {
  
  font-size: 14px;
  line-height: 1.7;
}
  color: #8a8680;
  margin: 0;
  max-width: 600px;
}
        /* MOBILE */

        @media (max-width: 640px) {
          .rights-section {
            padding: 60px 20px;
          }

          .rights-heading {
            font-size: 36px;
          }

          .rights-box {
            padding: 24px;
          }

          .rights-card {
            padding: 22px;
          }
        }
      `}),(0,i.jsx)("section",{className:"rights-section",children:(0,i.jsx)("div",{className:"rights-container",children:(0,i.jsxs)("div",{className:"rights-split",children:[(0,i.jsxs)("div",{className:"rights-left",children:[(0,i.jsx)("h2",{className:"rights-heading",children:"Your Privacy Rights"}),(0,i.jsx)("p",{className:"rights-text",children:"Depending on your location and the privacy laws that apply to you — including GDPR (EU/UK), CCPA (California), or PDPA (Thailand and others) — you may have the following rights over the personal data we hold."}),(0,i.jsxs)("div",{className:"rights-location",children:[(0,i.jsx)("span",{style:{color:"#8a8680",marginTop:"2px"},children:(0,i.jsx)(s,{})}),(0,i.jsx)("p",{children:"These rights may include access, correction, deletion, restriction of processing, data portability, objection to processing, and withdrawal of consent where applicable."})]}),(0,i.jsxs)("div",{className:"rights-box",children:[(0,i.jsx)("h3",{children:"Access, Update, or Delete Your Information"}),(0,i.jsx)("p",{children:"To submit a privacy request, contact us directly. We aim to respond to all valid privacy requests within 30 days. In some cases, we may need to verify your identity before fulfilling a request in order to protect your data from unauthorised access."}),(0,i.jsxs)(t.default,{href:"/contact",className:"rights-btn",children:["Submit a Privacy Request",(0,i.jsx)(n,{})]})]}),(0,i.jsxs)("p",{className:"rights-footer",children:["Email:"," ",(0,i.jsx)("a",{href:"mailto:aman@theprimecrafters.com",children:"aman@theprimecrafters.com"})," ","or use our"," ",(0,i.jsx)(t.default,{href:"/contact",children:"contact form"})," ","to submit a privacy-related request."]})]}),(0,i.jsx)("div",{className:"rights-right",children:l.map(e=>(0,i.jsxs)("div",{className:"rights-bullet",children:[(0,i.jsx)("div",{className:"rights-bullet-icon",children:e.icon}),(0,i.jsxs)("div",{className:"rights-bullet-content",children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("p",{children:e.description})]})]},e.title))})]})})})]})}e.s(["default",()=>p])},864380,e=>{"use strict";var i=e.i(339416),t=e.i(770170);let r=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,i.jsx)("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),(0,i.jsx)("path",{d:"M10 11v6M14 11v6"}),(0,i.jsx)("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]}),o=[{icon:(0,i.jsx)(()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),(0,i.jsx)("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),{}),dataType:"Website enquiries and contact form submissions",retentionPeriod:"Duration of enquiry plus up to 12 months"},{icon:(0,i.jsx)(()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,i.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),{}),dataType:"Discovery call and consultation records",retentionPeriod:"Duration of pre-engagement period plus up to 12 months"},{icon:(0,i.jsx)(()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),(0,i.jsx)("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]}),{}),dataType:"Active client project data",retentionPeriod:"Duration of engagement plus up to 24 months post-completion"},{icon:(0,i.jsx)(()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M12 3v18M3 9l9-6 9 6M5 11l-2 7h18l-2-7"})}),{}),dataType:"Financial and invoicing records",retentionPeriod:"Up to 7 years (legal/tax compliance)"},{icon:(0,i.jsx)(()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),{}),dataType:"Security and abuse logs",retentionPeriod:"Up to 12 months"},{icon:(0,i.jsx)(()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,i.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,i.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,i.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,i.jsx)("polyline",{points:"10 9 9 9 8 9"})]}),{}),dataType:"Anonymised analytics data",retentionPeriod:"Up to 26 months (standard Google Analytics window)"}];function a(){return(0,i.jsxs)("section",{"aria-labelledby":"data-retention-heading",style:{background:"#0a0a0a",color:"#f0ede6",padding:"80px 40px",maxWidth:"900px",margin:"0 auto",fontFamily:"'Inter', sans-serif"},children:[(0,i.jsx)("h2",{id:"data-retention-heading",style:{fontSize:"46px",fontWeight:600,color:"#F5E6B8",lineHeight:1.2,margin:"0 0 16px"},children:"Data Retention"}),(0,i.jsx)("p",{style:{fontSize:"16px",color:"#8a8680",lineHeight:1.7,maxWidth:"640px",marginBottom:"48px"},children:"We do not hold on to data longer than necessary. Retention periods are determined by the original purpose for which data was collected and any applicable legal or contractual obligations."}),(0,i.jsxs)("div",{style:{marginBottom:"40px",borderRadius:"12px",border:"1px solid #2a2a2a",overflow:"hidden"},children:[(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",background:"#161616",borderBottom:"1px solid rgba(201,168,76,0.2)",padding:"14px 20px"},children:[(0,i.jsx)("span",{style:{fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"#c9a84c"},children:"Data Type"}),(0,i.jsx)("span",{style:{fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"#c9a84c"},children:"Retention Period"})]}),o.map((e,t)=>(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",padding:"18px 20px",borderBottom:t<o.length-1?"1px solid #1e1e1e":"none",background:t%2==0?"#0f0f0f":"#0a0a0a",transition:"background 0.2s",gap:"16px",alignItems:"center"},onMouseEnter:e=>e.currentTarget.style.background="#141414",onMouseLeave:e=>e.currentTarget.style.background=t%2==0?"#0f0f0f":"#0a0a0a",children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,i.jsx)("span",{style:{color:"#c9a84c",flexShrink:0},"aria-hidden":"true",children:e.icon}),(0,i.jsx)("span",{style:{fontSize:"14px",fontWeight:500,color:"#e8d5a0",lineHeight:1.5},children:e.dataType})]}),(0,i.jsx)("span",{style:{fontSize:"13px",color:"#8a8680",lineHeight:1.6},children:e.retentionPeriod})]},e.dataType))]}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",background:"rgba(255,255,255,0.03)",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"18px 20px",marginBottom:"40px"},children:[(0,i.jsx)("span",{style:{color:"#8a8680",marginTop:"2px",flexShrink:0},"aria-hidden":"true",children:(0,i.jsx)(r,{})}),(0,i.jsxs)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.65,margin:0},children:["When data is no longer required, it is securely deleted or anonymised so it can no longer be linked to you. You may also request deletion of your data at any time — see"," ",(0,i.jsx)(t.default,{href:"#privacy-rights",style:{color:"#c9a84c",textDecoration:"none"},children:"Your Privacy Rights"})," ","below."]})]})]})}e.s(["default",()=>a])},96395,e=>{"use strict";var i=e.i(339416),t=e.i(770170);let r=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("polyline",{points:"23 4 23 10 17 10"}),(0,i.jsx)("polyline",{points:"1 20 1 14 7 14"}),(0,i.jsx)("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),o=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,i.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,i.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,i.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),a=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,i.jsx)("polyline",{points:"20 6 9 17 4 12"})}),s=["Discovery call scheduling — tools such as Calendly, Cal.com, or Google Calendar may be used to book consultations. Their own privacy policies apply.","Payment processing — project invoices are handled through secure third-party processors such as Stripe or PayPal. We do not store card details.","Embedded widgets — pages may include third-party chat tools, interactive demos, or AI tools. Each is governed by the provider's own terms.","External resource links — we may reference useful articles, tools, or platforms. Visiting those sites is subject to their own privacy policies."];function n(){return(0,i.jsxs)("section",{"aria-labelledby":"policy-updates-heading",style:{background:"#0a0a0a",color:"#f0ede6",padding:"80px 40px",maxWidth:"900px",margin:"0 auto",fontFamily:"'Inter', sans-serif"},children:[(0,i.jsx)("h2",{id:"policy-updates-heading",style:{fontSize:"36px",fontWeight:600,color:"#F5E6B8",lineHeight:1.2,margin:"0 0 16px"},children:"Third-Party Links and Tools"}),(0,i.jsx)("p",{style:{fontSize:"16px",color:"#8a8680",lineHeight:1.7,maxWidth:"640px",marginBottom:"48px"},children:"Our website may include links to external websites, third-party platforms, booking pages, or embedded tools for your convenience. Once you navigate away from theprimecrafters.com or interact with an embedded third-party service, The PrimeCrafters has no control over how your data is handled."}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"40px"},children:(0,i.jsxs)("div",{style:{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"36px",width:"100%",maxWidth:"800px",transition:"border-color 0.2s"},onMouseEnter:e=>e.currentTarget.style.borderColor="rgba(201,168,76,0.25)",onMouseLeave:e=>e.currentTarget.style.borderColor="#2a2a2a",children:[(0,i.jsx)("div",{"aria-hidden":"true",style:{width:"48px",height:"48px",borderRadius:"10px",background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#c9a84c",marginBottom:"20px"},children:(0,i.jsx)(r,{})}),(0,i.jsx)("h3",{style:{fontSize:"18px",fontWeight:500,color:"#f0ede6",margin:"0 0 18px"},children:"Third-party services that may be present on or linked from this site include:"}),(0,i.jsx)("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"14px"},children:s.map(e=>(0,i.jsxs)("li",{style:{display:"flex",alignItems:"flex-start",gap:"12px",fontSize:"14px",color:"#8a8680",lineHeight:1.7},children:[(0,i.jsx)("span",{"aria-hidden":"true",style:{flexShrink:0,marginTop:"3px",color:"#c9a84c",background:"rgba(201,168,76,0.12)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"50%",width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)(a,{})}),e]},e))})]})}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",background:"rgba(255,255,255,0.03)",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"14px 20px",marginBottom:"40px"},children:[(0,i.jsx)("span",{style:{color:"#8a8680",flexShrink:0},children:(0,i.jsx)(o,{})}),(0,i.jsxs)("p",{style:{fontSize:"13px",color:"#8a8680",margin:0},children:[(0,i.jsx)("strong",{style:{color:"#a09c96",fontWeight:500},children:"Last updated:"})," ","June 2, 2026"]})]}),(0,i.jsx)("hr",{style:{border:"none",borderTop:"1px solid #2a2a2a",margin:"0 0 32px"}}),(0,i.jsxs)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.7,margin:0,maxWidth:"600px"},children:["A link or integration does not indicate endorsement of a third party's privacy or data practices. We encourage you to review the privacy policy of any service you interact with."," ",(0,i.jsx)(t.default,{href:"/contact",style:{color:"#c9a84c",textDecoration:"none"},children:"Get in touch"})," ","if you have any questions."]})]})}e.s(["default",()=>n])},485046,e=>{"use strict";var i=e.i(339416),t=e.i(770170);let r=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("polyline",{points:"23 4 23 10 17 10"}),(0,i.jsx)("polyline",{points:"1 20 1 14 7 14"}),(0,i.jsx)("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),o=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,i.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,i.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,i.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),a=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,i.jsx)("polyline",{points:"22 6 12 13 2 6"})]}),s=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,i.jsx)("polyline",{points:"12 5 19 12 12 19"})]}),n=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,i.jsx)("polyline",{points:"20 6 9 17 4 12"})}),l=["The revised policy is published on this page immediately",'The "Last Updated" date at the top of the page is changed to reflect the update',"Where changes are material, active clients may be notified directly","Continued use of our website after any update constitutes acceptance of the revised terms"];function p(){return(0,i.jsxs)("section",{"aria-labelledby":"policy-updates-heading",style:{background:"#0a0a0a",color:"#f0ede6",padding:"80px 40px",maxWidth:"900px",margin:"0 auto",fontFamily:"'Inter', sans-serif"},children:[(0,i.jsx)("h2",{id:"policy-updates-heading",style:{fontSize:"36px",fontWeight:600,color:"#f5e6b8",lineHeight:1.2,margin:"0 0 16px"},children:"Policy Updates and Privacy Contact"}),(0,i.jsxs)("p",{style:{fontSize:"16px",color:"#8a8680",lineHeight:1.7,maxWidth:"640px",marginBottom:"48px"},children:["We review and update this Privacy Policy periodically to reflect changes in our services, technology, tools, or legal obligations. We encourage you to review this page periodically. If you bookmarked an older version, the current policy is always at"," ","theprimecrafters.com/privacy-policy."]}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px",marginBottom:"40px"},children:[(0,i.jsxs)("div",{style:{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"28px",transition:"border-color 0.2s"},onMouseEnter:e=>e.currentTarget.style.borderColor="rgba(201,168,76,0.25)",onMouseLeave:e=>e.currentTarget.style.borderColor="#2a2a2a",children:[(0,i.jsx)("div",{"aria-hidden":"true",style:{width:"40px",height:"40px",borderRadius:"9px",background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#c9a84c",marginBottom:"16px"},children:(0,i.jsx)(r,{})}),(0,i.jsx)("h3",{style:{fontSize:"16px",fontWeight:500,color:"#f0ede6",margin:"0 0 12px"},children:"Keeping This Policy Current"}),(0,i.jsx)("p",{style:{fontSize:"13px",color:"#8a8680",lineHeight:1.6,margin:"0 0 16px"},children:"When updates are made:"}),(0,i.jsx)("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"10px"},"aria-label":"Update commitments",children:l.map(e=>(0,i.jsxs)("li",{style:{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"13px",color:"#8a8680",lineHeight:1.6},children:[(0,i.jsx)("span",{"aria-hidden":"true",style:{flexShrink:0,marginTop:"3px",color:"#c9a84c",background:"rgba(201,168,76,0.12)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"50%",width:"18px",height:"18px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)(n,{})}),e]},e))})]}),(0,i.jsxs)("div",{style:{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"28px",transition:"border-color 0.2s"},onMouseEnter:e=>e.currentTarget.style.borderColor="rgba(201,168,76,0.25)",onMouseLeave:e=>e.currentTarget.style.borderColor="#2a2a2a",children:[(0,i.jsx)("div",{"aria-hidden":"true",style:{width:"40px",height:"40px",borderRadius:"9px",background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#c9a84c",marginBottom:"16px"},children:(0,i.jsx)(a,{})}),(0,i.jsx)("h3",{style:{fontSize:"16px",fontWeight:500,color:"#f0ede6",margin:"0 0 12px"},children:"Contact Us About Privacy"}),(0,i.jsx)("p",{style:{fontSize:"13px",color:"#8a8680",lineHeight:1.6,margin:"0 0 20px"},children:"For any questions, concerns, or requests related to this Privacy Policy or the way we handle your data, please reach out directly. We take all privacy enquiries seriously and respond promptly."}),(0,i.jsxs)("p",{style:{fontSize:"13px",color:"#8a8680",lineHeight:1.6,margin:"0 0 20px"},children:["Email:"," ",(0,i.jsx)("a",{href:"mailto:aman@theprimecrafters.com",style:{color:"#c9a84c",textDecoration:"none"},children:"aman@theprimecrafters.com"}),(0,i.jsx)("br",{}),"Contact Page:"," ",(0,i.jsx)(t.default,{href:"/contact",style:{color:"#c9a84c",textDecoration:"none"},children:"theprimecrafters.com/contact"})]}),(0,i.jsxs)(t.default,{href:"/contact",style:{display:"inline-flex",alignItems:"center",gap:"8px",fontSize:"13px",fontWeight:500,color:"#c9a84c",textDecoration:"none",border:"1px solid rgba(201,168,76,0.3)",borderRadius:"6px",padding:"10px 16px",background:"rgba(201,168,76,0.08)",transition:"background 0.2s, border-color 0.2s"},onMouseEnter:e=>{let i=e.currentTarget;i.style.background="rgba(201,168,76,0.15)",i.style.borderColor="rgba(201,168,76,0.5)"},onMouseLeave:e=>{let i=e.currentTarget;i.style.background="rgba(201,168,76,0.08)",i.style.borderColor="rgba(201,168,76,0.3)"},children:["Contact Us",(0,i.jsx)(s,{})]})]})]}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",background:"rgba(255,255,255,0.03)",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"14px 20px",marginBottom:"40px"},children:[(0,i.jsx)("span",{style:{color:"#8a8680",flexShrink:0},"aria-hidden":"true",children:(0,i.jsx)(o,{})}),(0,i.jsxs)("p",{style:{fontSize:"13px",color:"#8a8680",margin:0},children:[(0,i.jsx)("strong",{style:{color:"#a09c96",fontWeight:500},children:"Last Updated:"})," ","June 2, 2026"]})]}),(0,i.jsx)("hr",{style:{border:"none",borderTop:"1px solid #2a2a2a",margin:"0 0 32px"}}),(0,i.jsxs)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.7,margin:0,maxWidth:"600px"},children:["The Prime Crafters — AI Automation Agency | Privacy Policy © 2026 The Prime Crafters. All rights reserved. For any questions or concerns, please do not hesitate to"," ",(0,i.jsx)(t.default,{href:"/contact",style:{color:"#c9a84c",textDecoration:"none"},children:"get in touch"}),"."]})]})}e.s(["default",()=>p])}]);