module.exports=[59377,a=>{"use strict";var b=a.i(26160);let c=[{icon:(0,b.jsx)(function(){return(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,b.jsx)("rect",{x:"9",y:"11",width:"6",height:"5",rx:"1"}),(0,b.jsx)("path",{d:"M12 11V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"})]})},{}),title:"Data Protection",sub:"Secure storage & access controls"},{icon:(0,b.jsx)(function(){return(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),(0,b.jsx)("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),(0,b.jsx)("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})},{}),title:"Never Sold",sub:"Your data stays with us"},{icon:(0,b.jsx)(function(){return(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,b.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,b.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,b.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]})},{}),title:"Full Transparency",sub:"Clear policies, no fine print surprises"},{icon:(0,b.jsx)(function(){return(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,b.jsx)("circle",{cx:"12",cy:"7",r:"4"}),(0,b.jsx)("polyline",{points:"16 11 17 12 20 9"})]})},{}),title:"Your Rights",sub:"Access, update, or delete anytime"}];a.s(["default",0,()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
          grid-template-columns: 0.95fr 1.2fr;
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
          border-radius: 14px;

          padding: 22px;

          display: flex;
          align-items: flex-start;
          gap: 16px;

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
          font-size: 15px;
          font-weight: 500;
          color: #E8D5A0;
          line-height: 1.4;
          margin-bottom: 4px;
        }

        .pp-commit-pillar-sub {
          font-size: 13px;
          line-height: 1.6;
          color: #6f6347;
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
      `}),(0,b.jsxs)("section",{className:"pp-commit-section",children:[(0,b.jsx)("div",{className:"pp-commit-topline","aria-hidden":"true"}),(0,b.jsxs)("div",{className:"pp-commit-inner",children:[(0,b.jsxs)("div",{className:"pp-commit-left",children:[(0,b.jsxs)("div",{className:"pp-commit-label",children:[(0,b.jsx)("span",{className:"pp-commit-label-line"}),"Introduction"]}),(0,b.jsxs)("h2",{className:"pp-commit-h2",children:["Our Commitment",(0,b.jsx)("br",{}),"to Your Privacy"]}),(0,b.jsx)("p",{className:"pp-commit-para",children:"At The Prime Crafters, we believe trust is the foundation of every client relationship. We are committed to protecting the privacy of every visitor, prospect, and client who interacts with us — whether through our website, contact forms, or consultations."}),(0,b.jsx)("p",{className:"pp-commit-para",children:"Any information you share with us is handled with care, used only for the purposes it was provided, and never sold to third parties. This policy explains exactly what we collect, why we collect it, and how we protect it."})]}),(0,b.jsx)("div",{className:"pp-commit-right",children:(0,b.jsx)("div",{className:"pp-commit-pillars",children:c.map(a=>(0,b.jsxs)("div",{className:"pp-commit-pillar",children:[(0,b.jsx)("div",{className:"pp-commit-pillar-icon",children:a.icon}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"pp-commit-pillar-title",children:a.title}),(0,b.jsx)("div",{className:"pp-commit-pillar-sub",children:a.sub})]})]},a.title))})})]})]})]})])},66673,a=>{"use strict";var b=a.i(26160),c=a.i(42004);let d=[{id:"you-provide",tag:"Direct Input",title:"Information You Provide",intro:"When you fill out a contact form, book a consultation, or get in touch with us, you may share:",items:["Full name and email address","Phone number and company name","Website URL and service interest","Project details, messages, and any files you submit"],icon:(0,b.jsx)(function(){return(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,b.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})},{})},{id:"auto-collected",tag:"Automatic",title:"Information Collected Automatically",intro:"When you visit our website, certain data is collected automatically through analytics tools and standard browser activity:",items:["IP address and approximate location","Device type, browser, and operating system","Pages visited, time on site, and referral source","Cookie data and analytics identifiers (e.g. Google Analytics, Google Tag Manager)"],icon:(0,b.jsx)(function(){return(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),(0,b.jsx)("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),(0,b.jsx)("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{})},{id:"project-data",tag:"Client Projects",title:"Client Project & Automation Data",intro:"For clients who engage our AI automation services, additional data may be shared with us for project delivery purposes:",items:["Data shared for AI voice agent setup and configuration","Workflow details for automation and integration projects","Business logic, credentials, and system access required for AI chatbot or CRM integrations","Implementation planning documents and briefing materials"],icon:(0,b.jsx)(function(){return(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),(0,b.jsx)("rect",{x:"9",y:"9",width:"6",height:"6"}),(0,b.jsx)("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),(0,b.jsx)("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),(0,b.jsx)("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),(0,b.jsx)("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),(0,b.jsx)("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),(0,b.jsx)("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),(0,b.jsx)("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),(0,b.jsx)("line",{x1:"1",y1:"14",x2:"4",y2:"14"})]})},{})}];a.s(["default",0,()=>{let[a,e]=(0,c.useState)("you-provide"),f=d.find(b=>b.id===a);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
          margin: 0;
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
      `}),(0,b.jsxs)("section",{className:"pp-ic-section",children:[(0,b.jsx)("div",{className:"pp-ic-topline","aria-hidden":"true"}),(0,b.jsxs)("div",{className:"pp-ic-inner",children:[(0,b.jsxs)("div",{className:"pp-ic-header",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"pp-ic-label",children:[(0,b.jsx)("span",{className:"pp-ic-label-line"}),"Data Collection"]}),(0,b.jsx)("h2",{className:"pp-ic-h2",children:"Information We Collect"})]}),(0,b.jsx)("p",{className:"pp-ic-header-note",children:"We only collect what's genuinely needed — nothing more. Select a category below to learn what applies."})]}),(0,b.jsx)("div",{className:"pp-ic-tabs",role:"tablist",children:d.map(c=>(0,b.jsxs)("button",{role:"tab","aria-selected":a===c.id,"aria-controls":`panel-${c.id}`,className:`pp-ic-tab${a===c.id?" active":""}`,onClick:()=>e(c.id),children:[(0,b.jsx)("span",{className:"pp-ic-tab-dot","aria-hidden":"true"}),c.title]},c.id))}),(0,b.jsxs)("div",{className:"pp-ic-panel",id:`panel-${f.id}`,role:"tabpanel",children:[(0,b.jsxs)("div",{className:"pp-ic-panel-left",children:[(0,b.jsx)("div",{className:"pp-ic-panel-icon-wrap","aria-hidden":"true",children:f.icon}),(0,b.jsx)("div",{className:"pp-ic-panel-tag",children:f.tag}),(0,b.jsx)("h3",{className:"pp-ic-panel-h3",children:f.title}),(0,b.jsx)("p",{className:"pp-ic-panel-intro",children:f.intro})]}),(0,b.jsx)("ul",{className:"pp-ic-list","aria-label":`${f.title} details`,children:f.items.map((a,c)=>(0,b.jsxs)("li",{className:"pp-ic-list-item",children:[(0,b.jsx)("span",{className:"pp-ic-list-bullet","aria-hidden":"true"}),a]},c))})]})]})]})]})}])},99293,a=>{"use strict";var b=a.i(26160);let c=["Hosting & infrastructure","Analytics & tag management","CRM & scheduling","Email & communication","Payment processing","Security & monitoring","Automation tools"],d=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("path",{d:"M12 3a12 12 0 0 0-8.5 3L12 21l8.5-15A12 12 0 0 0 12 3z"}),(0,b.jsx)("path",{d:"m9 12 2 2 4-4"})]}),e=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,b.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),f=()=>(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M12 3v18M3 9l9-6 9 6M5 11l-2 7h18l-2-7"})});function g(){return(0,b.jsxs)("section",{className:"tpc-section","aria-labelledby":"share-heading",style:{background:"#0a0a0a",color:"#f0ede6",padding:"80px 40px",maxWidth:"900px",margin:"0 auto",fontFamily:"'Inter', sans-serif"},children:[(0,b.jsx)("p",{style:{fontSize:"11px",fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:"#c9a84c",marginBottom:"12px"},children:"Privacy Policy"}),(0,b.jsx)("h2",{id:"share-heading",style:{fontSize:"36px",fontWeight:600,color:"#f0ede6",lineHeight:1.2,margin:"0 0 16px"},children:"How We Share Information"}),(0,b.jsx)("div",{style:{width:"48px",height:"3px",background:"#c9a84c",borderRadius:"2px",marginBottom:"32px"},"aria-hidden":"true"}),(0,b.jsx)("p",{style:{fontSize:"16px",color:"#8a8680",lineHeight:1.7,maxWidth:"640px",marginBottom:"48px"},children:"We respect your data. The Prime Crafters does not sell, rent, or trade your personal information to any third party — ever. Information is shared only in the limited, specific circumstances described below."}),(0,b.jsxs)("div",{role:"note",style:{background:"rgba(201,168,76,0.12)",border:"1px solid rgba(201,168,76,0.25)",borderLeft:"3px solid #c9a84c",borderRadius:"8px",padding:"20px 24px",marginBottom:"40px",display:"flex",alignItems:"flex-start",gap:"14px"},children:[(0,b.jsx)("span",{style:{color:"#c9a84c",marginTop:"2px",flexShrink:0},children:(0,b.jsx)(d,{})}),(0,b.jsxs)("p",{style:{fontSize:"15px",color:"#f0ede6",lineHeight:1.6,margin:0},children:[(0,b.jsx)("strong",{style:{color:"#e8c97a",fontWeight:500},children:"Your data is never sold."})," ","We share information only when it is strictly necessary to deliver our services, comply with the law, or protect the rights and security of our users and systems."]})]}),(0,b.jsxs)("div",{style:{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"28px 28px 24px",marginBottom:"20px",transition:"border-color 0.2s"},onMouseEnter:a=>a.currentTarget.style.borderColor="rgba(201,168,76,0.25)",onMouseLeave:a=>a.currentTarget.style.borderColor="#2a2a2a",children:[(0,b.jsxs)("h3",{style:{fontSize:"18px",fontWeight:500,color:"#f0ede6",margin:"0 0 8px",display:"flex",alignItems:"center",gap:"10px"},children:[(0,b.jsx)("span",{style:{color:"#c9a84c"},children:(0,b.jsx)(e,{})}),"Trusted Service Providers"]}),(0,b.jsx)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.65,margin:"0 0 16px"},children:"To operate our website and deliver AI automation services, we work with carefully selected third-party tools and platforms. These providers may process your data solely to support the services we offer — they are not permitted to use your information for any other purpose."}),(0,b.jsx)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.65,margin:"0 0 16px"},children:"This may include providers across the following categories:"}),(0,b.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},"aria-label":"Service provider categories",children:c.map(a=>(0,b.jsx)("span",{style:{fontSize:"12px",color:"#c9a84c",background:"rgba(201,168,76,0.12)",border:"1px solid rgba(201,168,76,0.25)",borderRadius:"20px",padding:"4px 12px",whiteSpace:"nowrap"},children:a},a))})]}),(0,b.jsxs)("div",{style:{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"28px 28px 24px",marginBottom:"40px",transition:"border-color 0.2s"},onMouseEnter:a=>a.currentTarget.style.borderColor="rgba(201,168,76,0.25)",onMouseLeave:a=>a.currentTarget.style.borderColor="#2a2a2a",children:[(0,b.jsxs)("h3",{style:{fontSize:"18px",fontWeight:500,color:"#f0ede6",margin:"0 0 8px",display:"flex",alignItems:"center",gap:"10px"},children:[(0,b.jsx)("span",{style:{color:"#c9a84c"},children:(0,b.jsx)(f,{})}),"Legal or Security Requirements"]}),(0,b.jsx)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.65,margin:"0 0 12px"},children:"In certain circumstances, we may be required to disclose your information to comply with applicable laws or regulations, respond to lawful requests from public authorities, prevent or investigate potential fraud or abuse, or protect the rights, property, and safety of The Prime Crafters, our clients, or the public."}),(0,b.jsx)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.65,margin:0},children:"Any such disclosure will be limited strictly to what is necessary under the circumstances."})]}),(0,b.jsx)("hr",{style:{border:"none",borderTop:"1px solid #2a2a2a",margin:"0 0 32px"}})]})}a.s(["default",()=>g])},82893,a=>{"use strict";var b=a.i(26160),c=a.i(42004);let d=[{name:"Essential Cookies",purpose:"Required for the website to function. They enable core features like page navigation and security.",example:"Session tokens, CSRF protection",canDisable:!1},{name:"Analytics Cookies",purpose:"Help us understand how visitors interact with the site — which pages are visited, how long, and where traffic comes from.",example:"Google Analytics (_ga, _gid)",canDisable:!0},{name:"Marketing & Tag Cookies",purpose:"Set by tools like Google Tag Manager to track campaign performance and manage third-party scripts.",example:"Google Tag Manager (_gtm)",canDisable:!0}],e=[{label:"Chrome",desc:"Settings → Privacy & Security → Cookies and other site data"},{label:"Safari",desc:"Preferences → Privacy → Manage Website Data"},{label:"Firefox",desc:"Settings → Privacy & Security → Cookies and Site Data"},{label:"Edge",desc:"Settings → Cookies and Site Permissions → Cookies"}];function f(){return(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,b.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}function g(){return(0,b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,b.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}a.s(["default",0,()=>{let[a,h]=(0,c.useState)(null);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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

        /* Header */
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
          flex-shrink: 0;
        }

        .pp-ck-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 700;
          color: #F5E6B8;
          line-height: 1.2;
          margin: 0 0 16px;
        }

        .pp-ck-intro {
          font-size: clamp(14px, 1.2vw, 16px);
          font-weight: 300;
          color: #5a4f35;
          line-height: 1.85;
          max-width: 680px;
          margin: 0 0 56px;
        }

        /* Two column layout */
        .pp-ck-body {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: start;
        }

        /* Cookie type cards */
        .pp-ck-cards {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pp-ck-card {
          background: rgba(201,168,76,0.04);
          border: 0.5px solid rgba(201,168,76,0.12);
          border-radius: 12px;
          padding: 24px 26px;
          transition: border-color 0.2s, background 0.2s;
        }
        .pp-ck-card:hover {
          background: rgba(201,168,76,0.07);
          border-color: rgba(201,168,76,0.25);
        }

        .pp-ck-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          gap: 12px;
        }

        .pp-ck-card-name {
          font-size: 14px;
          font-weight: 500;
          color: #E8D5A0;
        }

        .pp-ck-badge {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 100px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .pp-ck-badge-required {
          background: rgba(201,168,76,0.1);
          border: 0.5px solid rgba(201,168,76,0.25);
          color: #C9A84C;
        }
        .pp-ck-badge-optional {
          background: rgba(90,79,53,0.2);
          border: 0.5px solid rgba(90,79,53,0.35);
          color: #5a4f35;
        }

        .pp-ck-card-purpose {
          font-size: 13px;
          font-weight: 300;
          color: #6b5e38;
          line-height: 1.7;
          margin: 0 0 12px;
        }

        .pp-ck-card-example {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: #4a4030;
          font-family: monospace;
          background: rgba(201,168,76,0.04);
          border: 0.5px solid rgba(201,168,76,0.08);
          border-radius: 6px;
          padding: 6px 12px;
        }

        .pp-ck-card-example-label {
          font-family: 'DM Sans', sans-serif;
          color: #3a3320;
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-right: 4px;
        }

        /* Right: controls panel */
        .pp-ck-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pp-ck-control-card {
          background: rgba(201,168,76,0.05);
          border: 0.5px solid rgba(201,168,76,0.15);
          border-radius: 14px;
          overflow: hidden;
        }

        .pp-ck-control-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 22px 24px;
          border-bottom: 0.5px solid rgba(201,168,76,0.1);
        }

        .pp-ck-control-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: rgba(201,168,76,0.08);
          border: 0.5px solid rgba(201,168,76,0.18);
          flex-shrink: 0;
        }

        .pp-ck-control-title {
          font-size: 14px;
          font-weight: 500;
          color: #E8D5A0;
        }
        .pp-ck-control-sub {
          font-size: 12px;
          font-weight: 300;
          color: #5a4f35;
          margin-top: 2px;
        }

        .pp-ck-browser-list {
          padding: 8px 0;
        }

        .pp-ck-browser-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
          cursor: pointer;
          transition: background 0.18s;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
          font-family: 'DM Sans', sans-serif;
          gap: 12px;
        }
        .pp-ck-browser-item:hover {
          background: rgba(201,168,76,0.05);
        }

        .pp-ck-browser-label {
          font-size: 13px;
          font-weight: 400;
          color: #8a7a5a;
        }

        .pp-ck-browser-chevron {
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .pp-ck-browser-chevron.open {
          transform: rotate(180deg);
        }

        .pp-ck-browser-desc {
          font-size: 12px;
          font-weight: 300;
          color: #5a4f35;
          line-height: 1.6;
          padding: 0 24px 14px;
          display: none;
        }
        .pp-ck-browser-desc.open {
          display: block;
        }

        /* Opt-out note */
        .pp-ck-optout {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 18px 22px;
          background: rgba(201,168,76,0.04);
          border: 0.5px solid rgba(201,168,76,0.15);
          border-left: 2px solid #C9A84C;
          border-radius: 0 10px 10px 0;
        }
        .pp-ck-optout-text {
          font-size: 13px;
          font-weight: 300;
          color: #6b5e38;
          line-height: 1.7;
          margin: 0;
        }
        .pp-ck-optout-text strong { color: #C9A84C; font-weight: 500; }
        .pp-ck-optout-text a { color: #C9A84C; text-decoration: none; }
        .pp-ck-optout-text a:hover { text-decoration: underline; }

        /* Responsive */
        @media (max-width: 1440px) {
          .pp-ck-section { padding: 96px 80px; }
        }
        @media (max-width: 1023px) {
          .pp-ck-section { padding: 72px 48px; }
          .pp-ck-body { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 640px) {
          .pp-ck-section { padding: 56px 20px; }
        }
      `}),(0,b.jsxs)("section",{className:"pp-ck-section",children:[(0,b.jsx)("div",{className:"pp-ck-topline","aria-hidden":"true"}),(0,b.jsxs)("div",{className:"pp-ck-inner",children:[(0,b.jsxs)("div",{className:"pp-ck-label",children:[(0,b.jsx)("span",{className:"pp-ck-label-line"}),"Tracking & Analytics"]}),(0,b.jsx)("h2",{className:"pp-ck-h2",children:"Cookies & Analytics"}),(0,b.jsx)("p",{className:"pp-ck-intro",children:"Our website uses cookies — small text files stored on your device — to keep the site functional and to help us understand how people use it. We keep this minimal and transparent."}),(0,b.jsxs)("div",{className:"pp-ck-body",children:[(0,b.jsx)("div",{className:"pp-ck-cards",children:d.map(a=>(0,b.jsxs)("div",{className:"pp-ck-card",children:[(0,b.jsxs)("div",{className:"pp-ck-card-top",children:[(0,b.jsx)("span",{className:"pp-ck-card-name",children:a.name}),(0,b.jsx)("span",{className:`pp-ck-badge ${a.canDisable?"pp-ck-badge-optional":"pp-ck-badge-required"}`,children:a.canDisable?"Optional":"Required"})]}),(0,b.jsx)("p",{className:"pp-ck-card-purpose",children:a.purpose}),(0,b.jsxs)("div",{className:"pp-ck-card-example",children:[(0,b.jsx)("span",{className:"pp-ck-card-example-label",children:"e.g."}),a.example]})]},a.name))}),(0,b.jsxs)("div",{className:"pp-ck-right",children:[(0,b.jsxs)("div",{className:"pp-ck-control-card",children:[(0,b.jsxs)("div",{className:"pp-ck-control-header",children:[(0,b.jsx)("div",{className:"pp-ck-control-icon","aria-hidden":"true",children:(0,b.jsx)(f,{})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"pp-ck-control-title",children:"Control Your Cookies"}),(0,b.jsx)("div",{className:"pp-ck-control-sub",children:"Manage via your browser settings"})]})]}),(0,b.jsx)("div",{className:"pp-ck-browser-list",children:e.map(c=>(0,b.jsxs)("div",{children:[(0,b.jsxs)("button",{className:"pp-ck-browser-item",onClick:()=>h(a===c.label?null:c.label),"aria-expanded":a===c.label,children:[(0,b.jsx)("span",{className:"pp-ck-browser-label",children:c.label}),(0,b.jsx)("svg",{className:`pp-ck-browser-chevron${a===c.label?" open":""}`,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#5a4f35",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,b.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,b.jsx)("div",{className:`pp-ck-browser-desc${a===c.label?" open":""}`,children:c.desc})]},c.label))})]}),(0,b.jsxs)("div",{className:"pp-ck-optout",role:"note",children:[(0,b.jsx)("div",{style:{flexShrink:0,marginTop:"1px"},children:(0,b.jsx)(g,{})}),(0,b.jsxs)("p",{className:"pp-ck-optout-text",children:[(0,b.jsx)("strong",{children:"Disabling analytics cookies won't affect site functionality."})," ","You can also opt out of Google Analytics tracking at any time via"," ",(0,b.jsx)("a",{href:"https://tools.google.com/dlpage/gaoptout",target:"_blank",rel:"noopener noreferrer",children:"Google's opt-out tool"}),"."]})]})]})]})]})]})]})}])},53818,a=>{"use strict";var b=a.i(26160),c=a.i(42026);let d=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,b.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),e=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,b.jsx)("polyline",{points:"12 5 19 12 12 19"})]}),f=[{icon:(0,b.jsx)(()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,b.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),{}),title:"Access Your Data",description:"Request a copy of the personal information we hold about you and understand how it is processed."},{icon:(0,b.jsx)(()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,b.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),{}),title:"Correct Your Data",description:"Ask us to update or correct any inaccurate or incomplete information we may hold."},{icon:(0,b.jsx)(()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,b.jsx)("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),(0,b.jsx)("path",{d:"M10 11v6M14 11v6"}),(0,b.jsx)("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]}),{}),title:"Delete Your Data",description:"Request deletion of your information where retention is not legally required."},{icon:(0,b.jsx)(()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,b.jsx)("polyline",{points:"22 6 12 13 2 6"}),(0,b.jsx)("line",{x1:"2",y1:"2",x2:"22",y2:"22"})]}),{}),title:"Opt Out of Marketing",description:"You can unsubscribe from marketing communication at any time."}];function g(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.08;
          color: #f5e6b8;
          margin: 0 0 22px;
        }

        .rights-line {
          width: 56px;
          height: 3px;
          border-radius: 999px;
          background: #c9a84c;
          margin-bottom: 28px;
        }

        .rights-text {
          font-size: 16px;
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
          font-size: 19px;
          font-weight: 500;
          margin: 0 0 14px;
          color: #f0ede6;
        }

        .rights-box p {
          font-size: 14px;
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

        /* RIGHT SIDE */

        .rights-right {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .rights-card {
          background: #161616;
          border: 1px solid #2a2a2a;
          border-radius: 14px;
          padding: 26px;
          transition: all 0.25s ease;
        }

        .rights-card:hover {
          border-color: rgba(201,168,76,0.3);
          background: #1a1a1a;
          transform: translateY(-2px);
        }

        .rights-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c9a84c;
          margin-bottom: 16px;
        }

        .rights-card h3 {
          font-size: 17px;
          font-weight: 500;
          color: #f0ede6;
          margin: 0 0 10px;
        }

        .rights-card p {
          margin: 0;
          font-size: 14px;
          line-height: 1.75;
          color: #8a8680;
        }

        /* TABLET */

        @media (max-width: 1024px) {
          .rights-section {
            padding: 80px 40px;
          }

          .rights-split {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .rights-left {
            position: relative;
            top: unset;
          }
        }

        /* MOBILE */

        @media (max-width: 640px) {
          .rights-section {
            padding: 60px 20px;
          }

          .rights-heading {
            font-size: 40px;
          }

          .rights-box {
            padding: 24px;
          }

          .rights-card {
            padding: 22px;
          }
        }
      `}),(0,b.jsx)("section",{className:"rights-section",children:(0,b.jsx)("div",{className:"rights-container",children:(0,b.jsxs)("div",{className:"rights-split",children:[(0,b.jsxs)("div",{className:"rights-left",children:[(0,b.jsx)("p",{className:"rights-label",children:"Privacy Policy"}),(0,b.jsxs)("h2",{className:"rights-heading",children:["Your Privacy",(0,b.jsx)("br",{}),"Rights"]}),(0,b.jsx)("div",{className:"rights-line"}),(0,b.jsx)("p",{className:"rights-text",children:"You have meaningful rights over the personal data we hold about you. We are committed to honouring those rights clearly, securely, and without unnecessary friction."}),(0,b.jsxs)("div",{className:"rights-location",children:[(0,b.jsx)("span",{style:{color:"#8a8680",marginTop:"2px"},children:(0,b.jsx)(d,{})}),(0,b.jsx)("p",{children:"Rights available to you may vary depending on your location and applicable privacy regulations such as GDPR, CCPA, or PDPA."})]}),(0,b.jsxs)("div",{className:"rights-box",children:[(0,b.jsx)("h3",{children:"Access, Update, or Delete Your Information"}),(0,b.jsx)("p",{children:"To exercise any privacy right, simply contact us directly. We respond within a reasonable timeframe and may verify your identity before processing requests to protect your data."}),(0,b.jsxs)(c.default,{href:"/contact",className:"rights-btn",children:["Submit a Privacy Request",(0,b.jsx)(e,{})]})]}),(0,b.jsxs)("p",{className:"rights-footer",children:["Have questions about your rights?"," ",(0,b.jsx)(c.default,{href:"/contact",children:"Contact us"})," ","anytime for assistance regarding your personal data."]})]}),(0,b.jsx)("div",{className:"rights-right",children:f.map(a=>(0,b.jsxs)("div",{className:"rights-card",children:[(0,b.jsx)("div",{className:"rights-icon",children:a.icon}),(0,b.jsx)("h3",{children:a.title}),(0,b.jsx)("p",{children:a.description})]},a.title))})]})})})]})}a.s(["default",()=>g])},75737,a=>{"use strict";var b=a.i(26160),c=a.i(42026);let d=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),e=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,b.jsx)("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),(0,b.jsx)("path",{d:"M10 11v6M14 11v6"}),(0,b.jsx)("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]}),f=[{icon:(0,b.jsx)(()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),(0,b.jsx)("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),{}),title:"Inquiries & Consultations",description:"Data submitted through contact forms or discovery calls is kept while your inquiry is active and for a reasonable period afterward."},{icon:(0,b.jsx)(()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),(0,b.jsx)("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]}),{}),title:"Service Delivery",description:"Client data shared for AI automation projects, workflow builds, or implementations is retained throughout the engagement and for a period after project completion."},{icon:(0,b.jsx)(()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,b.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,b.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,b.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,b.jsx)("polyline",{points:"10 9 9 9 8 9"})]}),{}),title:"Client Records",description:"We maintain records necessary to support ongoing client relationships, document decisions, and provide continuity of service."},{icon:(0,b.jsx)(()=>(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M12 3v18M3 9l9-6 9 6M5 11l-2 7h18l-2-7"})}),{}),title:"Legal & Accounting Obligations",description:"Certain data must be retained to comply with applicable laws, tax regulations, or contractual obligations — even after a project has ended."},{icon:(0,b.jsx)(()=>(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),{}),title:"Security & Dispute Handling",description:"Where needed to prevent fraud, resolve disputes, or enforce our agreements, relevant records may be kept for a longer period."}];function g(){return(0,b.jsxs)("section",{"aria-labelledby":"data-retention-heading",style:{background:"#0a0a0a",color:"#f0ede6",padding:"80px 40px",maxWidth:"900px",margin:"0 auto",fontFamily:"'Inter', sans-serif"},children:[(0,b.jsx)("p",{style:{fontSize:"11px",fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:"#c9a84c",marginBottom:"12px"},children:"Privacy Policy"}),(0,b.jsx)("h2",{id:"data-retention-heading",style:{fontSize:"36px",fontWeight:600,color:"#f0ede6",lineHeight:1.2,margin:"0 0 16px"},children:"Data Retention"}),(0,b.jsx)("div",{"aria-hidden":"true",style:{width:"48px",height:"3px",background:"#c9a84c",borderRadius:"2px",marginBottom:"32px"}}),(0,b.jsx)("p",{style:{fontSize:"16px",color:"#8a8680",lineHeight:1.7,maxWidth:"640px",marginBottom:"48px"},children:"We only keep your information for as long as it is genuinely needed. Once data has served its purpose, we delete or anonymise it in a responsible and timely manner."}),(0,b.jsxs)("div",{role:"note",style:{background:"rgba(201,168,76,0.12)",border:"1px solid rgba(201,168,76,0.25)",borderLeft:"3px solid #c9a84c",borderRadius:"8px",padding:"20px 24px",marginBottom:"40px",display:"flex",alignItems:"flex-start",gap:"14px"},children:[(0,b.jsx)("span",{style:{color:"#c9a84c",marginTop:"2px",flexShrink:0},"aria-hidden":"true",children:(0,b.jsx)(d,{})}),(0,b.jsxs)("p",{style:{fontSize:"15px",color:"#f0ede6",lineHeight:1.6,margin:0},children:[(0,b.jsx)("strong",{style:{color:"#e8c97a",fontWeight:500},children:"Minimum necessary, maximum care."})," ","We do not hold on to data longer than required. Retention periods are determined by the purpose for which the data was collected and any applicable legal obligations."]})]}),(0,b.jsxs)("div",{style:{position:"relative",marginBottom:"40px"},role:"list","aria-label":"Reasons we retain data",children:[(0,b.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:"21px",top:"12px",bottom:"12px",width:"1px",background:"linear-gradient(to bottom, rgba(201,168,76,0.4), rgba(201,168,76,0.05))"}}),f.map((a,c)=>(0,b.jsxs)("div",{role:"listitem",style:{display:"flex",gap:"20px",marginBottom:c<f.length-1?"28px":0,position:"relative"},children:[(0,b.jsx)("div",{"aria-hidden":"true",style:{width:"44px",height:"44px",borderRadius:"10px",background:"#161616",border:"1px solid rgba(201,168,76,0.25)",display:"flex",alignItems:"center",justifyContent:"center",color:"#c9a84c",flexShrink:0,zIndex:1},children:a.icon}),(0,b.jsxs)("div",{style:{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"10px",padding:"16px 20px",flex:1,transition:"border-color 0.2s"},onMouseEnter:a=>a.currentTarget.style.borderColor="rgba(201,168,76,0.25)",onMouseLeave:a=>a.currentTarget.style.borderColor="#2a2a2a",children:[(0,b.jsx)("h3",{style:{fontSize:"15px",fontWeight:500,color:"#f0ede6",margin:"0 0 6px"},children:a.title}),(0,b.jsx)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.65,margin:0},children:a.description})]})]},a.title))]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",background:"rgba(255,255,255,0.03)",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"18px 20px",marginBottom:"40px"},children:[(0,b.jsx)("span",{style:{color:"#8a8680",marginTop:"2px",flexShrink:0},"aria-hidden":"true",children:(0,b.jsx)(e,{})}),(0,b.jsxs)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.65,margin:0},children:["When data is no longer needed, we securely delete or anonymise it so that it can no longer be associated with you. You may also request deletion at any time — see our"," ",(0,b.jsx)(c.default,{href:"#privacy-rights",style:{color:"#c9a84c",textDecoration:"none"},children:"Your Privacy Rights"})," ","section for details."]})]})]})}a.s(["default",()=>g])},55574,a=>{"use strict";var b=a.i(26160);let c=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,b.jsx)("polyline",{points:"15 3 21 3 21 9"}),(0,b.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),d=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,b.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),e=[{icon:(0,b.jsx)(()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,b.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),{}),title:"Linked Websites",description:"Our website may contain links to external websites, blogs, or resources that we reference for your convenience.",examples:["Partner sites","Industry resources","Reference articles"]},{icon:(0,b.jsx)(()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,b.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,b.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,b.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),{}),title:"Scheduling & Booking",description:"We may use third-party scheduling tools to allow you to book discovery calls or consultations directly.",examples:["Calendly","Cal.com","Google Calendar"]},{icon:(0,b.jsx)(()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),(0,b.jsx)("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),{}),title:"Payment Platforms",description:"Any payments are processed through secure third-party payment providers. We do not store your payment card details.",examples:["Stripe","PayPal","Checkout platforms"]},{icon:(0,b.jsx)(()=>(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})}),{}),title:"Embedded Tools & Widgets",description:"Some pages may embed third-party tools such as chatbots, forms, or interactive widgets to enhance functionality.",examples:["Chat widgets","Form builders","AI tools"]}];function f(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
        .tp-section {
          background: #0a0a0a;
          padding: 100px 40px;
          font-family: 'Inter', sans-serif;
          color: #f0ede6;
        }

        .tp-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 80px;
          align-items: start;
        }

        /* LEFT */

        .tp-left {
          position: sticky;
          top: 120px;
        }

        .tp-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 14px;
        }

        .tp-heading {
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0 0 18px;
          color: #f0ede6;
          font-weight: 600;
        }

        .tp-line {
          width: 54px;
          height: 3px;
          border-radius: 2px;
          background: #c9a84c;
          margin-bottom: 30px;
        }

        .tp-intro {
          font-size: 16px;
          color: #8a8680;
          line-height: 1.9;
          max-width: 520px;
          margin-bottom: 40px;
        }

        .tp-note {
          background: rgba(255,255,255,0.03);
          border: 1px solid #2a2a2a;
          border-left: 3px solid #3a3a3a;
          border-radius: 10px;
          padding: 22px 24px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 22px;
        }

        .tp-note p {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: #8a8680;
        }

        .tp-note strong {
          color: #b8b3aa;
          font-weight: 500;
        }

        .tp-warning {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(201,168,76,0.06);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 10px;
          padding: 18px 20px;
        }

        .tp-warning p {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: #8a8680;
        }

        /* RIGHT */

        .tp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }

        .tp-card {
          background: #161616;
          border: 1px solid #2a2a2a;
          border-radius: 16px;
          padding: 28px;
          transition: all 0.25s ease;
        }

        .tp-card:hover {
          transform: translateY(-2px);
          border-color: rgba(201,168,76,0.3);
          background: #1a1a1a;
        }

        .tp-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c9a84c;
          margin-bottom: 18px;
        }

        .tp-card-title {
          font-size: 17px;
          font-weight: 500;
          color: #f0ede6;
          margin: 0 0 10px;
        }

        .tp-card-desc {
          font-size: 14px;
          color: #8a8680;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .tp-pill-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tp-pill {
          font-size: 11px;
          color: #77726b;
          background: rgba(255,255,255,0.04);
          border: 1px solid #2a2a2a;
          border-radius: 999px;
          padding: 5px 12px;
        }

        /* RESPONSIVE */

        @media (max-width: 1024px) {
          .tp-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .tp-left {
            position: relative;
            top: unset;
          }
        }

        @media (max-width: 640px) {
          .tp-section {
            padding: 70px 20px;
          }

          .tp-card {
            padding: 24px;
          }

          .tp-heading {
            font-size: 42px;
          }
        }
      `}),(0,b.jsx)("section",{className:"tp-section","aria-labelledby":"third-party-heading",children:(0,b.jsxs)("div",{className:"tp-container",children:[(0,b.jsxs)("div",{className:"tp-left",children:[(0,b.jsx)("p",{className:"tp-eyebrow",children:"Privacy Policy"}),(0,b.jsxs)("h2",{id:"third-party-heading",className:"tp-heading",children:["Third-Party",(0,b.jsx)("br",{}),"Links & Tools"]}),(0,b.jsx)("div",{className:"tp-line"}),(0,b.jsx)("p",{className:"tp-intro",children:"Our website may contain links to external websites, embedded tools, scheduling pages, payment platforms, or other third-party services. These are provided for convenience — but their privacy practices remain outside our direct control."}),(0,b.jsxs)("div",{className:"tp-note",children:[(0,b.jsx)("span",{style:{color:"#8a8680",marginTop:"2px",flexShrink:0},children:(0,b.jsx)(d,{})}),(0,b.jsxs)("p",{children:[(0,b.jsx)("strong",{children:"We are not responsible for third-party privacy practices."})," ","Once you leave our website or interact with an embedded service, the privacy policy of that provider governs how your information is handled."]})]}),(0,b.jsxs)("div",{className:"tp-warning",children:[(0,b.jsx)("span",{style:{color:"#c9a84c",marginTop:"2px",flexShrink:0},children:(0,b.jsx)(c,{})}),(0,b.jsx)("p",{children:"A link to a third-party platform does not imply endorsement of that provider or its privacy standards."})]})]}),(0,b.jsx)("div",{className:"tp-grid",children:e.map(a=>(0,b.jsxs)("div",{className:"tp-card",children:[(0,b.jsx)("div",{className:"tp-icon",children:a.icon}),(0,b.jsx)("h3",{className:"tp-card-title",children:a.title}),(0,b.jsx)("p",{className:"tp-card-desc",children:a.description}),(0,b.jsx)("div",{className:"tp-pill-wrap",children:a.examples.map(a=>(0,b.jsx)("span",{className:"tp-pill",children:a},a))})]},a.title))})]})})]})}a.s(["default",()=>f])},71111,a=>{"use strict";var b=a.i(26160),c=a.i(42026);let d=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("polyline",{points:"23 4 23 10 17 10"}),(0,b.jsx)("polyline",{points:"1 20 1 14 7 14"}),(0,b.jsx)("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),e=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,b.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,b.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,b.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),f=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,b.jsx)("polyline",{points:"22 6 12 13 2 6"})]}),g=()=>(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,b.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,b.jsx)("polyline",{points:"12 5 19 12 12 19"})]}),h=()=>(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,b.jsx)("polyline",{points:"20 6 9 17 4 12"})}),i=["Any changes will be posted on this page with an updated date","Material changes may be communicated directly to active clients","Continued use of our website after updates constitutes acceptance","You can request a summary of changes by contacting us directly"],j=["Ask how your data is collected or used","Request access, correction, or deletion of your data","Opt out of any communications","Report a privacy concern or potential data incident","Get clarification on any part of this policy"];function k(){return(0,b.jsxs)("section",{"aria-labelledby":"policy-updates-heading",style:{background:"#0a0a0a",color:"#f0ede6",padding:"80px 40px",maxWidth:"900px",margin:"0 auto",fontFamily:"'Inter', sans-serif"},children:[(0,b.jsx)("p",{style:{fontSize:"11px",fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:"#c9a84c",marginBottom:"12px"},children:"Privacy Policy"}),(0,b.jsx)("h2",{id:"policy-updates-heading",style:{fontSize:"36px",fontWeight:600,color:"#f0ede6",lineHeight:1.2,margin:"0 0 16px"},children:"Policy Updates & Privacy Contact"}),(0,b.jsx)("div",{"aria-hidden":"true",style:{width:"48px",height:"3px",background:"#c9a84c",borderRadius:"2px",marginBottom:"32px"}}),(0,b.jsx)("p",{style:{fontSize:"16px",color:"#8a8680",lineHeight:1.7,maxWidth:"640px",marginBottom:"48px"},children:"We may update this Privacy Policy from time to time to reflect changes in our services, technology, or legal obligations. When we do, we will always post the revised version on this page."}),(0,b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px",marginBottom:"40px"},children:[(0,b.jsxs)("div",{style:{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"28px",transition:"border-color 0.2s"},onMouseEnter:a=>a.currentTarget.style.borderColor="rgba(201,168,76,0.25)",onMouseLeave:a=>a.currentTarget.style.borderColor="#2a2a2a",children:[(0,b.jsx)("div",{"aria-hidden":"true",style:{width:"40px",height:"40px",borderRadius:"9px",background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#c9a84c",marginBottom:"16px"},children:(0,b.jsx)(d,{})}),(0,b.jsx)("h3",{style:{fontSize:"16px",fontWeight:500,color:"#f0ede6",margin:"0 0 12px"},children:"How We Handle Updates"}),(0,b.jsx)("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"10px"},"aria-label":"Update commitments",children:i.map(a=>(0,b.jsxs)("li",{style:{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"13px",color:"#8a8680",lineHeight:1.6},children:[(0,b.jsx)("span",{"aria-hidden":"true",style:{flexShrink:0,marginTop:"3px",color:"#c9a84c",background:"rgba(201,168,76,0.12)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"50%",width:"18px",height:"18px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,b.jsx)(h,{})}),a]},a))})]}),(0,b.jsxs)("div",{style:{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"28px",transition:"border-color 0.2s"},onMouseEnter:a=>a.currentTarget.style.borderColor="rgba(201,168,76,0.25)",onMouseLeave:a=>a.currentTarget.style.borderColor="#2a2a2a",children:[(0,b.jsx)("div",{"aria-hidden":"true",style:{width:"40px",height:"40px",borderRadius:"9px",background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#c9a84c",marginBottom:"16px"},children:(0,b.jsx)(f,{})}),(0,b.jsx)("h3",{style:{fontSize:"16px",fontWeight:500,color:"#f0ede6",margin:"0 0 12px"},children:"Reach Out About Privacy"}),(0,b.jsx)("ul",{style:{listStyle:"none",padding:0,margin:"0 0 20px",display:"flex",flexDirection:"column",gap:"10px"},"aria-label":"Reasons to contact us",children:j.map(a=>(0,b.jsxs)("li",{style:{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"13px",color:"#8a8680",lineHeight:1.6},children:[(0,b.jsx)("span",{"aria-hidden":"true",style:{flexShrink:0,marginTop:"3px",color:"#c9a84c",background:"rgba(201,168,76,0.12)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"50%",width:"18px",height:"18px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,b.jsx)(h,{})}),a]},a))}),(0,b.jsxs)(c.default,{href:"/contact",style:{display:"inline-flex",alignItems:"center",gap:"8px",fontSize:"13px",fontWeight:500,color:"#c9a84c",textDecoration:"none",border:"1px solid rgba(201,168,76,0.3)",borderRadius:"6px",padding:"10px 16px",background:"rgba(201,168,76,0.08)",transition:"background 0.2s, border-color 0.2s"},onMouseEnter:a=>{let b=a.currentTarget;b.style.background="rgba(201,168,76,0.15)",b.style.borderColor="rgba(201,168,76,0.5)"},onMouseLeave:a=>{let b=a.currentTarget;b.style.background="rgba(201,168,76,0.08)",b.style.borderColor="rgba(201,168,76,0.3)"},children:["Contact Us",(0,b.jsx)(g,{})]})]})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",background:"rgba(255,255,255,0.03)",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"14px 20px",marginBottom:"40px"},children:[(0,b.jsx)("span",{style:{color:"#8a8680",flexShrink:0},"aria-hidden":"true",children:(0,b.jsx)(e,{})}),(0,b.jsxs)("p",{style:{fontSize:"13px",color:"#8a8680",margin:0},children:[(0,b.jsx)("strong",{style:{color:"#a09c96",fontWeight:500},children:"Last updated:"})," ","May 2025"]})]}),(0,b.jsx)("hr",{style:{border:"none",borderTop:"1px solid #2a2a2a",margin:"0 0 32px"}}),(0,b.jsxs)("p",{style:{fontSize:"14px",color:"#8a8680",lineHeight:1.7,margin:0,maxWidth:"600px"},children:["Thank you for taking the time to read our Privacy Policy. Your trust matters to us. If you have any questions or concerns, please do not hesitate to"," ",(0,b.jsx)(c.default,{href:"/contact",style:{color:"#c9a84c",textDecoration:"none"},children:"get in touch"}),"."]})]})}a.s(["default",()=>k])}];

//# sourceMappingURL=prime_ThePrimeCrafters-Web_app_privacy_components_c830a6af._.js.map