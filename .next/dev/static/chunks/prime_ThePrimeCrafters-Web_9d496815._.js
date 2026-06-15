(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// --- THEME & CONSTANTS ---
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
    .pa-grid-4 { grid-template-columns: 1fr !important; }
    .pa-section { padding: 60px 20px !important; min-height: auto !important; }
    .pa-h1 { font-size: 32px !important; }
    .pa-h2 { font-size: 28px !important; }
  }
`;
// Helper component for full-screen sections
const Section = ({ children, style = {}, id = "", className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: `pa-section ${className}`,
        style: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 40px",
            boxSizing: "border-box",
            ...style
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1200px",
                width: "100%",
                margin: "0 auto"
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
            lineNumber: 50,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Section;
// --- COMPONENTS ---
const HeroSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        style: {
            background: THEME.colors.background,
            paddingTop: "140px"
        },
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
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
                                            background: THEME.colors.primary
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "12px",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: THEME.colors.primary,
                                            fontWeight: 600
                                        },
                                        children: "ThePrimeCrafters"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "pa-h1",
                                style: {
                                    fontFamily: THEME.fonts.serif,
                                    fontSize: "56px",
                                    color: THEME.colors.text,
                                    lineHeight: 1.1,
                                    marginBottom: "24px"
                                },
                                children: "AI Workflow Optimization Services for Faster, Smarter Business Operations"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "20px",
                                    color: THEME.colors.textMuted,
                                    lineHeight: 1.6,
                                    marginBottom: "40px",
                                    fontWeight: 400
                                },
                                children: "Find Bottlenecks, Improve Handoffs, and Build AI-Ready Workflows. We help you map current processes and remove friction."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 70,
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
                                            padding: "18px 36px",
                                            background: THEME.colors.primary,
                                            color: "#000",
                                            textDecoration: "none",
                                            borderRadius: "4px",
                                            fontWeight: 700,
                                            fontSize: "15px"
                                        },
                                        children: "Book a Free Strategy Call"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/case-studies",
                                        style: {
                                            padding: "18px 36px",
                                            border: `1px solid ${THEME.colors.border}`,
                                            color: THEME.colors.text,
                                            textDecoration: "none",
                                            borderRadius: "4px",
                                            fontWeight: 500,
                                            fontSize: "15px"
                                        },
                                        children: "View Case Studies"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "60px",
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
                                            padding: "8px 18px",
                                            background: "rgba(201, 168, 76, 0.1)",
                                            color: THEME.colors.primary,
                                            borderRadius: "100px",
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            border: "1px solid rgba(201, 168, 76, 0.2)"
                                        },
                                        children: badge
                                    }, badge, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "100%",
                                height: "450px",
                                background: "rgba(255,255,255,0.03)",
                                borderRadius: "24px",
                                border: `1px solid ${THEME.colors.border}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    color: THEME.colors.textMuted
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "60px",
                                            marginBottom: "15px"
                                        },
                                        children: "⚙️"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "14px",
                                            letterSpacing: "0.05em"
                                        },
                                        children: "Workflow Optimization Map Visual"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 91,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = HeroSection;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        style: {
            background: "#08090f"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "80px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "pa-h2",
                        style: {
                            fontFamily: THEME.fonts.serif,
                            fontSize: "42px",
                            color: THEME.colors.text,
                            marginBottom: "20px"
                        },
                        children: "Messy Workflows Keep Teams Busy Without Moving Work Forward"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: THEME.colors.textMuted,
                            maxWidth: "750px",
                            margin: "0 auto",
                            fontSize: "18px",
                            lineHeight: 1.6
                        },
                        children: "Manual processes and scattered tools create costly handoffs. Talk to a Workflow Optimization Expert to fix it."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 112,
                columnNumber: 7
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
                            padding: "40px",
                            background: THEME.colors.surface,
                            border: `1px solid ${THEME.colors.border}`,
                            borderRadius: "20px",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "32px",
                                    marginBottom: "24px"
                                },
                                children: p.icon
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "20px",
                                    color: THEME.colors.text,
                                    marginBottom: "16px",
                                    fontWeight: 700
                                },
                                children: p.title
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "15px",
                                    color: THEME.colors.textMuted,
                                    lineHeight: 1.7,
                                    flexGrow: 1
                                },
                                children: p.desc
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = ProblemSection;
const ServiceOverview = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        style: {
            background: THEME.colors.background
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "100px",
                alignItems: "start"
            },
            className: "pa-grid-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "pa-h2",
                            style: {
                                fontFamily: THEME.fonts.serif,
                                fontSize: "42px",
                                color: THEME.colors.text,
                                marginBottom: "32px"
                            },
                            children: "Workflow Optimization Built Around How Your Team Actually Works"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "32px",
                                background: "rgba(201, 168, 76, 0.05)",
                                borderLeft: `4px solid ${THEME.colors.primary}`,
                                borderRadius: "4px",
                                marginBottom: "40px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "18px",
                                        color: THEME.colors.primary,
                                        marginBottom: "12px",
                                        fontWeight: 700
                                    },
                                    children: "What Is AI Workflow Optimization?"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "16px",
                                        color: THEME.colors.textMuted,
                                        lineHeight: 1.7,
                                        margin: 0
                                    },
                                    children: "Improving business processes with workflow mapping, automation planning, and AI support so teams move work faster with fewer manual steps."
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            style: {
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px"
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
                                        gap: "16px",
                                        fontSize: "16px",
                                        color: THEME.colors.text
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: THEME.colors.primary,
                                                fontSize: "18px"
                                            },
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        item
                                    ]
                                }, i, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "50px",
                        background: THEME.colors.surface,
                        border: `1px solid ${THEME.colors.border}`,
                        borderRadius: "24px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontSize: "24px",
                                color: THEME.colors.text,
                                marginBottom: "32px",
                                fontWeight: 700
                            },
                            children: "What ThePrimeCrafters Handles"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "24px"
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
                                        gap: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "14px",
                                                color: THEME.colors.primary,
                                                fontWeight: 700,
                                                minWidth: "24px"
                                            },
                                            children: item.step
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    style: {
                                                        fontSize: "16px",
                                                        color: THEME.colors.text,
                                                        margin: "0 0 6px 0",
                                                        fontWeight: 600
                                                    },
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "14px",
                                                        color: THEME.colors.textMuted,
                                                        margin: 0,
                                                        lineHeight: 1.5
                                                    },
                                                    children: item.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = ServiceOverview;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        style: {
            background: "#08090f"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "80px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "pa-h2",
                    style: {
                        fontFamily: THEME.fonts.serif,
                        fontSize: "42px",
                        color: THEME.colors.text,
                        marginBottom: "20px"
                    },
                    children: "Business Workflows ThePrimeCrafters Can Optimize"
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "30px"
                },
                className: "pa-grid-3",
                children: services.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "40px",
                            background: THEME.colors.surface,
                            border: `1px solid ${THEME.colors.border}`,
                            borderRadius: "20px",
                            transition: "all 0.3s"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "36px",
                                    marginBottom: "24px"
                                },
                                children: s.icon
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "22px",
                                    color: THEME.colors.text,
                                    marginBottom: "16px",
                                    fontWeight: 700
                                },
                                children: s.title
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "16px",
                                    color: THEME.colors.textMuted,
                                    lineHeight: 1.7
                                },
                                children: s.desc
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = WhatWeOptimize;
const OptimizationFramework = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        style: {
            background: THEME.colors.background
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "80px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "pa-h2",
                        style: {
                            fontFamily: THEME.fonts.serif,
                            fontSize: "42px",
                            color: THEME.colors.text,
                            marginBottom: "20px"
                        },
                        children: "How Workflow Optimization Turns Daily Work Into a Clear Operating System"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: THEME.colors.textMuted,
                            maxWidth: "800px",
                            margin: "0 auto",
                            fontSize: "18px",
                            lineHeight: 1.6
                        },
                        children: "We design a framework where inputs, logic, AI support, and outputs function as one."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "24px"
                },
                className: "pa-grid-4",
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
                            padding: "40px",
                            background: THEME.colors.surface,
                            border: `1px solid ${THEME.colors.border}`,
                            borderRadius: "20px",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "48px",
                                    marginBottom: "24px"
                                },
                                children: step.icon
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "22px",
                                    color: THEME.colors.text,
                                    marginBottom: "20px",
                                    fontWeight: 700
                                },
                                children: step.title
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "10px",
                                    justifyContent: "center"
                                },
                                children: step.items.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "13px",
                                            color: THEME.colors.textMuted,
                                            padding: "6px 14px",
                                            background: "rgba(255,255,255,0.05)",
                                            borderRadius: "6px"
                                        },
                                        children: item
                                    }, j, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = OptimizationFramework;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        style: {
            background: "#08090f"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "80px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "pa-h2",
                    style: {
                        fontFamily: THEME.fonts.serif,
                        fontSize: "42px",
                        color: THEME.colors.text,
                        marginBottom: "20px"
                    },
                    children: "Our Implementation Process"
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "60px"
                },
                className: "pa-grid-3",
                children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "72px",
                                    fontWeight: 900,
                                    color: "rgba(201, 168, 76, 0.08)",
                                    position: "absolute",
                                    top: "-30px",
                                    left: "-15px"
                                },
                                children: s.num
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: "22px",
                                            color: THEME.colors.text,
                                            marginBottom: "16px",
                                            fontWeight: 700
                                        },
                                        children: s.title
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "16px",
                                            color: THEME.colors.textMuted,
                                            lineHeight: 1.7
                                        },
                                        children: s.desc
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = ImplementationProcess;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        style: {
            background: THEME.colors.background
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginBottom: "80px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "pa-h2",
                                style: {
                                    fontFamily: THEME.fonts.serif,
                                    fontSize: "42px",
                                    color: THEME.colors.text,
                                    marginBottom: "20px"
                                },
                                children: "Proof of Work"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: THEME.colors.textMuted,
                                    fontSize: "18px",
                                    maxWidth: "550px",
                                    lineHeight: 1.6
                                },
                                children: "Real production systems delivering measurable returns. Every result comes from post deployment performance tracking."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/case-studies",
                        style: {
                            color: THEME.colors.primary,
                            textDecoration: "none",
                            fontSize: "15px",
                            fontWeight: 700,
                            borderBottom: `1px solid ${THEME.colors.primary}`,
                            paddingBottom: "4px"
                        },
                        children: "View All Case Studies →"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "30px"
                },
                className: "pa-grid-3",
                children: cases.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: c.link,
                        style: {
                            padding: "50px",
                            background: THEME.colors.surface,
                            border: `1px solid ${THEME.colors.border}`,
                            borderRadius: "24px",
                            textDecoration: "none",
                            transition: "transform 0.3s"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "12px",
                                    color: THEME.colors.primary,
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em"
                                },
                                children: c.cat
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "24px",
                                    color: THEME.colors.text,
                                    margin: "16px 0 32px 0",
                                    fontFamily: THEME.fonts.serif
                                },
                                children: c.title
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "16px 24px",
                                    background: "rgba(255,255,255,0.03)",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255,255,255,0.05)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "14px",
                                            color: THEME.colors.textMuted
                                        },
                                        children: "Result: "
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "16px",
                                            color: THEME.colors.primary,
                                            fontWeight: 700
                                        },
                                        children: c.result
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = CaseStudiesSection;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        style: {
            background: "#08090f"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "900px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "pa-h2",
                    style: {
                        fontFamily: THEME.fonts.serif,
                        fontSize: "42px",
                        color: THEME.colors.text,
                        marginBottom: "60px",
                        textAlign: "center"
                    },
                    children: "AI Workflow Optimization FAQs"
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                    },
                    children: faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: `1px solid ${THEME.colors.border}`,
                                borderRadius: "16px",
                                overflow: "hidden",
                                background: THEME.colors.surface
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenIdx(openIdx === i ? null : i),
                                    style: {
                                        width: "100%",
                                        padding: "30px",
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
                                                color: THEME.colors.text,
                                                fontWeight: 700,
                                                fontSize: "18px"
                                            },
                                            children: faq.q
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: THEME.colors.primary,
                                                fontSize: "24px"
                                            },
                                            children: openIdx === i ? "−" : "+"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                    lineNumber: 340,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                openIdx === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "0 30px 30px 30px",
                                        color: THEME.colors.textMuted,
                                        fontSize: "16px",
                                        lineHeight: 1.8
                                    },
                                    children: faq.a
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
            lineNumber: 333,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FAQSection, "CsXCwE34KdsiCH5n8B5LYl4zg3g=");
_c8 = FAQSection;
// --- MAIN PAGE COMPONENT ---
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
                lineNumber: 365,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: PA_RESPONSIVE_STYLES
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProblemSection, {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceOverview, {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatWeOptimize, {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptimizationFramework, {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImplementationProcess, {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                style: {
                    background: THEME.colors.background,
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "900px",
                        margin: "0 auto",
                        padding: "100px 60px",
                        background: THEME.colors.surface,
                        border: `1px solid ${THEME.colors.border}`,
                        borderRadius: "32px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: THEME.fonts.serif,
                                fontSize: "48px",
                                color: THEME.colors.text,
                                marginBottom: "24px"
                            },
                            children: "Ready to Improve the Workflows Slowing Your Team Down?"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: THEME.colors.textMuted,
                                fontSize: "20px",
                                marginBottom: "48px",
                                lineHeight: 1.6
                            },
                            children: "Tell us the workflow you want to fix first and the outcome you want to reach."
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/contact",
                            style: {
                                padding: "22px 48px",
                                background: THEME.colors.primary,
                                color: "#000",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontWeight: 700,
                                fontSize: "18px",
                                display: "inline-block"
                            },
                            children: "Book a Free Workflow Strategy Call"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CaseStudiesSection, {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 390,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQSection, {}, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "80px 40px",
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
                                marginBottom: "16px",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em"
                            },
                            children: "ThePrimeCrafters AI Workflow Optimization"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "14px",
                                color: THEME.colors.textMuted,
                                lineHeight: 1.8
                            },
                            children: "ThePrimeCrafters provides AI workflow optimization services for business operations, process automation, AI integration, CRM workflows, approval flows, reporting, and custom AI systems. Built for Sales, Support, Operations, Admin, Reporting, CRM, and Service Workflows."
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/page.tsx",
        lineNumber: 364,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c9 = WorkflowOptimizationPage;
const __TURBOPACK__default__export__ = WorkflowOptimizationPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "HeroSection");
__turbopack_context__.k.register(_c2, "ProblemSection");
__turbopack_context__.k.register(_c3, "ServiceOverview");
__turbopack_context__.k.register(_c4, "WhatWeOptimize");
__turbopack_context__.k.register(_c5, "OptimizationFramework");
__turbopack_context__.k.register(_c6, "ImplementationProcess");
__turbopack_context__.k.register(_c7, "CaseStudiesSection");
__turbopack_context__.k.register(_c8, "FAQSection");
__turbopack_context__.k.register(_c9, "WorkflowOptimizationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=prime_ThePrimeCrafters-Web_9d496815._.js.map