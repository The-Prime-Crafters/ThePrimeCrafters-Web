module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/prime/ThePrimeCrafters-Web/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/prime/ThePrimeCrafters-Web/app/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectsData",
    ()=>projectsData
]);
const projectsData = [
    {
        title: "3vltn",
        industry: "Domain Investment",
        description: "A premier domain selling and purchasing platform tailored for domain investors with AI-powered campaigns and autonomous deal closing.",
        results: [
            "AI Email Agent",
            "Automated Campaigns",
            "Deal Closing"
        ],
        image: "🌐",
        slug: "3vltn",
        screenshot: "/3vltn.png",
        websiteUrl: "https://3vltn.com/",
        fullDescription: "3vltn is a cutting-edge domain investment platform that revolutionizes how domain investors buy, sell, and market their domain portfolios. By leveraging advanced AI technology, the platform automates the entire sales process from campaign creation to deal closure.",
        challenge: "Domain investors struggled with manually reaching out to potential buyers, creating effective marketing campaigns, and managing negotiations across hundreds of domains. The traditional approach was time-consuming and often resulted in missed opportunities.",
        solution: "We developed an AI-powered platform that automatically creates targeted marketing campaigns for each domain in an investor's portfolio. The AI email agent engages with potential buyers, answers questions, negotiates prices, and closes deals autonomously, allowing investors to scale their operations dramatically.",
        technologies: [
            "Next.js",
            "OpenAI GPT-4",
            "Python",
            "PostgreSQL",
            "Redis",
            "Stripe"
        ],
        keyFeatures: [
            "AI-generated marketing campaigns tailored to each domain's niche",
            "Autonomous email agent that handles customer conversations",
            "Intelligent pricing recommendations based on market data",
            "Automated deal closing and payment processing",
            "Portfolio analytics and performance tracking",
            "Integration with major domain registrars"
        ],
        impact: [
            {
                metric: "Deal Closure Rate",
                value: "+250%"
            },
            {
                metric: "Time Saved",
                value: "40 hrs/week"
            },
            {
                metric: "Revenue Increase",
                value: "+180%"
            }
        ]
    },
    {
        title: "lmn8 Ketamine Therapy AI",
        industry: "Healthcare & AI",
        description: "An innovative platform connecting ketamine therapy clinics with patients, streamlining the intake and matching process through AI.",
        results: [
            "Patient-Clinic Matching",
            "AI Screening",
            "Appointment Management"
        ],
        image: "🏥",
        slug: "lmn8-ketamine-therapy",
        screenshot: "/lmn8.png",
        websiteUrl: "https://lumen8health.com/",
        fullDescription: "lmn8 is a healthcare technology platform that bridges the gap between ketamine therapy clinics and patients seeking treatment. The platform uses AI to match patients with the most suitable clinics based on their specific needs, location, and treatment requirements.",
        challenge: "Patients seeking ketamine therapy faced difficulty finding qualified clinics, while clinics struggled with inefficient intake processes and patient screening. The lack of a centralized platform made it hard for both parties to connect effectively.",
        solution: "We built an intelligent matching platform that uses AI to pre-screen patients, assess their suitability for ketamine therapy, and connect them with appropriate clinics. The system automates appointment scheduling, intake forms, and follow-up communications.",
        technologies: [
            "React Native",
            "Node.js",
            "MongoDB",
            "AWS",
            "Twilio",
            "HIPAA-compliant infrastructure"
        ],
        keyFeatures: [
            "AI-powered patient-clinic matching algorithm",
            "Automated pre-screening questionnaires",
            "Secure HIPAA-compliant data handling",
            "Integrated appointment scheduling system",
            "Telehealth consultation support",
            "Patient progress tracking and analytics"
        ],
        impact: [
            {
                metric: "Patient Matching Accuracy",
                value: "94%"
            },
            {
                metric: "Intake Time Reduction",
                value: "-65%"
            },
            {
                metric: "Clinic Capacity Increase",
                value: "+45%"
            }
        ]
    },
    {
        title: "Faithful Companion",
        industry: "Mobile Application",
        description: "A dedicated spiritual companion app for the Christian community, offering daily devotionals, prayer support, and church integration.",
        results: [
            "Daily Devotionals",
            "Prayer Community",
            "Church Finder"
        ],
        image: "✝️",
        slug: "faithful-companion",
        screenshot: "/faithful-companion.png",
        fullDescription: "Faithful Companion is a comprehensive mobile application designed to support Christians in their daily spiritual journey. Similar to popular Islamic apps, it provides a centralized platform for prayer, scripture reading, community engagement, and church discovery.",
        challenge: "While there were several Islamic spiritual apps available, the Christian community lacked a comprehensive, modern app that combined devotionals, prayer tracking, community features, and church integration in one seamless experience.",
        solution: "We created a beautifully designed mobile app that serves as a daily spiritual companion. The app includes curated devotionals, Bible reading plans, prayer request sharing, church finder with event integration, and a supportive community platform.",
        technologies: [
            "React Native",
            "Firebase",
            "GraphQL",
            "Google Maps API",
            "Push Notifications"
        ],
        keyFeatures: [
            "Daily devotionals and scripture readings",
            "Personalized Bible reading plans",
            "Community prayer request board",
            "Church finder with location-based search",
            "Event calendar and reminders",
            "Prayer journal and tracking",
            "Audio Bible and worship music integration"
        ],
        impact: [
            {
                metric: "Daily Active Users",
                value: "50K+"
            },
            {
                metric: "Prayer Requests Shared",
                value: "200K+"
            },
            {
                metric: "App Store Rating",
                value: "4.8/5"
            }
        ]
    },
    {
        title: "RV Park AI Voice Agent",
        industry: "Voice AI Automation",
        description: "A specialized AI voice agent designed for RV parks across the US, handling reservations, inquiries, and customer service calls 24/7.",
        results: [
            "24/7 Availability",
            "Automated Bookings",
            "Customer Support"
        ],
        image: "🚐",
        slug: "rv-park-voice-agent",
        screenshot: "/rv-park.png",
        fullDescription: "The RV Park AI Voice Agent is an intelligent phone system that handles all incoming calls for RV parks, from reservation inquiries to amenity questions. The AI agent understands natural language, accesses real-time availability, and can complete bookings without human intervention.",
        challenge: "RV parks often operate with limited staff and struggle to answer calls during peak seasons or after hours. Missed calls translate directly to lost revenue, and staff time spent on phone inquiries reduces time available for on-site customer service.",
        solution: "We developed a sophisticated voice AI agent that integrates with the park's reservation system. The agent can check availability, quote prices, explain amenities, answer FAQs, and complete bookings. It operates 24/7 and can handle multiple calls simultaneously.",
        technologies: [
            "OpenAI Whisper",
            "ElevenLabs Voice AI",
            "Twilio",
            "Python",
            "FastAPI",
            "PostgreSQL"
        ],
        keyFeatures: [
            "Natural language understanding and conversation",
            "Real-time availability checking",
            "Automated reservation booking and confirmation",
            "FAQ answering about park amenities and policies",
            "Multi-language support",
            "Integration with existing park management systems",
            "Call analytics and reporting"
        ],
        impact: [
            {
                metric: "Call Answer Rate",
                value: "100%"
            },
            {
                metric: "Booking Conversion",
                value: "+85%"
            },
            {
                metric: "Staff Time Saved",
                value: "30 hrs/week"
            }
        ]
    },
    {
        title: "Spectrum Voice Agent",
        industry: "Enterprise Sales AI",
        description: "A high-performance voice agent developed for Spectrum to automate sales calls, qualify leads, and close deals efficiently.",
        results: [
            "Sales Automation",
            "Lead Qualification",
            "Custom Interface"
        ],
        image: "📞",
        slug: "spectrum-voice-agent",
        screenshot: "/spectrum.png",
        fullDescription: "The Spectrum Voice Agent is an enterprise-grade AI sales representative that handles outbound and inbound sales calls for Spectrum. The agent qualifies leads, presents service packages, handles objections, and closes deals with a natural, conversational approach.",
        challenge: "Spectrum needed to scale their sales operations without proportionally increasing headcount. Traditional sales calls were expensive, inconsistent in quality, and limited by human availability. Lead qualification was time-consuming and often inaccurate.",
        solution: "We built a sophisticated voice AI system that mimics top-performing sales representatives. The agent uses advanced NLP to understand customer needs, presents tailored solutions, handles objections intelligently, and closes deals. A custom dashboard provides real-time monitoring and analytics.",
        technologies: [
            "GPT-4 Turbo",
            "Custom Voice Models",
            "WebRTC",
            "React",
            "Node.js",
            "MongoDB",
            "AWS"
        ],
        keyFeatures: [
            "Advanced natural language processing for sales conversations",
            "Dynamic script adaptation based on customer responses",
            "Real-time objection handling",
            "Automated deal closing and processing",
            "Custom monitoring interface with live call tracking",
            "Performance analytics and A/B testing",
            "CRM integration for seamless data flow"
        ],
        impact: [
            {
                metric: "Sales Calls Handled",
                value: "10K+/month"
            },
            {
                metric: "Conversion Rate",
                value: "+45%"
            },
            {
                metric: "Cost Reduction",
                value: "-70%"
            }
        ]
    },
    {
        title: "Lead Generation Tools",
        industry: "Marketing Tools",
        description: "A suite of powerful lead generation tools designed to identify, qualify, and engage potential prospects across various industries.",
        results: [
            "Multi-Channel Scraping",
            "CRM Integration",
            "Auto Outreach"
        ],
        image: "🎯",
        slug: "lead-generation-tools",
        screenshot: "/lead-gen.png",
        fullDescription: "Our Lead Generation Tools suite is a comprehensive platform that automates the entire lead generation process. From identifying potential prospects across multiple channels to qualifying them and initiating outreach, the tools streamline what traditionally takes weeks into hours.",
        challenge: "Businesses struggled with manual lead generation processes that were time-consuming, inconsistent, and difficult to scale. Data was scattered across multiple sources, qualification was subjective, and outreach was often delayed or forgotten.",
        solution: "We created an integrated suite of tools that scrapes data from multiple sources, enriches it with additional information, scores and qualifies leads using AI, and automatically initiates personalized outreach campaigns. Everything integrates seamlessly with major CRMs.",
        technologies: [
            "Python",
            "Scrapy",
            "OpenAI API",
            "PostgreSQL",
            "Redis",
            "Celery",
            "React"
        ],
        keyFeatures: [
            "Multi-channel data scraping (LinkedIn, websites, directories)",
            "AI-powered lead scoring and qualification",
            "Automated email and LinkedIn outreach sequences",
            "Data enrichment with company and contact information",
            "Integration with Salesforce, HubSpot, and other CRMs",
            "Custom filters and targeting criteria",
            "Performance analytics and ROI tracking"
        ],
        impact: [
            {
                metric: "Leads Generated",
                value: "50K+/month"
            },
            {
                metric: "Time Saved",
                value: "-90%"
            },
            {
                metric: "Qualified Lead Rate",
                value: "+120%"
            }
        ]
    }
];
}),
"[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudyPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/data/projects.ts [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectsData"].map((project)=>({
            slug: project.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectsData"].find((p)=>p.slug === slug);
    if (!project) {
        return {
            robots: {
                index: false,
                follow: false
            }
        };
    }
    return {
        title: project.title
    };
}
async function CaseStudyPage({ params }) {
    const { slug } = await params;
    console.log("Slug:", slug);
    console.log("Projects:", __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectsData"]);
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectsData"].find((p)=>p.slug === slug);
    if (!project) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[var(--background)] text-[var(--foreground)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--border-subtle)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "PrimeCrafters Logo",
                                className: "h-8 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#projects",
                            className: "text-[var(--text-secondary)] hover:text-[var(--gold-500)] transition-colors text-sm",
                            children: "View All Projects"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-32 pb-16 px-6 relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl",
                                    children: project.image
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--gold-400)] text-sm uppercase tracking-wider",
                                    children: project.industry
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-7xl font-bold mb-6 text-gradient-gold",
                            children: project.title
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-[var(--text-secondary)] mb-10",
                            children: project.description
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: project.impact.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card p-6 rounded-2xl text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-[var(--gold-500)]",
                                            children: item.value
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-[var(--text-muted)]",
                                            children: item.metric
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-video rounded-3xl overflow-hidden border",
                        children: project.screenshot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.screenshot,
                            alt: project.title,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-full text-gray-400",
                            children: "No Screenshot"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto space-y-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-4",
                                    children: "Overview"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[var(--text-secondary)]",
                                    children: project.fullDescription
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-3",
                                            children: "Challenge"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: project.challenge
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-3",
                                            children: "Solution"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: project.solution
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-6",
                                    children: "Key Features"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: project.keyFeatures.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "✔ ",
                                                feature
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-6",
                                    children: "Technologies"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: project.technologies.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-3 py-1 border rounded-lg text-sm",
                                            children: tech
                                        }, index, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-8 text-center text-sm text-[var(--text-muted)]",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " The Prime Crafters"
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/case-study/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2eac7123._.js.map