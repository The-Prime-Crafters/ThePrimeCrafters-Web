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
"[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const features = [
    {
        icon: "✦",
        label: "Custom AI Systems"
    },
    {
        icon: "⚡",
        label: "Fast Implementation"
    },
    {
        icon: "◈",
        label: "Dedicated Support"
    },
    {
        icon: "⟳",
        label: "Workflow Automation"
    }
];
const floatingNodes = [
    {
        top: "12%",
        left: "8%",
        size: "w-2 h-2",
        delay: "0s",
        opacity: "opacity-40"
    },
    {
        top: "25%",
        right: "6%",
        size: "w-3 h-3",
        delay: "0.8s",
        opacity: "opacity-30"
    },
    {
        top: "60%",
        left: "4%",
        size: "w-1.5 h-1.5",
        delay: "1.4s",
        opacity: "opacity-50"
    },
    {
        top: "75%",
        right: "10%",
        size: "w-2 h-2",
        delay: "0.4s",
        opacity: "opacity-35"
    },
    {
        top: "45%",
        left: "15%",
        size: "w-1 h-1",
        delay: "1.8s",
        opacity: "opacity-60"
    },
    {
        top: "35%",
        right: "18%",
        size: "w-2.5 h-2.5",
        delay: "1.1s",
        opacity: "opacity-25"
    }
];
function ContactHero() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactHero.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const resize = {
                "ContactHero.useEffect.resize": ()=>{
                    canvas.width = canvas.offsetWidth;
                    canvas.height = canvas.offsetHeight;
                }
            }["ContactHero.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            const points = Array.from({
                length: 18
            }, {
                "ContactHero.useEffect.points": ()=>({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 0.4,
                        vy: (Math.random() - 0.5) * 0.4
                    })
            }["ContactHero.useEffect.points"]);
            let animId;
            const draw = {
                "ContactHero.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    points.forEach({
                        "ContactHero.useEffect.draw": (p)=>{
                            p.x += p.vx;
                            p.y += p.vy;
                            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                        }
                    }["ContactHero.useEffect.draw"]);
                    for(let i = 0; i < points.length; i++){
                        for(let j = i + 1; j < points.length; j++){
                            const dx = points[i].x - points[j].x;
                            const dy = points[i].y - points[j].y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < 160) {
                                ctx.beginPath();
                                ctx.moveTo(points[i].x, points[i].y);
                                ctx.lineTo(points[j].x, points[j].y);
                                ctx.strokeStyle = `rgba(212,175,55,${0.12 * (1 - dist / 160)})`;
                                ctx.lineWidth = 1;
                                ctx.stroke();
                            }
                        }
                    }
                    points.forEach({
                        "ContactHero.useEffect.draw": (p)=>{
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                            ctx.fillStyle = "rgba(212,175,55,0.25)";
                            ctx.fill();
                        }
                    }["ContactHero.useEffect.draw"]);
                    animId = requestAnimationFrame(draw);
                }
            }["ContactHero.useEffect.draw"];
            draw();
            return ({
                "ContactHero.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener("resize", resize);
                }
            })["ContactHero.useEffect"];
        }
    }["ContactHero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden px-6 pt-[clamp(7rem,12vw,11rem)] pb-[clamp(4rem,8vw,8rem)] min-h-[90vh] flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 w-full h-full pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.13),transparent_65%)] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-[var(--gold-500)]/5 blur-[80px] rounded-full pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            floatingNodes.map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute ${node.size} ${node.opacity} rounded-full bg-[var(--gold-500)] animate-pulse pointer-events-none`,
                    style: {
                        top: node.top,
                        left: "left" in node ? node.left : undefined,
                        right: "right" in node ? node.right : undefined,
                        animationDelay: node.delay
                    }
                }, i, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4vw_4vw] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-5xl text-center w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-16 font-bold leading-[1.05] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60",
                        style: {
                            fontSize: "clamp(2.4rem, 5vw, 5rem)"
                        },
                        children: [
                            "Contact",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200",
                                children: "Us"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-6 max-w-2xl leading-relaxed text-[var(--text-secondary)]",
                        style: {
                            fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)"
                        },
                        children: "Tell us about your business, your bottlenecks, or your growth goals — and we will show you exactly how AI can automate your operations, eliminate manual work, and help you scale faster."
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/contact#consultation",
                                className: "group relative inline-flex items-center gap-2 rounded-2xl bg-[var(--gold-500)] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.35)] text-sm md:text-base",
                                children: [
                                    "Book Free Consultation",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "transition-transform duration-300 group-hover:translate-x-1",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/contact#team",
                                className: "inline-flex items-center gap-2 rounded-2xl border border-[var(--border-subtle)] bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[var(--gold-500)]/40 hover:bg-white/10 text-sm md:text-base",
                                children: "Talk To Our Team"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto",
                        children: features.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative rounded-2xl border border-[var(--border-subtle)] bg-white/5 backdrop-blur-xl p-4 text-sm text-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_70%)]"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex flex-col items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--gold-500)] text-lg",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs md:text-sm font-medium text-center leading-snug",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 text-xs text-[var(--text-secondary)] opacity-50 tracking-wide",
                        children: "Deployment-ready AI infrastructure · 2–8 week implementation · Results from day one"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactHero.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(ContactHero, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = ContactHero;
var _c;
__turbopack_context__.k.register(_c, "ContactHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactFormSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const benefits = [
    {
        title: "Free discovery consultation",
        description: "A no-cost 30-min call to map your automation opportunities.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-5 w-5",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Custom AI strategy",
        description: "Tailored recommendations built around your business goals.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-5 w-5",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Dedicated implementation support",
        description: "Our team stays with you from kickoff to launch and beyond.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-5 w-5",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "No-obligation discussion",
        description: "Zero pressure. Walk away with clarity regardless of next steps.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-5 w-5",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function ContactFormSection() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactFormSection.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "ContactFormSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["ContactFormSection.useEffect"], {
                threshold: 0.1
            });
            obs.observe(el);
            return ({
                "ContactFormSection.useEffect": ()=>obs.disconnect()
            })["ContactFormSection.useEffect"];
        }
    }["ContactFormSection.useEffect"], []);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormState("submitting");
        setTimeout(()=>setFormState("success"), 1800);
    };
    const inputBase = "w-full rounded-xl border bg-black/20 px-5 py-4 text-sm text-white placeholder:text-neutral-600 outline-none transition-all duration-300 sm:text-base";
    const inputStyle = (name)=>({
            borderColor: focused === name ? "rgba(201,168,76,0.7)" : "rgba(255,255,255,0.08)",
            boxShadow: focused === name ? "0 0 0 3px rgba(201,168,76,0.08)" : "none"
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-[0.05]",
                style: {
                    background: "radial-gradient(circle, #C9A84C, transparent 70%)",
                    filter: "blur(80px)"
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "relative mx-auto max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-10 lg:grid-cols-2 lg:gap-16",
                    style: {
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.65s ease, transform 0.65s ease"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5 flex items-center gap-2.5"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl",
                                    children: [
                                        "Book a Free",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent"
                                            },
                                            children: "Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 text-sm leading-relaxed text-neutral-400 sm:text-base lg:text-lg",
                                    children: "Fill out the form below and our team will reach out within 24 hours to discuss your automation goals, understand your current workflows, and map out exactly how AI can move your business forward."
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 space-y-3",
                                    children: benefits.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(201,168,76,0.2)] hover:bg-white/[0.05]",
                                            style: {
                                                opacity: visible ? 1 : 0,
                                                transform: visible ? "translateX(0)" : "translateX(-16px)",
                                                transition: `opacity 0.55s ease ${0.1 + i * 0.08}s, transform 0.55s ease ${0.1 + i * 0.08}s`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border",
                                                    style: {
                                                        color: "#C9A84C",
                                                        background: "rgba(201,168,76,0.1)",
                                                        borderColor: "rgba(201,168,76,0.2)"
                                                    },
                                                    children: b.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-white/90",
                                                            children: b.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-xs leading-relaxed text-neutral-500",
                                                            children: b.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, b.title, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-2 w-2 rounded-full bg-emerald-400",
                                            style: {
                                                boxShadow: "0 0 6px #34d399"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-neutral-500",
                                            children: "Team online · Average response within 24 hours"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-2xl border border-white/[0.09] p-7 backdrop-blur-xl sm:p-10",
                            style: {
                                background: "linear-gradient(160deg, rgba(201,168,76,0.07) 0%, rgba(255,255,255,0.02) 60%, rgba(0,0,0,0.1) 100%)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-0 top-0 h-px w-full",
                                    style: {
                                        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                formState === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full min-h-[420px] flex-col items-center justify-center text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-5 flex h-16 w-16 items-center justify-center rounded-full border",
                                            style: {
                                                color: "#C9A84C",
                                                background: "rgba(201,168,76,0.1)",
                                                borderColor: "rgba(201,168,76,0.3)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                className: "h-8 w-8",
                                                stroke: "currentColor",
                                                strokeWidth: 1.5,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-white",
                                            children: "Inquiry Sent!"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 max-w-xs text-sm text-neutral-400",
                                            children: "Thanks for reaching out. We'll be in touch within 24 hours to schedule your consultation."
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-6 text-lg font-semibold text-white/90 sm:text-xl",
                                            children: "Send us a message"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-5 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "mb-2 block text-xs font-medium text-neutral-400 sm:text-sm",
                                                            children: "Full Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            placeholder: "John Smith",
                                                            className: inputBase,
                                                            style: inputStyle("name"),
                                                            onFocus: ()=>setFocused("name"),
                                                            onBlur: ()=>setFocused(null)
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "mb-2 block text-xs font-medium text-neutral-400 sm:text-sm",
                                                            children: "Business Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            required: true,
                                                            placeholder: "you@company.com",
                                                            className: inputBase,
                                                            style: inputStyle("email"),
                                                            onFocus: ()=>setFocused("email"),
                                                            onBlur: ()=>setFocused(null)
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-2 block text-xs font-medium text-neutral-400 sm:text-sm",
                                                    children: "Company Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Acme Inc.",
                                                    className: inputBase,
                                                    style: inputStyle("company"),
                                                    onFocus: ()=>setFocused("company"),
                                                    onBlur: ()=>setFocused(null)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-2 block text-xs font-medium text-neutral-400 sm:text-sm",
                                                    children: "Services Needed"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: inputBase,
                                                    style: {
                                                        ...inputStyle("service"),
                                                        colorScheme: "dark"
                                                    },
                                                    onFocus: ()=>setFocused("service"),
                                                    onBlur: ()=>setFocused(null),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select a service…"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "AI Voice Agents"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Workflow Automation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "AI Chatbots"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "CRM Integrations"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Custom AI Systems"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "AI Assistants"
                                                        }, void 0, false, {
                                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-2 block text-xs font-medium text-neutral-400 sm:text-sm",
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 4,
                                                    placeholder: "Tell us about your business and what you want to automate…",
                                                    className: `${inputBase} resize-none`,
                                                    style: inputStyle("message"),
                                                    onFocus: ()=>setFocused("message"),
                                                    onBlur: ()=>setFocused(null)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: formState === "submitting",
                                            className: "group relative w-full overflow-hidden rounded-full py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] disabled:scale-100 disabled:opacity-80 sm:text-base",
                                            style: {
                                                background: "linear-gradient(135deg, #D4AF61, #A87C3E)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative flex items-center justify-center gap-2",
                                                    children: formState === "submitting" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "h-4 w-4 animate-spin",
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
                                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                                        lineNumber: 271,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        className: "opacity-75",
                                                                        fill: "currentColor",
                                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                                        lineNumber: 272,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Sending…"
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            "Submit Inquiry",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 2,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-xs text-neutral-600",
                                            children: "By submitting, you agree to our Privacy Policy. No spam, ever."
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFormSection.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(ContactFormSection, "UQIlrwIgwZH9cuZUW7WJua/+Ex8=");
_c = ContactFormSection;
var _c;
__turbopack_context__.k.register(_c, "ContactFormSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuickContactOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const contactOptions = [
    {
        title: "Email Us",
        value: "hello@theprimecrafters.com",
        hint: "We reply within 24 hours",
        href: "mailto:hello@theprimecrafters.com",
        accent: "#C9A84C",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "WhatsApp",
        value: "+1 (000) 000-0000",
        hint: "Chat with us instantly",
        href: "https://wa.me/10000000000",
        accent: "#4CAF75",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "h-6 w-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Book a Meeting",
        value: "Schedule via Calendly",
        hint: "Pick a time that works for you",
        href: "https://calendly.com",
        accent: "#C9A84C",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "LinkedIn",
        value: "The Prime Crafters",
        hint: "Connect professionally",
        href: "https://linkedin.com",
        accent: "#0A66C2",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "h-6 w-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function ContactCard({ item, index }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactCard.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "ContactCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "ContactCard.useEffect": ()=>setVisible(true)
                        }["ContactCard.useEffect"], index * 90);
                        obs.disconnect();
                    }
                }
            }["ContactCard.useEffect"], {
                threshold: 0.1
            });
            obs.observe(el);
            return ({
                "ContactCard.useEffect": ()=>obs.disconnect()
            })["ContactCard.useEffect"];
        }
    }["ContactCard.useEffect"], [
        index
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        ref: ref,
        href: item.href,
        target: "_blank",
        rel: "noopener noreferrer",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`
        },
        className: "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm no-underline md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    opacity: hovered ? 1 : 0,
                    background: `radial-gradient(ellipse at top left, ${item.accent}1A 0%, transparent 65%)`,
                    transition: "opacity 0.4s ease"
                },
                className: "pointer-events-none absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                    opacity: hovered ? 1 : 0.3,
                    transition: "opacity 0.4s ease"
                },
                className: "absolute left-0 top-0 h-px w-3/5"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: item.accent,
                    background: `${item.accent}15`,
                    borderColor: `${item.accent}30`,
                    boxShadow: hovered ? `0 0 18px ${item.accent}22` : "none",
                    transition: "box-shadow 0.4s ease"
                },
                className: "mb-6 flex h-12 w-12 items-center justify-center rounded-xl border",
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-base font-semibold text-white/90 sm:text-lg",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: item.accent
                },
                className: "mt-1.5 truncate text-sm font-medium sm:text-base",
                children: item.value
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs leading-relaxed text-neutral-500",
                children: item.hint
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: item.accent,
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? "translateX(0)" : "translateX(-6px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease"
                },
                className: "mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-3.5 w-3.5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 2.5,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(ContactCard, "Io6tHxHNmh7JjjisfBT7u3vz16c=");
_c = ContactCard;
function QuickContactOptions() {
    _s1();
    const [headerVisible, setHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickContactOptions.useEffect": ()=>{
            const el = headerRef.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "QuickContactOptions.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setHeaderVisible(true);
                        obs.disconnect();
                    }
                }
            }["QuickContactOptions.useEffect"], {
                threshold: 0.15
            });
            obs.observe(el);
            return ({
                "QuickContactOptions.useEffect": ()=>obs.disconnect()
            })["QuickContactOptions.useEffect"];
        }
    }["QuickContactOptions.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.05]",
                style: {
                    background: "radial-gradient(circle, #C9A84C, transparent 70%)",
                    filter: "blur(70px)"
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headerRef,
                        className: "text-center",
                        style: {
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.6s ease, transform 0.6s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl",
                                children: [
                                    "Talk To",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent"
                                        },
                                        children: "Our Team"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base md:mt-5",
                                children: "Prefer a faster path? Reach out directly through any of the channels below and our team will get back to you promptly."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-10 h-px w-full md:my-14",
                        style: {
                            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4",
                        children: contactOptions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactCard, {
                                item: item,
                                index: index
                            }, item.title, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-10 text-center text-xs text-neutral-600",
                        style: {
                            opacity: headerVisible ? 1 : 0,
                            transition: "opacity 0.6s ease 0.5s"
                        },
                        children: "Average response time · Email 24h · WhatsApp <1h · Calendly instant"
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/QuickContactOptions.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s1(QuickContactOptions, "SIderZ42ScCnRlHmeLvZW18tjCs=");
_c1 = QuickContactOptions;
var _c, _c1;
__turbopack_context__.k.register(_c, "ContactCard");
__turbopack_context__.k.register(_c1, "QuickContactOptions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesSnapshot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const services = [
    {
        title: "AI Voice Agents",
        description: "Deploy intelligent voice agents that handle inbound calls, qualify leads, answer customer questions, and resolve support queries — 24 hours a day, 7 days a week, without fatigue or inconsistency. Your team handles only the conversations that truly need a human.",
        href: "/services#ai-voice-agents",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 0 1 6 0v8.25a3 3 0 0 1-3 3Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        accent: "#C9A84C"
    },
    {
        title: "Workflow Automation",
        description: "Eliminate repetitive, time-consuming manual tasks and streamline complex multi-step processes with intelligent automation pipelines. From data entry to approval chains, we automate the work that slows your team down.",
        href: "/services#workflow-automation",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        accent: "#A87C3E"
    },
    {
        title: "AI Chatbots",
        description: "Context-aware conversational AI that understands your business, engages website visitors intelligently, answers product and service questions, and converts them into qualified leads — at any hour, across any page on your site.",
        href: "/services#ai-chatbots",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        accent: "#D4AF61"
    },
    {
        title: "CRM Integrations",
        description: "Seamlessly connect your AI stack with Salesforce, HubSpot, Pipedrive, and your existing tools — keeping customer data, interaction history, and pipeline activity in perfect sync without manual updates or data entry errors.",
        href: "/services#crm-integrations",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        accent: "#B8963E"
    },
    {
        title: "Custom AI Systems",
        description: "Purpose-built AI architectures trained on your proprietary data and tailored to your industry's specific requirements. Whether you need a custom decision engine, an intelligent document processor, or a bespoke automation framework — we build it from the ground up.",
        href: "/services#custom-ai-systems",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                }, void 0, false, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        accent: "#C9A84C"
    },
    {
        title: "AI Assistants",
        description: "Intelligent internal assistants that surface the right information at the right time — answering team questions, generating reports, flagging priorities, and keeping your workforce operating at peak efficiency.",
        href: "/services#ai-assistants",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        accent: "#A87C3E"
    }
];
function ServiceCard({ service, index }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceCard.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "ServiceCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "ServiceCard.useEffect": ()=>setVisible(true)
                        }["ServiceCard.useEffect"], index * 80);
                        obs.disconnect();
                    }
                }
            }["ServiceCard.useEffect"], {
                threshold: 0.1
            });
            obs.observe(el);
            return ({
                "ServiceCard.useEffect": ()=>obs.disconnect()
            })["ServiceCard.useEffect"];
        }
    }["ServiceCard.useEffect"], [
        index
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s`
        },
        className: "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm md:p-8 cursor-default select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    opacity: hovered ? 1 : 0,
                    background: `radial-gradient(ellipse at top left, ${service.accent}18 0%, transparent 65%)`,
                    transition: "opacity 0.4s ease"
                },
                className: "pointer-events-none absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: `linear-gradient(90deg, ${service.accent}, transparent)`,
                    opacity: hovered ? 1 : 0.35,
                    transition: "opacity 0.4s ease"
                },
                className: "absolute left-0 top-0 h-px w-2/3"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: service.accent,
                    background: `${service.accent}15`,
                    borderColor: `${service.accent}30`,
                    boxShadow: hovered ? `0 0 16px ${service.accent}25` : "none",
                    transition: "box-shadow 0.4s ease"
                },
                className: "mb-5 flex h-11 w-11 items-center justify-center rounded-xl border",
                children: service.icon
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-3 text-[1.15rem] font-semibold leading-snug text-white/90 md:text-xl",
                children: service.title
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm leading-relaxed text-neutral-400 md:text-[0.9rem]",
                children: service.description
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: service.href,
                style: {
                    color: service.accent,
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? "translateX(0)" : "translateX(-6px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease"
                },
                className: "mt-6 flex items-center gap-1.5 text-sm font-medium",
                children: [
                    "Learn more",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(ServiceCard, "Io6tHxHNmh7JjjisfBT7u3vz16c=");
_c = ServiceCard;
function ServicesSnapshot() {
    _s1();
    const [headerVisible, setHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesSnapshot.useEffect": ()=>{
            const el = headerRef.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "ServicesSnapshot.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setHeaderVisible(true);
                        obs.disconnect();
                    }
                }
            }["ServicesSnapshot.useEffect"], {
                threshold: 0.15
            });
            obs.observe(el);
            return ({
                "ServicesSnapshot.useEffect": ()=>obs.disconnect()
            })["ServicesSnapshot.useEffect"];
        }
    }["ServicesSnapshot.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-[0.06]",
                style: {
                    background: "radial-gradient(circle, #C9A84C, transparent 70%)",
                    filter: "blur(60px)"
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-[0.04]",
                style: {
                    background: "radial-gradient(circle, #A87C3E, transparent 70%)",
                    filter: "blur(80px)"
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headerRef,
                        className: "flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    opacity: headerVisible ? 1 : 0,
                                    transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                                    transition: "opacity 0.6s ease, transform 0.6s ease"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl",
                                        children: [
                                            "Our",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent"
                                                },
                                                children: "AI Services"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base md:mt-5",
                                        children: "Explore our AI automation solutions designed to optimise workflows, increase operational efficiency, and scale your business with precision. Every service is built around your specific use case."
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    opacity: headerVisible ? 1 : 0,
                                    transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                                    transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s"
                                },
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/services",
                                    className: "group relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300 sm:px-8 sm:py-3.5 sm:text-base",
                                    style: {
                                        border: "1px solid rgba(201,168,76,0.35)",
                                        background: "rgba(201,168,76,0.07)",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = "rgba(201,168,76,0.14)";
                                        e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = "rgba(201,168,76,0.07)";
                                        e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
                                    },
                                    children: [
                                        "Explore All Services",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                            }, void 0, false, {
                                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-10 h-px w-full md:my-14",
                        style: {
                            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3",
                        children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                                service: service,
                                index: index
                            }, service.title, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ServicesSnapshot.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s1(ServicesSnapshot, "SIderZ42ScCnRlHmeLvZW18tjCs=");
_c1 = ServicesSnapshot;
var _c, _c1;
__turbopack_context__.k.register(_c, "ServiceCard");
__turbopack_context__.k.register(_c1, "ServicesSnapshot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndustriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const industries = [
    {
        title: "Healthcare",
        description: "Automate patient intake, appointment scheduling, and follow-ups — so your staff focuses on care, not admin.",
        accent: "#6EE7B7",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        stat: "40% faster intake"
    },
    {
        title: "SaaS",
        description: "Boost activation, reduce churn, and handle support at scale with AI assistants trained on your product.",
        accent: "#C9A84C",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        stat: "3× faster support"
    },
    {
        title: "E-Commerce",
        description: "Recover abandoned carts, personalize recommendations, and automate order updates with intelligent workflows.",
        accent: "#F87171",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        stat: "25% more revenue"
    },
    {
        title: "Real Estate",
        description: "Qualify leads, schedule viewings, and follow up automatically — so agents close more deals with less effort.",
        accent: "#A78BFA",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        stat: "2× more closings"
    },
    {
        title: "Agencies",
        description: "Deliver faster client results, automate reporting, and scale operations without scaling headcount.",
        accent: "#38BDF8",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        stat: "60% less manual work"
    },
    {
        title: "Local Businesses",
        description: "Handle inbound calls, bookings, and customer queries 24/7 — even when your doors are closed.",
        accent: "#C9A84C",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            className: "h-6 w-6",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.016 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        stat: "24/7 availability"
    }
];
function IndustryCard({ item, index }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IndustryCard.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "IndustryCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "IndustryCard.useEffect": ()=>setVisible(true)
                        }["IndustryCard.useEffect"], index * 80);
                        obs.disconnect();
                    }
                }
            }["IndustryCard.useEffect"], {
                threshold: 0.1
            });
            obs.observe(el);
            return ({
                "IndustryCard.useEffect": ()=>obs.disconnect()
            })["IndustryCard.useEffect"];
        }
    }["IndustryCard.useEffect"], [
        index
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 0.55s ease ${index * 0.075}s, transform 0.55s ease ${index * 0.075}s`
        },
        className: "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm cursor-default select-none md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    opacity: hovered ? 1 : 0,
                    background: `radial-gradient(ellipse at top left, ${item.accent}15 0%, transparent 65%)`,
                    transition: "opacity 0.4s ease"
                },
                className: "pointer-events-none absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                    opacity: hovered ? 1 : 0.25,
                    transition: "opacity 0.4s ease"
                },
                className: "absolute left-0 top-0 h-px w-3/5"
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: item.accent,
                            background: `${item.accent}15`,
                            borderColor: `${item.accent}28`,
                            boxShadow: hovered ? `0 0 18px ${item.accent}20` : "none",
                            transition: "box-shadow 0.4s ease"
                        },
                        className: "flex h-11 w-11 items-center justify-center rounded-xl border",
                        children: item.icon
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: item.accent,
                            background: `${item.accent}12`,
                            borderColor: `${item.accent}25`,
                            opacity: hovered ? 1 : 0.6,
                            transition: "opacity 0.3s ease"
                        },
                        className: "rounded-full border px-3 py-1 text-xs font-semibold",
                        children: item.stat
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-3 text-lg font-semibold text-white/90 sm:text-xl",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm leading-relaxed text-neutral-400 md:text-[0.875rem]",
                children: item.description
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: item.accent,
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? "translateX(0)" : "translateX(-6px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease"
                },
                className: "mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider",
                children: [
                    "See use cases",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-3.5 w-3.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2.5,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(IndustryCard, "Io6tHxHNmh7JjjisfBT7u3vz16c=");
_c = IndustryCard;
function IndustriesSection() {
    _s1();
    const [headerVisible, setHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IndustriesSection.useEffect": ()=>{
            const el = headerRef.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "IndustriesSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setHeaderVisible(true);
                        obs.disconnect();
                    }
                }
            }["IndustriesSection.useEffect"], {
                threshold: 0.15
            });
            obs.observe(el);
            return ({
                "IndustriesSection.useEffect": ()=>obs.disconnect()
            })["IndustriesSection.useEffect"];
        }
    }["IndustriesSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -top-32 right-0 h-[450px] w-[450px] rounded-full opacity-[0.05]",
                style: {
                    background: "radial-gradient(circle, #C9A84C, transparent 70%)",
                    filter: "blur(70px)"
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full opacity-[0.04]",
                style: {
                    background: "radial-gradient(circle, #6EE7B7, transparent 70%)",
                    filter: "blur(80px)"
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headerRef,
                        className: "text-center",
                        style: {
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.6s ease, transform 0.6s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px w-8",
                                        style: {
                                            background: "linear-gradient(90deg, transparent, #C9A84C)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold uppercase tracking-[0.18em]",
                                        style: {
                                            color: "#C9A84C"
                                        },
                                        children: "Who we serve"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px w-8",
                                        style: {
                                            background: "linear-gradient(90deg, #C9A84C, transparent)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl",
                                children: [
                                    "Industries We",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent"
                                        },
                                        children: "Work With"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base md:mt-5",
                                children: "AI solutions tailored for modern businesses across multiple industries — from startups to enterprise."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-10 h-px w-full md:my-14",
                        style: {
                            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3",
                        children: industries.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndustryCard, {
                                item: item,
                                index: index
                            }, item.title, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/IndustriesSection.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_s1(IndustriesSection, "SIderZ42ScCnRlHmeLvZW18tjCs=");
_c1 = IndustriesSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "IndustryCard");
__turbopack_context__.k.register(_c1, "IndustriesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactFAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const faqs = [
    {
        question: "How does the consultation process work?",
        answer: "We start with a free 30-minute discovery call to understand your business workflows and pain points. From there, we map out automation opportunities, present a custom AI strategy, and walk you through exactly what we'd build — before any commitment is made."
    },
    {
        question: "How long does implementation take?",
        answer: "Most projects are delivered in 2–6 weeks depending on scope and integrations. Simple chatbot or voice agent deployments can go live in under 2 weeks, while complex multi-system workflows or custom AI builds take longer. We'll give you a precise timeline after the discovery call."
    },
    {
        question: "Do you build custom AI systems?",
        answer: "Yes — every solution is built specifically for your business. We don't use off-the-shelf templates. Your AI is trained on your data, integrated with your tools, and designed around your exact operational workflows."
    },
    {
        question: "What industries do you specialize in?",
        answer: "We work across Healthcare, SaaS, E-Commerce, Real Estate, Agencies, and Local Businesses. Each industry gets solutions tailored to its specific compliance requirements, customer journeys, and operational challenges."
    },
    {
        question: "What does ongoing support look like?",
        answer: "After launch, we provide dedicated support to monitor performance, retrain models as your business evolves, and roll out improvements. Think of us as a long-term AI partner, not a one-time vendor."
    },
    {
        question: "How much does it cost?",
        answer: "Pricing depends on the scope of the project. We offer flexible engagement models — from one-time builds to monthly retainers. Book a free consultation and we'll walk you through options that fit your budget and goals."
    }
];
function FAQItem({ faq, index, visible }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FAQItem.useEffect": ()=>{
            if (contentRef.current) {
                setHeight(open ? contentRef.current.scrollHeight : 0);
            }
        }
    }["FAQItem.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
            ...open ? {
                borderColor: "rgba(201,168,76,0.25)",
                background: "rgba(201,168,76,0.04)"
            } : {}
        },
        className: "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-0 h-full w-px transition-opacity duration-300",
                style: {
                    background: "linear-gradient(180deg, #C9A84C, transparent)",
                    opacity: open ? 1 : 0
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((p)=>!p),
                className: "flex w-full items-center justify-between gap-4 px-6 py-6 text-left sm:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-white/90 sm:text-base md:text-lg",
                        children: faq.question
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        style: {
                            borderColor: open ? "rgba(201,168,76,0.5)" : "rgba(255,255,255,0.1)",
                            background: open ? "rgba(201,168,76,0.1)" : "transparent",
                            color: open ? "#C9A84C" : "rgba(255,255,255,0.4)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            className: "h-4 w-4 transition-transform duration-300",
                            style: {
                                transform: open ? "rotate(45deg)" : "rotate(0deg)"
                            },
                            stroke: "currentColor",
                            strokeWidth: 2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M12 4.5v15m7.5-7.5h-15"
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height,
                    transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: contentRef,
                    className: "px-6 pb-6 sm:px-8 sm:pb-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-px w-full mb-5",
                            style: {
                                background: "linear-gradient(90deg, rgba(201,168,76,0.2), transparent)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-relaxed text-neutral-400 sm:text-base",
                            children: faq.answer
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(FAQItem, "n+uWwDHLytdd6CM1O7f1kV7oCHw=");
_c = FAQItem;
function ContactFAQ() {
    _s1();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactFAQ.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "ContactFAQ.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["ContactFAQ.useEffect"], {
                threshold: 0.1
            });
            obs.observe(el);
            return ({
                "ContactFAQ.useEffect": ()=>obs.disconnect()
            })["ContactFAQ.useEffect"];
        }
    }["ContactFAQ.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.04]",
                style: {
                    background: "radial-gradient(circle, #C9A84C, transparent 65%)",
                    filter: "blur(80px)"
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "relative mx-auto max-w-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 text-center",
                        style: {
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.6s ease, transform 0.6s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px w-8",
                                        style: {
                                            background: "linear-gradient(90deg, transparent, #C9A84C)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold uppercase tracking-[0.18em]",
                                        style: {
                                            color: "#C9A84C"
                                        },
                                        children: "FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px w-8",
                                        style: {
                                            background: "linear-gradient(90deg, #C9A84C, transparent)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl",
                                children: [
                                    "Frequently Asked",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent"
                                        },
                                        children: "Questions"
                                    }, void 0, false, {
                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-4 max-w-lg text-sm leading-relaxed text-neutral-400 sm:text-base",
                                children: "Everything you need to know before booking your free consultation."
                            }, void 0, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQItem, {
                                faq: faq,
                                index: index,
                                visible: visible
                            }, faq.question, false, {
                                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 text-center",
                        style: {
                            opacity: visible ? 1 : 0,
                            transition: "opacity 0.6s ease 0.55s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-500",
                            children: [
                                "Still have questions?",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:hello@theprimecrafters.com",
                                    className: "font-medium transition-colors duration-200",
                                    style: {
                                        color: "#C9A84C"
                                    },
                                    onMouseEnter: (e)=>e.target.style.color = "#D4AF61",
                                    onMouseLeave: (e)=>e.target.style.color = "#C9A84C",
                                    children: "Email us directly →"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/ContactFAQ.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s1(ContactFAQ, "GTE9sjGf+X5QncI+FY9HzjjevtI=");
_c1 = ContactFAQ;
var _c, _c1;
__turbopack_context__.k.register(_c, "FAQItem");
__turbopack_context__.k.register(_c1, "ContactFAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinalCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prime/ThePrimeCrafters-Web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const stats = [
    {
        value: "10×",
        label: "Faster workflows"
    },
    {
        value: "24/7",
        label: "AI availability"
    },
    {
        value: "60%",
        label: "Cost reduction"
    }
];
function FinalCTA() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinalCTA.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "FinalCTA.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["FinalCTA.useEffect"], {
                threshold: 0.15
            });
            obs.observe(el);
            return ({
                "FinalCTA.useEffect": ()=>obs.disconnect()
            })["FinalCTA.useEffect"];
        }
    }["FinalCTA.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]",
                style: {
                    background: "radial-gradient(circle, #C9A84C, transparent 65%)",
                    filter: "blur(80px)"
                }
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-6xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    style: {
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(28px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease"
                    },
                    className: "relative overflow-hidden rounded-3xl border border-white/[0.1] p-10 text-center backdrop-blur-xl sm:p-14 md:p-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0",
                            style: {
                                background: "linear-gradient(135deg, rgba(201,168,76,0.13) 0%, rgba(255,255,255,0.02) 60%, rgba(168,124,62,0.08) 100%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full opacity-30",
                            style: {
                                background: "radial-gradient(circle, #C9A84C44, transparent 70%)",
                                filter: "blur(30px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-20",
                            style: {
                                background: "radial-gradient(circle, #A87C3E44, transparent 70%)",
                                filter: "blur(30px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2",
                            style: {
                                background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5 flex items-center justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-8",
                                            style: {
                                                background: "linear-gradient(90deg, transparent, #C9A84C)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold uppercase tracking-[0.18em]",
                                            style: {
                                                color: "#C9A84C"
                                            },
                                            children: "Let's build together"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-8",
                                            style: {
                                                background: "linear-gradient(90deg, #C9A84C, transparent)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl",
                                    children: [
                                        "Ready to Scale",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden sm:block"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent"
                                            },
                                            children: "With AI?"
                                        }, void 0, false, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base md:text-lg",
                                    children: "Stop wasting time on repetitive work and start building scalable AI systems tailored specifically to your business."
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto mt-10 grid max-w-sm grid-cols-3 gap-4 sm:max-w-lg sm:gap-6",
                                    style: {
                                        opacity: visible ? 1 : 0,
                                        transition: "opacity 0.7s ease 0.25s"
                                    },
                                    children: stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold sm:text-3xl",
                                                    style: {
                                                        background: "linear-gradient(135deg, #D4AF61, #A87C3E)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent"
                                                    },
                                                    children: s.value
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-neutral-500 sm:text-sm",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.label, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto my-10 h-px max-w-xs",
                                    style: {
                                        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center gap-4 sm:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://calendly.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] sm:text-base",
                                            style: {
                                                background: "linear-gradient(135deg, #D4AF61, #A87C3E)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                "Schedule Consultation"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:hello@theprimecrafters.com",
                                            className: "group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white transition-all duration-300 sm:text-base",
                                            style: {
                                                border: "1px solid rgba(201,168,76,0.3)",
                                                background: "rgba(201,168,76,0.06)"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = "rgba(201,168,76,0.12)";
                                                e.currentTarget.style.borderColor = "rgba(201,168,76,0.55)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = "rgba(201,168,76,0.06)";
                                                e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 1.5,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this),
                                                "Contact Our Team",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$prime$2f$ThePrimeCrafters$2d$Web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-8 text-xs text-neutral-600",
                                    style: {
                                        opacity: visible ? 1 : 0,
                                        transition: "opacity 0.7s ease 0.45s"
                                    },
                                    children: "No commitment required · Free 30-min strategy call · Response within 24h"
                                }, void 0, false, {
                                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/prime/ThePrimeCrafters-Web/app/contact/components/FinalCTA.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(FinalCTA, "GTE9sjGf+X5QncI+FY9HzjjevtI=");
_c = FinalCTA;
var _c;
__turbopack_context__.k.register(_c, "FinalCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=prime_ThePrimeCrafters-Web_dbc626ea._.js.map