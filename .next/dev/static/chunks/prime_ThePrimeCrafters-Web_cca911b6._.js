(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const navLinks = [
    {
        name: "About Us",
        href: "/aboutus"
    },
    {
        name: "Services",
        href: "#services"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Testimonials",
        href: "#testimonials"
    },
    {
        name: "Contact",
        href: "#contact"
    }
];
function Navbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass border-b border-[rgba(212,175,55,0.1)] py-4" : "bg-transparent py-6"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "flex items-center gap-3 group",
                            "aria-label": "PrimeCrafters Home",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo.png",
                                    alt: "PrimeCrafters Logo",
                                    className: "h-10 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-semibold tracking-wide font-[var(--font-cormorant)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#f5f5f5]",
                                            children: "Prime"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "Crafters"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-8",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "text-[#a3a3a3] hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium tracking-wide relative group",
                                    children: [
                                        link.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, link.name, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "btn-primary text-sm inline-flex items-center gap-2",
                                children: [
                                    "Get Started",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "lg:hidden relative w-10 h-10 flex items-center justify-center",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            "aria-label": "Toggle menu",
                            "aria-expanded": isMobileMenuOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-96 mt-6" : "max-h-0"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 pb-6",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "text-[#a3a3a3] hover:text-[#D4AF37] transition-colors duration-300 text-base font-medium py-2",
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    children: link.name
                                }, link.name, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "btn-primary text-sm inline-flex items-center justify-center gap-2 mt-2",
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: [
                                    "Get Started",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Navbar, "0+zEKVBL95ILuBb5rHE6ViYOHu8=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const pageLinks = [
    {
        name: "Services",
        href: "#services"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Testimonials",
        href: "#testimonials"
    },
    {
        name: "Contact",
        href: "#contact"
    }
];
const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/the-prime-crafters/posts/?feedView=all",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/theprimecrafters/",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "GitHub",
        href: "https://github.com/The-Prime-Crafters",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#0a0a0a] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "flex items-center gap-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/logo.png",
                                                alt: "PrimeCrafters Logo",
                                                className: "h-10 w-auto"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-semibold tracking-wide font-[var(--font-cormorant)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#f5f5f5]",
                                                        children: "Prime"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gradient-gold",
                                                        children: "Crafters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#a3a3a3] mb-6 max-w-sm leading-relaxed",
                                        children: "Transforming businesses through intelligent AI automation. We deliver proven results with cutting-edge technology and dedicated expertise."
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4 place-items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-center",
                                            children: pageLinks.slice(0, Math.ceil(pageLinks.length / 2)).map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        className: "text-[#737373] hover:text-[#D4AF37] transition-colors text-sm",
                                                        children: link.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 21
                                                    }, this)
                                                }, link.name, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[#f5f5f5] font-semibold text-sm uppercase tracking-wider text-center self-center",
                                            children: "Links"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-center",
                                            children: pageLinks.slice(Math.ceil(pageLinks.length / 2)).map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        className: "text-[#737373] hover:text-[#D4AF37] transition-colors text-sm",
                                                        children: link.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this)
                                                }, link.name, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[#f5f5f5] font-semibold mb-4 text-sm uppercase tracking-wider",
                                        children: "Follow Us"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: social.href,
                                                className: "w-10 h-10 rounded-lg bg-[#111111] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-[#737373] hover:text-[#D4AF37] hover:border-[rgba(212,175,55,0.3)] transition-all duration-300",
                                                "aria-label": social.name,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: social.icon
                                            }, social.name, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-6 border-t border-[rgba(255,255,255,0.05)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#525252] text-sm",
                                    children: [
                                        "© ",
                                        currentYear,
                                        " PrimeCrafters. All rights reserved."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-[#525252] hover:text-[#a3a3a3] text-sm transition-colors",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-[#525252] hover:text-[#a3a3a3] text-sm transition-colors",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-[#525252] hover:text-[#a3a3a3] text-sm transition-colors",
                                            children: "Cookies"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37] rounded-full opacity-[0.01] blur-3xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectsData",
    ()=>projectsData
]);
const projectsData = [
    {
        title: "3vltn Domain AI Platform Case Study",
        industry: "Domain Investment",
        description: "Discover how PrimeCrafters built the 3vltn AI platform for domain investors—automating campaigns, negotiations, and deal closing with 250% more closures.",
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
        title: "lmn8 Ketamine Therapy AI Case Study",
        industry: "Healthcare & AI",
        description: "Learn how PrimeCrafters built lmn8's HIPAA-compliant AI platform matching ketamine therapy patients with clinics—94% accuracy, 65% faster intake.",
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
        title: "Faithful Companion App Case Study",
        industry: "Mobile Application",
        description: "See how PrimeCrafters built Faithful Companion, a Christian spiritual app with 50K+ daily users, daily devotionals, prayer support, and church integration.",
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
        title: "RV Park AI Voice Agent Case Study",
        industry: "Voice AI Automation",
        description: "See how PrimeCrafters built an AI voice agent for RV parks that answers 100% of calls, automates bookings 24/7, and saves 30+ staff hours per week.",
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
        title: "Spectrum AI Voice Agent Case Study",
        industry: "Enterprise Sales AI",
        description: "Explore how PrimeCrafters built Spectrum's AI voice agent—handling 10K+ sales calls/month, boosting conversion by 45%, and cutting costs by 70%.",
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
        title: "AI Lead Generation Tools Case Study",
        industry: "Marketing Tools",
        description: "Learn how PrimeCrafters' AI lead generation tools generate 50K+ leads/month, cut prospecting time by 90%, and integrate seamlessly with Salesforce and HubSpot.",
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/app/data/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Projects() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Projects.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["Projects.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "Projects.useEffect": ()=>observer.disconnect()
            })["Projects.useEffect"];
        }
    }["Projects.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            if (!canvasRef.current) return;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                canvas: canvasRef.current,
                alpha: true,
                antialias: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            camera.position.z = 50;
            // Create starfield
            const starCount = 2000;
            const positions = new Float32Array(starCount * 3);
            const colors = new Float32Array(starCount * 3);
            const sizes = new Float32Array(starCount);
            const goldColor = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xD4AF37);
            const whiteColor = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff);
            const blueColor = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x4444ff);
            for(let i = 0; i < starCount; i++){
                const i3 = i * 3;
                // Random positions in a sphere
                const r = 100 * Math.cbrt(Math.random());
                const theta = Math.random() * 2 * Math.PI;
                const phi = Math.acos(2 * Math.random() - 1);
                positions[i3] = r * Math.sin(phi) * Math.cos(theta);
                positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                positions[i3 + 2] = r * Math.cos(phi);
                // Colors - mostly white/gold with some blue hints for "space" feel
                const colorChoice = Math.random();
                let color;
                if (colorChoice > 0.9) color = goldColor;
                else if (colorChoice > 0.8) color = blueColor;
                else color = whiteColor;
                colors[i3] = color.r;
                colors[i3 + 1] = color.g;
                colors[i3 + 2] = color.b;
                sizes[i] = Math.random() * 0.5 + 0.1;
            }
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            geometry.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
            geometry.setAttribute('size', new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](sizes, 1));
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms: {
                    color: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff)
                    }
                },
                vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
                fragmentShader: `
        varying vec3 vColor;
        void main() {
          float r = distance(gl_PointCoord, vec2(0.5));
          if (r > 0.5) discard;
          gl_FragColor = vec4(vColor, 1.0);
        }
      `,
                transparent: true,
                vertexColors: true
            });
            const stars = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](geometry, material);
            scene.add(stars);
            // Add some "nebula" fog particles (larger, softer)
            const fogCount = 50;
            const fogPositions = new Float32Array(fogCount * 3);
            const fogColors = new Float32Array(fogCount * 3);
            for(let i = 0; i < fogCount; i++){
                const i3 = i * 3;
                fogPositions[i3] = (Math.random() - 0.5) * 100;
                fogPositions[i3 + 1] = (Math.random() - 0.5) * 50;
                fogPositions[i3 + 2] = (Math.random() - 0.5) * 50;
                const color = Math.random() > 0.5 ? goldColor : blueColor;
                fogColors[i3] = color.r;
                fogColors[i3 + 1] = color.g;
                fogColors[i3 + 2] = color.b;
            }
            const fogGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            fogGeometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](fogPositions, 3));
            fogGeometry.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](fogColors, 3));
            const fogMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms: {
                    color: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff)
                    }
                },
                vertexShader: `
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 100.0 * (10.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
                fragmentShader: `
        varying vec3 vColor;
        void main() {
          float r = distance(gl_PointCoord, vec2(0.5));
          if (r > 0.5) discard;
          float alpha = 1.0 - (r * 2.0);
          alpha = pow(alpha, 1.5);
          gl_FragColor = vec4(vColor, alpha * 0.15);
        }
      `,
                transparent: true,
                vertexColors: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false
            });
            const fog = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](fogGeometry, fogMaterial);
            scene.add(fog);
            // Animation loop
            const animate = {
                "Projects.useEffect.animate": ()=>{
                    stars.rotation.y += 0.0005;
                    stars.rotation.x += 0.0002;
                    fog.rotation.y += 0.0002;
                    renderer.render(scene, camera);
                    sceneRef.current = requestAnimationFrame(animate);
                }
            }["Projects.useEffect.animate"];
            animate();
            const handleResize = {
                "Projects.useEffect.handleResize": ()=>{
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                }
            }["Projects.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "Projects.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    if (sceneRef.current) {
                        cancelAnimationFrame(sceneRef.current);
                    }
                    renderer.dispose();
                    geometry.dispose();
                    material.dispose();
                    fogGeometry.dispose();
                    fogMaterial.dispose();
                }
            })["Projects.useEffect"];
        }
    }["Projects.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        ref: sectionRef,
        className: "py-8 lg:py-10 bg-[#111111] relative overflow-hidden flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 w-full h-full pointer-events-none opacity-60",
                style: {
                    mixBlendMode: 'screen'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10 w-full px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mb-6 lg:mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-[#D4AF37] text-[10px] font-semibold tracking-widest uppercase mb-1.5",
                                children: "Our Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-cormorant)] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#f5f5f5]",
                                        children: "Delivered "
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-gold",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#a3a3a3] text-sm lg:text-base max-w-2xl mx-auto",
                                children: "Explore our track record of successful AI automation implementations."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsData"].map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `group relative rounded-xl glass-card border-[rgba(255,255,255,0.08)] overflow-hidden card-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                                style: {
                                    transitionDelay: `${index * 100}ms`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-32 glass flex items-center justify-center overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl transform group-hover:scale-125 transition-all duration-500 group-hover:rotate-12",
                                                children: project.image
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.5)] to-transparent opacity-80"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-2 left-2 px-2 py-0.5 text-[9px] font-medium glass text-[#D4AF37] rounded-full border border-[rgba(212,175,55,0.3)] backdrop-blur-xl",
                                                children: project.industry
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-semibold text-[#f5f5f5] mb-1 font-[var(--font-cormorant)] group-hover:text-[#D4AF37] transition-colors truncate",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#a3a3a3] text-[11px] mb-2 leading-relaxed line-clamp-2",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1 mb-3",
                                                children: project.results.slice(0, 2).map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-1.5 py-0.5 text-[9px] bg-[rgba(255,255,255,0.03)] text-[#737373] rounded border border-[rgba(255,255,255,0.05)] whitespace-nowrap",
                                                        children: result
                                                    }, result, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/case-study/${project.slug}`,
                                                        className: "inline-flex items-center gap-1 text-[#D4AF37] text-[10px] font-medium group/link hover:text-[#FFD700] transition-colors cursor-pointer",
                                                        onClick: ()=>console.log(`Navigating to case study: ${project.slug}`),
                                                        children: [
                                                            "View Case Study",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-3 h-3 group-hover/link:translate-x-1 transition-transform",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, this),
                                                    project.websiteUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.websiteUrl,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center gap-1 text-[#D4AF37] text-[10px] font-medium group/link hover:text-[#FFD700] transition-colors cursor-pointer",
                                                        children: [
                                                            "Open Web",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-3 h-3 group-hover/link:translate-x-1 transition-transform",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_60px_rgba(212,175,55,0.1)]"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, project.title, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mt-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            className: "btn-secondary inline-flex items-center gap-2 text-xs py-2 px-5",
                            children: [
                                "Discuss Your Project",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3.5 h-3.5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_s(Projects, "pTatJHE8/WbAYKSWdOAv2yPrB6E=");
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CTA() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CTA.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "CTA.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["CTA.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "CTA.useEffect": ()=>observer.disconnect()
            })["CTA.useEffect"];
        }
    }["CTA.useEffect"], []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve)=>setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
            name: "",
            email: "",
            company: "",
            message: ""
        });
        // Reset success message after 5 seconds
        setTimeout(()=>setIsSubmitted(false), 5000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        ref: sectionRef,
        className: "section-padding bg-[#111111] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4",
                                    children: "Get In Touch"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-cormorant)] mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#f5f5f5]",
                                            children: "Ready to Transform"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "Your Business?"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#a3a3a3] text-lg mb-8 leading-relaxed",
                                    children: "Let's discuss how AI automation can revolutionize your operations. Our team is ready to help you achieve extraordinary results."
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 group cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 rounded-2xl glass text-[#D4AF37] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-6 h-6",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 1.5,
                                                            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-[#737373]",
                                                            children: "Email Us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:aman@theprimecrafters.com",
                                                            className: "text-[#f5f5f5] hover:text-[#D4AF37] transition-colors text-lg",
                                                            children: "aman@theprimecrafters.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 group cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 rounded-2xl glass text-[#D4AF37] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-6 h-6",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 1.5,
                                                            d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-[#737373]",
                                                            children: "Call Us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "tel:+12138570502",
                                                            className: "text-[#f5f5f5] hover:text-[#D4AF37] transition-colors text-lg",
                                                            children: "+1 213-857-0502"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "p-10 rounded-3xl glass-card border-[rgba(255,255,255,0.08)]",
                                children: isSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 rounded-full glass flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(212,175,55,0.4)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-10 h-10 text-[#D4AF37]",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M5 13l4 4L19 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold text-[#f5f5f5] mb-3",
                                            children: "Message Sent!"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#a3a3a3]",
                                            children: "We'll get back to you within 24 hours."
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold text-[#f5f5f5] mb-8 font-[var(--font-cormorant)]",
                                            children: "Send Us a Message"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "name",
                                                                    className: "block text-sm text-[#a3a3a3] mb-2",
                                                                    children: "Full Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "name",
                                                                    required: true,
                                                                    value: formState.name,
                                                                    onChange: (e)=>setFormState({
                                                                            ...formState,
                                                                            name: e.target.value
                                                                        }),
                                                                    className: "w-full px-5 py-4 rounded-xl glass border border-[rgba(255,255,255,0.1)] text-[#f5f5f5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all",
                                                                    placeholder: "John Doe"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "email",
                                                                    className: "block text-sm text-[#a3a3a3] mb-2",
                                                                    children: "Email Address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    id: "email",
                                                                    required: true,
                                                                    value: formState.email,
                                                                    onChange: (e)=>setFormState({
                                                                            ...formState,
                                                                            email: e.target.value
                                                                        }),
                                                                    className: "w-full px-5 py-4 rounded-xl glass border border-[rgba(255,255,255,0.1)] text-[#f5f5f5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all",
                                                                    placeholder: "john@company.com"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                                    lineNumber: 212,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "company",
                                                            className: "block text-sm text-[#a3a3a3] mb-2",
                                                            children: "Company Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            id: "company",
                                                            value: formState.company,
                                                            onChange: (e)=>setFormState({
                                                                    ...formState,
                                                                    company: e.target.value
                                                                }),
                                                            className: "w-full px-5 py-4 rounded-xl glass border border-[rgba(255,255,255,0.1)] text-[#f5f5f5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all",
                                                            placeholder: "Your Company"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "message",
                                                            className: "block text-sm text-[#a3a3a3] mb-2",
                                                            children: "How Can We Help?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            id: "message",
                                                            required: true,
                                                            rows: 4,
                                                            value: formState.message,
                                                            onChange: (e)=>setFormState({
                                                                    ...formState,
                                                                    message: e.target.value
                                                                }),
                                                            className: "w-full px-5 py-4 rounded-xl glass border border-[rgba(255,255,255,0.1)] text-[#f5f5f5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all resize-none",
                                                            placeholder: "Tell us about your project..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: isSubmitting,
                                                    className: "w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                                    children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "animate-spin w-5 h-5",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        className: "opacity-25",
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "10",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                                        lineNumber: 277,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        className: "opacity-75",
                                                                        fill: "currentColor",
                                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                                        lineNumber: 285,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Sending..."
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            "Send Message",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-5 h-5",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/CTA.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(CTA, "bkt3UWz89MKCWsp3HI6bYaY7xGA=");
_c = CTA;
var _c;
__turbopack_context__.k.register(_c, "CTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=prime_ThePrimeCrafters-Web_cca911b6._.js.map