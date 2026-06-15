(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/shared.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PA_FONTS_LINK",
    ()=>PA_FONTS_LINK,
    "PA_RESPONSIVE_STYLES",
    ()=>PA_RESPONSIVE_STYLES,
    "THEME",
    ()=>THEME
]);
const THEME = {
    colors: {
        background: "#0b0c14",
        surface: "rgba(255, 255, 255, 0.025)",
        border: "rgba(255, 255, 255, 0.07)",
        primary: "#C9A84C",
        text: "#f5f1e8",
        textMuted: "rgba(240, 237, 230, 0.5)",
        cardHover: "rgba(201, 168, 76, 0.05)"
    },
    fonts: {
        serif: "'Playfair Display', serif",
        sans: "'DM Sans', sans-serif"
    }
};
const PA_FONTS_LINK = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@700&display=swap";
const PA_RESPONSIVE_STYLES = `
  @media (max-width: 900px) {
    .pa-grid-2 { grid-template-columns: 1fr !important; }
    .pa-grid-3 { grid-template-columns: 1fr !important; }
    .pa-section { padding: 60px 20px !important; }
    .pa-h1 { fontSize: 32px !important; }
    .pa-h2 { fontSize: 28px !important; }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection,
    "ProblemSection",
    ()=>ProblemSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/shared.ts [app-client] (ecmascript)");
"use client";
;
;
const HeroSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pa-section",
        style: {
            padding: "100px 40px",
            background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.background
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1200px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                alignItems: "center"
            },
            className: "pa-grid-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "20px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "30px",
                                        height: "1px",
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "12px",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary,
                                        fontWeight: 600
                                    },
                                    children: "ThePrimeCrafters"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "pa-h1",
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].fonts.serif,
                                fontSize: "48px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                lineHeight: 1.1,
                                marginBottom: "24px"
                            },
                            children: "AI Workflow Optimization Services for Faster, Smarter Business Operations"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: "18px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                lineHeight: 1.6,
                                marginBottom: "32px",
                                fontWeight: 400
                            },
                            children: "Find Bottlenecks, Improve Handoffs, and Build AI-Ready Workflows. We help you map current processes and remove friction."
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "16px",
                                flexWrap: "wrap"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/contact",
                                    style: {
                                        padding: "16px 32px",
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary,
                                        color: "#000",
                                        textDecoration: "none",
                                        borderRadius: "4px",
                                        fontWeight: 700,
                                        fontSize: "14px"
                                    },
                                    children: "Book a Free Strategy Call"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/case-studies",
                                    style: {
                                        padding: "16px 32px",
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.border}`,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                        textDecoration: "none",
                                        borderRadius: "4px",
                                        fontWeight: 500,
                                        fontSize: "14px"
                                    },
                                    children: "View Case Studies"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "48px",
                                display: "flex",
                                gap: "12px",
                                flexWrap: "wrap"
                            },
                            children: [
                                "Workflow Audit",
                                "Process Mapping",
                                "Automation Roadmap",
                                "KPI Tracking"
                            ].map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        padding: "6px 14px",
                                        background: "rgba(201, 168, 76, 0.1)",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary,
                                        borderRadius: "100px",
                                        fontSize: "11px",
                                        fontWeight: 600,
                                        border: "1px solid rgba(201, 168, 76, 0.2)"
                                    },
                                    children: badge
                                }, badge, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "100%",
                            height: "400px",
                            background: "rgba(255,255,255,0.03)",
                            borderRadius: "20px",
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.border}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "40px",
                                        marginBottom: "10px"
                                    },
                                    children: "⚙️"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "12px"
                                    },
                                    children: "Workflow Optimization Map Visual"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                            lineNumber: 40,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroSection;
const ProblemSection = ()=>{
    const problems = [
        {
            title: "Manual Handoffs Slow Everything Down",
            desc: "Teams lose time when leads, tasks, and updates move manually between people and tools.",
            icon: "⏳"
        },
        {
            title: "Teams Use Too Many Disconnected Tools",
            desc: "CRMs, spreadsheets, and inboxes that do not share context create friction.",
            icon: "🔌"
        },
        {
            title: "Bottlenecks Hide Inside Approvals",
            desc: "Stalled approvals and unclear ownership lead to delayed responses and missed follow-ups.",
            icon: "🛑"
        },
        {
            title: "Automation Fails Without Mapping",
            desc: "Effective automation needs clear process steps and rules before building.",
            icon: "❌"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pa-section",
        style: {
            padding: "100px 40px",
            background: "#08090f"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1200px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        marginBottom: "60px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "pa-h2",
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].fonts.serif,
                                fontSize: "36px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                marginBottom: "16px"
                            },
                            children: "Messy Workflows Keep Teams Busy Without Moving Work Forward"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                maxWidth: "700px",
                                margin: "0 auto",
                                fontSize: "16px"
                            },
                            children: "Manual processes and scattered tools create costly handoffs. Talk to a Workflow Optimization Expert to fix it."
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "24px"
                    },
                    className: "pa-grid-2",
                    children: problems.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "32px",
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.surface,
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.border}`,
                                borderRadius: "16px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "24px",
                                        marginBottom: "20px"
                                    },
                                    children: p.icon
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "18px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                        marginBottom: "12px",
                                        fontWeight: 600
                                    },
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "14px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                        lineHeight: 1.6
                                    },
                                    children: p.desc
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ProblemSection;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroSection");
__turbopack_context__.k.register(_c1, "ProblemSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceOverview",
    ()=>ServiceOverview,
    "WhatWeOptimize",
    ()=>WhatWeOptimize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/shared.ts [app-client] (ecmascript)");
"use client";
;
;
const ServiceOverview = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pa-section",
        style: {
            padding: "100px 40px",
            background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.background
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1200px",
                margin: "0 auto"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "80px",
                    alignItems: "start"
                },
                className: "pa-grid-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "pa-h2",
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].fonts.serif,
                                    fontSize: "36px",
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                    marginBottom: "24px"
                                },
                                children: "Workflow Optimization Built Around How Your Team Actually Works"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "24px",
                                    background: "rgba(201, 168, 76, 0.05)",
                                    borderLeft: `4px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary}`,
                                    borderRadius: "4px",
                                    marginBottom: "32px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: "16px",
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary,
                                            marginBottom: "8px",
                                            fontWeight: 700
                                        },
                                        children: "What Is AI Workflow Optimization?"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "14px",
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                            lineHeight: 1.6,
                                            margin: 0
                                        },
                                        children: "Improving business processes with workflow mapping, automation planning, and AI support so teams move work faster with fewer manual steps."
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px"
                                },
                                children: [
                                    "Repeated manual tasks",
                                    "Unclear ownership of work",
                                    "Slow approvals and handoffs",
                                    "Tool overload and friction",
                                    "Reporting gaps"
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            fontSize: "14px",
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary
                                                },
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                                lineNumber: 30,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            item
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "40px",
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.surface,
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.border}`,
                            borderRadius: "16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "20px",
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                    marginBottom: "24px",
                                    fontWeight: 700
                                },
                                children: "What ThePrimeCrafters Handles"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px"
                                },
                                children: [
                                    {
                                        step: "01",
                                        title: "Workflow Audit",
                                        desc: "Mapping your current processes."
                                    },
                                    {
                                        step: "02",
                                        title: "Process Mapping",
                                        desc: "Identifying friction and handoffs."
                                    },
                                    {
                                        step: "03",
                                        title: "Bottleneck Analysis",
                                        desc: "Finding where work stalls."
                                    },
                                    {
                                        step: "04",
                                        title: "Automation Roadmap",
                                        desc: "Planning your AI-ready future."
                                    },
                                    {
                                        step: "05",
                                        title: "KPI Tracking",
                                        desc: "Measuring real-world performance."
                                    },
                                    {
                                        step: "06",
                                        title: "Post-Launch Improvement",
                                        desc: "Continuous optimization."
                                    }
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "16px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "12px",
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary,
                                                    fontWeight: 700
                                                },
                                                children: item.step
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: "14px",
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                                            margin: "0 0 4px 0",
                                                            fontWeight: 600
                                                        },
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: "12px",
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                                            margin: 0
                                                        },
                                                        children: item.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ServiceOverview;
const WhatWeOptimize = ()=>{
    const services = [
        {
            title: "Sales and Lead Handoff",
            desc: "Improve lead capture, qualification, and CRM updates.",
            icon: "🎯"
        },
        {
            title: "Customer Support Tickets",
            desc: "Map requests into clear routing and escalation.",
            icon: "🎧"
        },
        {
            title: "Operations and Admin",
            desc: "Improve task routing and internal requests.",
            icon: "⚙️"
        },
        {
            title: "Approval and Review",
            desc: "Clarify owners and escalation paths.",
            icon: "✅"
        },
        {
            title: "Reporting and Dashboards",
            desc: "Turn scattered data into useful summaries.",
            icon: "📊"
        },
        {
            title: "CRM and Data Sync",
            desc: "Improve how records move between tools.",
            icon: "🔄"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pa-section",
        style: {
            padding: "100px 40px",
            background: "#08090f"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1200px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        marginBottom: "60px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "pa-h2",
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].fonts.serif,
                            fontSize: "36px",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                            marginBottom: "16px"
                        },
                        children: "Business Workflows ThePrimeCrafters Can Optimize"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "24px"
                    },
                    className: "pa-grid-2",
                    children: services.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "32px",
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.surface,
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.border}`,
                                borderRadius: "16px",
                                transition: "all 0.3s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "24px",
                                        marginBottom: "20px"
                                    },
                                    children: s.icon
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "18px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                        marginBottom: "12px",
                                        fontWeight: 600
                                    },
                                    children: s.title
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "14px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                        lineHeight: 1.6
                                    },
                                    children: s.desc
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = WhatWeOptimize;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ServiceOverview");
__turbopack_context__.k.register(_c1, "WhatWeOptimize");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImplementationProcess",
    ()=>ImplementationProcess,
    "OptimizationFramework",
    ()=>OptimizationFramework
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/shared.ts [app-client] (ecmascript)");
"use client";
;
;
const OptimizationFramework = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pa-section",
        style: {
            padding: "100px 40px",
            background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.background
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1200px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        marginBottom: "60px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "pa-h2",
                            style: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].fonts.serif,
                                fontSize: "36px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                marginBottom: "16px"
                            },
                            children: "How Workflow Optimization Turns Daily Work Into a Clear Operating System"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                maxWidth: "700px",
                                margin: "0 auto",
                                fontSize: "16px"
                            },
                            children: "We design a framework where inputs, logic, AI support, and outputs function as one."
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "20px"
                    },
                    className: "pa-grid-2",
                    children: [
                        {
                            title: "Inputs",
                            items: [
                                "Leads",
                                "Calls",
                                "Forms",
                                "Tickets"
                            ],
                            icon: "📥"
                        },
                        {
                            title: "Logic",
                            items: [
                                "Routing",
                                "Approvals",
                                "Rules",
                                "Steps"
                            ],
                            icon: "🧠"
                        },
                        {
                            title: "AI Support",
                            items: [
                                "Summaries",
                                "Drafts",
                                "Scoring"
                            ],
                            icon: "✨"
                        },
                        {
                            title: "Outputs",
                            items: [
                                "CRM Updates",
                                "Alerts",
                                "Reports"
                            ],
                            icon: "📤"
                        }
                    ].map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "30px",
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.surface,
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.border}`,
                                borderRadius: "16px",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "32px",
                                        marginBottom: "16px"
                                    },
                                    children: step.icon
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "18px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                        marginBottom: "16px",
                                        fontWeight: 700
                                    },
                                    children: step.title
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "8px",
                                        justifyContent: "center"
                                    },
                                    children: step.items.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "11px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                                padding: "4px 10px",
                                                background: "rgba(255,255,255,0.05)",
                                                borderRadius: "4px"
                                            },
                                            children: item
                                        }, j, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                                            lineNumber: 31,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = OptimizationFramework;
const ImplementationProcess = ()=>{
    const steps = [
        {
            num: "01",
            title: "Workflow Discovery",
            desc: "We map your current operations and find the bottlenecks."
        },
        {
            num: "02",
            title: "Opportunity Mapping",
            desc: "We prioritize the highest value workflows to fix first."
        },
        {
            num: "03",
            title: "Architecture Design",
            desc: "We design the logic, AI steps, and integration points."
        },
        {
            num: "04",
            title: "Build & Integration",
            desc: "We connect your tools and build the optimized system."
        },
        {
            num: "05",
            title: "Launch & Monitoring",
            desc: "We deploy and track performance in real-time."
        },
        {
            num: "06",
            title: "Continuous Optimization",
            desc: "We refine the system based on real usage data."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pa-section",
        style: {
            padding: "100px 40px",
            background: "#08090f"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1200px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        marginBottom: "60px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "pa-h2",
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].fonts.serif,
                            fontSize: "36px",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                            marginBottom: "16px"
                        },
                        children: "Our Implementation Process"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "40px"
                    },
                    className: "pa-grid-2",
                    children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "48px",
                                        fontWeight: 900,
                                        color: "rgba(201, 168, 76, 0.1)",
                                        position: "absolute",
                                        top: "-20px",
                                        left: "-10px"
                                    },
                                    children: s.num
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        zIndex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: "18px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                                marginBottom: "12px",
                                                fontWeight: 700
                                            },
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "14px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                                lineHeight: 1.6
                                            },
                                            children: s.desc
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ImplementationProcess;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "OptimizationFramework");
__turbopack_context__.k.register(_c1, "ImplementationProcess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaseStudiesSection",
    ()=>CaseStudiesSection,
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/shared.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CaseStudiesSection = ()=>{
    const cases = [
        {
            title: "3vltn Domain AI Platform",
            cat: "Custom Workflow",
            result: "+250% Deal Closure",
            link: "/case-study/3vltn"
        },
        {
            title: "Spectrum AI Voice Agent",
            cat: "Sales Automation",
            result: "10K+ Calls / Mo",
            link: "/case-study/spectrum-voice-agent"
        },
        {
            title: "RV Park AI Voice Agent",
            cat: "Booking Automation",
            result: "100% Answer Rate",
            link: "/case-study/rv-park-voice-agent"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pa-section",
        style: {
            padding: "100px 40px",
            background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.background
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1200px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        marginBottom: "60px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "pa-h2",
                                    style: {
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].fonts.serif,
                                        fontSize: "36px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                        marginBottom: "16px"
                                    },
                                    children: "Proof of Work"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                        fontSize: "16px",
                                        maxWidth: "500px"
                                    },
                                    children: "Real production systems delivering measurable returns."
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/case-studies",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary,
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 600
                            },
                            children: "View All Case Studies →"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "24px"
                    },
                    className: "pa-grid-2",
                    children: cases.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: c.link,
                            style: {
                                padding: "40px",
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.surface,
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.border}`,
                                borderRadius: "16px",
                                textDecoration: "none"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "11px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary,
                                        fontWeight: 700,
                                        textTransform: "uppercase"
                                    },
                                    children: c.cat
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "20px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                        margin: "12px 0 24px 0",
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].fonts.serif
                                    },
                                    children: c.title
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "12px 20px",
                                        background: "rgba(255,255,255,0.03)",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255,255,255,0.05)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "12px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted
                                            },
                                            children: "Result: "
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "14px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary,
                                                fontWeight: 700
                                            },
                                            children: c.result
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CaseStudiesSection;
const FAQSection = ()=>{
    _s();
    const [openIdx, setOpenIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const faqs = [
        {
            q: "What is AI workflow optimization?",
            a: "It is the process of mapping and improving business workflows using automation and AI to remove manual bottlenecks."
        },
        {
            q: "How long does it take to see results?",
            a: "Most clients see measurable improvements in efficiency and response times within the first 4-6 weeks after implementation."
        },
        {
            q: "Do we need to replace our current tools?",
            a: "No. We integrate AI capabilities into your existing systems (CRMs, email, forms) rather than replacing them."
        },
        {
            q: "Can we include human approvals?",
            a: "Yes. We design 'human-in-the-loop' workflows where AI handles the repetitive steps and humans handle sensitive decisions."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pa-section",
        style: {
            padding: "100px 40px",
            background: "#08090f"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "800px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "pa-h2",
                    style: {
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].fonts.serif,
                        fontSize: "36px",
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                        marginBottom: "40px",
                        textAlign: "center"
                    },
                    children: "AI Workflow Optimization FAQs"
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px"
                    },
                    children: faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.border}`,
                                borderRadius: "12px",
                                overflow: "hidden"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenIdx(openIdx === i ? null : i),
                                    style: {
                                        width: "100%",
                                        padding: "24px",
                                        background: "none",
                                        border: "none",
                                        textAlign: "left",
                                        cursor: "pointer",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.text,
                                                fontWeight: 600,
                                                fontSize: "16px"
                                            },
                                            children: faq.q
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.primary
                                            },
                                            children: openIdx === i ? "−" : "+"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                openIdx === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "0 24px 24px 24px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].colors.textMuted,
                                        fontSize: "14px",
                                        lineHeight: 1.6
                                    },
                                    children: faq.a
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FAQSection, "CsXCwE34KdsiCH5n8B5LYl4zg3g=");
_c1 = FAQSection;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "CaseStudiesSection");
__turbopack_context__.k.register(_c1, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Heroandproblem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Heroandproblem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Serviceandoptimize$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Serviceandoptimize.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Optimizeandimplentation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Optimizeandimplentation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Casestudiesandfaq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/Casestudiesandfaq.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const WorkflowOptimizationPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: THEME.colors.background,
            color: THEME.colors.text,
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: PA_FONTS_LINK,
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: PA_RESPONSIVE_STYLES
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Heroandproblem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 14,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Heroandproblem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProblemSection"], {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Serviceandoptimize$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceOverview"], {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Serviceandoptimize$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatWeOptimize"], {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Optimizeandimplentation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptimizationFramework"], {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Optimizeandimplentation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImplementationProcess"], {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 40px",
                    background: THEME.colors.background,
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto",
                        padding: "80px 40px",
                        background: THEME.colors.surface,
                        border: `1px solid ${THEME.colors.border}`,
                        borderRadius: "24px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: THEME.fonts.serif,
                                fontSize: "36px",
                                color: THEME.colors.text,
                                marginBottom: "16px"
                            },
                            children: "Ready to Improve the Workflows Slowing Your Team Down?"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: THEME.colors.textMuted,
                                fontSize: "18px",
                                marginBottom: "40px"
                            },
                            children: "Tell us the workflow you want to fix first and the outcome you want to reach."
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/contact",
                            style: {
                                padding: "20px 40px",
                                background: THEME.colors.primary,
                                color: "#000",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontWeight: 700,
                                fontSize: "16px",
                                display: "inline-block"
                            },
                            children: "Book a Free Workflow Strategy Call"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Casestudiesandfaq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaseStudiesSection"], {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$services$2f$workflow$2d$optimization$2f$components$2f$Casestudiesandfaq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQSection"], {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "60px 40px",
                    background: "#08090f",
                    borderTop: `1px solid ${THEME.colors.border}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1000px",
                        margin: "0 auto",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: "14px",
                                color: THEME.colors.primary,
                                fontWeight: 700,
                                marginBottom: "12px",
                                textTransform: "uppercase"
                            },
                            children: "ThePrimeCrafters AI Workflow Optimization"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "13px",
                                color: THEME.colors.textMuted,
                                lineHeight: 1.8
                            },
                            children: "ThePrimeCrafters provides AI workflow optimization services for business operations, process automation, AI integration, CRM workflows, approval flows, reporting, and custom AI systems. Built for Sales, Support, Operations, Admin, Reporting, CRM, and Service Workflows."
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WorkflowOptimizationPage;
const __TURBOPACK__default__export__ = WorkflowOptimizationPage;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=prime_ThePrimeCrafters-Web_app_services_workflow-optimization_17a45c81._.js.map