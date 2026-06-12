(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navLinks = [
    {
        name: "Services",
        href: "/services"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "About",
        href: "/about-us"
    },
    {
        name: "Testimonials",
        href: "#testimonials"
    },
    {
        name: "Contact",
        href: "/contact"
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
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "backdrop-blur-xl bg-black/70 border-b border-[rgba(212,175,55,0.1)] py-2.5" : "backdrop-blur-md bg-black/30 py-3.5"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2.5 group",
                            "aria-label": "PrimeCrafters Home",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo.png",
                                    alt: "PrimeCrafters Logo",
                                    className: "h-8 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-semibold tracking-wide font-[var(--font-cormorant)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#f5f5f5]",
                                            children: "Prime"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#D4AF37]",
                                            children: "Crafters"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-6",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "text-[#a3a3a3] hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium tracking-wide relative group",
                                    children: [
                                        link.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, link.name, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "px-4 py-2.5 rounded-full bg-[#D4AF37] text-black font-medium text-sm inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300",
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
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "lg:hidden relative w-10 h-10 flex items-center justify-center",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            "aria-label": "Toggle Menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 pb-4",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "text-[#a3a3a3] hover:text-[#D4AF37] transition-colors duration-300 text-base font-medium py-2",
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    children: link.name
                                }, link.name, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "px-4 py-2.5 rounded-full bg-[#D4AF37] text-black font-medium text-sm inline-flex items-center justify-center gap-2 mt-2",
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
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Navbar.tsx",
        lineNumber: 29,
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
"[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Hero() {
    _s();
    const [activeOption, setActiveOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (!canvasRef.current) return;
            let animationFrameId;
            const loadThreeJS = {
                "Hero.useEffect.loadThreeJS": async ()=>{
                    const THREE = await __turbopack_context__.A("[project]/prime/ThePrimeCrafters-Web/node_modules/three/build/three.module.js [app-client] (ecmascript, async loader)");
                    const scene = new THREE.Scene();
                    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                    const renderer = new THREE.WebGLRenderer({
                        canvas: canvasRef.current,
                        alpha: true,
                        antialias: true
                    });
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                    camera.position.z = 5;
                    // OPTION 1: Particle Network System
                    if (activeOption === 1) {
                        const particleCount = 100;
                        const particles = [];
                        const connections = [];
                        const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
                        const particleMaterial = new THREE.MeshBasicMaterial({
                            color: 0xd4af37,
                            transparent: true,
                            opacity: 0.8
                        });
                        // Create particles
                        for(let i = 0; i < particleCount; i++){
                            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
                            particle.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
                            particle.userData.velocity = new THREE.Vector3((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02);
                            scene.add(particle);
                            particles.push(particle);
                        }
                        const mouse = {
                            x: 0,
                            y: 0
                        };
                        const handleMouseMove = {
                            "Hero.useEffect.loadThreeJS.handleMouseMove": (e)=>{
                                mouse.x = e.clientX / window.innerWidth * 2 - 1;
                                mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
                            }
                        }["Hero.useEffect.loadThreeJS.handleMouseMove"];
                        window.addEventListener("mousemove", handleMouseMove);
                        const animate = {
                            "Hero.useEffect.loadThreeJS.animate": ()=>{
                                animationFrameId = requestAnimationFrame(animate);
                                // Clear old connections
                                connections.forEach({
                                    "Hero.useEffect.loadThreeJS.animate": (line)=>scene.remove(line)
                                }["Hero.useEffect.loadThreeJS.animate"]);
                                connections.length = 0;
                                // Update particles
                                particles.forEach({
                                    "Hero.useEffect.loadThreeJS.animate": (particle, i)=>{
                                        particle.position.add(particle.userData.velocity);
                                        // Bounce off boundaries
                                        [
                                            'x',
                                            'y',
                                            'z'
                                        ].forEach({
                                            "Hero.useEffect.loadThreeJS.animate": (axis)=>{
                                                if (Math.abs(particle.position[axis]) > 5) {
                                                    particle.userData.velocity[axis] *= -1;
                                                }
                                            }
                                        }["Hero.useEffect.loadThreeJS.animate"]);
                                        // Mouse attraction
                                        const mouseVector = new THREE.Vector3(mouse.x * 5, mouse.y * 5, 0);
                                        const direction = mouseVector.sub(particle.position);
                                        particle.position.add(direction.multiplyScalar(0.001));
                                        // Draw connections
                                        for(let j = i + 1; j < particles.length; j++){
                                            const distance = particle.position.distanceTo(particles[j].position);
                                            if (distance < 2) {
                                                const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                                                    particle.position,
                                                    particles[j].position
                                                ]);
                                                const lineMaterial = new THREE.LineBasicMaterial({
                                                    color: 0xd4af37,
                                                    transparent: true,
                                                    opacity: (2 - distance) / 2 * 0.3
                                                });
                                                const line = new THREE.Line(lineGeometry, lineMaterial);
                                                scene.add(line);
                                                connections.push(line);
                                            }
                                        }
                                    }
                                }["Hero.useEffect.loadThreeJS.animate"]);
                                renderer.render(scene, camera);
                            }
                        }["Hero.useEffect.loadThreeJS.animate"];
                        animate();
                        const handleResize = {
                            "Hero.useEffect.loadThreeJS.handleResize": ()=>{
                                camera.aspect = window.innerWidth / window.innerHeight;
                                camera.updateProjectionMatrix();
                                renderer.setSize(window.innerWidth, window.innerHeight);
                            }
                        }["Hero.useEffect.loadThreeJS.handleResize"];
                        window.addEventListener("resize", handleResize);
                        return ({
                            "Hero.useEffect.loadThreeJS": ()=>{
                                window.removeEventListener("mousemove", handleMouseMove);
                                window.removeEventListener("resize", handleResize);
                                cancelAnimationFrame(animationFrameId);
                                renderer.dispose();
                            }
                        })["Hero.useEffect.loadThreeJS"];
                    }
                    // OPTION 2: Morphing Sphere
                    if (activeOption === 2) {
                        const geometry = new THREE.SphereGeometry(2, 64, 64);
                        const material = new THREE.MeshPhongMaterial({
                            color: 0xd4af37,
                            emissive: 0xd4af37,
                            emissiveIntensity: 0.1,
                            wireframe: true,
                            transparent: true,
                            opacity: 0.6
                        });
                        const sphere = new THREE.Mesh(geometry, material);
                        scene.add(sphere);
                        const innerMaterial = new THREE.MeshPhongMaterial({
                            color: 0xf2d06b,
                            emissive: 0xf2d06b,
                            emissiveIntensity: 0.2,
                            transparent: true,
                            opacity: 0.3
                        });
                        const innerSphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), innerMaterial);
                        scene.add(innerSphere);
                        const light = new THREE.PointLight(0xd4af37, 2, 100);
                        light.position.set(0, 0, 5);
                        scene.add(light);
                        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
                        scene.add(ambientLight);
                        const positions = geometry.attributes.position;
                        const originalPositions = positions.array.slice();
                        const mouse = {
                            x: 0,
                            y: 0
                        };
                        const handleMouseMove = {
                            "Hero.useEffect.loadThreeJS.handleMouseMove": (e)=>{
                                mouse.x = e.clientX / window.innerWidth * 2 - 1;
                                mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
                            }
                        }["Hero.useEffect.loadThreeJS.handleMouseMove"];
                        window.addEventListener("mousemove", handleMouseMove);
                        let time = 0;
                        const animate = {
                            "Hero.useEffect.loadThreeJS.animate": ()=>{
                                animationFrameId = requestAnimationFrame(animate);
                                time += 0.01;
                                // Morph sphere vertices
                                for(let i = 0; i < positions.count; i++){
                                    const x = originalPositions[i * 3];
                                    const y = originalPositions[i * 3 + 1];
                                    const z = originalPositions[i * 3 + 2];
                                    const noise = Math.sin(x * 2 + time) * Math.cos(y * 2 + time) * 0.3;
                                    positions.setXYZ(i, x * (1 + noise), y * (1 + noise), z * (1 + noise));
                                }
                                positions.needsUpdate = true;
                                sphere.rotation.x += 0.001;
                                sphere.rotation.y += 0.002;
                                innerSphere.rotation.x -= 0.002;
                                innerSphere.rotation.y -= 0.001;
                                // Mouse interaction
                                sphere.rotation.y += mouse.x * 0.01;
                                sphere.rotation.x += mouse.y * 0.01;
                                renderer.render(scene, camera);
                            }
                        }["Hero.useEffect.loadThreeJS.animate"];
                        animate();
                        const handleResize = {
                            "Hero.useEffect.loadThreeJS.handleResize": ()=>{
                                camera.aspect = window.innerWidth / window.innerHeight;
                                camera.updateProjectionMatrix();
                                renderer.setSize(window.innerWidth, window.innerHeight);
                            }
                        }["Hero.useEffect.loadThreeJS.handleResize"];
                        window.addEventListener("resize", handleResize);
                        return ({
                            "Hero.useEffect.loadThreeJS": ()=>{
                                window.removeEventListener("mousemove", handleMouseMove);
                                window.removeEventListener("resize", handleResize);
                                cancelAnimationFrame(animationFrameId);
                                renderer.dispose();
                            }
                        })["Hero.useEffect.loadThreeJS"];
                    }
                    // OPTION 3: Golden Wave Grid
                    if (activeOption === 3) {
                        const gridSize = 40;
                        const spacing = 0.5;
                        const geometry = new THREE.PlaneGeometry(gridSize * spacing, gridSize * spacing, gridSize, gridSize);
                        const material = new THREE.MeshPhongMaterial({
                            color: 0xd4af37,
                            emissive: 0xd4af37,
                            emissiveIntensity: 0.1,
                            wireframe: true,
                            side: THREE.DoubleSide,
                            transparent: true,
                            opacity: 0.8
                        });
                        const plane = new THREE.Mesh(geometry, material);
                        plane.rotation.x = -Math.PI / 3;
                        scene.add(plane);
                        const light = new THREE.PointLight(0xd4af37, 1, 100);
                        light.position.set(0, 5, 5);
                        scene.add(light);
                        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
                        scene.add(ambientLight);
                        camera.position.set(0, 8, 8);
                        camera.lookAt(0, 0, 0);
                        const positions = geometry.attributes.position;
                        const originalPositions = positions.array.slice();
                        const mouse = {
                            x: 0,
                            y: 0
                        };
                        const handleMouseMove = {
                            "Hero.useEffect.loadThreeJS.handleMouseMove": (e)=>{
                                mouse.x = e.clientX / window.innerWidth * 2 - 1;
                                mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
                            }
                        }["Hero.useEffect.loadThreeJS.handleMouseMove"];
                        window.addEventListener("mousemove", handleMouseMove);
                        let time = 0;
                        const animate = {
                            "Hero.useEffect.loadThreeJS.animate": ()=>{
                                animationFrameId = requestAnimationFrame(animate);
                                time += 0.03;
                                for(let i = 0; i < positions.count; i++){
                                    const x = originalPositions[i * 3];
                                    const y = originalPositions[i * 3 + 1];
                                    const distance = Math.sqrt(x * x + y * y);
                                    const wave = Math.sin(distance - time) * 2;
                                    const mouseDistance = Math.sqrt(Math.pow(x - mouse.x * 10, 2) + Math.pow(y - mouse.y * 10, 2));
                                    const mouseEffect = Math.max(0, 3 - mouseDistance) * 0.5;
                                    positions.setZ(i, wave + mouseEffect);
                                }
                                positions.needsUpdate = true;
                                renderer.render(scene, camera);
                            }
                        }["Hero.useEffect.loadThreeJS.animate"];
                        animate();
                        const handleResize = {
                            "Hero.useEffect.loadThreeJS.handleResize": ()=>{
                                camera.aspect = window.innerWidth / window.innerHeight;
                                camera.updateProjectionMatrix();
                                renderer.setSize(window.innerWidth, window.innerHeight);
                            }
                        }["Hero.useEffect.loadThreeJS.handleResize"];
                        window.addEventListener("resize", handleResize);
                        return ({
                            "Hero.useEffect.loadThreeJS": ()=>{
                                window.removeEventListener("mousemove", handleMouseMove);
                                window.removeEventListener("resize", handleResize);
                                cancelAnimationFrame(animationFrameId);
                                renderer.dispose();
                            }
                        })["Hero.useEffect.loadThreeJS"];
                    }
                }
            }["Hero.useEffect.loadThreeJS"];
            loadThreeJS();
            return ({
                "Hero.useEffect": ()=>{
                    if (animationFrameId) {
                        cancelAnimationFrame(animationFrameId);
                    }
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        activeOption
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: heroRef,
        className: "jsx-ccd9f15cfe20c887" + " " + "relative min-h-screen w-full overflow-hidden bg-black pt-28 lg:pt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "jsx-ccd9f15cfe20c887" + " " + "absolute inset-0 z-0 h-full w-full"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ccd9f15cfe20c887" + " " + "absolute inset-0 z-[5] bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ccd9f15cfe20c887" + " " + "relative z-10 flex h-full flex-col items-center justify-center px-4 pt-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ccd9f15cfe20c887" + " " + "mb-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/40 px-6 py-2 backdrop-blur-md opacity-0 animate-[fadeInDown_0.8s_ease-out_forwards]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ccd9f15cfe20c887" + " " + "h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-ccd9f15cfe20c887" + " " + "text-sm font-medium tracking-wider text-[#D4AF37]",
                                children: "AI-POWERED INNOVATION"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-ccd9f15cfe20c887" + " " + "mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ccd9f15cfe20c887" + " " + "mb-2 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl",
                                children: "Transform Your Business"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ccd9f15cfe20c887" + " " + "bg-gradient-to-r from-[#D4AF37] via-[#F2D06B] to-[#D4AF37] bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-8xl lg:text-9xl bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]",
                                children: "with AI Automation"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-ccd9f15cfe20c887" + " " + "mb-12 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]",
                        children: [
                            "We deliver cutting-edge AI solutions that ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-ccd9f15cfe20c887" + " " + "font-semibold text-white",
                                children: "streamline operations"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 346,
                                columnNumber: 53
                            }, this),
                            ",",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-ccd9f15cfe20c887" + " " + "font-semibold text-white",
                                children: " boost efficiency"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            ", and drive",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-ccd9f15cfe20c887" + " " + "font-semibold text-white",
                                children: " measurable results"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ccd9f15cfe20c887" + " " + "flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "jsx-ccd9f15cfe20c887" + " " + "group relative overflow-hidden rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] px-10 py-4 text-lg font-bold text-black shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-ccd9f15cfe20c887" + " " + "relative z-10 flex items-center gap-2",
                                        children: [
                                            "Book a Consultation",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                className: "jsx-ccd9f15cfe20c887" + " " + "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2.5,
                                                    d: "M17 8l4 4m0 0l-4 4m4-4H3",
                                                    className: "jsx-ccd9f15cfe20c887"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                                lineNumber: 358,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ccd9f15cfe20c887" + " " + "absolute inset-0 -z-10 bg-gradient-to-r from-[#F2D06B] to-[#D4AF37] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#projects",
                                className: "jsx-ccd9f15cfe20c887" + " " + "group relative overflow-hidden rounded-full border-2 border-[#D4AF37] bg-black/40 px-10 py-4 text-lg font-bold text-[#D4AF37] backdrop-blur-sm transition-all duration-300 hover:border-[#F2D06B] hover:bg-[#D4AF37]/10 hover:text-[#F2D06B] hover:scale-105",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-ccd9f15cfe20c887" + " " + "relative z-10 flex items-center gap-2",
                                    children: [
                                        "View Our Work",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            className: "jsx-ccd9f15cfe20c887" + " " + "h-5 w-5 transition-transform duration-300 group-hover:rotate-45",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2.5,
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
                                                className: "jsx-ccd9f15cfe20c887"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                                lineNumber: 387,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ccd9f15cfe20c887" + " " + "mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ccd9f15cfe20c887" + " " + "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ccd9f15cfe20c887" + " " + "h-1 w-8 bg-gradient-to-r from-transparent to-[#D4AF37]"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-ccd9f15cfe20c887",
                                        children: "Cutting-Edge Technology"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ccd9f15cfe20c887" + " " + "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ccd9f15cfe20c887" + " " + "h-1 w-8 bg-gradient-to-r from-transparent to-[#D4AF37]"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-ccd9f15cfe20c887",
                                        children: "Scalable Solutions"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ccd9f15cfe20c887" + " " + "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ccd9f15cfe20c887" + " " + "h-1 w-8 bg-gradient-to-r from-transparent to-[#D4AF37]"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-ccd9f15cfe20c887",
                                        children: "24/7 Support"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "ccd9f15cfe20c887",
                children: "@keyframes gradient{0%,to{background-position:0%}50%{background-position:100%}}@keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Hero.tsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
_s(Hero, "SiFn/qTgJhY9EVWe9GyLpGD4DlY=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const services = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Process Automation",
        description: "Eliminate repetitive tasks and streamline your operations with intelligent automation solutions that work 24/7.",
        features: [
            "Workflow Automation",
            "Task Scheduling",
            "Error Reduction"
        ]
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        title: "AI Integration",
        description: "Seamlessly integrate AI capabilities into your existing systems to unlock new possibilities and insights.",
        features: [
            "API Integration",
            "Legacy System Updates",
            "Cloud Solutions"
        ]
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Custom AI Solutions",
        description: "Tailored AI solutions designed specifically for your unique business challenges and objectives.",
        features: [
            "Custom Models",
            "Data Analysis",
            "Predictive Intelligence"
        ]
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M13 10V3L4 14h7v7l9-11h-7z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Workflow Optimization",
        description: "Analyze and optimize your business workflows to maximize efficiency and reduce operational costs.",
        features: [
            "Performance Analysis",
            "Bottleneck Removal",
            "Cost Reduction"
        ]
    }
];
function Services() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Services.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Services.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setIsVisible(true);
                }
            }["Services.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "Services.useEffect": ()=>observer.disconnect()
            })["Services.useEffect"];
        }
    }["Services.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Services.useEffect": ()=>{
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
            // Create particle system
            const particleCount = 1500;
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);
            const sizes = new Float32Array(particleCount);
            const goldColor = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xD4AF37);
            const whiteColor = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff);
            for(let i = 0; i < particleCount; i++){
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 100;
                positions[i3 + 1] = (Math.random() - 0.5) * 100;
                positions[i3 + 2] = (Math.random() - 0.5) * 100;
                const color = Math.random() > 0.7 ? goldColor : whiteColor;
                colors[i3] = color.r;
                colors[i3 + 1] = color.g;
                colors[i3 + 2] = color.b;
                sizes[i] = Math.random() * 2 + 0.5;
            }
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            geometry.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
            geometry.setAttribute('size', new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](sizes, 1));
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms: {
                    time: {
                        value: 0
                    },
                    mouseX: {
                        value: 0
                    },
                    mouseY: {
                        value: 0
                    }
                },
                vertexShader: `
        attribute float size;

        varying vec3 vColor;
        uniform float time;
        uniform float mouseX;
        uniform float mouseY;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Wave animation
          pos.y += sin(pos.x * 0.1 + time) * 2.0;
          pos.x += cos(pos.z * 0.1 + time) * 2.0;
          
          // Mouse interaction
          float dx = mouseX - pos.x;
          float dy = mouseY - pos.y;
          float dist = sqrt(dx * dx + dy * dy);
          float force = 10.0 / (dist + 1.0);
          pos.x += dx * force * 0.5;
          pos.y += dy * force * 0.5;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
                fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = 1.0 - (dist * 2.0);
          alpha = pow(alpha, 2.0);
          
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
                transparent: true,
                vertexColors: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false
            });
            const particles = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](geometry, material);
            scene.add(particles);
            // Create connection lines
            const lineGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const lineMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: 0xD4AF37,
                transparent: true,
                opacity: 0.1,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
            });
            const linePositions = [];
            for(let i = 0; i < particleCount; i++){
                const i3 = i * 3;
                for(let j = i + 1; j < Math.min(i + 5, particleCount); j++){
                    const j3 = j * 3;
                    const dx = positions[i3] - positions[j3];
                    const dy = positions[i3 + 1] - positions[j3 + 1];
                    const dz = positions[i3 + 2] - positions[j3 + 2];
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    if (dist < 15) {
                        linePositions.push(positions[i3], positions[i3 + 1], positions[i3 + 2]);
                        linePositions.push(positions[j3], positions[j3 + 1], positions[j3 + 2]);
                    }
                }
            }
            lineGeometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](linePositions, 3));
            const lines = new __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](lineGeometry, lineMaterial);
            scene.add(lines);
            // Mouse interaction
            let mouseX = 0;
            let mouseY = 0;
            let targetMouseX = 0;
            let targetMouseY = 0;
            const handleMouseMove = {
                "Services.useEffect.handleMouseMove": (e)=>{
                    targetMouseX = e.clientX / window.innerWidth * 50 - 25;
                    targetMouseY = -(e.clientY / window.innerHeight) * 50 + 25;
                }
            }["Services.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            // Animation loop
            let time = 0;
            const animate = {
                "Services.useEffect.animate": ()=>{
                    time += 0.01;
                    mouseX += (targetMouseX - mouseX) * 0.05;
                    mouseY += (targetMouseY - mouseY) * 0.05;
                    material.uniforms.time.value = time;
                    material.uniforms.mouseX.value = mouseX;
                    material.uniforms.mouseY.value = mouseY;
                    particles.rotation.y = time * 0.05;
                    lines.rotation.y = time * 0.05;
                    renderer.render(scene, camera);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["Services.useEffect.animate"];
            animate();
            // Handle resize
            const handleResize = {
                "Services.useEffect.handleResize": ()=>{
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                }
            }["Services.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "Services.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('resize', handleResize);
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                    renderer.dispose();
                    geometry.dispose();
                    material.dispose();
                    lineGeometry.dispose();
                    lineMaterial.dispose();
                }
            })["Services.useEffect"];
        }
    }["Services.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        ref: sectionRef,
        className: "py-12 lg:py-16 bg-[#0a0a0a] relative overflow-hidden flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        className: "absolute inset-0 w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10 w-full px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mb-8 lg:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-2",
                                children: "What We Offer"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-cormorant)] mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#f5f5f5]",
                                        children: "Our "
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-gold",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#a3a3a3] text-base lg:text-lg max-w-2xl mx-auto",
                                children: "Comprehensive AI automation solutions tailored to transform your business operations."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6",
                        children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `group relative p-6 rounded-2xl glass-card border-[rgba(255,255,255,0.08)] card-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                                style: {
                                    transitionDelay: `${index * 100}ms`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 flex flex-col h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center justify-center w-12 h-12 rounded-xl glass text-[#D4AF37] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]",
                                                    children: service.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-[#f5f5f5] font-[var(--font-cormorant)] mt-2",
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#a3a3a3] text-sm mb-4 leading-relaxed flex-grow",
                                            children: service.description
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                            lineNumber: 292,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1",
                                            children: service.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2 text-xs text-[#737373]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-3 h-3 text-[#D4AF37]",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 23
                                                        }, this),
                                                        feature
                                                    ]
                                                }, feature, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, this)
                            }, service.title, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Services.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s(Services, "e1AwfC+Mh707RE/w3JlvgnM6sdk=");
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
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
                        className: "flex flex-col items-center mb-6 lg:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-[#D4AF37] text-[10px] font-semibold tracking-widest uppercase mb-1.5",
                                children: "Our Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                lineNumber: 222,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-cormorant)] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#f5f5f5]",
                                        children: "Delivered "
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 227,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-gold",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 228,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                lineNumber: 226,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#a3a3a3] text-sm lg:text-base max-w-2xl text-center mb-3",
                                children: "Explore our track record of successful AI automation implementations."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                lineNumber: 231,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/case-studies",
                                className: "inline-flex items-center gap-2 text-[#D4AF37] text-sm font-medium hover:text-[#FFD700] transition-colors",
                                children: [
                                    "View Case Studies",
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
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                            lineNumber: 247,
                                            columnNumber: 7
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 241,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                lineNumber: 236,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                        lineNumber: 221,
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
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.5)] to-transparent opacity-80"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-2 left-2 px-2 py-0.5 text-[9px] font-medium glass text-[#D4AF37] rounded-full border border-[rgba(212,175,55,0.3)] backdrop-blur-xl",
                                                children: project.industry
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 269,
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
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#a3a3a3] text-[11px] mb-2 leading-relaxed line-clamp-2",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1 mb-3",
                                                children: project.results.slice(0, 2).map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-1.5 py-0.5 text-[9px] bg-[rgba(255,255,255,0.03)] text-[#737373] rounded border border-[rgba(255,255,255,0.05)] whitespace-nowrap",
                                                        children: result
                                                    }, result, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 291,
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
                                                                    lineNumber: 316,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                        lineNumber: 304,
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
                                                                    lineNumber: 339,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_60px_rgba(212,175,55,0.1)]"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, project.title, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                        lineNumber: 258,
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
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Projects.tsx",
                        lineNumber: 361,
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
"[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
const stats = [
    {
        value: 6,
        suffix: "+",
        label: "Projects Delivered",
        description: "Successfully completed automation projects"
    },
    {
        value: 6,
        suffix: "+",
        label: "Clients Served",
        description: "Trusted by businesses worldwide"
    },
    {
        value: 500,
        suffix: "+",
        label: "Hours Saved",
        description: "Automated manual work hours per client"
    },
    {
        value: 180,
        suffix: "%",
        label: "Average ROI",
        description: "Return on investment for clients"
    }
];
function useCountUp(target, duration = 2000, start = false) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if (!start) return;
            let startTime;
            let animationFrame;
            const animate = {
                "useCountUp.useEffect.animate": (timestamp)=>{
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    // Easing function for smooth animation
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    setCount(target * easeOutQuart);
                    if (progress < 1) {
                        animationFrame = requestAnimationFrame(animate);
                    }
                }
            }["useCountUp.useEffect.animate"];
            animationFrame = requestAnimationFrame(animate);
            return ({
                "useCountUp.useEffect": ()=>{
                    if (animationFrame) {
                        cancelAnimationFrame(animationFrame);
                    }
                }
            })["useCountUp.useEffect"];
        }
    }["useCountUp.useEffect"], [
        target,
        duration,
        start
    ]);
    return count;
}
_s(useCountUp, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
function StatCard({ stat, index, isVisible }) {
    _s1();
    const count = useCountUp(stat.value, 2500, isVisible);
    const formatNumber = (num)=>{
        if (stat.value >= 1 && stat.value < 10) {
            return num.toFixed(1);
        }
        return Math.round(num).toLocaleString();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative group p-8 rounded-3xl glass-card border-[rgba(255,255,255,0.08)] text-center card-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
        style: {
            transitionDelay: `${index * 150}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgba(212,175,55,0.05)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-gold font-[var(--font-cormorant)] mb-3 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform duration-500",
                        children: [
                            formatNumber(count),
                            stat.suffix
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-[#f5f5f5] mb-2",
                        children: stat.label
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#737373]",
                        children: stat.description
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s1(StatCard, "Aew1CSxoe3aC1Zreul8rQJ1thuU=", false, function() {
    return [
        useCountUp
    ];
});
_c = StatCard;
function Stats() {
    _s2();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stats.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Stats.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["Stats.useEffect"], {
                threshold: 0.2
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "Stats.useEffect": ()=>observer.disconnect()
            })["Stats.useEffect"];
        }
    }["Stats.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "section-padding bg-[#0a0a0a] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.15)] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.15)] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-[10%] w-1 h-1 bg-[#D4AF37] rounded-full animate-float opacity-40"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-40 right-[15%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-float delay-300 opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-32 left-[20%] w-1 h-1 bg-[#D4AF37] rounded-full animate-float delay-500 opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 right-[25%] w-2 h-2 bg-[#D4AF37] rounded-full animate-float delay-700 opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4",
                                children: "By The Numbers"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-cormorant)] mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#f5f5f5]",
                                        children: "Our "
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-gold",
                                        children: "Impact"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#a3a3a3] text-lg max-w-2xl mx-auto",
                                children: "Numbers that speak to our commitment to delivering exceptional results for every client."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                stat: stat,
                                index: index,
                                isVisible: isVisible
                            }, stat.label, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Stats.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s2(Stats, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
_c1 = Stats;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "Stats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/components/Process.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We analyze your business processes, identify automation opportunities, and understand your unique challenges.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        number: "02",
        title: "Strategy",
        description: "We develop a tailored automation roadmap with clear milestones, timelines, and expected outcomes.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        number: "03",
        title: "Development",
        description: "Our expert team builds and tests your custom AI solutions using cutting-edge technologies.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        number: "04",
        title: "Integration",
        description: "We seamlessly integrate the solutions with your existing systems and workflows.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        number: "05",
        title: "Optimization",
        description: "We continuously monitor, optimize, and enhance your automation for peak performance.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Process() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Process.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Process.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["Process.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "Process.useEffect": ()=>observer.disconnect()
            })["Process.useEffect"];
        }
    }["Process.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "process",
        ref: sectionRef,
        className: "section-padding bg-[#111111] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-[0.015]",
                    style: {
                        backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
                        backgroundSize: "40px 40px"
                    }
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4",
                                children: "How We Work"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-cormorant)] mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#f5f5f5]",
                                        children: "Our "
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-gold",
                                        children: "Process"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#a3a3a3] text-lg max-w-2xl mx-auto",
                                children: "A proven methodology that ensures successful delivery and measurable results for every project."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(212,175,55,0.3)] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8 lg:space-y-0",
                                children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                                        style: {
                                            transitionDelay: `${index * 150}ms`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `lg:flex lg:items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "lg:w-1/2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-8 rounded-3xl glass-card border-[rgba(255,255,255,0.08)] group card-hover ${index % 2 === 0 ? "lg:mr-12 lg:text-right" : "lg:ml-12 lg:text-left"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block text-[#D4AF37] text-sm font-mono font-bold tracking-wider mb-4 group-hover:scale-110 transition-transform duration-300",
                                                                children: [
                                                                    "STEP ",
                                                                    step.number
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-2xl font-semibold text-[#f5f5f5] mb-4 font-[var(--font-cormorant)] flex items-center gap-3 group-hover:text-[#D4AF37] transition-colors",
                                                                children: [
                                                                    index % 2 !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#D4AF37] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300",
                                                                        children: step.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                                        lineNumber: 210,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    step.title,
                                                                    index % 2 === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#D4AF37] lg:ml-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300",
                                                                        children: step.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#a3a3a3] leading-relaxed",
                                                                children: step.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-[#D4AF37] to-transparent",
                                                                style: {
                                                                    marginLeft: index % 2 === 0 ? 'auto' : '0',
                                                                    marginRight: index % 2 === 0 ? '0' : 'auto'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 items-center justify-center z-20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-16 rounded-full glass-card border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:scale-125 transition-transform duration-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#D4AF37] font-bold font-mono text-base",
                                                            children: step.number
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden lg:block lg:w-1/2"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this)
                                    }, step.number, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#a3a3a3] mb-6",
                                children: "Ready to start your automation journey?"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "btn-primary inline-flex items-center gap-2",
                                children: [
                                    "Start Your Project",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Process.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(Process, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
_c = Process;
var _c;
__turbopack_context__.k.register(_c, "Process");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const testimonials = [
    {
        quote: "PrimeCrafters transformed our entire operations. The AI automation solutions they implemented reduced our processing time by 80% and saved us millions in operational costs.",
        author: "Sarah Mitchell",
        role: "CTO",
        company: "TechCorp Industries",
        avatar: "SM"
    },
    {
        quote: "Working with PrimeCrafters was a game-changer. Their team understood our complex requirements and delivered a solution that exceeded our expectations. Truly exceptional.",
        author: "Michael Chen",
        role: "VP of Operations",
        company: "InnovateLab",
        avatar: "MC"
    },
    {
        quote: "The ROI we've seen from PrimeCrafters' automation solutions has been remarkable. They don't just deliver technology—they deliver real business results.",
        author: "Emily Rodriguez",
        role: "CEO",
        company: "FutureSystems",
        avatar: "ER"
    }
];
function Testimonials() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Testimonials.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["Testimonials.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "Testimonials.useEffect": ()=>observer.disconnect()
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], []);
    // Auto-rotate testimonials
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            const interval = setInterval({
                "Testimonials.useEffect.interval": ()=>{
                    setActiveIndex({
                        "Testimonials.useEffect.interval": (prev)=>(prev + 1) % testimonials.length
                    }["Testimonials.useEffect.interval"]);
                }
            }["Testimonials.useEffect.interval"], 6000);
            return ({
                "Testimonials.useEffect": ()=>clearInterval(interval)
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "testimonials",
        ref: sectionRef,
        className: "section-padding bg-[#0a0a0a] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 text-[200px] font-serif text-[#D4AF37] opacity-[0.03] leading-none select-none",
                        children: "“"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4",
                                children: "Client Success Stories"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-cormorant)] mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#f5f5f5]",
                                        children: "What Our "
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-gold",
                                        children: "Clients Say"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `transition-all duration-700 ${activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 absolute inset-0 translate-x-8"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-10 md:p-14 rounded-3xl glass-card border-[rgba(255,255,255,0.08)] relative hover:border-[rgba(212,175,55,0.3)] transition-all duration-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-14 h-14 text-[#D4AF37] opacity-50 drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                    className: "text-xl md:text-2xl text-[#f5f5f5] leading-relaxed mb-10 font-[var(--font-cormorant)]",
                                                    children: [
                                                        "“",
                                                        testimonial.quote,
                                                        "”"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 rounded-full glass-card border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-xl shadow-[0_0_30px_rgba(212,175,55,0.3)]",
                                                            children: testimonial.avatar
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#f5f5f5] font-semibold text-lg",
                                                                    children: testimonial.author
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#737373] text-sm",
                                                                    children: [
                                                                        testimonial.role,
                                                                        ", ",
                                                                        testimonial.company
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    }, testimonial.author, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3 mt-10",
                                children: testimonials.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveIndex(index),
                                        className: `transition-all duration-300 ${activeIndex === index ? "w-10 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)]" : "w-3 h-3 bg-[#404040] rounded-full hover:bg-[#737373] hover:scale-125"}`,
                                        "aria-label": `Go to testimonial ${index + 1}`
                                    }, index, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/components/Testimonials.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "mV7Eloctbz4qpGjwkkVrqVQ8vrg=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
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
                                            href: "/privacy-policy",
                                            className: "text-[#525252] hover:text-[#a3a3a3] text-sm transition-colors",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/components/Footer.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/terms-and-conditions",
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
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationHero.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const badges = [
    'CRM Integration',
    'API Connections',
    'Data Sync',
    'Automation Triggers',
    'Secure Workflows'
];
const proofBadges = [
    {
        label: 'CRM Integration'
    },
    {
        label: 'API Connections'
    },
    {
        label: 'Data Sync'
    }
];
function AIIntegrationHero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0A0A0A',
            padding: '100px 24px 80px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '-120px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '800px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '64px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    color: '#C9A84C',
                                    marginBottom: '20px'
                                },
                                children: "ThePrimeCrafters"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: 'clamp(36px, 4.5vw, 58px)',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    lineHeight: 1.15,
                                    marginBottom: '24px'
                                },
                                children: "AI Integration Services for Connected Business Systems"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    color: '#A0A0A0',
                                    lineHeight: 1.7,
                                    marginBottom: '32px'
                                },
                                children: "Connect AI With Your CRM, Website, Databases, APIs, and Internal Tools"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '16px',
                                    color: '#B0B0B0',
                                    lineHeight: 1.8,
                                    marginBottom: '36px'
                                },
                                children: "ThePrimeCrafters helps businesses connect AI into the systems they already use — so data, tasks, and decisions move automatically without rebuilding how the business runs."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '10px',
                                    marginBottom: '40px'
                                },
                                children: badges.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            color: '#C9A84C',
                                            border: '1px solid rgba(201,168,76,0.35)',
                                            borderRadius: '999px',
                                            padding: '6px 14px',
                                            background: 'rgba(201,168,76,0.06)'
                                        },
                                        children: b
                                    }, b, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '16px',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 600,
                                            color: '#0A0A0A',
                                            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                                            padding: '14px 28px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            whiteSpace: 'nowrap'
                                        },
                                        children: "Book a Free AI Integration Strategy Call →"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/case-studies",
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 500,
                                            color: '#C9A84C',
                                            border: '1px solid rgba(201,168,76,0.4)',
                                            padding: '14px 28px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            whiteSpace: 'nowrap',
                                            background: 'transparent'
                                        },
                                        children: "View Case Studies"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(201,168,76,0.15)',
                            borderRadius: '20px',
                            padding: '48px 36px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0'
                        },
                        children: [
                            {
                                label: 'Trigger',
                                sub: 'Form · CRM Event · API Call',
                                color: '#C9A84C'
                            },
                            {
                                label: 'AI Logic',
                                sub: 'Classify · Score · Route · Draft',
                                color: '#E8C97A'
                            },
                            {
                                label: 'Integrations',
                                sub: 'CRM · Database · Email · Calendar',
                                color: '#C9A84C'
                            },
                            {
                                label: 'Output',
                                sub: 'Record Updated · Task Created · Alert Sent',
                                color: '#E8C97A'
                            }
                        ].map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '100%',
                                            background: 'rgba(201,168,76,0.07)',
                                            border: `1px solid rgba(201,168,76,0.2)`,
                                            borderRadius: '12px',
                                            padding: '16px 20px',
                                            textAlign: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '13px',
                                                    fontWeight: 600,
                                                    letterSpacing: '1.5px',
                                                    textTransform: 'uppercase',
                                                    color: node.color,
                                                    marginBottom: '4px'
                                                },
                                                children: node.label
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '12px',
                                                    color: '#808080'
                                                },
                                                children: node.sub
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this),
                                    i < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '2px',
                                            height: '28px',
                                            background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), rgba(201,168,76,0.1))'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, node.label, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '56px auto 0',
                    display: 'flex',
                    gap: '20px',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap'
                },
                children: proofBadges.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: '#C9A84C',
                            background: 'rgba(201,168,76,0.08)',
                            border: '1px solid rgba(201,168,76,0.25)',
                            borderRadius: '8px',
                            padding: '10px 20px'
                        },
                        children: [
                            "✓ ",
                            b.label
                        ]
                    }, b.label, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationHero.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = AIIntegrationHero;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationAbout.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationAbout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const serviceEntities = [
    {
        label: 'AI Integrations',
        href: '/services'
    },
    {
        label: 'CRM Automation',
        href: '/services'
    },
    {
        label: 'Process Automation',
        href: '/services/process-automation'
    },
    {
        label: 'Custom AI Systems',
        href: '/services/custom-ai-solutions'
    }
];
const systemEntities = [
    {
        label: 'CRM Integration',
        href: '/services'
    },
    {
        label: 'API Integration',
        href: '/services'
    },
    {
        label: 'Website Integration',
        href: '/services'
    },
    {
        label: 'Database Integration',
        href: '/services'
    },
    {
        label: 'Email & Calendar',
        href: '/services'
    },
    {
        label: 'Spreadsheet Automation',
        href: '/services'
    }
];
const teamEntities = [
    {
        label: 'Sales Automation',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Support Automation',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Operations',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Lead Generation',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Admin Workflows',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Customer Workflows',
        href: '/services/workflow-optimization'
    }
];
function AIIntegrationAbout() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0A0A0A',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '400px',
                    background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "About ThePrimeCrafters"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(26px, 3vw, 40px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.25,
                            textAlign: 'center',
                            maxWidth: '820px',
                            margin: '0 auto 32px'
                        },
                        children: "ThePrimeCrafters Provides AI Integration Services for Business Automation"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#909090',
                            lineHeight: 1.85,
                            textAlign: 'center',
                            maxWidth: '760px',
                            margin: '0 auto 56px'
                        },
                        children: "ThePrimeCrafters is an AI integration agency that connects AI systems with CRMs, APIs, databases, websites, communication tools, and internal software — so AI can act inside real business workflows. Work spans integration strategy, data flow design, API architecture, connector builds, AI logic, testing, deployment, and post-launch optimization. Every integration is built around the tech stack and operations your business already runs on, not a generic template or tool replacement."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '24px',
                            marginBottom: '48px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '16px',
                                    padding: '32px 28px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '11px',
                                            fontWeight: 600,
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            color: '#C9A84C',
                                            margin: '0 0 20px'
                                        },
                                        children: "AI Integrations, CRM Automation, Process Automation, and Custom AI Systems"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '10px'
                                        },
                                        children: serviceEntities.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: e.href,
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '13px',
                                                    fontWeight: 500,
                                                    color: '#C9A84C',
                                                    background: 'rgba(201,168,76,0.07)',
                                                    border: '1px solid rgba(201,168,76,0.2)',
                                                    borderRadius: '999px',
                                                    padding: '7px 16px',
                                                    textDecoration: 'none',
                                                    transition: 'background 0.2s, border-color 0.2s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    const el = e.currentTarget;
                                                    el.style.background = 'rgba(201,168,76,0.14)';
                                                    el.style.borderColor = 'rgba(201,168,76,0.4)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    const el = e.currentTarget;
                                                    el.style.background = 'rgba(201,168,76,0.07)';
                                                    el.style.borderColor = 'rgba(201,168,76,0.2)';
                                                },
                                                children: e.label
                                            }, e.label, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '16px',
                                    padding: '32px 28px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '11px',
                                                    fontWeight: 600,
                                                    letterSpacing: '2px',
                                                    textTransform: 'uppercase',
                                                    color: '#C9A84C',
                                                    margin: '0 0 14px'
                                                },
                                                children: "Built for CRMs, Websites, APIs, Databases, and Communication Tools"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '8px'
                                                },
                                                children: systemEntities.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: e.href,
                                                        style: {
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontSize: '12px',
                                                            fontWeight: 500,
                                                            color: '#A0A0A0',
                                                            background: 'rgba(255,255,255,0.04)',
                                                            border: '1px solid rgba(255,255,255,0.08)',
                                                            borderRadius: '999px',
                                                            padding: '5px 14px',
                                                            textDecoration: 'none',
                                                            transition: 'color 0.2s, border-color 0.2s, background 0.2s'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            const el = e.currentTarget;
                                                            el.style.color = '#C9A84C';
                                                            el.style.borderColor = 'rgba(201,168,76,0.3)';
                                                            el.style.background = 'rgba(201,168,76,0.06)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            const el = e.currentTarget;
                                                            el.style.color = '#A0A0A0';
                                                            el.style.borderColor = 'rgba(255,255,255,0.08)';
                                                            el.style.background = 'rgba(255,255,255,0.04)';
                                                        },
                                                        children: e.label
                                                    }, e.label, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '1px',
                                            background: 'rgba(255,255,255,0.06)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '11px',
                                                    fontWeight: 600,
                                                    letterSpacing: '2px',
                                                    textTransform: 'uppercase',
                                                    color: '#C9A84C',
                                                    margin: '0 0 14px'
                                                },
                                                children: "Built for Sales, Operations, Support, Lead Generation, Admin, and Customer Workflows"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '8px'
                                                },
                                                children: teamEntities.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: e.href,
                                                        style: {
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontSize: '12px',
                                                            fontWeight: 500,
                                                            color: '#A0A0A0',
                                                            background: 'rgba(255,255,255,0.04)',
                                                            border: '1px solid rgba(255,255,255,0.08)',
                                                            borderRadius: '999px',
                                                            padding: '5px 14px',
                                                            textDecoration: 'none',
                                                            transition: 'color 0.2s, border-color 0.2s, background 0.2s'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            const el = e.currentTarget;
                                                            el.style.color = '#C9A84C';
                                                            el.style.borderColor = 'rgba(201,168,76,0.3)';
                                                            el.style.background = 'rgba(201,168,76,0.06)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            const el = e.currentTarget;
                                                            el.style.color = '#A0A0A0';
                                                            el.style.borderColor = 'rgba(255,255,255,0.08)';
                                                            el.style.background = 'rgba(255,255,255,0.04)';
                                                        },
                                                        children: e.label
                                                    }, e.label, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '16px',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services",
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#C9A84C',
                                    border: '1px solid rgba(201,168,76,0.35)',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                },
                                children: "All Services →"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/case-studies",
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#C9A84C',
                                    border: '1px solid rgba(201,168,76,0.35)',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                },
                                children: "Case Studies →"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationAbout.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = AIIntegrationAbout;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationAbout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationArchitecture.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationArchitecture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const layers = [
    {
        step: 'Step 1',
        label: 'Inputs',
        h3: 'Forms, Calls, Chats, Files, Databases, and CRM Events',
        body: 'Every integration starts with a trigger — a form submission, CRM event, incoming call, uploaded file, database change, or scheduled data pull that initiates the workflow.',
        chips: [
            'Web Forms',
            'CRM Events',
            'Inbound Calls',
            'Chat Messages',
            'File Uploads',
            'Database Changes',
            'Scheduled Pulls'
        ],
        color: '#C9A84C',
        icon: '⚡'
    },
    {
        step: 'Step 2',
        label: 'AI Logic',
        h3: 'Classify, Summarise, Score, Route, and Draft',
        body: 'AI acts as the decision and assistance layer — classifying requests, summarising conversations, scoring leads, routing to the right owner, and drafting replies or records before passing output to connected systems.',
        chips: [
            'Classify',
            'Summarise',
            'Score',
            'Route',
            'Draft',
            'Extract',
            'Prioritise'
        ],
        color: '#E8C97A',
        icon: '🧠',
        href: '/services/custom-ai-solutions'
    },
    {
        step: 'Step 3',
        label: 'Integrations',
        h3: 'CRM Updates, Notifications, Reports, Tasks, and Approvals',
        body: 'AI output moves directly into the systems your team uses — updating CRM records, creating tasks, routing tickets, generating reports, sending alerts, and requesting approvals where human review is required.',
        chips: [
            'CRM Updated',
            'Task Created',
            'Ticket Routed',
            'Report Generated',
            'Alert Sent',
            'Approval Requested'
        ],
        color: '#C9A84C',
        icon: '🔗',
        href: '/services/process-automation'
    },
    {
        step: 'Step 4',
        label: 'Human Review',
        h3: 'Human Review for Sensitive Actions',
        body: 'Not every step should be fully automated. Approval gates, review queues, escalation rules, permissions, and audit-friendly logs keep sensitive decisions under human control while automating everything before and after.',
        chips: [
            'Approval Gates',
            'Review Queues',
            'Escalation Rules',
            'Permission Controls',
            'Audit Logs'
        ],
        color: '#E8C97A',
        icon: '✅',
        href: '/contact',
        trust: true
    }
];
function AIIntegrationArchitecture() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0A0A0A',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '-100px',
                    transform: 'translateY(-50%)',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "AI + Integration Layer"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            maxWidth: '760px',
                            margin: '0 auto 16px'
                        },
                        children: "How AI Integration Turns Separate Tools Into One Workflow"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '600px',
                            margin: '0 auto 72px'
                        },
                        children: "Inputs trigger AI logic. AI logic drives integrations. Integrations produce outputs. Sensitive steps route to human review. Each layer connects to the next as one continuous workflow."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0',
                            position: 'relative'
                        },
                        children: layers.map((layer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '200px 1fr',
                                            gap: '0',
                                            alignItems: 'stretch',
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-end',
                                                    justifyContent: 'flex-start',
                                                    paddingRight: '32px',
                                                    paddingTop: '32px',
                                                    paddingBottom: '32px',
                                                    borderRight: '2px solid rgba(201,168,76,0.2)',
                                                    position: 'relative'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            right: '-7px',
                                                            top: '38px',
                                                            width: '12px',
                                                            height: '12px',
                                                            borderRadius: '50%',
                                                            background: layer.color,
                                                            boxShadow: `0 0 12px ${layer.color}60`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontSize: '11px',
                                                            fontWeight: 600,
                                                            letterSpacing: '2px',
                                                            textTransform: 'uppercase',
                                                            color: 'rgba(201,168,76,0.5)',
                                                            margin: '0 0 6px',
                                                            textAlign: 'right'
                                                        },
                                                        children: layer.step
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontSize: '14px',
                                                            fontWeight: 700,
                                                            color: layer.color,
                                                            margin: 0,
                                                            textAlign: 'right',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '6px',
                                                            justifyContent: 'flex-end'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: layer.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 21
                                                            }, this),
                                                            layer.label
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: '40px',
                                                    paddingTop: '32px',
                                                    paddingBottom: '32px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: layer.trust ? 'rgba(201,168,76,0.05)' : 'rgba(255,255,255,0.03)',
                                                        border: layer.trust ? '1px solid rgba(201,168,76,0.2)' : '1px solid rgba(255,255,255,0.07)',
                                                        borderRadius: '16px',
                                                        padding: '28px 32px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                fontFamily: 'Playfair Display, serif',
                                                                fontSize: '19px',
                                                                fontWeight: 700,
                                                                color: '#FFFFFF',
                                                                margin: '0 0 12px',
                                                                lineHeight: 1.3
                                                            },
                                                            children: layer.h3
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: 'DM Sans, sans-serif',
                                                                fontSize: '14px',
                                                                color: '#888888',
                                                                lineHeight: 1.8,
                                                                margin: '0 0 20px',
                                                                maxWidth: '600px'
                                                            },
                                                            children: layer.body
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexWrap: 'wrap',
                                                                gap: '8px',
                                                                marginBottom: layer.href ? '20px' : '0'
                                                            },
                                                            children: layer.chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontFamily: 'DM Sans, sans-serif',
                                                                        fontSize: '12px',
                                                                        fontWeight: 500,
                                                                        color: layer.color,
                                                                        background: 'rgba(201,168,76,0.07)',
                                                                        border: '1px solid rgba(201,168,76,0.2)',
                                                                        borderRadius: '999px',
                                                                        padding: '5px 14px'
                                                                    },
                                                                    children: chip
                                                                }, chip, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 21
                                                        }, this),
                                                        layer.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: layer.href,
                                                            style: {
                                                                fontFamily: 'DM Sans, sans-serif',
                                                                fontSize: '13px',
                                                                fontWeight: 500,
                                                                color: '#C9A84C',
                                                                textDecoration: 'none',
                                                                display: 'inline-block'
                                                            },
                                                            children: layer.trust ? 'Discuss approval workflows →' : 'Learn more →'
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    i < layers.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            paddingLeft: '200px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginLeft: '40px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '0'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '1px',
                                                        height: '20px',
                                                        background: 'linear-gradient(to bottom, rgba(201,168,76,0.3), rgba(201,168,76,0.05))'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'rgba(201,168,76,0.4)',
                                                        fontSize: '12px',
                                                        lineHeight: 1
                                                    },
                                                    children: "↓"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                            lineNumber: 308,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, layer.label, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginTop: '64px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/services/process-automation",
                            style: {
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#C9A84C',
                                border: '1px solid rgba(201,168,76,0.35)',
                                padding: '13px 28px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            },
                            children: "Explore Process Automation Services →"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationArchitecture.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = AIIntegrationArchitecture;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationArchitecture");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationBenefits.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationBenefits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const benefits = [
    {
        icon: '🔗',
        h3: 'Keep Data Synced Across Business Systems',
        body: 'Sync records, notes, statuses, tasks, and summaries across CRMs, forms, databases, and internal tools — so every system reflects the current state of your business without manual updates.',
        keywords: 'Data Sync Automation · Connected Business Systems',
        href: '/services/process-automation',
        featured: false
    },
    {
        icon: '⏱️',
        h3: 'Reduce Manual Copying and Tool Switching',
        body: 'Eliminate repetitive copying between tools so sales, support, and operations teams spend more time on high-value work and less time acting as a bridge between disconnected systems.',
        keywords: 'Reduce Manual Data Entry · Tool Switching Automation',
        href: null,
        featured: false
    },
    {
        icon: '🧠',
        h3: 'Make AI Outputs Useful Inside Your Existing Workflow',
        body: 'Move AI summaries, scores, drafts, and decisions directly into the systems your team already uses — so AI output creates action instead of sitting in a separate tool waiting to be copied.',
        keywords: 'AI Workflow Integration · AI Business Automation',
        href: '/services/custom-ai-solutions',
        featured: true
    },
    {
        icon: '⚡',
        h3: 'Improve Lead Response and Customer Handoffs',
        body: 'Route requests, assign owners, alert teams, and trigger follow-up automatically — without waiting on a manual handoff that delays response time and costs pipeline opportunities.',
        keywords: 'Lead Response Automation · Customer Handoff Automation',
        href: '/case-study/lead-generation-tools',
        featured: false
    },
    {
        icon: '📊',
        h3: 'Create Better Reporting From Connected Data',
        body: 'Pull workflow data into summaries, dashboards, alerts, and performance reports for leadership and teams — without building manual exports or chasing numbers across disconnected systems.',
        keywords: 'AI Reporting Integration · Dashboard Automation',
        href: null,
        featured: false
    },
    {
        icon: '📈',
        h3: 'Scale AI Automation Without Replacing Your Tools',
        body: 'Add AI into your current tech stack instead of forcing a full software migration. Integrations are built around the CRMs, platforms, and internal tools your team already relies on.',
        keywords: 'AI Automation Integration · Integrate AI With Existing Tools',
        href: '/contact',
        featured: false,
        isFinal: true
    }
];
function AIIntegrationBenefits() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0F0F0F',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '-100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '700px',
                    height: '400px',
                    background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "Benefits"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            maxWidth: '720px',
                            margin: '0 auto 16px'
                        },
                        children: "Why Businesses Invest in AI Integration Services"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '560px',
                            margin: '0 auto 56px'
                        },
                        children: "AI integration is not just about saving time. It improves speed, accuracy, visibility, and scalability across the workflows that drive revenue and operations."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '20px',
                            marginBottom: '56px'
                        },
                        children: benefits.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: b.featured ? 'rgba(201,168,76,0.06)' : 'rgba(255,255,255,0.03)',
                                    border: b.featured ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '16px',
                                    padding: '32px 28px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '14px',
                                    position: 'relative',
                                    transition: 'border-color 0.25s, background 0.25s'
                                },
                                onMouseEnter: (e)=>{
                                    const el = e.currentTarget;
                                    if (!b.featured) {
                                        el.style.borderColor = 'rgba(201,168,76,0.25)';
                                        el.style.background = 'rgba(201,168,76,0.03)';
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    const el = e.currentTarget;
                                    if (!b.featured) {
                                        el.style.borderColor = 'rgba(255,255,255,0.07)';
                                        el.style.background = 'rgba(255,255,255,0.03)';
                                    }
                                },
                                children: [
                                    b.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: '20px',
                                            right: '20px',
                                            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                                            borderRadius: '999px',
                                            padding: '3px 12px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '10px',
                                                fontWeight: 700,
                                                letterSpacing: '1.5px',
                                                textTransform: 'uppercase',
                                                color: '#0A0A0A'
                                            },
                                            children: "Key Benefit"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: b.featured ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.08)',
                                            border: '1px solid rgba(201,168,76,0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '22px',
                                            flexShrink: 0
                                        },
                                        children: b.icon
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'Playfair Display, serif',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                            lineHeight: 1.3,
                                            margin: 0
                                        },
                                        children: b.h3
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            color: '#888888',
                                            lineHeight: 1.75,
                                            margin: 0,
                                            flexGrow: 1
                                        },
                                        children: b.body
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '1px',
                                            background: b.featured ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.06)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px'
                                        },
                                        children: b.keywords.split(' · ').map((kw)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '11px',
                                                    fontWeight: 500,
                                                    color: 'rgba(201,168,76,0.6)',
                                                    background: 'rgba(201,168,76,0.05)',
                                                    border: '1px solid rgba(201,168,76,0.12)',
                                                    borderRadius: '999px',
                                                    padding: '3px 10px'
                                                },
                                                children: kw
                                            }, kw, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    b.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: b.href,
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            color: '#C9A84C',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        },
                                        children: b.isFinal ? 'Talk to us about your stack →' : 'Learn more →'
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, b.h3, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/case-studies",
                            style: {
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#C9A84C',
                                border: '1px solid rgba(201,168,76,0.35)',
                                padding: '13px 28px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            },
                            children: "See Integration Results in Our Case Studies →"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationBenefits.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c = AIIntegrationBenefits;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationBenefits");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationCaseStudies.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationCaseStudies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const caseStudies = [
    {
        category: 'Lead Generation Integration',
        h3: 'AI Lead Generation Tools',
        body: 'Lead scraping, enrichment, scoring, outreach automation, CRM integration, and sales handoff — delivering qualified leads directly into connected sales workflows.',
        metric: '50K+',
        metricLabel: 'qualified leads per month',
        keywords: [
            'AI Lead Generation Integration',
            'CRM Automation Case Study'
        ],
        href: '/case-study/lead-generation-tools',
        angle: 'sales automation angle'
    },
    {
        category: 'Sales Workflow Integration',
        h3: 'Spectrum AI Voice Agent',
        body: 'AI voice calls handling lead qualification, call summaries, prospect routing, and CRM support — connecting every call outcome into the sales pipeline automatically.',
        metric: '10K+',
        metricLabel: 'AI-handled calls per month',
        keywords: [
            'AI Voice Agent Integration',
            'Sales Workflow Integration'
        ],
        href: '/case-study/spectrum-voice-agent',
        angle: 'sales automation angle'
    },
    {
        category: 'Booking & Service Integration',
        h3: 'RV Park AI Voice Agent',
        body: 'Call answering, booking workflows, FAQ handling, reminders, and customer update automation — keeping a service business connected from first call to confirmed booking.',
        metric: '100%',
        metricLabel: 'call answer rate',
        keywords: [
            'Booking Integration Case Study',
            'AI Phone Agent Integration'
        ],
        href: '/case-study/rv-park-voice-agent',
        angle: 'service business integration'
    },
    {
        category: 'Healthcare Admin Integration',
        h3: 'lmn8 Ketamine Therapy AI Platform',
        body: 'Intake support, patient matching workflows, scheduling support, and healthcare admin workflow connection — scoped carefully to the clinic environment.',
        metric: '65%',
        metricLabel: 'faster patient intake',
        keywords: [
            'Healthcare Workflow Integration',
            'Clinic Admin Case Study'
        ],
        href: '/case-study/lmn8-ketamine-therapy',
        note: 'Healthcare claims kept specific to scoped environment.'
    },
    {
        category: 'Custom Platform Integration',
        h3: '3vltn Domain AI Platform',
        body: 'Email agent, automated campaigns, pricing recommendations, deal workflows, and connected system logic — a fully integrated custom AI platform built around business operations.',
        metric: '+250%',
        metricLabel: 'deal closure rate',
        keywords: [
            'Custom AI Platform Integration',
            'Custom API Integration Case Study'
        ],
        href: '/case-study/3vltn',
        angle: 'custom API and platform angle'
    }
];
function AIIntegrationCaseStudies() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0A0A0A',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '50%',
                    right: '-120px',
                    transform: 'translateY(-50%)',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "Proof"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            maxWidth: '720px',
                            margin: '0 auto 16px'
                        },
                        children: "AI Integrations and Connected Systems We've Built"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '560px',
                            margin: '0 auto 56px'
                        },
                        children: "Real integration projects with measurable outcomes across lead generation, sales workflows, booking automation, healthcare admin, and custom platform builds."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '20px',
                            marginBottom: '20px'
                        },
                        children: caseStudies.slice(0, 3).map((cs)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CaseStudyCard, {
                                cs: cs
                            }, cs.h3, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '20px',
                            maxWidth: '740px',
                            margin: '0 auto 56px'
                        },
                        children: caseStudies.slice(3).map((cs)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CaseStudyCard, {
                                cs: cs
                            }, cs.h3, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/case-studies",
                            style: {
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#C9A84C',
                                border: '1px solid rgba(201,168,76,0.35)',
                                padding: '13px 28px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            },
                            children: "Explore All Case Studies →"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c = AIIntegrationCaseStudies;
function CaseStudyCard({ cs }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'border-color 0.25s, background 0.25s'
        },
        onMouseEnter: (e)=>{
            const el = e.currentTarget;
            el.style.borderColor = 'rgba(201,168,76,0.3)';
            el.style.background = 'rgba(201,168,76,0.03)';
        },
        onMouseLeave: (e)=>{
            const el = e.currentTarget;
            el.style.borderColor = 'rgba(255,255,255,0.07)';
            el.style.background = 'rgba(255,255,255,0.03)';
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    margin: 0
                },
                children: cs.category
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.3,
                    margin: 0
                },
                children: cs.h3
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    color: '#888888',
                    lineHeight: 1.75,
                    margin: 0,
                    flexGrow: 1
                },
                children: cs.body
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            cs.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'rgba(201,168,76,0.05)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    borderLeft: '3px solid rgba(201,168,76,0.4)',
                    borderRadius: '6px',
                    padding: '10px 14px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: 'rgba(201,168,76,0.7)',
                        margin: 0,
                        fontStyle: 'italic'
                    },
                    children: cs.note
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                    lineNumber: 276,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '8px',
                    padding: '16px 20px',
                    background: 'rgba(201,168,76,0.06)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    borderRadius: '10px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '28px',
                            fontWeight: 700,
                            color: '#C9A84C',
                            lineHeight: 1
                        },
                        children: cs.metric
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '13px',
                            color: '#888888'
                        },
                        children: cs.metricLabel
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                },
                children: cs.keywords.map((kw)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '11px',
                            fontWeight: 500,
                            color: 'rgba(201,168,76,0.6)',
                            background: 'rgba(201,168,76,0.05)',
                            border: '1px solid rgba(201,168,76,0.12)',
                            borderRadius: '999px',
                            padding: '3px 10px'
                        },
                        children: kw
                    }, kw, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                        lineNumber: 327,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: cs.href,
                style: {
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#C9A84C',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                },
                children: "View case study →"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCaseStudies.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_c1 = CaseStudyCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "AIIntegrationCaseStudies");
__turbopack_context__.k.register(_c1, "CaseStudyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationProblem.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationProblem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const problems = [
    {
        icon: '🔌',
        h3: 'AI Tools Sit Outside Daily Workflows',
        body: 'AI output loses value when it stays in chat windows, PDFs, or separate tools instead of updating the business systems your team works in every day.',
        href: '/services/custom-ai-solutions'
    },
    {
        icon: '📋',
        h3: 'Teams Still Copy Data Between Systems',
        body: 'Moving leads from forms to CRM, copying call notes, updating spreadsheets, sending reminders, and creating tickets — all done manually, every day.',
        href: '/services/process-automation'
    },
    {
        icon: '🔄',
        h3: 'Customer and Lead Data Gets Out of Sync',
        body: 'Duplicate records, missed follow-ups, outdated pipeline status, and support teams working from incomplete information all trace back to disconnected systems.',
        href: '/case-study/lead-generation-tools'
    },
    {
        icon: '⚠️',
        h3: 'Basic Connectors Break When Logic Gets Complex',
        body: 'Real AI integrations need data mapping, API logic, error handling, permissions, testing, and sometimes human approval — far beyond what simple no-code connectors can handle.',
        href: '/services/workflow-optimization'
    }
];
function AIIntegrationProblem() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0F0F0F',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "The Problem"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            maxWidth: '720px',
                            margin: '0 auto 20px'
                        },
                        children: "Disconnected Tools Keep AI From Creating Real Business Value"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '580px',
                            margin: '0 auto 56px'
                        },
                        children: "Isolated AI tools, manual copying, broken handoffs, stale CRM records, and scattered data all share one root cause — the systems are not connected."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '24px',
                            marginBottom: '56px'
                        },
                        children: problems.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '16px',
                                    padding: '32px 28px',
                                    transition: 'border-color 0.25s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '14px'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '28px'
                                        },
                                        children: p.icon
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'Playfair Display, serif',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                            lineHeight: 1.3,
                                            margin: 0
                                        },
                                        children: p.h3
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            color: '#888888',
                                            lineHeight: 1.75,
                                            margin: 0,
                                            flexGrow: 1
                                        },
                                        children: p.body
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: p.href,
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            color: '#C9A84C',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        },
                                        children: "Learn more →"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, p.h3, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid rgba(201,168,76,0.15)',
                            marginBottom: '56px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.02)',
                                    padding: '36px 32px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            color: '#555555',
                                            marginBottom: '20px'
                                        },
                                        children: "Basic Connector"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        'Simple if/then triggers',
                                        'Breaks with exceptions',
                                        'No AI decision logic',
                                        'Limited integration depth'
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                marginBottom: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#555555',
                                                        fontSize: '14px'
                                                    },
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'DM Sans, sans-serif',
                                                        fontSize: '14px',
                                                        color: '#666666'
                                                    },
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, item, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(201,168,76,0.05)',
                                    padding: '36px 32px',
                                    borderLeft: '1px solid rgba(201,168,76,0.2)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            color: '#C9A84C',
                                            marginBottom: '20px'
                                        },
                                        children: "AI Integration"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        'Maps real business workflows',
                                        'Classifies, routes, and drafts with AI',
                                        'Connects CRMs, forms, and internal tools',
                                        'Supports human approvals where needed'
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                marginBottom: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#C9A84C',
                                                        fontSize: '14px'
                                                    },
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'DM Sans, sans-serif',
                                                        fontSize: '14px',
                                                        color: '#CCCCCC'
                                                    },
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, item, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            style: {
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '15px',
                                fontWeight: 600,
                                color: '#0A0A0A',
                                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                                padding: '14px 32px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            },
                            children: "Talk to an AI Integration Expert →"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProblem.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = AIIntegrationProblem;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationProblem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationProcess.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationProcess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const steps = [
    {
        num: '1',
        title: 'System and Workflow Audit',
        h3: '1. System and Workflow Audit',
        body: 'We start with your real business context — reviewing current tools, workflows, data sources, users, bottlenecks, permissions, and goals before designing anything. This ensures integrations are built around how your business actually operates, not a generic template.',
        tags: [
            'System Audit',
            'Workflow Review',
            'Integration Discovery'
        ]
    },
    {
        num: '2',
        title: 'Integration Opportunity Mapping',
        h3: '2. Integration Opportunity Mapping',
        body: 'We identify which systems should connect first based on business value, manual effort, risk, and workflow volume — then prioritise the highest-impact handoffs to build a clear integration roadmap before any development begins.',
        tags: [
            'Integration Roadmap',
            'AI Automation Roadmap',
            'Priority Mapping'
        ],
        note: 'We connect high-impact handoffs first.'
    },
    {
        num: '3',
        title: 'Data Flow and API Architecture',
        h3: '3. Data Flow and API Architecture',
        body: 'We define triggers, APIs, fields, sync direction, permissions, security requirements, exception handling, and human approval paths. Every data flow is planned before a single line of integration code is written.',
        tags: [
            'API Architecture',
            'Data Flow Mapping',
            'Integration Design'
        ]
    },
    {
        num: '4',
        title: 'Build Connectors and Automation Logic',
        h3: '4. Build Connectors and Automation Logic',
        body: 'We connect tools, build API workflows, add AI logic, create notifications, map data fields, and handle exceptions. Every connector is built for production with real error handling, retry logic, and testing checkpoints throughout the build phase.',
        tags: [
            'AI Connector Build',
            'API Workflow Automation',
            'Custom Integrations'
        ],
        href: '/services/custom-ai-solutions'
    },
    {
        num: '5',
        title: 'Test Data Quality, Permissions, and Edge Cases',
        h3: '5. Test Data Quality, Permissions, and Edge Cases',
        body: 'We test with sample data, failed syncs, duplicate records, missing fields, permission mismatches, latency, and user handoffs before any integration goes live. QA covers the edge cases that break basic connectors in production.',
        tags: [
            'Integration Testing',
            'Data Sync Testing',
            'API Testing'
        ],
        checklist: [
            'Sample data validation',
            'Failed sync simulation',
            'Duplicate record handling',
            'Permission and access testing',
            'Latency and timeout checks',
            'User handoff verification'
        ]
    },
    {
        num: '6',
        title: 'Launch, Monitor, and Improve Sync',
        h3: '6. Launch, Monitor, and Improve Sync',
        body: 'We deploy integrations, monitor errors, review data quality, improve prompts and rules, and adjust the workflow based on real usage. Post-launch optimization is built into the process — not an afterthought.',
        tags: [
            'Integration Monitoring',
            'Workflow Optimization',
            'Post-Launch Support'
        ],
        href: '/services/workflow-optimization',
        isFinal: true
    }
];
function AIIntegrationProcess() {
    _s();
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const active = steps[activeStep];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0F0F0F',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "Our Process"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            maxWidth: '760px',
                            margin: '0 auto 16px'
                        },
                        children: "Our AI Integration Implementation Process"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '580px',
                            margin: '0 auto 64px'
                        },
                        children: "Every integration project follows a structured six-step process — from system audit through launch, monitoring, and optimization."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '320px 1fr',
                            gap: '32px',
                            alignItems: 'start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                    position: 'sticky',
                                    top: '32px'
                                },
                                children: steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveStep(i),
                                        style: {
                                            background: activeStep === i ? 'rgba(201,168,76,0.08)' : 'transparent',
                                            border: activeStep === i ? '1px solid rgba(201,168,76,0.3)' : '1px solid transparent',
                                            borderRadius: '10px',
                                            padding: '16px 20px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '16px',
                                            textAlign: 'left',
                                            transition: 'all 0.2s',
                                            width: '100%'
                                        },
                                        onMouseEnter: (e)=>{
                                            if (activeStep !== i) {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            if (activeStep !== i) {
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.borderColor = 'transparent';
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '50%',
                                                    background: activeStep === i ? 'linear-gradient(135deg, #C9A84C, #E8C97A)' : 'rgba(255,255,255,0.06)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    transition: 'background 0.2s'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'DM Sans, sans-serif',
                                                        fontSize: '12px',
                                                        fontWeight: 700,
                                                        color: activeStep === i ? '#0A0A0A' : '#666666'
                                                    },
                                                    children: step.num
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '14px',
                                                    fontWeight: activeStep === i ? 600 : 400,
                                                    color: activeStep === i ? '#FFFFFF' : '#777777',
                                                    lineHeight: 1.4,
                                                    transition: 'color 0.2s'
                                                },
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, step.num, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(201,168,76,0.2)',
                                    borderRadius: '20px',
                                    padding: '40px 40px',
                                    minHeight: '360px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            background: 'rgba(201,168,76,0.1)',
                                            border: '1px solid rgba(201,168,76,0.25)',
                                            borderRadius: '999px',
                                            padding: '5px 14px',
                                            marginBottom: '20px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '11px',
                                                fontWeight: 600,
                                                letterSpacing: '1.5px',
                                                textTransform: 'uppercase',
                                                color: '#C9A84C'
                                            },
                                            children: [
                                                "Step ",
                                                active.num,
                                                " of ",
                                                steps.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'Playfair Display, serif',
                                            fontSize: 'clamp(20px, 2.5vw, 28px)',
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                            lineHeight: 1.3,
                                            margin: '0 0 16px'
                                        },
                                        children: active.h3
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '15px',
                                            color: '#909090',
                                            lineHeight: 1.8,
                                            margin: '0 0 24px'
                                        },
                                        children: active.body
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this),
                                    active.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(201,168,76,0.06)',
                                            border: '1px solid rgba(201,168,76,0.2)',
                                            borderLeft: '3px solid #C9A84C',
                                            borderRadius: '8px',
                                            padding: '12px 16px',
                                            marginBottom: '24px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '13px',
                                                color: '#C9A84C',
                                                margin: 0,
                                                fontStyle: 'italic'
                                            },
                                            children: [
                                                "💡 ",
                                                active.note
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this),
                                    active.checklist && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '10px',
                                            marginBottom: '24px'
                                        },
                                        children: active.checklist.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#C9A84C',
                                                            fontSize: '13px'
                                                        },
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontSize: '13px',
                                                            color: '#A0A0A0'
                                                        },
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '8px',
                                            marginBottom: active.href ? '24px' : '0'
                                        },
                                        children: active.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '12px',
                                                    fontWeight: 500,
                                                    color: 'rgba(201,168,76,0.7)',
                                                    background: 'rgba(201,168,76,0.06)',
                                                    border: '1px solid rgba(201,168,76,0.15)',
                                                    borderRadius: '999px',
                                                    padding: '4px 12px'
                                                },
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                        lineNumber: 369,
                                        columnNumber: 13
                                    }, this),
                                    active.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: active.href,
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            color: '#C9A84C',
                                            textDecoration: 'none',
                                            display: 'inline-block'
                                        },
                                        children: active.isFinal ? 'Explore Workflow Optimization →' : 'Explore Custom AI Solutions →'
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this),
                                    active.isFinal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '28px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            style: {
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '15px',
                                                fontWeight: 600,
                                                color: '#0A0A0A',
                                                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                                                padding: '14px 28px',
                                                borderRadius: '8px',
                                                textDecoration: 'none',
                                                display: 'inline-block'
                                            },
                                            children: "Book a Free AI Integration Strategy Call →"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '12px',
                                            marginTop: '36px',
                                            paddingTop: '24px',
                                            borderTop: '1px solid rgba(255,255,255,0.06)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveStep((prev)=>Math.max(0, prev - 1)),
                                                disabled: activeStep === 0,
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '13px',
                                                    fontWeight: 500,
                                                    color: activeStep === 0 ? '#444444' : '#C9A84C',
                                                    background: 'transparent',
                                                    border: `1px solid ${activeStep === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(201,168,76,0.3)'}`,
                                                    borderRadius: '6px',
                                                    padding: '8px 16px',
                                                    cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                                                    transition: 'all 0.2s'
                                                },
                                                children: "← Previous"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                                lineNumber: 447,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveStep((prev)=>Math.min(steps.length - 1, prev + 1)),
                                                disabled: activeStep === steps.length - 1,
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '13px',
                                                    fontWeight: 500,
                                                    color: activeStep === steps.length - 1 ? '#444444' : '#C9A84C',
                                                    background: 'transparent',
                                                    border: `1px solid ${activeStep === steps.length - 1 ? 'rgba(255,255,255,0.06)' : 'rgba(201,168,76,0.3)'}`,
                                                    borderRadius: '6px',
                                                    padding: '8px 16px',
                                                    cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
                                                    transition: 'all 0.2s'
                                                },
                                                children: "Next →"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                                lineNumber: 465,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationProcess.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(AIIntegrationProcess, "cJXWosTT0XUh3gGn3cCcv/Y+Hws=");
_c = AIIntegrationProcess;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationProcess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationService.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const whoNeedsChecklist = [
    'Businesses with disconnected tools and manual data transfer',
    'Teams with CRM gaps or growing lead volume',
    'Operations dealing with support queues and routing delays',
    'Companies with AI tools that do not connect to daily workflows',
    'Anyone facing reporting issues caused by scattered system data'
];
const scopeSteps = [
    {
        num: '01',
        title: 'System Audit',
        body: 'Review current tools, data sources, users, permissions, bottlenecks, and goals.'
    },
    {
        num: '02',
        title: 'Workflow Mapping',
        body: 'Map how work and data move across your stack today before designing anything.'
    },
    {
        num: '03',
        title: 'API Planning',
        body: 'Define which APIs, endpoints, auth methods, and data fields the integration requires.'
    },
    {
        num: '04',
        title: 'Data Mapping',
        body: 'Align field names, formats, sync direction, and transformation logic between systems.'
    },
    {
        num: '05',
        title: 'Connector Build',
        body: 'Build production-ready connectors with AI logic, error handling, and notifications.'
    },
    {
        num: '06',
        title: 'Testing and Optimization',
        body: 'Validate against real data, fix edge cases, deploy, monitor, and refine post-launch.'
    }
];
function AIIntegrationService() {
    _s();
    const [definitionOpen, setDefinitionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [whoOpen, setWhoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0A0A0A',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '-100px',
                    right: '-100px',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "Our Service"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            maxWidth: '760px',
                            margin: '0 auto 56px'
                        },
                        children: "AI Integrations Built Around Your Existing Tech Stack"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '48px',
                            alignItems: 'start',
                            marginBottom: '64px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(201,168,76,0.06)',
                                            border: '1px solid rgba(201,168,76,0.25)',
                                            borderRadius: '14px',
                                            overflow: 'hidden'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setDefinitionOpen(!definitionOpen),
                                                style: {
                                                    width: '100%',
                                                    background: 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    padding: '22px 24px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    gap: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontFamily: 'Playfair Display, serif',
                                                            fontSize: '17px',
                                                            fontWeight: 700,
                                                            color: '#FFFFFF',
                                                            margin: 0,
                                                            textAlign: 'left'
                                                        },
                                                        children: "What Are AI Integration Services?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#C9A84C',
                                                            fontSize: '20px',
                                                            flexShrink: 0,
                                                            transition: 'transform 0.25s',
                                                            display: 'inline-block',
                                                            transform: definitionOpen ? 'rotate(45deg)' : 'rotate(0deg)'
                                                        },
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            definitionOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '0 24px 24px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: 'DM Sans, sans-serif',
                                                        fontSize: '14px',
                                                        color: '#A0A0A0',
                                                        lineHeight: 1.8,
                                                        margin: 0
                                                    },
                                                    children: "AI integration services connect AI systems with CRMs, websites, APIs, databases, communication tools, and internal software — so AI can act inside real workflows. Instead of producing output in a separate chat or tool, integrated AI updates records, routes tasks, triggers notifications, and supports decisions within the systems your team already uses."
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.07)',
                                            borderRadius: '14px',
                                            overflow: 'hidden'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setWhoOpen(!whoOpen),
                                                style: {
                                                    width: '100%',
                                                    background: 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    padding: '22px 24px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    gap: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontFamily: 'Playfair Display, serif',
                                                            fontSize: '17px',
                                                            fontWeight: 700,
                                                            color: '#FFFFFF',
                                                            margin: 0,
                                                            textAlign: 'left'
                                                        },
                                                        children: "Who Needs AI Integration Services?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#C9A84C',
                                                            fontSize: '20px',
                                                            flexShrink: 0,
                                                            transition: 'transform 0.25s',
                                                            display: 'inline-block',
                                                            transform: whoOpen ? 'rotate(45deg)' : 'rotate(0deg)'
                                                        },
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this),
                                            whoOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '0 24px 24px'
                                                },
                                                children: [
                                                    whoNeedsChecklist.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'flex-start',
                                                                gap: '10px',
                                                                marginBottom: '12px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: '#C9A84C',
                                                                        fontSize: '14px',
                                                                        marginTop: '2px',
                                                                        flexShrink: 0
                                                                    },
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontFamily: 'DM Sans, sans-serif',
                                                                        fontSize: '14px',
                                                                        color: '#A0A0A0',
                                                                        lineHeight: 1.7
                                                                    },
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, item, true, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 21
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/contact",
                                                        style: {
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontSize: '13px',
                                                            fontWeight: 500,
                                                            color: '#C9A84C',
                                                            textDecoration: 'none',
                                                            display: 'inline-block',
                                                            marginTop: '8px'
                                                        },
                                                        children: "Talk to us about your workflow →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about-us",
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            color: '#C9A84C',
                                            border: '1px solid rgba(201,168,76,0.35)',
                                            padding: '14px 24px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                            textAlign: 'center',
                                            background: 'transparent'
                                        },
                                        children: "About ThePrimeCrafters →"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            color: '#C9A84C',
                                            marginBottom: '24px'
                                        },
                                        children: "What ThePrimeCrafters Handles"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '4px'
                                        },
                                        children: scopeSteps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '20px',
                                                    alignItems: 'flex-start',
                                                    padding: '20px 0',
                                                    borderBottom: i < scopeSteps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontSize: '12px',
                                                            fontWeight: 700,
                                                            color: 'rgba(201,168,76,0.5)',
                                                            letterSpacing: '1px',
                                                            minWidth: '24px',
                                                            paddingTop: '2px'
                                                        },
                                                        children: step.num
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontFamily: 'DM Sans, sans-serif',
                                                                    fontSize: '15px',
                                                                    fontWeight: 600,
                                                                    color: '#FFFFFF',
                                                                    margin: '0 0 6px'
                                                                },
                                                                children: step.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontFamily: 'DM Sans, sans-serif',
                                                                    fontSize: '13px',
                                                                    color: '#777777',
                                                                    lineHeight: 1.7,
                                                                    margin: 0
                                                                },
                                                                children: step.body
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, step.num, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationService.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(AIIntegrationService, "LHGLzxex+/1glK5AK6nIbzavcRc=");
_c = AIIntegrationService;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationSystems.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationSystems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const systems = [
    {
        icon: '🎯',
        h3: 'CRM and Sales Platform Integration',
        body: 'Connect AI with your CRM to create records, update pipeline stages, sync notes, route leads, score prospects, and trigger follow-ups automatically.',
        keywords: 'CRM AI Integration · AI Sales Integration · CRM Automation',
        href: '/case-study/lead-generation-tools'
    },
    {
        icon: '🌐',
        h3: 'Website Forms and Lead Capture Integration',
        body: 'Connect web forms, landing pages, chat flows, and lead capture tools with AI qualification, routing, CRM updates, and instant team notifications.',
        keywords: 'Website AI Integration · Form Automation · Lead Capture Automation',
        href: '/services/process-automation'
    },
    {
        icon: '🗄️',
        h3: 'Database and Spreadsheet Automation',
        body: 'Connect AI to databases, spreadsheets, tables, data exports, and internal records for syncing, summaries, status updates, and automated reporting.',
        keywords: 'Database AI Integration · Spreadsheet Automation · Data Sync',
        href: null
    },
    {
        icon: '📧',
        h3: 'Email, Calendar, and Communication Tool Integration',
        body: 'Use AI to draft updates, summarise conversations, schedule follow-ups, create tasks, send alerts, and keep teams informed across email, Slack, and WhatsApp.',
        keywords: 'Email Automation · Calendar Automation · Slack & WhatsApp AI Integration',
        href: null
    },
    {
        icon: '🔌',
        h3: 'API and Custom Software Integration',
        body: 'Build custom API connections where off-the-shelf connectors are not enough — including authentication, data mapping, error handling, and full workflow logic.',
        keywords: 'Custom API Integrations · AI API Integration · Custom Software Integration',
        href: '/services/custom-ai-solutions'
    },
    {
        icon: '🎙️',
        h3: 'AI Voice Agent and Chatbot Integration',
        body: 'Connect AI voice agents and chatbots with CRMs, calendars, ticket systems, lead records, call summaries, and support workflows for end-to-end automation.',
        keywords: 'AI Voice Agent Integration · Chatbot CRM Integration',
        href: '/case-study/spectrum-voice-agent'
    },
    {
        icon: '📊',
        h3: 'Reporting and Dashboard Integration',
        body: 'Turn connected workflow data into summaries, dashboards, alerts, reports, and performance visibility for teams and leadership without manual compilation.',
        keywords: 'AI Reporting Integration · Dashboard Automation · Workflow Reporting',
        href: '/case-studies'
    },
    {
        icon: '📚',
        h3: 'Internal Knowledge Base and Document Integration',
        body: 'Connect AI to SOPs, knowledge bases, internal documents, policies, project notes, and service information so teams can search and act faster.',
        keywords: 'AI Knowledge Base Integration · Document AI Integration · Internal AI Assistant',
        href: '/services/custom-ai-solutions'
    }
];
function AIIntegrationSystems() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0F0F0F',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "What We Connect"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            maxWidth: '760px',
                            margin: '0 auto 16px'
                        },
                        children: "Business Systems ThePrimeCrafters Can Connect With AI"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '580px',
                            margin: '0 auto 56px'
                        },
                        children: "From lead intake to internal knowledge — we build integrations that connect AI to the tools your team already depends on."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '20px'
                        },
                        children: systems.map((s)=>{
                            const CardWrapper = s.href ? __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : 'div';
                            const wrapperProps = s.href ? {
                                href: s.href,
                                style: {
                                    textDecoration: 'none'
                                }
                            } : {};
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardWrapper, {
                                ...wrapperProps,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        borderRadius: '16px',
                                        padding: '32px 28px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '14px',
                                        cursor: s.href ? 'pointer' : 'default',
                                        transition: 'border-color 0.25s, background 0.25s'
                                    },
                                    onMouseEnter: (e)=>{
                                        const el = e.currentTarget;
                                        el.style.borderColor = 'rgba(201,168,76,0.3)';
                                        el.style.background = 'rgba(201,168,76,0.04)';
                                    },
                                    onMouseLeave: (e)=>{
                                        const el = e.currentTarget;
                                        el.style.borderColor = 'rgba(255,255,255,0.07)';
                                        el.style.background = 'rgba(255,255,255,0.03)';
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '28px'
                                            },
                                            children: s.icon
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: 'Playfair Display, serif',
                                                fontSize: '17px',
                                                fontWeight: 700,
                                                color: '#FFFFFF',
                                                lineHeight: 1.3,
                                                margin: 0
                                            },
                                            children: s.h3
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '14px',
                                                color: '#888888',
                                                lineHeight: 1.75,
                                                margin: 0,
                                                flexGrow: 1
                                            },
                                            children: s.body
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '6px',
                                                marginTop: '4px'
                                            },
                                            children: s.keywords.split(' · ').map((kw)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'DM Sans, sans-serif',
                                                        fontSize: '11px',
                                                        fontWeight: 500,
                                                        color: 'rgba(201,168,76,0.7)',
                                                        background: 'rgba(201,168,76,0.06)',
                                                        border: '1px solid rgba(201,168,76,0.15)',
                                                        borderRadius: '999px',
                                                        padding: '3px 10px'
                                                    },
                                                    children: kw
                                                }, kw, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this),
                                        s.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '13px',
                                                fontWeight: 500,
                                                color: '#C9A84C',
                                                marginTop: '4px'
                                            },
                                            children: "Learn more →"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                                            lineNumber: 237,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this)
                            }, s.h3, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginTop: '56px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/services",
                            style: {
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#C9A84C',
                                border: '1px solid rgba(201,168,76,0.35)',
                                padding: '13px 28px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            },
                            children: "View All Services →"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationSystems.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c = AIIntegrationSystems;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationSystems");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationUseCases.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationUseCases
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const useCases = [
    {
        icon: '📈',
        label: 'Sales Teams',
        h3: 'Sales Teams',
        body: 'Lead capture to CRM, AI lead scoring, call summaries, pipeline updates, follow-up reminders, and sales notifications — all connected without manual entry between tools.',
        keywords: [
            'Sales CRM Integration',
            'AI Sales Automation'
        ],
        href: '/case-study/spectrum-voice-agent'
    },
    {
        icon: '💬',
        label: 'Customer Support Teams',
        h3: 'Customer Support Teams',
        body: 'AI chatbot to ticket creation, support summaries, escalation alerts, status updates, and knowledge base lookup — so support teams spend less time on admin and more time resolving issues.',
        keywords: [
            'Support AI Integration',
            'Ticket Routing Automation'
        ],
        href: '/services/custom-ai-solutions'
    },
    {
        icon: '⚙️',
        label: 'Operations Teams',
        h3: 'Operations Teams',
        body: 'Task routing, approvals, internal requests, data sync, reporting, alerts, and SOP support across systems — keeping operations moving without bottlenecks between departments.',
        keywords: [
            'Operations Integration',
            'Workflow Automation'
        ],
        href: '/services/workflow-optimization'
    },
    {
        icon: '🎯',
        label: 'Marketing and Lead Generation',
        h3: 'Marketing and Lead Generation Teams',
        body: 'Lead enrichment, campaign handoffs, source tracking, segmentation, scoring, outreach support, and CRM updates — connecting marketing output directly into sales workflows.',
        keywords: [
            'Lead Generation Integration',
            'Marketing Automation AI'
        ],
        href: '/case-study/lead-generation-tools'
    },
    {
        icon: '⚕️',
        label: 'Healthcare and Clinic Admin',
        h3: 'Healthcare and Clinic Admin Teams',
        body: 'Intake support, scheduling workflows, admin routing, status updates, and internal documentation support — scoped carefully to your clinic environment and operational context.',
        keywords: [
            'Clinic Workflow Integration',
            'Healthcare Admin Automation'
        ],
        href: '/case-study/lmn8-ketamine-therapy',
        note: 'Healthcare integrations are scoped carefully against your specific environment.'
    },
    {
        icon: '🏪',
        label: 'Service Businesses',
        h3: 'Service Businesses',
        body: 'Call handling to booking tools, quote requests, reminders, customer notes, CRM updates, and review follow-ups — keeping service operations connected from first contact to job completion.',
        keywords: [
            'Service Business AI Integration',
            'Booking Automation'
        ],
        href: '/case-study/rv-park-voice-agent'
    }
];
function AIIntegrationUseCases() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0A0A0A',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '-80px',
                    right: '-80px',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "Use Cases"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            maxWidth: '720px',
                            margin: '0 auto 16px'
                        },
                        children: "AI Integration Use Cases by Team"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '560px',
                            margin: '0 auto 56px'
                        },
                        children: "Find the integration workflows most relevant to your team and see how connected AI removes manual work while keeping control where it matters."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '20px',
                            marginBottom: '56px'
                        },
                        children: useCases.map((uc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '16px',
                                    padding: '32px 28px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '14px',
                                    transition: 'border-color 0.25s, background 0.25s'
                                },
                                onMouseEnter: (e)=>{
                                    const el = e.currentTarget;
                                    el.style.borderColor = 'rgba(201,168,76,0.3)';
                                    el.style.background = 'rgba(201,168,76,0.03)';
                                },
                                onMouseLeave: (e)=>{
                                    const el = e.currentTarget;
                                    el.style.borderColor = 'rgba(255,255,255,0.07)';
                                    el.style.background = 'rgba(255,255,255,0.03)';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '12px',
                                                    background: 'rgba(201,168,76,0.1)',
                                                    border: '1px solid rgba(201,168,76,0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '20px',
                                                    flexShrink: 0
                                                },
                                                children: uc.icon
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '11px',
                                                    fontWeight: 600,
                                                    letterSpacing: '1.5px',
                                                    textTransform: 'uppercase',
                                                    color: '#C9A84C'
                                                },
                                                children: uc.label
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'Playfair Display, serif',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                            lineHeight: 1.3,
                                            margin: 0
                                        },
                                        children: uc.h3
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            color: '#888888',
                                            lineHeight: 1.75,
                                            margin: 0,
                                            flexGrow: 1
                                        },
                                        children: uc.body
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    uc.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(201,168,76,0.05)',
                                            border: '1px solid rgba(201,168,76,0.15)',
                                            borderLeft: '3px solid rgba(201,168,76,0.5)',
                                            borderRadius: '6px',
                                            padding: '10px 14px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '12px',
                                                color: 'rgba(201,168,76,0.8)',
                                                margin: 0,
                                                fontStyle: 'italic'
                                            },
                                            children: uc.note
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px'
                                        },
                                        children: uc.keywords.map((kw)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '11px',
                                                    fontWeight: 500,
                                                    color: 'rgba(201,168,76,0.6)',
                                                    background: 'rgba(201,168,76,0.05)',
                                                    border: '1px solid rgba(201,168,76,0.12)',
                                                    borderRadius: '999px',
                                                    padding: '3px 10px'
                                                },
                                                children: kw
                                            }, kw, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: uc.href,
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            color: '#C9A84C',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        },
                                        children: "View case study →"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, uc.h3, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/case-studies",
                            style: {
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#C9A84C',
                                border: '1px solid rgba(201,168,76,0.35)',
                                padding: '13px 28px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            },
                            children: "View All Case Studies →"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationUseCases.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c = AIIntegrationUseCases;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationUseCases");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationCTA.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
function AIIntegrationCTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#080808',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '900px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 65%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '32px',
                    left: '32px',
                    width: '60px',
                    height: '60px',
                    borderTop: '1px solid rgba(201,168,76,0.2)',
                    borderLeft: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '2px 0 0 0'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '32px',
                    right: '32px',
                    width: '60px',
                    height: '60px',
                    borderTop: '1px solid rgba(201,168,76,0.2)',
                    borderRight: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '0 2px 0 0'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '32px',
                    left: '32px',
                    width: '60px',
                    height: '60px',
                    borderBottom: '1px solid rgba(201,168,76,0.2)',
                    borderLeft: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '0 0 0 2px'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '32px',
                    right: '32px',
                    width: '60px',
                    height: '60px',
                    borderBottom: '1px solid rgba(201,168,76,0.2)',
                    borderRight: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '0 0 2px 0'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '760px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0',
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '20px'
                        },
                        children: "ThePrimeCrafters"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(32px, 4.5vw, 56px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.15,
                            marginBottom: '20px'
                        },
                        children: "Ready to Connect AI With Your Business Tools?"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '17px',
                            color: '#888888',
                            lineHeight: 1.8,
                            maxWidth: '560px',
                            marginBottom: '48px'
                        },
                        children: "Share the systems you need to connect and the workflow outcome you want. We will review your integration and show you what is possible in a free strategy call."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            fontWeight: 700,
                            color: '#0A0A0A',
                            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                            padding: '18px 40px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            display: 'inline-block',
                            marginBottom: '20px',
                            boxShadow: '0 8px 32px rgba(201,168,76,0.25)',
                            transition: 'transform 0.2s, box-shadow 0.2s'
                        },
                        onMouseEnter: (e)=>{
                            const el = e.currentTarget;
                            el.style.transform = 'translateY(-2px)';
                            el.style.boxShadow = '0 12px 40px rgba(201,168,76,0.35)';
                        },
                        onMouseLeave: (e)=>{
                            const el = e.currentTarget;
                            el.style.transform = 'translateY(0)';
                            el.style.boxShadow = '0 8px 32px rgba(201,168,76,0.25)';
                        },
                        children: "Book a Free AI Integration Strategy Call →"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '14px',
                            color: '#666666',
                            marginBottom: '40px'
                        },
                        children: "Tell Us the Tools You Want to Connect"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '32px',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center'
                        },
                        children: [
                            {
                                icon: '✓',
                                label: 'No commitment required'
                            },
                            {
                                icon: '✓',
                                label: 'Free strategy call'
                            },
                            {
                                icon: '✓',
                                label: 'Built around your existing stack'
                            }
                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '13px',
                                            color: '#C9A84C',
                                            fontWeight: 600
                                        },
                                        children: t.icon
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '13px',
                                            color: '#666666'
                                        },
                                        children: t.label
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, t.label, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            height: '1px',
                            background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)',
                            margin: '40px 0'
                        }
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '24px',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/case-studies",
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#C9A84C',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    opacity: 0.8,
                                    transition: 'opacity 0.2s'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.opacity = '1';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.opacity = '0.8';
                                },
                                children: "View Case Studies →"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(201,168,76,0.2)',
                                    fontSize: '14px'
                                },
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services",
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#C9A84C',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    opacity: 0.8,
                                    transition: 'opacity 0.2s'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.opacity = '1';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.opacity = '0.8';
                                },
                                children: "All Services →"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(201,168,76,0.2)',
                                    fontSize: '14px'
                                },
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about-us",
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#C9A84C',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    opacity: 0.8,
                                    transition: 'opacity 0.2s'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.opacity = '1';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.opacity = '0.8';
                                },
                                children: "About Us →"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationCTA.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = AIIntegrationCTA;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationFAQ.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationFAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const faqs = [
    {
        q: 'What are AI integration services?',
        a: 'AI integration services design and implement connections between AI systems and the business tools your team already uses — CRMs, websites, APIs, databases, email platforms, calendars, and internal software. Instead of AI output sitting in a separate tool, integrated AI updates records, routes tasks, triggers notifications, and supports decisions directly inside your real workflows.'
    },
    {
        q: 'What systems can ThePrimeCrafters connect with AI?',
        a: 'ThePrimeCrafters connects AI with CRMs and sales platforms, website forms and lead capture tools, databases and spreadsheets, email and calendar platforms, communication tools like Slack and WhatsApp, custom APIs and internal software, AI voice agents and chatbots, reporting and dashboard systems, and internal knowledge bases and document libraries.',
        href: '/services',
        linkLabel: 'View All Services →'
    },
    {
        q: 'Can AI integration connect with my CRM?',
        a: 'Yes. CRM integration is one of the most common and highest-impact connections ThePrimeCrafters builds. Integrations can create and update records, sync pipeline stages, log call summaries, score leads, route prospects, and trigger follow-up sequences — all automatically as data flows through connected workflows.',
        href: '/case-study/lead-generation-tools',
        linkLabel: 'See CRM Integration Case Study →'
    },
    {
        q: 'How is AI integration different from basic automation connectors?',
        a: 'Basic connectors follow simple if/then triggers and break when logic gets complex. AI integration adds intelligent layers — classification, summarisation, scoring, routing, and drafting — while handling data mapping, API authentication, error handling, permissions, edge cases, and human approval steps. It is built for real business workflows, not just simple data transfers between two tools.'
    },
    {
        q: 'Can ThePrimeCrafters integrate AI voice agents and chatbots with business tools?',
        a: 'Yes. AI voice agents and chatbots can be connected with CRMs, calendars, ticket systems, lead records, call summary workflows, and support platforms. Every call or chat interaction can automatically update records, route leads, create tasks, and trigger the right follow-up — without manual entry after the conversation ends.',
        href: '/case-study/spectrum-voice-agent',
        linkLabel: 'See Voice Agent Integration Case Study →'
    },
    {
        q: 'What is the process for building an AI integration?',
        a: 'The process includes six structured steps: a system and workflow audit, integration opportunity mapping, data flow and API architecture design, building connectors and automation logic, testing data quality and edge cases, and post-launch monitoring and optimization. Every step is completed before moving to the next — integrations are not deployed until they are validated against real data and scenarios.'
    },
    {
        q: 'Do AI integrations require replacing our existing software?',
        a: 'No. AI integrations are built to connect with the CRMs, websites, databases, communication tools, and internal systems your team already uses. The goal is to add AI capability into your current tech stack — not to force a software migration or replace the tools your business depends on.'
    },
    {
        q: 'How long does an AI integration project take?',
        a: 'Timeline depends on the number of systems involved, the complexity of the data flows, and the AI logic required. Focused single-system integrations can launch in a few weeks. Multi-system integrations with custom API work, error handling, and human approval paths take longer. A confirmed timeline is provided after the system audit and workflow mapping stage.'
    },
    {
        q: 'How much do AI integration services cost?',
        a: 'Cost is scoped based on workflow complexity, number of integrations, AI logic required, and rollout scope. ThePrimeCrafters provides a detailed proposal after reviewing your systems and goals during a free strategy call — not a generic price list.',
        href: '/contact',
        linkLabel: 'Book a Free Strategy Call →'
    },
    {
        q: 'Are AI integrations safe for sensitive business workflows?',
        a: 'Yes. Integration design includes permission controls, access scoping, error handling, audit-friendly logs, and human-in-the-loop approval paths for sensitive decisions. Integrations are tested for data quality, duplicate records, failed syncs, and permission mismatches before going live. Healthcare and compliance-sensitive workflows are scoped carefully against the specific environment and requirements.'
    },
    {
        q: 'How do you measure whether an AI integration is working?',
        a: 'Success is measured against workflow KPIs agreed before launch — such as records synced accurately, manual hours reduced, lead response time, error rate, CRM update accuracy, and task completion speed. Post-launch monitoring tracks integration health, data quality, and workflow performance so improvements can be made based on real usage data.'
    },
    {
        q: 'Why choose ThePrimeCrafters for AI integration services?',
        a: 'ThePrimeCrafters maps systems and data flows before building, integrates with your existing tools rather than replacing them, designs for real workflow logic including exceptions and approvals, tests thoroughly before launch, and supports the full project lifecycle from strategy through optimization. Every integration is built around how your business actually operates.',
        href: '/about-us',
        linkLabel: 'About ThePrimeCrafters →',
        href2: '/case-studies',
        linkLabel2: 'View Case Studies →'
    }
];
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f)=>({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: f.a
            }
        }))
};
function AIIntegrationFAQ() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggle = (i)=>{
        setOpenIndex((prev)=>prev === i ? null : i);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        style: {
            background: '#0F0F0F',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqSchema)
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '700px',
                    height: '400px',
                    background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '860px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            marginBottom: '16px'
                        },
                        children: "AI Integration Services FAQs"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '560px',
                            margin: '0 auto 56px'
                        },
                        children: "Common questions about AI integration services, how ThePrimeCrafters works, and what to expect from an integration project."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            marginBottom: '64px'
                        },
                        children: faqs.map((faq, i)=>{
                            const isOpen = openIndex === i;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: isOpen ? 'rgba(201,168,76,0.05)' : 'rgba(255,255,255,0.03)',
                                    border: isOpen ? '1px solid rgba(201,168,76,0.25)' : '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    transition: 'border-color 0.25s, background 0.25s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggle(i),
                                        "aria-expanded": isOpen,
                                        style: {
                                            width: '100%',
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: '22px 24px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            gap: '16px',
                                            textAlign: 'left'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '15px',
                                                    fontWeight: isOpen ? 600 : 500,
                                                    color: isOpen ? '#FFFFFF' : '#CCCCCC',
                                                    margin: 0,
                                                    lineHeight: 1.45,
                                                    transition: 'color 0.2s',
                                                    flex: 1
                                                },
                                                children: faq.q
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#C9A84C',
                                                    fontSize: '20px',
                                                    fontWeight: 300,
                                                    flexShrink: 0,
                                                    lineHeight: 1,
                                                    display: 'inline-block',
                                                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.25s'
                                                },
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '0 24px 24px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '1px',
                                                    background: 'rgba(201,168,76,0.15)',
                                                    marginBottom: '20px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                                lineNumber: 259,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '14px',
                                                    color: '#909090',
                                                    lineHeight: 1.85,
                                                    margin: 0,
                                                    marginBottom: faq.href || faq.href2 ? '16px' : '0'
                                                },
                                                children: faq.a
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                                lineNumber: 268,
                                                columnNumber: 21
                                            }, this),
                                            (faq.href || faq.href2) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '20px',
                                                    flexWrap: 'wrap',
                                                    marginTop: '4px'
                                                },
                                                children: [
                                                    faq.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: faq.href,
                                                        style: {
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontSize: '13px',
                                                            fontWeight: 500,
                                                            color: '#C9A84C',
                                                            textDecoration: 'none',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '4px'
                                                        },
                                                        children: faq.linkLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 27
                                                    }, this),
                                                    faq.href2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: faq.href2,
                                                        style: {
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontSize: '13px',
                                                            fontWeight: 500,
                                                            color: '#C9A84C',
                                                            textDecoration: 'none',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '4px'
                                                        },
                                                        children: faq.linkLabel2
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                                lineNumber: 284,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                        lineNumber: 257,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, faq.q, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '15px',
                                    color: '#888888',
                                    margin: 0
                                },
                                children: "Have a question not covered here?"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    color: '#0A0A0A',
                                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                                    padding: '14px 32px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                },
                                children: "Book a Free AI Integration Strategy Call →"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationFAQ.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(AIIntegrationFAQ, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = AIIntegrationFAQ;
var _c;
__turbopack_context__.k.register(_c, "AIIntegrationFAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/ai-integration/AIIntegrationWhyUs.tsx
__turbopack_context__.s([
    "default",
    ()=>AIIntegrationWhyUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const trustCards = [
    {
        icon: '🔗',
        h3: 'We Build Around Your Existing Tools',
        body: 'Integrations connect to the CRMs, websites, forms, databases, email platforms, calendars, chat tools, and internal systems your team already uses — not replacements for them.',
        href: '/services',
        linkLabel: 'View All Services →'
    },
    {
        icon: '⚙️',
        h3: 'We Connect AI to Real Business Workflows',
        body: 'AI should update records, route leads, create tasks, draft replies, and support team actions inside the workflows your business runs on — not sit in a separate tool your team has to check.',
        href: '/services/process-automation',
        linkLabel: 'Explore Process Automation →'
    },
    {
        icon: '🗺️',
        h3: 'We Design Data Flows Before Building',
        body: 'Every integration starts with systems, fields, sync direction, permissions, exceptions, and business goals clearly mapped — before a single connector is built or API is called.',
        href: '/about-us',
        linkLabel: 'About ThePrimeCrafters →'
    },
    {
        icon: '🔍',
        h3: 'We Test Sync, Permissions, and Edge Cases',
        body: 'Data quality, permissions, duplicate records, failed syncs, user handoffs, latency, and error handling are all tested before launch — not discovered in production by your team.',
        href: '/contact',
        linkLabel: 'Discuss Your Integration →'
    },
    {
        icon: '🔄',
        h3: 'We Support Strategy, Build, Launch, and Optimization',
        body: 'From planning and integration build through AI logic, testing, rollout, monitoring, and post-launch improvement — ThePrimeCrafters stays involved across the full integration lifecycle.',
        href: '/contact',
        linkLabel: 'Start Your Integration Project →',
        featured: true
    }
];
const lifecycleBadges = [
    'Strategy',
    'System Audit',
    'API Architecture',
    'Build',
    'Testing',
    'Launch',
    'Monitoring',
    'Optimization'
];
function AIIntegrationWhyUs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#0F0F0F',
            padding: '96px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '-80px',
                    left: '-80px',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#C9A84C',
                            marginBottom: '16px',
                            textAlign: 'center'
                        },
                        children: "Why Choose Us"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            maxWidth: '760px',
                            margin: '0 auto 16px'
                        },
                        children: "Why Choose ThePrimeCrafters for AI Integration Services?"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '580px',
                            margin: '0 auto 56px'
                        },
                        children: "Practical, business-first, API-aware, and workflow-aware — built around your existing stack and focused on connected AI systems that deliver measurable results."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '20px',
                            marginBottom: '20px'
                        },
                        children: trustCards.slice(0, 2).map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustCard, {
                                card: card
                            }, card.h3, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '20px',
                            marginBottom: '20px'
                        },
                        children: trustCards.slice(2, 4).map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustCard, {
                                card: card
                            }, card.h3, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '56px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustCard, {
                            card: trustCards[4],
                            fullWidth: true,
                            lifecycleBadges: lifecycleBadges
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '16px',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about-us",
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#C9A84C',
                                    border: '1px solid rgba(201,168,76,0.35)',
                                    padding: '13px 28px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                },
                                children: "About Us →"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: '#0A0A0A',
                                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                                    padding: '13px 28px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                },
                                children: "Book a Free Strategy Call →"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = AIIntegrationWhyUs;
function TrustCard({ card, fullWidth = false, lifecycleBadges }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: card.featured ? 'rgba(201,168,76,0.05)' : 'rgba(255,255,255,0.03)',
            border: card.featured ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: fullWidth ? '40px 40px' : '32px 28px',
            display: 'flex',
            flexDirection: fullWidth ? 'row' : 'column',
            gap: fullWidth ? '48px' : '16px',
            alignItems: fullWidth ? 'center' : 'flex-start',
            transition: 'border-color 0.25s, background 0.25s'
        },
        onMouseEnter: (e)=>{
            const el = e.currentTarget;
            if (!card.featured) {
                el.style.borderColor = 'rgba(201,168,76,0.25)';
                el.style.background = 'rgba(201,168,76,0.03)';
            }
        },
        onMouseLeave: (e)=>{
            const el = e.currentTarget;
            if (!card.featured) {
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.background = 'rgba(255,255,255,0.03)';
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    flexShrink: 0,
                    maxWidth: fullWidth ? '480px' : 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: card.featured ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.08)',
                            border: '1px solid rgba(201,168,76,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '22px',
                            flexShrink: 0
                        },
                        children: card.icon
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: 'Playfair Display, serif',
                            fontSize: fullWidth ? '22px' : '18px',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.3,
                            margin: 0
                        },
                        children: card.h3
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '14px',
                            color: '#888888',
                            lineHeight: 1.75,
                            margin: 0
                        },
                        children: card.body
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: card.href,
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: '#C9A84C',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                        },
                        children: card.linkLabel
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            fullWidth && lifecycleBadges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            color: 'rgba(201,168,76,0.5)',
                            margin: 0
                        },
                        children: "Full Lifecycle Coverage"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px'
                        },
                        children: lifecycleBadges.map((badge, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            color: '#C9A84C',
                                            background: 'rgba(201,168,76,0.08)',
                                            border: '1px solid rgba(201,168,76,0.2)',
                                            borderRadius: '999px',
                                            padding: '5px 14px',
                                            whiteSpace: 'nowrap'
                                        },
                                        children: badge
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, this),
                                    i < lifecycleBadges.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(201,168,76,0.3)',
                                            fontSize: '12px'
                                        },
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                                        lineNumber: 392,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, badge, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                                lineNumber: 368,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                        lineNumber: 360,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
                lineNumber: 339,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/ai-integration/components/AIIntegrationWhyUs.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_c1 = TrustCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "AIIntegrationWhyUs");
__turbopack_context__.k.register(_c1, "TrustCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=prime_ThePrimeCrafters-Web_3068ec8b._.js.map