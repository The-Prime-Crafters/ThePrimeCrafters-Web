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
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationHero.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const badges = [
    'Workflow Audit',
    'Process Mapping',
    'Automation Roadmap',
    'KPI Tracking',
    'AI Optimization'
];
const proofRows = [
    {
        badge: 'Workflow Audit',
        means: 'Full review of current process',
        outcome: 'Clear picture of where work stalls'
    },
    {
        badge: 'Automation Roadmap',
        means: 'Plan for where AI and tools fit',
        outcome: 'Automation built on a mapped process'
    },
    {
        badge: 'KPI Tracking',
        means: 'Defined success metrics',
        outcome: 'Measurable proof the change worked'
    }
];
const diagramNodes = [
    {
        label: 'Input',
        sub: 'Request · Lead · Form · Task · Call',
        color: '#C9A84C'
    },
    {
        label: 'Workflow Logic',
        sub: 'Rules · Owners · Priority · Routing',
        color: '#E8C97A'
    },
    {
        label: 'AI Support',
        sub: 'Summarise · Score · Draft · Route',
        color: '#C9A84C'
    },
    {
        label: 'Output',
        sub: 'Task · Update · Alert · Report · Approval',
        color: '#E8C97A'
    }
];
function WorkflowOptimizationHero() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                lineNumber: 50,
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
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: 'clamp(36px, 4.5vw, 50px)',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    lineHeight: 1.15,
                                    marginBottom: '24px'
                                },
                                children: "AI Workflow Optimization Services for Faster, Smarter Business Operations"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    color: '#A0A0A0',
                                    lineHeight: 1.7,
                                    marginBottom: '24px'
                                },
                                children: "Find Bottlenecks, Improve Handoffs, and Build AI-Ready Workflows"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                lineNumber: 106,
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
                                children: "Most operational slowdowns are not caused by a lack of tools. They are caused by workflows that were never properly mapped, handoffs that depend on memory, and ownership that was never made clear. The Prime Crafters helps businesses map their current workflows, remove friction at every handoff, clarify ownership, and prepare the process for automation and AI so teams can move work faster with fewer manual steps."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                lineNumber: 119,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                lineNumber: 132,
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
                                        children: "Book a Free Workflow Optimization Strategy Call →"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                        lineNumber: 161,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                        lineNumber: 75,
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
                            alignItems: 'center'
                        },
                        children: [
                            diagramNodes.map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                border: '1px solid rgba(201,168,76,0.2)',
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
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: 'DM Sans, sans-serif',
                                                        fontSize: '12px',
                                                        color: '#808080',
                                                        margin: 0
                                                    },
                                                    children: node.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        i < diagramNodes.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '2px',
                                                height: '28px',
                                                background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), rgba(201,168,76,0.1))'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, node.label, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '24px',
                                    width: '100%',
                                    textAlign: 'center',
                                    background: 'rgba(201,168,76,0.04)',
                                    border: '1px dashed rgba(201,168,76,0.2)',
                                    borderRadius: '8px',
                                    padding: '10px 16px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase',
                                        color: 'rgba(201,168,76,0.5)',
                                        margin: 0
                                    },
                                    children: "↺ Continuous Improvement Loop"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '56px auto 0',
                    border: '1px solid rgba(201,168,76,0.3)',
                    borderRadius: '12px',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontFamily: 'DM Sans, sans-serif'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    background: '#1a1a1a'
                                },
                                children: [
                                    'Badge',
                                    'What It Means',
                                    'Outcome'
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '14px 20px',
                                            textAlign: 'left',
                                            fontSize: '13px',
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                            letterSpacing: '0.02em',
                                            borderBottom: '1px solid rgba(201,168,76,0.2)'
                                        },
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                        lineNumber: 315,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: proofRows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                                        borderBottom: i < proofRows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '16px 20px',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                color: '#C9A84C'
                                            },
                                            children: row.badge
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '16px 20px',
                                                fontSize: '14px',
                                                color: '#A0A0A0'
                                            },
                                            children: row.means
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                            lineNumber: 354,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '16px 20px',
                                                fontSize: '14px',
                                                color: '#A0A0A0'
                                            },
                                            children: row.outcome
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, row.badge, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationHero.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = WorkflowOptimizationHero;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationProblem.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationProblem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const problems = [
    {
        icon: '🔁',
        h3: 'Manual Handoffs Slow Everything Down',
        body: 'Every time a lead, task, approval, note, or update has to move manually from one person or tool to another, there is a delay built into the process. Someone has to remember to do it, find the time to do it, and do it correctly. Multiply that across dozens of handoffs a day and the lost time becomes significant, even though no single handoff feels like a big deal on its own.',
        href: '/services/process-automation'
    },
    {
        icon: '🔀',
        h3: 'Teams Use Too Many Disconnected Tools',
        body: 'CRMs, spreadsheets, inboxes, calendars, forms, chat tools, dashboards, and internal systems rarely share context with each other automatically. A customer update lives in the inbox. The task lives in a project tool. The record lives in the CRM. None of them know what the others are doing. The result is duplicated work, conflicting information, and a constant manual effort to keep everything aligned.',
        href: '/services/ai-integration'
    },
    {
        icon: '⏳',
        h3: 'Bottlenecks Hide Inside Approvals and Status Updates',
        body: 'The slowest parts of a workflow are often invisible until someone goes looking for them. A stalled approval sitting in someone\'s inbox. An unclear owner who assumes someone else is handling it. A status update that never went out because no one was responsible for sending it. These small gaps compound into real delays that affect revenue, customer experience, and team morale.',
        href: '/case-studies'
    },
    {
        icon: '⚠️',
        h3: 'Automation Fails When the Workflow Is Not Mapped First',
        body: 'The most common reason automation projects fail is that they were built on top of a process that was never clearly defined. Effective automation needs clear steps, defined triggers, explicit ownership, documented exceptions, and success metrics established before any tool gets built. Automating a workflow that was never mapped does not fix the workflow. It just makes the same confusion happen faster and with less visibility into what went wrong.',
        href: '/services/process-automation'
    }
];
const comparisonRows = [
    {
        left: 'Build tools before mapping the process',
        right: 'Map the workflow before selecting any tool'
    },
    {
        left: 'Automation breaks at every exception',
        right: 'Automation handles exceptions by design'
    },
    {
        left: 'Unclear ownership causes repeated failures',
        right: 'Ownership and routing defined from the start'
    },
    {
        left: 'More tools, more complexity, same problems',
        right: 'AI and tools added into a clear process'
    }
];
function WorkflowOptimizationProblem() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                lineNumber: 63,
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                        lineNumber: 78,
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
                        children: "Messy Workflows Keep Teams Busy Without Moving Work Forward"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '640px',
                            margin: '0 auto 56px'
                        },
                        children: "A team can be fully occupied every single day and still not be making real progress. Manual handoffs, repeated status updates, scattered tools, unclear ownership, hidden bottlenecks, and missed follow ups all create the feeling of constant activity without actual forward motion. Automation rarely fixes this on its own. When a workflow is never mapped before tools get added, the automation just speeds up the confusion instead of removing it."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '24px',
                            marginBottom: '48px'
                        },
                        children: problems.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '28px'
                                        },
                                        children: p.icon
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                        lineNumber: 156,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                        lineNumber: 158,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                        lineNumber: 171,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, p.h3, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            border: '1px solid rgba(201,168,76,0.3)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            marginBottom: '56px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    margin: '0 0 16px',
                                    padding: '24px 24px 0'
                                },
                                children: "Comparison block:"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: {
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    fontFamily: 'DM Sans, sans-serif'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                background: '#1a1a1a'
                                            },
                                            children: [
                                                'Automate Chaos',
                                                'Optimize First'
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '14px 24px',
                                                        textAlign: 'left',
                                                        fontSize: '13px',
                                                        fontWeight: 700,
                                                        color: '#FFFFFF',
                                                        letterSpacing: '0.02em',
                                                        borderBottom: '1px solid rgba(201,168,76,0.2)',
                                                        width: '50%'
                                                    },
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: comparisonRows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                                                    borderBottom: i < comparisonRows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '16px 24px',
                                                            fontSize: '14px',
                                                            color: '#A0A0A0',
                                                            lineHeight: 1.6,
                                                            borderRight: '1px solid rgba(255,255,255,0.06)'
                                                        },
                                                        children: row.left
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '16px 24px',
                                                            fontSize: '14px',
                                                            color: '#A0A0A0',
                                                            lineHeight: 1.6
                                                        },
                                                        children: row.right
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, row.left, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                        lineNumber: 204,
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
                            children: "Talk to a Workflow Optimization Expert →"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProblem.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = WorkflowOptimizationProblem;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationProblem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationService.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const whoNeedsChecklist = [
    'Your team repeats the same manual tasks every day with no clear plan to remove them',
    'Ownership of tasks, leads, or tickets is unclear and work falls through the cracks',
    'Approvals stall because no one is sure who is supposed to act next',
    'Your tools do not talk to each other and data has to be copied manually between them',
    'Follow ups get missed because nothing reminds anyone to send them',
    'You have automation or AI ideas but no clear process to plug them into',
    'Leadership has limited visibility into where work is actually stuck'
];
const scopeSteps = [
    {
        num: '01',
        title: 'Workflow Audit',
        body: 'Review current workflows, tools, users, handoffs, repeated tasks, delays, exceptions, and business goals.'
    },
    {
        num: '02',
        title: 'Process Mapping',
        body: 'Document every step, owner, system, status, and decision point across the key workflows being optimised.'
    },
    {
        num: '03',
        title: 'Bottleneck Analysis',
        body: 'Identify exactly where work stalls, where ownership breaks down, where data gets lost, and where manual effort is highest.'
    },
    {
        num: '04',
        title: 'Automation Roadmap',
        body: 'Plan which steps should be automated, which need AI support, which stay human reviewed, and in what order to build them.'
    },
    {
        num: '05',
        title: 'AI Opportunity Mapping',
        body: 'Identify where AI can classify, summarise, score, route, or draft within the optimised workflow without removing human oversight where it matters.'
    },
    {
        num: '06',
        title: 'KPI Tracking and Improvement',
        body: 'Define success metrics before launch, track post launch performance against them, and refine the workflow based on real usage data.'
    }
];
function WorkflowOptimizationService() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                lineNumber: 64,
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                        lineNumber: 79,
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
                            margin: '0 auto 20px'
                        },
                        children: "Workflow Optimization Built Around How Your Team Actually Works"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '680px',
                            margin: '0 auto 56px'
                        },
                        children: "The Prime Crafters audits how work actually moves through your business, maps every handoff and decision point, identifies where bottlenecks are hiding, and designs a workflow that is ready for automation and AI before any tool gets built. The goal is not a process diagram that sits in a folder. It is a working operating system your team actually uses."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                        lineNumber: 110,
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
                                                        children: "What Is AI Workflow Optimization?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#C9A84C',
                                                            fontSize: '20px',
                                                            flexShrink: 0,
                                                            display: 'inline-block',
                                                            transform: definitionOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                                                            transition: 'transform 0.25s'
                                                        },
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                lineNumber: 146,
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
                                                    children: "AI workflow optimization is the practice of improving how work moves through a business by mapping current processes, identifying bottlenecks, designing clear ownership and routing logic, and introducing AI support where it adds real value. It combines workflow mapping, automation planning, AI assisted steps such as summarising and routing, and continuous measurement so teams complete the same work with fewer manual steps and less wasted time. Unlike simply buying new software, workflow optimization starts with the process itself and only adds tools once the logic is clear."
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                        lineNumber: 138,
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
                                                        children: "Who Needs Workflow Optimization Services?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#C9A84C',
                                                            fontSize: '20px',
                                                            flexShrink: 0,
                                                            display: 'inline-block',
                                                            transform: whoOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                                                            transition: 'transform 0.25s'
                                                        },
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                lineNumber: 211,
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
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                                    lineNumber: 262,
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
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, item, true, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                            lineNumber: 253,
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
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                        lineNumber: 203,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'Playfair Display, serif',
                                            fontSize: '20px',
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                            marginBottom: '12px'
                                        },
                                        children: "What ThePrimeCrafters Handles"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            color: '#777777',
                                            lineHeight: 1.7,
                                            marginBottom: '24px'
                                        },
                                        children: "Every engagement covers the full path from audit to ongoing improvement:"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: '1px solid rgba(201,168,76,0.2)',
                                            borderRadius: '10px',
                                            overflow: 'hidden'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            style: {
                                                width: '100%',
                                                borderCollapse: 'collapse',
                                                fontFamily: 'DM Sans, sans-serif'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: '#1a1a1a'
                                                        },
                                                        children: [
                                                            'Phase',
                                                            'What We Do'
                                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    padding: '13px 18px',
                                                                    textAlign: 'left',
                                                                    fontSize: '13px',
                                                                    fontWeight: 700,
                                                                    color: '#FFFFFF',
                                                                    letterSpacing: '0.02em',
                                                                    borderBottom: '1px solid rgba(201,168,76,0.2)'
                                                                },
                                                                children: h
                                                            }, h, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: scopeSteps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                                                                borderBottom: i < scopeSteps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '14px 18px',
                                                                        fontSize: '13px',
                                                                        fontWeight: 500,
                                                                        color: '#C9A84C',
                                                                        whiteSpace: 'nowrap',
                                                                        verticalAlign: 'top',
                                                                        borderRight: '1px solid rgba(255,255,255,0.06)'
                                                                    },
                                                                    children: [
                                                                        step.num,
                                                                        "  ",
                                                                        step.title
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '14px 18px',
                                                                        fontSize: '13px',
                                                                        color: '#A0A0A0',
                                                                        lineHeight: 1.65,
                                                                        verticalAlign: 'top'
                                                                    },
                                                                    children: step.body
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                                    lineNumber: 410,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, step.num, true, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationService.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(WorkflowOptimizationService, "LHGLzxex+/1glK5AK6nIbzavcRc=");
_c = WorkflowOptimizationService;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationDeliverables.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationDeliverables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const deliverables = [
    {
        icon: '📈',
        h3: 'Sales and Lead Handoff Workflows',
        body: 'Leads stall when capture, qualification, and ownership are not clearly defined. The Prime Crafters improves how leads are captured, qualified, assigned an owner, updated in the CRM, and followed up on so that no lead sits untouched between the moment it arrives and the moment a rep engages with it. The pipeline keeps moving instead of accumulating gaps.',
        keywords: [
            'Sales Workflow Optimization',
            'Lead Handoff Automation',
            'CRM Workflow Optimization'
        ],
        href: '/case-study/lead-generation-tools'
    },
    {
        icon: '💬',
        h3: 'Customer Support and Ticket Workflows',
        body: 'Support requests arrive from chat, email, forms, voice agents, and ticketing systems, often with no consistent routing logic between channels. The Prime Crafters maps these requests into clear routing rules, escalation paths, AI generated summaries, and status updates so customers get faster answers and support teams are not manually triaging every incoming message.',
        keywords: [
            'Support Workflow Optimization',
            'Ticket Routing Automation'
        ],
        href: '/services/custom-ai-solutions'
    },
    {
        icon: '⚙️',
        h3: 'Operations and Admin Workflows',
        body: 'Internal operations often rely on informal coordination that breaks down as teams grow. The Prime Crafters improves task routing, internal requests, approval chains, reminders, scheduling, document handoffs, and operational reporting so departments stay coordinated without anyone manually chasing the next step.',
        keywords: [
            'Operations Workflow Optimization',
            'Admin Workflow Automation'
        ],
        href: '/services/process-automation'
    },
    {
        icon: '✅',
        h3: 'Approval and Review Workflows',
        body: 'Approvals stall most often because ownership is unclear or because there is no reminder system to push a pending decision forward. The Prime Crafters clarifies approval owners, defines review stages and thresholds, builds in reminders and escalation paths, and keeps human in the loop steps in place for sensitive decisions while removing the manual chasing around them.',
        keywords: [
            'Approval Workflow Optimization',
            'Human In The Loop Automation'
        ],
        href: '/contact'
    },
    {
        icon: '📊',
        h3: 'Reporting and Dashboard Workflows',
        body: 'When system activity and status updates are scattered across tools, building a useful report becomes a manual research project every time. The Prime Crafters turns that scattered activity into automated summaries, live dashboards, threshold based alerts, and recurring performance reports so leadership and teams see what is happening without anyone compiling it by hand.',
        keywords: [
            'Workflow Reporting',
            'Dashboard Automation',
            'KPI Tracking'
        ],
        href: '/case-studies'
    },
    {
        icon: '🔄',
        h3: 'CRM and Data Sync Workflows',
        body: 'CRM accuracy depends entirely on how reliably records, notes, stages, tasks, contacts, call summaries, and follow ups move between systems. The Prime Crafters improves these data flows so the CRM stays accurate without requiring manual entry at every step, giving sales and support teams a single source of truth they can actually trust.',
        keywords: [
            'CRM Workflow Optimization',
            'Data Sync Automation',
            'CRM Automation'
        ],
        href: '/services/ai-integration'
    },
    {
        icon: '🎙️',
        h3: 'AI Agent and Chatbot Workflows',
        body: 'Voice agents and chatbots only deliver real value when their output connects cleanly into the rest of the business. The Prime Crafters designs the workflow around these AI agents, connecting call and chat outcomes to lead records, ticket systems, summaries, scheduling tools, and team follow up tasks so every conversation produces a clear next action instead of disappearing into a transcript no one reviews.',
        keywords: [
            'AI Agent Workflow',
            'Chatbot Workflow Automation',
            'Voice Agent Workflows'
        ],
        href: '/case-study/spectrum-voice-agent'
    },
    {
        icon: '📚',
        h3: 'Internal Knowledge and SOP Workflows',
        body: 'Teams waste real time searching for the right document, policy, or set of instructions buried somewhere in shared drives or old messages. The Prime Crafters improves how SOPs, documents, policies, project notes, and service information are organised, updated, and surfaced inside daily workflows, scoped carefully to what each team actually needs access to.',
        keywords: [
            'SOP Workflow Optimization',
            'Knowledge Base Workflow',
            'Internal AI Assistant'
        ],
        href: '/services/custom-ai-solutions'
    }
];
function WorkflowOptimizationDeliverables() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
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
                        children: "What We Optimize"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
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
                        children: "Business Workflows ThePrimeCrafters Can Optimize"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
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
                            maxWidth: '620px',
                            margin: '0 auto 56px'
                        },
                        children: "From lead handoffs to internal approvals, The Prime Crafters maps, redesigns, and improves the workflows that slow teams down most, adding AI and automation only where they create real value."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '20px'
                        },
                        children: deliverables.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        children: d.icon
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
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
                                        children: d.h3
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                                        lineNumber: 172,
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
                                        children: d.body
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px'
                                        },
                                        children: d.keywords.map((kw)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: d.href,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, d.h3, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
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
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationDeliverables.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c = WorkflowOptimizationDeliverables;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationDeliverables");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationFramework.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationFramework
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
        h3: 'Requests, Leads, Calls, Forms, Tickets, and Internal Tasks',
        body: 'Every optimised workflow starts with a clearly defined input layer. This means knowing exactly where work originates, what triggers the process to begin, and how each source gets captured and routed into the correct workflow path from the very first moment it appears, rather than waiting for someone to notice it and act.',
        chips: [
            'Web Forms',
            'Inbound Leads',
            'Support Tickets',
            'Phone Calls',
            'Internal Requests',
            'CRM Events',
            'Scheduled Tasks'
        ],
        color: '#C9A84C',
        icon: '⚡'
    },
    {
        step: 'Step 2',
        label: 'Workflow Logic',
        h3: 'Rules, Ownership, Priority, Timing, and Exceptions',
        body: 'This is the layer that decides what happens to each input. Optimised workflows define who owns each step, what action follows next, what gets escalated and to whom, when reminders fire, and how exceptions are handled when something does not fit the standard path. Without this layer clearly defined, even the best tools cannot produce consistent results.',
        chips: [
            'Ownership Rules',
            'Priority Scoring',
            'Routing Logic',
            'Escalation Paths',
            'Timing Rules',
            'Exception Handling',
            'Approval Gates'
        ],
        color: '#E8C97A',
        icon: '⚙️',
        href: '/services/process-automation'
    },
    {
        step: 'Step 3',
        label: 'AI Support',
        h3: 'Summaries, Routing, Drafts, Scores, and Recommendations',
        body: 'AI operates as a support layer inside the workflow rather than as a replacement for the logic that governs it. It summarises conversations, classifies incoming requests, scores leads, drafts initial responses, recommends next actions, and routes work according to the rules defined in the logic layer above it. AI becomes useful precisely because the workflow logic around it is already clear.',
        chips: [
            'AI Summaries',
            'Smart Routing',
            'Lead Scoring',
            'Draft Replies',
            'Classification',
            'Recommendations',
            'Data Extraction'
        ],
        color: '#C9A84C',
        icon: '🧠',
        href: '/services/custom-ai-solutions'
    },
    {
        step: 'Step 4',
        label: 'Outputs',
        h3: 'Tasks, Updates, Alerts, Approvals, and Reports',
        body: 'The final layer is what the workflow actually produces. A well designed workflow generates tasks created in the right system, records updated accurately without manual entry, alerts sent to the right people at the right time, approvals requested exactly when needed, dashboards refreshed automatically, and reports generated without anyone compiling them by hand.',
        chips: [
            'Tasks Created',
            'CRM Updated',
            'Alerts Sent',
            'Approvals Requested',
            'Reports Generated',
            'Dashboards Refreshed'
        ],
        color: '#E8C97A',
        icon: '📤',
        href: '/services/ai-integration'
    }
];
function WorkflowOptimizationFramework() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                lineNumber: 90,
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
                        children: "The Framework"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                        lineNumber: 106,
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
                            maxWidth: '800px',
                            margin: '0 auto 16px'
                        },
                        children: "How Workflow Optimization Turns Daily Work Into a Clear Operating System"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '16px',
                            color: '#888888',
                            lineHeight: 1.75,
                            textAlign: 'center',
                            maxWidth: '680px',
                            margin: '0 auto 72px'
                        },
                        children: "A well optimised workflow behaves like a system rather than a series of disconnected steps. Inputs trigger clear workflow logic, that logic directs where AI support is applied, AI support drives outputs, and those outputs feed directly into a continuous improvement loop. Each layer connects to the next so daily work runs predictably instead of depending on memory and good intentions."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0'
                        },
                        children: layers.map((layer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '200px 1fr',
                                            gap: '0',
                                            alignItems: 'stretch'
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
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                        lineNumber: 179,
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
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                        lineNumber: 192,
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
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 21
                                                            }, this),
                                                            layer.label
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                lineNumber: 165,
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
                                                        background: 'rgba(255,255,255,0.03)',
                                                        border: '1px solid rgba(255,255,255,0.07)',
                                                        borderRadius: '16px',
                                                        padding: '28px 32px',
                                                        transition: 'border-color 0.25s'
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)';
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
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
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                            lineNumber: 250,
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
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                            lineNumber: 263,
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
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                                    lineNumber: 286,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                            lineNumber: 277,
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
                                                            children: "Learn more →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                        lineNumber: 156,
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
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '1px',
                                                        height: '20px',
                                                        background: 'linear-gradient(to bottom, rgba(201,168,76,0.3), rgba(201,168,76,0.05))'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                    lineNumber: 341,
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
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                            lineNumber: 333,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, layer.label, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '48px',
                            background: 'rgba(201,168,76,0.05)',
                            border: '1px dashed rgba(201,168,76,0.25)',
                            borderRadius: '14px',
                            padding: '28px 36px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '28px'
                                },
                                children: "↺"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minWidth: '240px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            letterSpacing: '1.5px',
                                            textTransform: 'uppercase',
                                            color: '#C9A84C',
                                            margin: '0 0 6px'
                                        },
                                        children: "Continuous Improvement Loop"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            color: '#888888',
                                            lineHeight: 1.7,
                                            margin: 0
                                        },
                                        children: "Post-launch monitoring, user feedback, KPI tracking, and workflow refinement keep the operating system improving over time — not just at launch."
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services/process-automation",
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    color: '#C9A84C',
                                    border: '1px solid rgba(201,168,76,0.35)',
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap'
                                },
                                children: "Explore Process Automation →"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFramework.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c = WorkflowOptimizationFramework;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationFramework");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationProcess.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationProcess
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
        title: 'Workflow Discovery and Bottleneck Audit',
        h3: '1. Workflow Discovery and Bottleneck Audit',
        body: 'We start with the real business context, reviewing current workflows, tools, users, handoffs, repeated tasks, delays, exceptions, and business goals before recommending any change. This gives us a complete picture of how work actually moves today rather than how it is supposed to move on paper.',
        tags: [
            'Workflow Audit',
            'Bottleneck Audit',
            'Workflow Discovery'
        ]
    },
    {
        num: '2',
        title: 'Process Mapping and Priority Scoring',
        h3: '2. Process Mapping and Priority Scoring',
        body: 'We document every step, owner, system, status, and decision point across the key workflows being optimised. Improvement opportunities are then scored by effort, business value, and workflow volume so the highest friction handoffs get addressed first.',
        tags: [
            'Process Mapping',
            'Workflow Prioritisation',
            'Improvement Roadmap'
        ],
        note: 'We fix high-friction handoffs first.'
    },
    {
        num: '3',
        title: 'Automation and AI Opportunity Roadmap',
        h3: '3. Automation and AI Opportunity Roadmap',
        body: 'With the current state mapped, we identify which tasks should be automated outright, which should be supported by AI while staying human reviewed, and which need to be redesigned entirely before any tool gets built. This roadmap prevents the common mistake of automating a step that should have been removed or restructured instead.',
        tags: [
            'AI Automation Roadmap',
            'Workflow Automation Roadmap',
            'AI Opportunity Mapping'
        ],
        href: '/services/process-automation'
    },
    {
        num: '4',
        title: 'Workflow Redesign and Tool Alignment',
        h3: '4. Workflow Redesign and Tool Alignment',
        body: 'We define the new triggers, owners, statuses, data fields, tool handoffs, approval steps, exception paths, and reporting requirements for the optimised workflow. The client reviews and approves the redesign before development begins.',
        tags: [
            'Workflow Redesign',
            'Tool Alignment',
            'Operating Workflow Design'
        ],
        checklist: [
            'Trigger and input definition',
            'Ownership and routing rules',
            'Status and field mapping',
            'Approval and exception paths',
            'Tool handoff design',
            'Reporting requirements'
        ]
    },
    {
        num: '5',
        title: 'Build, Test, and Document Improvements',
        h3: '5. Build, Test, and Document Improvements',
        body: 'We build or configure the workflows required, test them against real edge cases, confirm data quality across every connected tool, train the users who will run the new process daily, and document the workflow clearly so it does not depend on institutional memory.',
        tags: [
            'Workflow Implementation',
            'Automation Testing',
            'SOP Documentation'
        ],
        href: '/services/ai-integration'
    },
    {
        num: '6',
        title: 'Launch, Monitor, and Improve',
        h3: '6. Launch, Monitor, and Improve',
        body: 'We deploy the optimised workflow, monitor for new bottlenecks, gather feedback from the team using it daily, refine routing and ownership rules as needed, and track performance against the KPIs defined at the start of the project.',
        tags: [
            'Workflow Monitoring',
            'Workflow Optimization KPIs',
            'Post-Launch Support'
        ],
        href: '/contact',
        isFinal: true
    }
];
function WorkflowOptimizationProcess() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
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
                        children: "Our AI Workflow Optimization Process"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
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
                            maxWidth: '640px',
                            margin: '0 auto 64px'
                        },
                        children: "Every optimization project follows six structured steps from discovery through launch, monitoring, and continuous improvement. No step is skipped and no workflow goes live without testing and client review."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
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
                                                const el = e.currentTarget;
                                                el.style.background = 'rgba(255,255,255,0.03)';
                                                el.style.borderColor = 'rgba(255,255,255,0.08)';
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            if (activeStep !== i) {
                                                const el = e.currentTarget;
                                                el.style.background = 'transparent';
                                                el.style.borderColor = 'transparent';
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
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                                lineNumber: 197,
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, step.num, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(201,168,76,0.2)',
                                    borderRadius: '20px',
                                    padding: '40px',
                                    minHeight: '360px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
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
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                        lineNumber: 253,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                        lineNumber: 279,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                        lineNumber: 293,
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
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                        lineNumber: 307,
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
                                                            fontSize: '13px',
                                                            flexShrink: 0
                                                        },
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontSize: '13px',
                                                            color: '#A0A0A0',
                                                            lineHeight: 1.5
                                                        },
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                                lineNumber: 342,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                        lineNumber: 333,
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this),
                                    active.href && !active.isFinal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: active.href,
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            color: '#C9A84C',
                                            textDecoration: 'none',
                                            display: 'inline-block'
                                        },
                                        children: "Learn more →"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this),
                                    active.isFinal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '8px'
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
                                            children: "Start the Process →"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                        lineNumber: 409,
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                                lineNumber: 439,
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                                lineNumber: 457,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationProcess.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(WorkflowOptimizationProcess, "cJXWosTT0XUh3gGn3cCcv/Y+Hws=");
_c = WorkflowOptimizationProcess;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationProcess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationUseCases.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationUseCases
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
        body: 'Lead intake, qualification, CRM updates, call summaries, pipeline ownership, follow up reminders, and sales handoffs are all mapped into a single clear workflow so leads move from capture to close without manual chasing at every stage.',
        keywords: [
            'Sales Workflow Optimization',
            'AI Sales Workflow'
        ],
        href: '/case-study/lead-generation-tools'
    },
    {
        icon: '💬',
        label: 'Customer Support Teams',
        h3: 'Customer Support Teams',
        body: 'Ticket intake, AI summaries, routing, escalation alerts, customer status updates, knowledge lookup, and follow up tasks are designed so support teams spend less time on admin and more time actually resolving customer issues.',
        keywords: [
            'Support Workflow Optimization',
            'AI Support Workflow'
        ],
        href: '/services/custom-ai-solutions'
    },
    {
        icon: '⚙️',
        label: 'Operations Teams',
        h3: 'Operations Teams',
        body: 'Internal requests, admin tasks, approvals, resource handoffs, status updates, SOPs, reports, and recurring operations workflows are connected across departments without adding more tool complexity to manage.',
        keywords: [
            'Operations Workflow Optimization',
            'Workflow Automation'
        ],
        href: '/services/process-automation'
    },
    {
        icon: '🎯',
        label: 'Marketing and Lead Generation',
        h3: 'Marketing and Lead Generation Teams',
        body: 'Campaign handoffs, source tracking, lead enrichment, segmentation, scoring, outreach support, and CRM follow up workflows are connected so marketing output flows directly into sales pipeline workflows without manual reconciliation.',
        keywords: [
            'Marketing Workflow Optimization',
            'Lead Generation Workflow'
        ],
        href: '/case-study/lead-generation-tools'
    },
    {
        icon: '⚕️',
        label: 'Healthcare and Clinic Admin',
        h3: 'Healthcare and Clinic Admin Teams',
        body: 'Intake routing, scheduling support, admin status updates, internal documentation workflows, and follow up coordination are scoped carefully against the specific clinic environment and operational context of each client.',
        keywords: [
            'Clinic Workflow Optimization',
            'Healthcare Admin Workflow'
        ],
        href: '/case-study/lmn8-ketamine-therapy',
        note: 'Healthcare workflows are scoped carefully against your specific environment.'
    },
    {
        icon: '🏪',
        label: 'Service Businesses',
        h3: 'Service Businesses',
        body: 'Call handling, booking workflows, quote requests, customer notes, reminders, follow ups, and review request workflows are connected so service operations stay coordinated from first contact through job completion.',
        keywords: [
            'Service Business Workflow Optimization',
            'Booking Workflow Automation'
        ],
        href: '/case-study/rv-park-voice-agent'
    }
];
function WorkflowOptimizationUseCases() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
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
                        children: "Who We Serve"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
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
                        children: "AI Workflow Optimization Use Cases by Team"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
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
                            maxWidth: '620px',
                            margin: '0 auto 56px'
                        },
                        children: "Workflow optimization delivers different value depending on where it is applied. Find the team context most relevant to your operation and see the specific improvements The Prime Crafters builds for it."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                                                lineNumber: 164,
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                                        lineNumber: 195,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                                        lineNumber: 209,
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
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                                        lineNumber: 224,
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                                        lineNumber: 248,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, uc.h3, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
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
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationUseCases.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c = WorkflowOptimizationUseCases;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationUseCases");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationBenefits.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationBenefits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const benefits = [
    {
        icon: '⏱️',
        h3: 'Reduce Manual Work and Rework',
        body: 'Cutting repeated copying, duplicate updates, manual reminders, and avoidable corrections frees up real time for teams to spend on higher value work instead of acting as a bridge between disconnected steps.',
        keywords: 'Reduce Manual Work · Workflow Efficiency · Process Optimization',
        href: '/services/process-automation',
        featured: false
    },
    {
        icon: '⚡',
        h3: 'Speed Up Handoffs and Response Time',
        body: 'Clarifying ownership, routing, reminders, and escalation paths means work does not stall between teams. Faster handoffs translate directly into faster lead response, faster support resolution, and faster operational decisions.',
        keywords: 'Handoff Optimization · Response Time Improvement',
        href: '/case-study/lead-generation-tools',
        featured: false
    },
    {
        icon: '📊',
        h3: 'Improve Visibility Across Teams',
        body: 'Clearer status updates, dashboards, logs, and reports give teams a real time picture of what is moving, what is stuck, and where the actual bottleneck is, without anyone needing to chase updates across tools and inboxes.',
        keywords: 'Workflow Visibility · Operational Reporting · Dashboard Automation',
        href: '/case-studies',
        featured: true
    },
    {
        icon: '🧠',
        h3: 'Make AI Automation Easier to Implement',
        body: 'Turning messy processes into clear workflow logic means AI tools and automations can be added with far less confusion, fewer failures, and more predictable outcomes. Clean processes are what make AI actually work well in practice.',
        keywords: 'AI-Ready Workflow · Workflow Automation Strategy',
        href: '/services/ai-integration',
        featured: false
    },
    {
        icon: '✅',
        h3: 'Standardize Repeatable Processes',
        body: 'Creating consistent steps, statuses, owners, rules, and SOPs for common workflows means the same task gets handled the same way every time, regardless of who is doing it or which tool they happen to be working in.',
        keywords: 'SOP Optimization · Process Standardization · Workflow Documentation',
        href: null,
        featured: false
    },
    {
        icon: '📈',
        h3: 'Scale Operations Without Adding More Tool Chaos',
        body: 'Improving how current tools and teams work together before adding more software lets a business handle more volume without proportionally increasing admin overhead or rebuilding its entire technology stack.',
        keywords: 'Scale Operations · Tool Consolidation · Workflow Improvement',
        href: '/contact',
        featured: false,
        isFinal: true
    }
];
function WorkflowOptimizationBenefits() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
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
                        children: "Why Invest"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
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
                        children: "Why Businesses Invest in AI Workflow Optimization"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
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
                            maxWidth: '620px',
                            margin: '0 auto 56px'
                        },
                        children: "Workflow optimization is not only about saving time. It improves response speed, ownership clarity, visibility, automation readiness, and consistency across the processes that drive revenue and operations."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '20px',
                            marginBottom: '56px'
                        },
                        children: benefits.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: b.featured ? 'rgba(201,168,76,0.06)' : 'rgba(255,255,255,0.03)',
                                    border: b.featured ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '16px',
                                    padding: '28px',
                                    display: 'flex',
                                    flexDirection: 'column',
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
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '52px',
                                            height: '52px',
                                            borderRadius: '12px',
                                            background: b.featured ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.08)',
                                            border: '1px solid rgba(201,168,76,0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '24px',
                                            flexShrink: 0,
                                            marginBottom: '20px'
                                        },
                                        children: b.icon
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'Playfair Display, serif',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                            lineHeight: 1.3,
                                            margin: '0 0 12px',
                                            minHeight: '48px',
                                            display: 'flex',
                                            alignItems: 'flex-start'
                                        },
                                        children: b.h3
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            color: '#888888',
                                            lineHeight: 1.75,
                                            margin: '0 0 20px',
                                            flexGrow: 1
                                        },
                                        children: b.body
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '1px',
                                            background: b.featured ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.06)',
                                            marginBottom: '16px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px',
                                            marginBottom: b.href ? '14px' : '0'
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    b.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: b.href,
                                        style: {
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            color: '#C9A84C',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            marginTop: 'auto'
                                        },
                                        children: b.isFinal ? 'Talk to us about scaling your workflows →' : 'Learn more →'
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '20px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, b.h3, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
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
                            children: "See Workflow Optimization Results in Our Case Studies →"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationBenefits.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c = WorkflowOptimizationBenefits;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationBenefits");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationCaseStudies.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationCaseStudies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const caseStudies = [
    {
        category: 'Lead Generation Workflow',
        h3: 'AI Lead Generation Tools',
        body: 'A complete lead generation workflow optimised from first capture to qualified sales handoff, covering lead scraping, enrichment, scoring, outreach automation, and CRM handoffs.',
        metrics: [
            {
                label: 'Qualified Leads Per Month',
                value: '50,000+'
            },
            {
                label: 'Manual Prospecting Time Saved',
                value: '90%'
            },
            {
                label: 'Qualified Lead Rate Increase',
                value: '+120%'
            }
        ],
        keywords: [
            'Lead Generation Workflow Optimization',
            'CRM Workflow Case Study'
        ],
        href: '/case-study/lead-generation-tools'
    },
    {
        category: 'Sales and Call Workflow',
        h3: 'Spectrum AI Voice Agent',
        body: 'Every call outcome connected automatically into the sales pipeline, covering call handling, lead qualification, AI summaries, routing, and sales team follow up workflows without manual entry.',
        metrics: [
            {
                label: 'AI Handled Calls Per Month',
                value: '10,000+'
            },
            {
                label: 'Conversion Rate Increase',
                value: '+45%'
            },
            {
                label: 'Operational Cost Reduction',
                value: '70%'
            }
        ],
        keywords: [
            'AI Voice Agent Workflow',
            'Sales Workflow Optimization'
        ],
        href: '/case-study/spectrum-voice-agent'
    },
    {
        category: 'Booking and Service Workflow',
        h3: 'RV Park AI Voice Agent',
        body: 'A service business kept connected from first call through confirmed booking, covering call answering, booking support, FAQ handling, and customer reminder workflows.',
        metrics: [
            {
                label: 'Inbound Call Answer Rate',
                value: '100%'
            },
            {
                label: 'Booking Conversion Increase',
                value: '+85%'
            },
            {
                label: 'Staff Hours Saved Per Week',
                value: '30 hrs'
            }
        ],
        keywords: [
            'Booking Workflow Automation',
            'Service Business Workflow Case Study'
        ],
        href: '/case-study/rv-park-voice-agent'
    },
    {
        category: 'Healthcare Admin Workflow',
        h3: 'lmn8 Ketamine Therapy AI Platform',
        body: 'Intake support, patient matching workflows, and scheduling support scoped carefully to the clinic environment, with measurable improvements to intake speed and clinic capacity.',
        metrics: [
            {
                label: 'AI Matching Accuracy',
                value: '94%'
            },
            {
                label: 'Intake Time Reduction',
                value: '65%'
            },
            {
                label: 'Clinic Capacity Increase',
                value: '+45%'
            }
        ],
        keywords: [
            'Healthcare Admin Workflow Case Study',
            'Clinic Workflow Optimization'
        ],
        href: '/case-study/lmn8-ketamine-therapy',
        note: 'Healthcare workflow claims kept specific to scoped environment.'
    },
    {
        category: 'Custom Platform Workflow',
        h3: '3vltn Domain AI Platform',
        body: 'A fully custom AI platform built around complex business operations, covering email agent workflows, automated campaigns, pricing recommendations, and connected system logic.',
        metrics: [
            {
                label: 'Deal Closure Rate Increase',
                value: '+250%'
            },
            {
                label: 'Manual Hours Saved Per Week',
                value: '40 hrs'
            },
            {
                label: 'Revenue Growth',
                value: '+180%'
            }
        ],
        keywords: [
            'Custom AI Workflow Platform',
            'Custom Workflow Case Study'
        ],
        href: '/case-study/3vltn'
    }
];
function MetricsTable({ metrics }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '10px',
            overflow: 'hidden'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            style: {
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'DM Sans, sans-serif'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        style: {
                            background: '#1a1a1a'
                        },
                        children: [
                            'Metric',
                            'Result'
                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                style: {
                                    padding: '11px 16px',
                                    textAlign: 'left',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    letterSpacing: '0.02em',
                                    borderBottom: '1px solid rgba(201,168,76,0.2)'
                                },
                                children: h
                            }, h, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: metrics.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            style: {
                                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                                borderBottom: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        padding: '12px 16px',
                                        fontSize: '13px',
                                        color: '#A0A0A0',
                                        borderRight: '1px solid rgba(255,255,255,0.05)'
                                    },
                                    children: row.label
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        padding: '12px 16px',
                                        fontSize: '13px',
                                        color: '#C9A84C',
                                        fontWeight: 600
                                    },
                                    children: row.value
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, row.label, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = MetricsTable;
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
            height: '100%',
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                lineNumber: 149,
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                lineNumber: 164,
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                lineNumber: 178,
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
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricsTable, {
                metrics: cs.metrics
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                lineNumber: 217,
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                lineNumber: 220,
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c1 = CaseStudyCard;
function WorkflowOptimizationCaseStudies() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                lineNumber: 271,
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                lineNumber: 285,
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                        lineNumber: 301,
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
                        children: "Workflow Optimization and Automation Systems We've Built"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                        lineNumber: 317,
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
                        children: "Real workflow optimization projects with measurable outcomes across lead generation, sales, booking automation, healthcare admin, and custom platform builds."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                        lineNumber: 332,
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
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                        lineNumber: 347,
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
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                        lineNumber: 361,
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
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCaseStudies.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_c2 = WorkflowOptimizationCaseStudies;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MetricsTable");
__turbopack_context__.k.register(_c1, "CaseStudyCard");
__turbopack_context__.k.register(_c2, "WorkflowOptimizationCaseStudies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationWhyUs.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationWhyUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const trustCards = [
    {
        icon: '🗺️',
        h3: 'We Start With the Workflow Before the Tool',
        body: 'The Prime Crafters maps how work actually moves, including every step, owner, handoff, delay, and exception, before recommending any automation, AI, or system change. The process comes first, every time.',
        href: '/services/process-automation',
        linkLabel: 'Explore Process Automation →',
        featured: false
    },
    {
        icon: '🤖',
        h3: 'We Design Processes That Are Ready for AI and Automation',
        body: 'Every optimised workflow defines triggers, owners, rules, data fields, exceptions, approval steps, and reporting requirements so AI tools and automations can be added into a clean, predictable process rather than a confusing one.',
        href: '/services/ai-integration',
        linkLabel: 'Explore AI Integration →',
        featured: false
    },
    {
        icon: '📊',
        h3: 'We Connect Optimization to Real Business Outcomes',
        body: 'Workflow improvements are measured against response speed, fewer manual steps, better follow up, clearer reporting, and smoother team handoffs, not just process diagrams that get filed away and never implemented.',
        href: '/case-studies',
        linkLabel: 'View Case Studies →',
        featured: false
    },
    {
        icon: '🔍',
        h3: 'We Test Handoffs, Data Quality, and Edge Cases',
        body: 'Duplicate work, missing fields, delayed handoffs, permission issues, failed triggers, and user adoption are all tested before launch, not discovered by the client team after the workflow has already gone live.',
        href: '/contact',
        linkLabel: 'Discuss Your Workflow →',
        featured: false
    },
    {
        icon: '🔄',
        h3: 'We Support Strategy, Build, Launch, and Ongoing Improvement',
        body: 'From workflow audit and roadmap through automation support, AI integration, documentation, rollout, monitoring, and improvement, The Prime Crafters stays involved across the full optimization lifecycle.',
        href: '/contact',
        linkLabel: 'Start Your Workflow Project →',
        featured: true
    }
];
const lifecycleBadges = [
    'Workflow Audit',
    'Process Mapping',
    'Automation Roadmap',
    'AI Integration',
    'Build & Test',
    'Launch',
    'Monitoring',
    'Optimization'
];
function WorkflowOptimizationWhyUs() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                lineNumber: 71,
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                lineNumber: 85,
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
                        children: "Why Us"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
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
                            maxWidth: '760px',
                            margin: '0 auto 16px'
                        },
                        children: "Why Choose ThePrimeCrafters for AI Workflow Optimization?"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
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
                            maxWidth: '640px',
                            margin: '0 auto 56px'
                        },
                        children: "The Prime Crafters is practical, business first, workflow aware, and AI aware, focused on measurable process improvement that connects to real business outcomes rather than process documentation that never gets implemented."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
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
                        children: trustCards.slice(0, 2).map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustCard, {
                                card: card
                            }, card.h3, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                        lineNumber: 146,
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
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                        lineNumber: 160,
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
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                        lineNumber: 174,
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
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                                lineNumber: 191,
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
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = WorkflowOptimizationWhyUs;
function TrustCard({ card, fullWidth = false, lifecycleBadges }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: card.featured ? 'rgba(201,168,76,0.05)' : 'rgba(255,255,255,0.03)',
            border: card.featured ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: fullWidth ? '40px' : '32px 28px',
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                        lineNumber: 281,
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                        lineNumber: 301,
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                        lineNumber: 315,
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                lineNumber: 271,
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                        lineNumber: 355,
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
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, this),
                                    i < lifecycleBadges.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(201,168,76,0.3)',
                                            fontSize: '12px'
                                        },
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                                        lineNumber: 387,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, badge, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                                lineNumber: 370,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
                lineNumber: 347,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationWhyUs.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
_c1 = TrustCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "WorkflowOptimizationWhyUs");
__turbopack_context__.k.register(_c1, "TrustCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationAbout.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationAbout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const serviceEntities = [
    {
        label: 'Workflow Optimization',
        href: '/services'
    },
    {
        label: 'Process Automation',
        href: '/services/process-automation'
    },
    {
        label: 'AI Integration',
        href: '/services/ai-integration'
    },
    {
        label: 'Custom AI Systems',
        href: '/services/custom-ai-solutions'
    },
    {
        label: 'CRM Workflows',
        href: '/services/ai-integration'
    }
];
const workflowEntities = [
    {
        label: 'Sales Workflows',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Support Workflows',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Operations Workflows',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Approval Workflows',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Reporting Workflows',
        href: '/services/workflow-optimization'
    },
    {
        label: 'CRM Workflows',
        href: '/services/ai-integration'
    },
    {
        label: 'Service Business Workflows',
        href: '/services/workflow-optimization'
    }
];
const teamEntities = [
    {
        label: 'Sales Teams',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Support Teams',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Operations Teams',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Admin Teams',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Marketing Teams',
        href: '/services/workflow-optimization'
    },
    {
        label: 'Service Businesses',
        href: '/services/workflow-optimization'
    }
];
function WorkflowOptimizationAbout() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                lineNumber: 44,
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                lineNumber: 58,
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                        lineNumber: 74,
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
                        children: "ThePrimeCrafters Provides AI Workflow Optimization for Business Automation"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                        lineNumber: 90,
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
                        children: "ThePrimeCrafters is a workflow optimization agency that maps, redesigns, and improves business processes across sales, support, operations, lead generation, admin, CRM, approval, and reporting workflows. Work spans workflow audits, process mapping, bottleneck analysis, automation roadmaps, AI opportunity mapping, tool alignment, documentation, KPI tracking, and post launch improvement, all built around how a business actually operates rather than a generic template."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                        lineNumber: 106,
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
                                        children: "Workflow Optimization, Process Automation, AI Integration, and Custom AI Systems"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                        lineNumber: 138,
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                lineNumber: 130,
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
                                                children: "Built for Sales, Support, Operations, Admin, Reporting, CRM, and Service Workflows"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '8px'
                                                },
                                                children: workflowEntities.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '1px',
                                            background: 'rgba(255,255,255,0.06)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                        lineNumber: 249,
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
                                                children: "Built for Sales, Support, Operations, Admin, Marketing, and Service Business Teams"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                                lineNumber: 253,
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
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                        lineNumber: 121,
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
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                lineNumber: 313,
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
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationAbout.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = WorkflowOptimizationAbout;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationAbout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationCTA.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
function WorkflowOptimizationCTA() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#0d0d0d',
                            border: '1px solid rgba(201,168,76,0.4)',
                            borderRadius: '12px',
                            padding: '48px 56px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: 'clamp(28px, 4vw, 48px)',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    lineHeight: 1.15,
                                    marginBottom: '16px'
                                },
                                children: "Ready to Improve the Workflows Slowing Your Team Down?"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '16px',
                                    color: '#888888',
                                    lineHeight: 1.75,
                                    maxWidth: '680px',
                                    marginBottom: '28px'
                                },
                                children: "Tell us the workflow you want to fix first. We will review your process and show you exactly what is possible in a free strategy call with no commitment required."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                style: {
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '15px',
                                    fontWeight: 700,
                                    color: '#C9A84C',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Book a Free Workflow Optimization Strategy Call"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            opacity: 0.6,
                                            fontWeight: 400
                                        },
                                        children: "theprimecrafters.com/contact"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            position: 'absolute',
                            width: '1px',
                            height: '1px',
                            overflow: 'hidden',
                            clip: 'rect(0,0,0,0)',
                            whiteSpace: 'nowrap'
                        },
                        children: "Book a Free Workflow Optimization Strategy Call"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            position: 'absolute',
                            width: '1px',
                            height: '1px',
                            overflow: 'hidden',
                            clip: 'rect(0,0,0,0)',
                            whiteSpace: 'nowrap'
                        },
                        children: "Tell Us the Workflow You Want to Fix First"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationCTA.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = WorkflowOptimizationCTA;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/services/workflow-optimization/WorkflowOptimizationFAQ.tsx
__turbopack_context__.s([
    "default",
    ()=>WorkflowOptimizationFAQ
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
        q: 'What are AI workflow optimization services?',
        a: 'AI workflow optimization services map how work currently moves through a business, identify bottlenecks and unclear ownership, and redesign the process so it runs smoothly with AI support added where it creates real value. This includes workflow audits, process mapping, automation roadmaps, and post launch performance tracking.',
        href: '/services',
        linkLabel: 'Our Services →'
    },
    {
        q: 'What is the difference between workflow optimization and process automation?',
        a: 'Workflow optimization comes first. It maps the process, clarifies ownership, and defines the logic a workflow should follow. Process automation comes after, building the actual triggers, integrations, and automated steps on top of that mapped logic. Automating a workflow before it has been optimised usually just speeds up a broken process.',
        href: '/services/process-automation',
        linkLabel: 'Process Automation →'
    },
    {
        q: 'What business workflows can ThePrimeCrafters optimize?',
        a: 'Sales and lead handoff workflows, customer support and ticket workflows, operations and admin workflows, approval and review workflows, reporting and dashboard workflows, CRM and data sync workflows, AI agent and chatbot workflows, and internal knowledge and SOP workflows.'
    },
    {
        q: 'How do I know if my business needs workflow optimization?',
        a: 'If your team repeats the same manual tasks daily, ownership of tasks or leads is unclear, approvals regularly stall, your tools do not share data automatically, follow ups get missed, or you have automation ideas with no clear process to plug them into, workflow optimization will likely deliver measurable improvement.'
    },
    {
        q: 'What does the workflow optimization process look like?',
        a: 'Six steps: workflow discovery and bottleneck audit, process mapping and priority scoring, automation and AI opportunity roadmap, workflow redesign and tool alignment, build test and document improvements, and launch monitor and improve. No step is skipped.'
    },
    {
        q: 'Can ThePrimeCrafters connect workflow optimization with AI and automation tools?',
        a: 'Yes. Every optimised workflow is designed to support AI tools for summarising, routing, scoring, and drafting, and connects to automation platforms and existing business software such as CRMs, forms, email, and calendars.',
        href: '/services/ai-integration',
        linkLabel: 'AI Integration →'
    },
    {
        q: 'Does workflow optimization require replacing our existing tools?',
        a: 'No. The Prime Crafters improves how current tools and teams work together first. New tools are only recommended where a genuine gap exists, not as a default starting point.'
    },
    {
        q: 'How long does a workflow optimization project take?',
        a: 'Smaller focused workflows can be mapped, redesigned, and launched within a few weeks. Larger multi team workflows with several tool integrations take longer. Timeline is confirmed during discovery based on the specific scope.',
        href: '/contact',
        linkLabel: 'Discuss Your Project →'
    },
    {
        q: 'How much do workflow optimization services cost?',
        a: 'Cost depends on the number of workflows involved, the complexity of the bottlenecks, the integrations required, and the scope of the automation roadmap. The Prime Crafters provides a scoped proposal after reviewing the workflow during a free strategy call.',
        href: '/contact',
        linkLabel: 'Book a Consultation →'
    },
    {
        q: 'Which teams benefit most from AI workflow optimization?',
        a: 'Sales, customer support, operations, marketing and lead generation, healthcare admin teams, and service businesses all see measurable improvement when they have repeatable workflows, unclear ownership, or high volumes of manual coordination.'
    },
    {
        q: 'How do you measure whether workflow optimization is working?',
        a: 'Success is measured against KPIs defined before the project starts, such as response time, manual hours saved, handoff delay reduction, error rate, and ticket or approval resolution speed, tracked after launch and refined over time.'
    },
    {
        q: 'Why choose ThePrimeCrafters for AI workflow optimization services?',
        a: 'The Prime Crafters starts with the workflow before the tool, designs processes that are ready for AI and automation, connects optimization to measurable business outcomes, tests handoffs and edge cases before launch, and supports the full lifecycle from strategy through ongoing improvement.',
        href: '/about-us',
        linkLabel: 'About Us →',
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
function WorkflowOptimizationFAQ() {
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                lineNumber: 103,
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                lineNumber: 109,
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
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                lineNumber: 123,
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
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                        lineNumber: 146,
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
                        children: "AI Workflow Optimization FAQs"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                        lineNumber: 162,
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
                        children: "Common questions about AI workflow optimization services, how ThePrimeCrafters works, and what to expect from an optimization project."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                        lineNumber: 176,
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
                                                    flex: 1,
                                                    transition: 'color 0.2s'
                                                },
                                                children: faq.q
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                                lineNumber: 234,
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                                lineNumber: 248,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                        lineNumber: 218,
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                                lineNumber: 268,
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
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                                lineNumber: 277,
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
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                                        lineNumber: 301,
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
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                                lineNumber: 292,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                        lineNumber: 266,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, faq.q, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                lineNumber: 203,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                        lineNumber: 191,
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
                                children: "Have a question not covered here? Book a free workflow optimization strategy call and we will walk you through what is possible for your operation."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                lineNumber: 353,
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
                                children: "Book a Free Workflow Optimization Strategy Call →"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/services/workflow-optimization/components/WorkflowOptimizationFAQ.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(WorkflowOptimizationFAQ, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = WorkflowOptimizationFAQ;
var _c;
__turbopack_context__.k.register(_c, "WorkflowOptimizationFAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=prime_ThePrimeCrafters-Web_38a402ec._.js.map