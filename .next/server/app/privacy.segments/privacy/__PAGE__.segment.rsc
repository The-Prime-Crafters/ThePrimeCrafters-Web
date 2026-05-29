1:"$Sreact.fragment"
2:I[1420,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],"default"]
15:I[67511,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],"default"]
16:I[29456,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],"default"]
19:I[38407,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],"default"]
1a:I[14480,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],"default"]
1b:I[70170,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],""]
20:I[76956,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],"default"]
21:I[81147,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],"default"]
22:I[30249,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],"default"]
23:I[8118,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],"default"]
24:I[81889,["/_next/static/chunks/e5e779d4f0505ab9.js","/_next/static/chunks/aabeb292897061fe.js","/_next/static/chunks/b905cd0d7efbfecd.js","/_next/static/chunks/0651c79e474980de.js","/_next/static/chunks/7712d9a2e33f8fef.js"],"default"]
25:I[36614,["/_next/static/chunks/c0d20e877d7e42e7.js","/_next/static/chunks/b56d3d7142bc1ae6.js"],"OutletBoundary"]
26:"$Sreact.suspense"
3:T1289,
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
      0:{"buildId":"I29EOvddpTY-PBLILWxNF","rsc":["$","$1","c",{"children":[["$","main",null,{"children":[["$","$L2",null,{}],[["$","style",null,{"children":"$3"}],"$L4"],"$L5","$L6","$L7","$L8","$L9","$La","$Lb","$Lc","$Ld","$Le","$Lf"]}],["$L10","$L11","$L12","$L13"],"$L14"]}],"loading":null,"isPartial":false}
4:["$","section",null,{"className":"pp-hero-section","children":[["$","div",null,{"className":"pp-hero-glow","aria-hidden":"true"}],["$","div",null,{"className":"pp-hero-shimmer","aria-hidden":"true"}],["$","div",null,{"className":"pp-hero-container","children":[["$","nav",null,{"className":"pp-hero-breadcrumb","aria-label":"Breadcrumb","children":[["$","a",null,{"href":"/","children":"Home"}],["$","span",null,{"className":"pp-hero-breadcrumb-sep","children":"/"}],["$","span",null,{"children":"Privacy Policy"}]]}],["$","h1",null,{"className":"pp-hero-h1","children":"Privacy Policy"}],["$","p",null,{"className":"pp-hero-subtitle","children":"We respect your privacy. This page explains exactly what data we collect, how we use it, and how we protect it — no jargon, no surprises."}],["$","div",null,{"className":"pp-hero-meta","children":[["$","div",null,{"className":"pp-hero-meta-item","children":[["$","svg",null,{"width":"15","height":"15","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.8","strokeLinecap":"round","strokeLinejoin":"round","aria-hidden":"true","children":[["$","rect",null,{"x":"3","y":"4","width":"18","height":"18","rx":"2","ry":"2"}],["$","line",null,{"x1":"16","y1":"2","x2":"16","y2":"6"}],["$","line",null,{"x1":"8","y1":"2","x2":"8","y2":"6"}],["$","line",null,{"x1":"3","y1":"10","x2":"21","y2":"10"}]]}],["$","span",null,{"children":"Last updated: May 26, 2026"}]]}],["$","div",null,{"className":"pp-hero-meta-divider","aria-hidden":"true"}],["$","div",null,{"className":"pp-hero-meta-item","children":[["$","svg",null,{"width":"15","height":"15","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.8","strokeLinecap":"round","strokeLinejoin":"round","aria-hidden":"true","children":[["$","path",null,{"d":"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}],["$","polyline",null,{"points":"9 12 11 14 15 10"}]]}],["$","span",null,{"children":"The Prime Crafters"}]]}],["$","div",null,{"className":"pp-hero-meta-divider","aria-hidden":"true"}],["$","div",null,{"className":"pp-hero-meta-item","children":[["$","svg",null,{"width":"15","height":"15","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.8","strokeLinecap":"round","strokeLinejoin":"round","aria-hidden":"true","children":[["$","path",null,{"d":"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}],["$","polyline",null,{"points":"22 6 12 13 2 6"}]]}],["$","a",null,{"href":"mailto:aman@theprimecrafters.com","children":"aman@theprimecrafters.com"}]]}]]}]]}]]}]
5:["$","$L15",null,{}]
6:["$","$L16",null,{}]
17:T19b2,
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
      7:[["$","style",null,{"children":"$17"}],"$L18"]
8:["$","$L19",null,{}]
9:["$","$L1a",null,{}]
a:["$","section",null,{"aria-labelledby":"data-security-heading","className":"bg-[#0a0a0a] px-6 py-20 text-[#f0ede6]","children":["$","div",null,{"className":"mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start","children":[["$","div",null,{"children":[["$","p",null,{"className":"mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#c9a84c]","children":"Privacy Policy"}],["$","h2",null,{"id":"data-security-heading","className":"text-3xl font-semibold leading-tight sm:text-4xl","children":"Data Security"}],["$","div",null,{"className":"mt-5 mb-7 h-[3px] w-12 rounded-full bg-[#c9a84c]"}],["$","p",null,{"className":"max-w-xl text-[14px] leading-7 text-[#8a8680] sm:text-[15px]","children":"Keeping your data safe is a responsibility we take seriously. We apply appropriate security safeguards across our systems, processes, and tools to help protect the information you share with us."}],["$","div",null,{"className":"mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5","children":["$","div",null,{"className":"mb-4 flex items-start gap-3","children":[["$","div",null,{"className":"mt-0.5 text-[#c9a84c]","children":["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"1.75","strokeLinecap":"round","strokeLinejoin":"round","aria-hidden":"true","children":[["$","circle",null,{"cx":"12","cy":"12","r":"10"}],["$","line",null,{"x1":"12","y1":"8","x2":"12","y2":"12"}],["$","line",null,{"x1":"12","y1":"16","x2":"12.01","y2":"16"}]]}]}],["$","div",null,{"children":[["$","h3",null,{"className":"mb-2 text-sm font-medium text-white","children":"No system is completely risk-free"}],["$","p",null,{"className":"text-[13px] leading-6 text-[#8a8680]","children":"While we work hard to protect your information, no method of electronic transmission or storage can be guaranteed 100% secure. We remain committed to responding quickly and transparently in the unlikely event of a security incident."}]]}]]}]}],["$","div",null,{"className":"mt-6 flex items-start gap-3 rounded-2xl border border-[#c9a84c]/10 bg-[#c9a84c]/[0.04] p-5","children":[["$","div",null,{"className":"mt-0.5 text-[#c9a84c]","children":["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"1.75","strokeLinecap":"round","strokeLinejoin":"round","aria-hidden":"true","children":[["$","rect",null,{"x":"3","y":"11","width":"18","height":"11","rx":"2","ry":"2"}],["$","path",null,{"d":"M7 11V7a5 5 0 0 1 10 0v4"}]]}]}],["$","p",null,{"className":"text-[13px] leading-6 text-[#8a8680]","children":["If you have concerns regarding your data security,"," ",["$","$L1b",null,{"href":"/contact","className":"text-[#c9a84c] transition hover:text-[#e5c56b]","children":"contact us immediately"}]," ","and we’ll address them as a priority."]}]]}]]}],["$","div",null,{"className":"grid gap-4","children":[["$","div","Reasonable Safeguards",{"className":"group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#c9a84c]/30 hover:bg-[#141414]","children":[["$","div",null,{"className":"mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#c9a84c]/20 bg-[#c9a84c]/10 text-[#c9a84c]","children":["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"1.75","strokeLinecap":"round","strokeLinejoin":"round","aria-hidden":"true","children":["$","path",null,{"d":"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}]}]}],["$","h3",null,{"className":"mb-3 text-lg font-medium text-white","children":"Reasonable Safeguards"}],["$","p",null,{"className":"text-[13px] leading-6 text-[#8a8680]","children":"We implement industry-standard security measures to protect your data against unauthorised access, disclosure, alteration, or destruction."}]]}],["$","div","Limited Access",{"className":"group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#c9a84c]/30 hover:bg-[#141414]","children":["$L1c","$L1d","$L1e"]}],"$L1f"]}]]}]}]
b:["$","$L20",null,{}]
c:["$","$L21",null,{}]
d:["$","$L22",null,{}]
e:["$","$L23",null,{}]
f:["$","$L24",null,{}]
10:["$","script","script-0",{"src":"/_next/static/chunks/aabeb292897061fe.js","async":true}]
11:["$","script","script-1",{"src":"/_next/static/chunks/b905cd0d7efbfecd.js","async":true}]
12:["$","script","script-2",{"src":"/_next/static/chunks/0651c79e474980de.js","async":true}]
13:["$","script","script-3",{"src":"/_next/static/chunks/7712d9a2e33f8fef.js","async":true}]
14:["$","$L25",null,{"children":["$","$26",null,{"name":"Next.MetadataOutlet","children":"$@27"}]}]
18:["$","section",null,{"className":"pp-hwu-section","children":[["$","div",null,{"className":"pp-hwu-topline"}],["$","div",null,{"className":"pp-hwu-grid-bg"}],["$","div",null,{"className":"pp-hwu-inner","children":[["$","div",null,{"className":"pp-hwu-header","children":[["$","div",null,{"className":"pp-hwu-label","children":[["$","span",null,{"className":"pp-hwu-label-line"}],"Data Usage"]}],["$","h2",null,{"className":"pp-hwu-h2","children":["How We Use",["$","br",null,{}],"Your Information"]}],["$","p",null,{"className":"pp-hwu-header-desc","children":"Your data is used only for the purposes listed below. We do not use it for advertising, profiling, or unrelated third-party activities."}]]}],["$","div",null,{"className":"pp-hwu-split","children":[["$","div",null,{"className":"pp-hwu-left","children":["$","div",null,{"className":"pp-hwu-sticky","children":[["$","div",null,{"className":"pp-hwu-left-badge","children":"Privacy & Transparency"}],["$","h3",null,{"className":"pp-hwu-left-heading","children":"Your data is used carefully, securely, and only when necessary."}],["$","p",null,{"className":"pp-hwu-left-text","children":"We believe privacy should feel transparent — not hidden behind complicated systems. Every piece of information shared with The Prime Crafters is used solely to improve communication, support, automation, and service delivery."}],["$","div",null,{"className":"pp-hwu-left-note","children":[["$","div",null,{"className":"pp-hwu-left-note-icon","children":["$","svg",null,{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.8","children":[["$","circle",null,{"cx":"12","cy":"12","r":"10"}],["$","line",null,{"x1":"12","y1":"8","x2":"12","y2":"12"}],["$","line",null,{"x1":"12","y1":"16","x2":"12.01","y2":"16"}]]}]}],["$","p",null,{"className":"pp-hwu-left-note-text","children":[["$","strong",null,{"children":"We never use your data for advertising or third-party marketing."}]," ","Information shared with us is strictly used to deliver, improve, and support the services you request from The Prime Crafters."]}]]}]]}]}],["$","div",null,{"className":"pp-hwu-right","children":[["$","div","Respond to Inquiries",{"className":"pp-hwu-bullet","children":[["$","div",null,{"className":"pp-hwu-bullet-line"}],["$","div",null,{"className":"pp-hwu-bullet-icon","children":["$","svg",null,{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.6","children":["$","path",null,{"d":"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]}]}],["$","div",null,{"className":"pp-hwu-bullet-content","children":[["$","div",null,{"className":"pp-hwu-bullet-top","children":[["$","span",null,{"className":"pp-hwu-bullet-number","children":"01"}],["$","h4",null,{"className":"pp-hwu-bullet-title","children":"Respond to Inquiries"}]]}],["$","p",null,{"className":"pp-hwu-bullet-desc","children":"We use your contact details to reply to questions, follow up on form submissions, and keep communication flowing."}]]}]]}],["$","div","Schedule Consultations",{"className":"pp-hwu-bullet","children":[["$","div",null,{"className":"pp-hwu-bullet-line"}],["$","div",null,{"className":"pp-hwu-bullet-icon","children":["$","svg",null,{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.6","children":[["$","rect",null,{"x":"3","y":"4","width":"18","height":"18","rx":"2"}],["$","line",null,{"x1":"16","y1":"2","x2":"16","y2":"6"}],["$","line",null,{"x1":"8","y1":"2","x2":"8","y2":"6"}],["$","line",null,{"x1":"3","y1":"10","x2":"21","y2":"10"}]]}]}],["$","div",null,{"className":"pp-hwu-bullet-content","children":[["$","div",null,{"className":"pp-hwu-bullet-top","children":[["$","span",null,{"className":"pp-hwu-bullet-number","children":"02"}],["$","h4",null,{"className":"pp-hwu-bullet-title","children":"Schedule Consultations"}]]}],["$","p",null,{"className":"pp-hwu-bullet-desc","children":"Booking data helps us confirm calls, send reminders, and prepare for your discovery session."}]]}]]}],["$","div","Prepare Proposals",{"className":"pp-hwu-bullet","children":[["$","div",null,{"className":"pp-hwu-bullet-line"}],["$","div",null,{"className":"pp-hwu-bullet-icon","children":["$","svg",null,{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.6","children":[["$","path",null,{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}],["$","polyline",null,{"points":"14 2 14 8 20 8"}]]}]}],["$","div",null,{"className":"pp-hwu-bullet-content","children":["$L28","$L29"]}]]}],"$L2a","$L2b","$L2c","$L2d"]}]]}]]}]]}]
1c:["$","div",null,{"className":"mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#c9a84c]/20 bg-[#c9a84c]/10 text-[#c9a84c]","children":["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"1.75","strokeLinecap":"round","strokeLinejoin":"round","aria-hidden":"true","children":[["$","path",null,{"d":"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}],["$","circle",null,{"cx":"9","cy":"7","r":"4"}],["$","path",null,{"d":"M23 21v-2a4 4 0 0 0-3-3.87"}],["$","path",null,{"d":"M16 3.13a4 4 0 0 1 0 7.75"}]]}]}]
1d:["$","h3",null,{"className":"mb-3 text-lg font-medium text-white","children":"Limited Access"}]
1e:["$","p",null,{"className":"text-[13px] leading-6 text-[#8a8680]","children":"Access to your personal information is restricted only to team members and providers who genuinely need it."}]
1f:["$","div","Secure Tools",{"className":"group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#c9a84c]/30 hover:bg-[#141414]","children":[["$","div",null,{"className":"mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#c9a84c]/20 bg-[#c9a84c]/10 text-[#c9a84c]","children":["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"1.75","strokeLinecap":"round","strokeLinejoin":"round","aria-hidden":"true","children":["$","path",null,{"d":"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]}]}],["$","h3",null,{"className":"mb-3 text-lg font-medium text-white","children":"Secure Tools"}],["$","p",null,{"className":"text-[13px] leading-6 text-[#8a8680]","children":"We prefer platforms that follow strong security practices including encryption, access controls, and regular audits."}]]}]
27:null
28:["$","div",null,{"className":"pp-hwu-bullet-top","children":[["$","span",null,{"className":"pp-hwu-bullet-number","children":"03"}],["$","h4",null,{"className":"pp-hwu-bullet-title","children":"Prepare Proposals"}]]}]
29:["$","p",null,{"className":"pp-hwu-bullet-desc","children":"Project details you share allow us to scope your requirements and put together accurate, tailored proposals."}]
2a:["$","div","Improve Our Website",{"className":"pp-hwu-bullet","children":[["$","div",null,{"className":"pp-hwu-bullet-line"}],["$","div",null,{"className":"pp-hwu-bullet-icon","children":["$","svg",null,{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.6","children":[["$","line",null,{"x1":"18","y1":"20","x2":"18","y2":"10"}],["$","line",null,{"x1":"12","y1":"20","x2":"12","y2":"4"}],["$","line",null,{"x1":"6","y1":"20","x2":"6","y2":"14"}]]}]}],["$","div",null,{"className":"pp-hwu-bullet-content","children":[["$","div",null,{"className":"pp-hwu-bullet-top","children":[["$","span",null,{"className":"pp-hwu-bullet-number","children":"04"}],["$","h4",null,{"className":"pp-hwu-bullet-title","children":"Improve Our Website"}]]}],["$","p",null,{"className":"pp-hwu-bullet-desc","children":"Analytics data helps us understand what's working, fix issues, and make the site faster and more useful for everyone."}]]}]]}]
2b:["$","div","Deliver AI Automation Services",{"className":"pp-hwu-bullet","children":[["$","div",null,{"className":"pp-hwu-bullet-line"}],["$","div",null,{"className":"pp-hwu-bullet-icon","children":["$","svg",null,{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.6","children":[["$","rect",null,{"x":"4","y":"4","width":"16","height":"16","rx":"2"}],["$","rect",null,{"x":"9","y":"9","width":"6","height":"6"}]]}]}],["$","div",null,{"className":"pp-hwu-bullet-content","children":[["$","div",null,{"className":"pp-hwu-bullet-top","children":[["$","span",null,{"className":"pp-hwu-bullet-number","children":"05"}],["$","h4",null,{"className":"pp-hwu-bullet-title","children":"Deliver AI Automation Services"}]]}],["$","p",null,{"className":"pp-hwu-bullet-desc","children":"Client project data is used exclusively to build, test, and deploy the AI systems you've engaged us for."}]]}]]}]
2c:["$","div","Support Existing Clients",{"className":"pp-hwu-bullet","children":[["$","div",null,{"className":"pp-hwu-bullet-line"}],["$","div",null,{"className":"pp-hwu-bullet-icon","children":["$","svg",null,{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.6","children":["$","path",null,{"d":"M3 18v-6a9 9 0 0 1 18 0v6"}]}]}],["$","div",null,{"className":"pp-hwu-bullet-content","children":[["$","div",null,{"className":"pp-hwu-bullet-top","children":[["$","span",null,{"className":"pp-hwu-bullet-number","children":"06"}],["$","h4",null,{"className":"pp-hwu-bullet-title","children":"Support Existing Clients"}]]}],["$","p",null,{"className":"pp-hwu-bullet-desc","children":"We retain relevant information to assist with ongoing projects, answer support questions, and maintain service continuity."}]]}]]}]
2d:["$","div","Prevent Misuse",{"className":"pp-hwu-bullet","children":[["$","div",null,{"className":"pp-hwu-bullet-line"}],["$","div",null,{"className":"pp-hwu-bullet-icon","children":["$","svg",null,{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#C9A84C","strokeWidth":"1.6","children":["$","path",null,{"d":"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}]}]}],["$","div",null,{"className":"pp-hwu-bullet-content","children":[["$","div",null,{"className":"pp-hwu-bullet-top","children":[["$","span",null,{"className":"pp-hwu-bullet-number","children":"07"}],["$","h4",null,{"className":"pp-hwu-bullet-title","children":"Prevent Misuse"}]]}],["$","p",null,{"className":"pp-hwu-bullet-desc","children":"Technical and usage data helps us detect fraud, spam, or abuse and protect the integrity of our systems and clients."}]]}]]}]
