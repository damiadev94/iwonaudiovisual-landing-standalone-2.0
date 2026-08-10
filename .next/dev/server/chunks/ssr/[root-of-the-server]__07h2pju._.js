module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/landing-standalone/components/ButtonPrimary.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonPrimary",
    ()=>ButtonPrimary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function ButtonPrimary({ href, onClick, children, className = "", size = "md" }) {
    const sizeClasses = {
        sm: "px-6 py-3 text-sm",
        md: "px-10 py-[18px] text-[15px]",
        lg: "px-16 py-[22px] text-[17px]"
    };
    const base = `inline-block font-black uppercase tracking-[0.12em] text-black cursor-pointer border-none transition-transform duration-150 hover:-translate-y-0.5 ${sizeClasses[size]} ${className}`;
    const style = {
        background: "#D4A843",
        clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
        fontFamily: "var(--font-condensed, sans-serif)"
    };
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: base,
            style: style,
            children: children
        }, void 0, false, {
            fileName: "[project]/landing-standalone/components/ButtonPrimary.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: base,
        style: style,
        children: children
    }, void 0, false, {
        fileName: "[project]/landing-standalone/components/ButtonPrimary.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/landing-standalone/components/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$ButtonPrimary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/ButtonPrimary.tsx [app-rsc] (ecmascript)");
;
;
const stats = [
    {
        num: "+450",
        label: "Videoclips filmados"
    },
    {
        num: "Gratis",
        label: "Registro"
    },
    {
        num: "100%",
        label: "Participación automática"
    }
];
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 40px 60px",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: "absolute",
                    inset: 0,
                    background: `
            linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.7) 40%, rgba(8,8,8,0.3) 70%, rgba(8,8,8,0.6) 100%),
            repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(212,168,67,0.04) 99px, rgba(212,168,67,0.04) 100px),
            repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(212,168,67,0.04) 99px, rgba(212,168,67,0.04) 100px)
          `,
                    backgroundColor: "#0d0d0d"
                }
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/Hero.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: "absolute",
                    inset: 0,
                    opacity: 0.035,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "200px"
                }
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/Hero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    fontSize: "11px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#D4A843",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        style: {
                            display: "block",
                            width: "32px",
                            height: "1px",
                            background: "#D4A843",
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/landing-standalone/components/Hero.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    "Productora audiovisual · Buenos Aires · Desde 2022"
                ]
            }, void 0, true, {
                fileName: "[project]/landing-standalone/components/Hero.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    position: "relative",
                    fontFamily: "var(--font-condensed)",
                    fontWeight: 900,
                    fontSize: "clamp(72px, 12vw, 140px)",
                    lineHeight: 0.88,
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    margin: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "block",
                            WebkitTextStroke: "1.5px rgba(242,237,228,0.25)",
                            color: "transparent"
                        },
                        children: "Comenzá"
                    }, void 0, false, {
                        fileName: "[project]/landing-standalone/components/Hero.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "block",
                            color: "#F2EDE4"
                        },
                        children: "tu carrera"
                    }, void 0, false, {
                        fileName: "[project]/landing-standalone/components/Hero.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "block",
                            color: "#D4A843"
                        },
                        children: "audiovisual"
                    }, void 0, false, {
                        fileName: "[project]/landing-standalone/components/Hero.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing-standalone/components/Hero.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    position: "relative",
                    fontSize: "16px",
                    color: "#888",
                    marginTop: "28px",
                    maxWidth: "480px",
                    lineHeight: 1.6,
                    fontStyle: "italic"
                },
                children: "Registrate gratis y participá automáticamente por un videoclip con equipamiento de cine. Sin sellos, sin intermediarios."
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/Hero.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    marginTop: "40px",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$ButtonPrimary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ButtonPrimary"], {
                        href: "/register",
                        size: "md",
                        children: "Registrate gratis"
                    }, void 0, false, {
                        fileName: "[project]/landing-standalone/components/Hero.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#portfolio",
                        style: {
                            color: "#F2EDE4",
                            fontSize: "12px",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontFamily: "var(--font-body)",
                            textDecoration: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                style: {
                                    display: "block",
                                    width: "20px",
                                    height: "1px",
                                    background: "#F2EDE4"
                                }
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/Hero.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            "Ver portfolio"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing-standalone/components/Hero.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing-standalone/components/Hero.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    display: "flex",
                    gap: "48px",
                    marginTop: "60px",
                    flexWrap: "wrap"
                },
                children: stats.map(({ num, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-condensed)",
                                    fontWeight: 900,
                                    fontSize: "36px",
                                    color: "#D4A843",
                                    lineHeight: 1
                                },
                                children: num
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/Hero.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "10px",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: "#888",
                                    marginTop: "4px"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/Hero.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/landing-standalone/components/Hero.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/Hero.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing-standalone/components/Hero.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/landing-standalone/components/Ticker.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ticker",
    ()=>Ticker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const items = [
    "Registro gratuito",
    "Videoclips profesionales",
    "Participación automática",
    "Equipamiento de cine",
    "Conurbano · CABA · Argentina",
    "Sorteos mensuales",
    "Formación estratégica"
];
const doubled = [
    ...items,
    ...items
];
function Ticker() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        style: {
            background: "#D4A843",
            padding: "14px 0",
            overflow: "hidden",
            whiteSpace: "nowrap"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "inline-block",
                animation: "ticker 20s linear infinite"
            },
            children: doubled.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "var(--font-condensed)",
                                fontWeight: 900,
                                fontSize: "14px",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                color: "#000",
                                margin: "0 40px"
                            },
                            children: item
                        }, void 0, false, {
                            fileName: "[project]/landing-standalone/components/Ticker.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "rgba(0,0,0,0.35)",
                                margin: "0 4px"
                            },
                            children: "◆"
                        }, void 0, false, {
                            fileName: "[project]/landing-standalone/components/Ticker.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/landing-standalone/components/Ticker.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/landing-standalone/components/Ticker.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/landing-standalone/components/Ticker.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/landing-standalone/components/ConceptSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConceptSection",
    ()=>ConceptSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ConceptSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "como-funciona",
        style: {
            padding: "100px 40px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D4A843",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                },
                children: "— El concepto"
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "var(--font-condensed)",
                    fontWeight: 900,
                    fontSize: "clamp(42px, 7vw, 80px)",
                    textTransform: "uppercase",
                    lineHeight: 0.9,
                    letterSpacing: "-0.01em"
                },
                children: [
                    "No firmamos",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    "artistas.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        style: {
                            fontStyle: "normal",
                            color: "#D4A843"
                        },
                        children: [
                            "Te damos las",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            "oportunidades."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2",
                style: {
                    gap: "1px",
                    background: "#2A2A2A",
                    border: "1px solid #2A2A2A",
                    marginTop: "60px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:row-span-2",
                        style: {
                            background: "#161616",
                            padding: "40px",
                            borderRight: "1px solid #2A2A2A",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-condensed)",
                                            fontWeight: 900,
                                            fontSize: "80px",
                                            lineHeight: 1,
                                            color: "rgba(212,168,67,0.12)"
                                        },
                                        children: "01"
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-condensed)",
                                            fontWeight: 800,
                                            fontSize: "28px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.02em",
                                            margin: "16px 0 12px"
                                        },
                                        children: "La primera productora audiovisual del país para artistas urbanos independientes"
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "14px",
                                            color: "#888",
                                            lineHeight: 1.7
                                        },
                                        children: "Registrate gratis y participás automáticamente por un videoclip filmado con equipamiento de cine. Cada mes sorteamos entre todos los registrados."
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingTop: "32px",
                                    borderTop: "1px solid #2A2A2A"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "11px",
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            color: "#888",
                                            marginBottom: "8px"
                                        },
                                        children: "Costo de registro"
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-condensed)",
                                            fontWeight: 900,
                                            fontSize: "40px",
                                            color: "#D4A843"
                                        },
                                        children: "Gratis"
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#161616",
                            padding: "40px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-condensed)",
                                    fontWeight: 900,
                                    fontSize: "48px",
                                    lineHeight: 1,
                                    color: "rgba(212,168,67,0.12)"
                                },
                                children: "02"
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-condensed)",
                                    fontWeight: 800,
                                    fontSize: "28px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.02em",
                                    margin: "16px 0 12px"
                                },
                                children: "Resultado en 10 días"
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "14px",
                                    color: "#888",
                                    lineHeight: 1.7
                                },
                                children: "Mandás tu demo. Nosotros evaluamos por mérito. En 10 días sabés si quedaste. Sin azar, sin palancas."
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#161616",
                            padding: "40px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-condensed)",
                                    fontWeight: 900,
                                    fontSize: "48px",
                                    lineHeight: 1,
                                    color: "rgba(212,168,67,0.12)"
                                },
                                children: "03"
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-condensed)",
                                    fontWeight: 800,
                                    fontSize: "28px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.02em",
                                    margin: "16px 0 12px"
                                },
                                children: "Libertad creativa total"
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "14px",
                                    color: "#888",
                                    lineHeight: 1.7
                                },
                                children: "Elegís vos qué canciones filmar. Se filma a tu ritmo. 1-2 revisiones incluidas por videoclip."
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing-standalone/components/ConceptSection.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/landing-standalone/components/BenefitsSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BenefitsSection",
    ()=>BenefitsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const benefits = [
    {
        num: "01",
        tag: "Registro",
        title: "Totalmente gratuito",
        body: "Sin tarjeta, sin compromiso. Te registrás y ya sos parte de la comunidad Iwon."
    },
    {
        num: "02",
        tag: "Sorteo mensual",
        title: "Videoclip en una toma",
        body: "Cada mes sorteamos un videoclip filmado con equipamiento de cine. Participás automáticamente solo por estar registrado."
    },
    {
        num: "03",
        tag: "Formación",
        title: "Cursos de negocio musical",
        body: "Finanzas, marketing, branding, distribución. Lo que no te enseña YouTube."
    },
    {
        num: "04",
        tag: "Producción",
        title: "Promos de filmación",
        body: "Cupos exclusivos a precio especial para registrados. Un videoclip profesional accesible."
    }
];
function BenefitsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: "100px 40px",
            background: "#111111"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D4A843",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                },
                children: "— Qué recibís desde el día 1"
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/BenefitsSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
                style: {
                    gap: "1px",
                    background: "#2A2A2A",
                    border: "1px solid #2A2A2A",
                    marginTop: "60px"
                },
                children: benefits.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "benefit-card",
                        style: {
                            background: "#161616",
                            padding: "36px 28px",
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "benefit-line",
                                "aria-hidden": "true",
                                style: {
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: "2px",
                                    background: "#D4A843",
                                    transform: "scaleX(0)",
                                    transformOrigin: "left",
                                    transition: "transform 0.3s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/BenefitsSection.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "11px",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: "#D4A843",
                                    marginBottom: "20px"
                                },
                                children: [
                                    b.num,
                                    " — ",
                                    b.tag
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing-standalone/components/BenefitsSection.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-condensed)",
                                    fontWeight: 800,
                                    fontSize: "20px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.03em",
                                    marginBottom: "10px"
                                },
                                children: b.title
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/BenefitsSection.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "13px",
                                    color: "#888",
                                    lineHeight: 1.6
                                },
                                children: b.body
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/BenefitsSection.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, b.num, true, {
                        fileName: "[project]/landing-standalone/components/BenefitsSection.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/BenefitsSection.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing-standalone/components/BenefitsSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/landing-standalone/components/PortfolioSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioSection",
    ()=>PortfolioSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const items = [
    {
        id: 1,
        title: "Sombra",
        artist: "Kairo",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Noches",
        artist: "Luna",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Ritmo",
        artist: "Mora",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Ciudad",
        artist: "Dante",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "Vibración",
        artist: "Nico",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "Destino",
        artist: "Juli",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        title: "Bajo la lluvia",
        artist: "Ari",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        title: "Doble filo",
        artist: "Rama",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
    }
];
function PortfolioSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portfolio",
        style: {
            padding: "100px 40px",
            background: "#111111"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D4A843",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                },
                children: "— Portfolio"
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    gap: "24px",
                    marginBottom: "60px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "var(--font-condensed)",
                            fontWeight: 900,
                            fontSize: "clamp(42px, 7vw, 80px)",
                            textTransform: "uppercase",
                            lineHeight: 0.9,
                            letterSpacing: "-0.01em"
                        },
                        children: [
                            "Más de ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                style: {
                                    fontStyle: "normal",
                                    color: "#D4A843"
                                },
                                children: "450 videoclips"
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                                lineNumber: 67,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            "filmados."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "14px",
                            color: "#888",
                            maxWidth: "320px",
                            lineHeight: 1.7
                        },
                        children: "Cada videoclip filmado con equipamiento de cine profesional. Este es nuestro trabajo."
                    }, void 0, false, {
                        fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
                style: {
                    gap: "1px",
                    background: "#2A2A2A"
                },
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group",
                        style: {
                            position: "relative",
                            display: "block",
                            aspectRatio: "16/9",
                            overflow: "hidden",
                            background: "#161616"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.image,
                                alt: `${item.title} — ${item.artist}`,
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.35s ease"
                                },
                                className: "group-hover:scale-105"
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": "true",
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: "rgba(8,8,8,0.75)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    padding: "12px",
                                    opacity: 0,
                                    transition: "opacity 0.3s ease"
                                },
                                className: "group-hover:opacity-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "36px",
                                            height: "36px",
                                            background: "#D4A843",
                                            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "4px",
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "14",
                                            viewBox: "0 0 12 14",
                                            fill: "none",
                                            style: {
                                                marginLeft: "2px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0 0L12 7L0 14V0Z",
                                                fill: "#000"
                                            }, void 0, false, {
                                                fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "var(--font-condensed)",
                                            fontWeight: 800,
                                            fontSize: "13px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.04em",
                                            color: "#F2EDE4",
                                            textAlign: "center",
                                            lineHeight: 1.2,
                                            margin: 0
                                        },
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "11px",
                                            color: "#D4A843",
                                            textAlign: "center",
                                            letterSpacing: "0.08em",
                                            margin: 0
                                        },
                                        children: item.artist
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing-standalone/components/PortfolioSection.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/landing-standalone/components/CalendarSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarSection",
    ()=>CalendarSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const months = [
    {
        num: "01",
        event: "Sorteo de videoclip",
        desc: "Se sortea un videoclip filmado con equipamiento de cine entre todos los registrados.",
        active: true
    },
    {
        num: "02",
        event: "Promos de filmación",
        desc: "Cupos exclusivos a precio especial. Un videoclip profesional solo para la comunidad.",
        active: false
    },
    {
        num: "03",
        event: "Cursos nuevos",
        desc: "Nueva tanda de formación estratégica: marketing, branding y distribución musical.",
        active: false
    },
    {
        num: "04",
        event: "Nuevo sorteo",
        desc: "El ciclo se repite. Seguís participando automáticamente mes a mes.",
        active: false
    }
];
function CalendarSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: "100px 40px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D4A843",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                },
                children: "— El ciclo rotativo"
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/CalendarSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "var(--font-condensed)",
                    fontWeight: 900,
                    fontSize: "clamp(42px, 7vw, 80px)",
                    textTransform: "uppercase",
                    lineHeight: 0.9,
                    letterSpacing: "-0.01em",
                    maxWidth: "600px"
                },
                children: [
                    "Siempre hay",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/landing-standalone/components/CalendarSection.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        style: {
                            fontStyle: "normal",
                            color: "#D4A843"
                        },
                        children: "algo pasando."
                    }, void 0, false, {
                        fileName: "[project]/landing-standalone/components/CalendarSection.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing-standalone/components/CalendarSection.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
                style: {
                    gap: "16px",
                    marginTop: "60px"
                },
                children: months.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            border: `1px solid ${m.active ? "#D4A843" : "#2A2A2A"}`,
                            padding: "28px 24px",
                            background: m.active ? "rgba(212,168,67,0.04)" : "transparent"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-condensed)",
                                    fontWeight: 900,
                                    fontSize: "64px",
                                    lineHeight: 1,
                                    color: m.active ? "rgba(212,168,67,0.2)" : "#2A2A2A"
                                },
                                children: m.num
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/CalendarSection.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-condensed)",
                                    fontWeight: 800,
                                    fontSize: "18px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                    margin: "8px 0",
                                    color: m.active ? "#D4A843" : "#F2EDE4"
                                },
                                children: m.event
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/CalendarSection.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "12px",
                                    color: "#888",
                                    lineHeight: 1.6
                                },
                                children: m.desc
                            }, void 0, false, {
                                fileName: "[project]/landing-standalone/components/CalendarSection.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m.num, true, {
                        fileName: "[project]/landing-standalone/components/CalendarSection.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/CalendarSection.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing-standalone/components/CalendarSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/landing-standalone/components/PricingSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingSection",
    ()=>PricingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$ButtonPrimary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/ButtonPrimary.tsx [app-rsc] (ecmascript)");
;
;
const features = [
    "Registro 100% gratuito",
    "Participación automática en el sorteo mensual",
    "Videoclip en una toma si ganás el sorteo",
    "Acceso a cursos de formación musical",
    "Promos de filmación a precio especial",
    "Sin compromisos ni permanencia"
];
function PricingSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "precios",
        style: {
            padding: "100px 40px",
            background: "#111111"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D4A843",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                },
                children: "— Acceso libre"
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "680px",
                    margin: "60px auto 0",
                    border: "1px solid #D4A843"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "48px",
                            borderBottom: "1px solid #2A2A2A",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            flexWrap: "wrap",
                            gap: "24px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "11px",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: "#888"
                                        },
                                        children: "Registro"
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-condensed)",
                                            fontWeight: 900,
                                            fontSize: "72px",
                                            lineHeight: 1,
                                            color: "#D4A843"
                                        },
                                        children: "Gratis"
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "16px",
                                            color: "#888",
                                            marginTop: "8px"
                                        },
                                        children: "Sin costo · Sin permanencia · Sin compromisos"
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "right"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "11px",
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            color: "#888"
                                        },
                                        children: "Premio mensual"
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-condensed)",
                                            fontWeight: 900,
                                            fontSize: "28px",
                                            color: "#D4A843"
                                        },
                                        children: "1 videoclip"
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "12px",
                                            color: "#888"
                                        },
                                        children: "sorteado entre todos los registrados"
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2",
                        style: {
                            gap: "1px",
                            background: "#2A2A2A"
                        },
                        children: features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "#161616",
                                    padding: "20px 32px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "aria-hidden": "true",
                                        style: {
                                            width: "6px",
                                            height: "6px",
                                            background: "#D4A843",
                                            flexShrink: 0,
                                            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "13px",
                                            lineHeight: 1.4
                                        },
                                        children: f
                                    }, void 0, false, {
                                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, f, true, {
                                fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "32px 48px",
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$ButtonPrimary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ButtonPrimary"], {
                            href: "/register",
                            size: "lg",
                            children: "Registrate gratis"
                        }, void 0, false, {
                            fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing-standalone/components/PricingSection.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing-standalone/components/PricingSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/landing-standalone/components/FAQSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FAQSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FAQSection() from the server but FAQSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/landing-standalone/components/FAQSection.tsx <module evaluation>", "FAQSection");
}),
"[project]/landing-standalone/components/FAQSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FAQSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FAQSection() from the server but FAQSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/landing-standalone/components/FAQSection.tsx", "FAQSection");
}),
"[project]/landing-standalone/components/FAQSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$FAQSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/landing-standalone/components/FAQSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$FAQSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/FAQSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$FAQSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/landing-standalone/components/FooterCTA.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterCTA",
    ()=>FooterCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$ButtonPrimary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/ButtonPrimary.tsx [app-rsc] (ecmascript)");
;
;
function FooterCTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: "120px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    fontFamily: "var(--font-condensed)",
                    fontWeight: 900,
                    fontSize: "22vw",
                    color: "rgba(212,168,67,0.04)",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    letterSpacing: "-0.02em",
                    userSelect: "none"
                },
                children: "IWON"
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/FooterCTA.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    position: "relative",
                    fontFamily: "var(--font-condensed)",
                    fontWeight: 900,
                    fontSize: "clamp(48px, 8vw, 96px)",
                    textTransform: "uppercase",
                    lineHeight: 0.9,
                    margin: 0
                },
                children: [
                    "Tu próximo videoclip",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        style: {
                            fontStyle: "normal",
                            color: "#D4A843",
                            display: "block"
                        },
                        children: "ya tiene productora."
                    }, void 0, false, {
                        fileName: "[project]/landing-standalone/components/FooterCTA.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing-standalone/components/FooterCTA.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "#888",
                    margin: "24px 0 40px",
                    position: "relative",
                    fontStyle: "italic"
                },
                children: "Registrate gratis · Participás automáticamente en el sorteo mensual"
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/FooterCTA.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$ButtonPrimary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ButtonPrimary"], {
                    href: "/register",
                    size: "lg",
                    children: "Registrate gratis"
                }, void 0, false, {
                    fileName: "[project]/landing-standalone/components/FooterCTA.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/landing-standalone/components/FooterCTA.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing-standalone/components/FooterCTA.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/landing-standalone/components/LandingFooter.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingFooter",
    ()=>LandingFooter
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LandingFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LandingFooter() from the server but LandingFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/landing-standalone/components/LandingFooter.tsx <module evaluation>", "LandingFooter");
}),
"[project]/landing-standalone/components/LandingFooter.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingFooter",
    ()=>LandingFooter
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LandingFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LandingFooter() from the server but LandingFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/landing-standalone/components/LandingFooter.tsx", "LandingFooter");
}),
"[project]/landing-standalone/components/LandingFooter.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$LandingFooter$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/landing-standalone/components/LandingFooter.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$LandingFooter$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/LandingFooter.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$LandingFooter$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/landing-standalone/components/LandingNavbar.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingNavbar",
    ()=>LandingNavbar
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LandingNavbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LandingNavbar() from the server but LandingNavbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/landing-standalone/components/LandingNavbar.tsx <module evaluation>", "LandingNavbar");
}),
"[project]/landing-standalone/components/LandingNavbar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingNavbar",
    ()=>LandingNavbar
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LandingNavbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LandingNavbar() from the server but LandingNavbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/landing-standalone/components/LandingNavbar.tsx", "LandingNavbar");
}),
"[project]/landing-standalone/components/LandingNavbar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$LandingNavbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/landing-standalone/components/LandingNavbar.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$LandingNavbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/LandingNavbar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$LandingNavbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/landing-standalone/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$Ticker$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/Ticker.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$ConceptSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/ConceptSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$BenefitsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/BenefitsSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$PortfolioSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/PortfolioSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$CalendarSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/CalendarSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$PricingSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/PricingSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$FAQSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/FAQSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$FooterCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/FooterCTA.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$LandingFooter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/LandingFooter.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$LandingNavbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/components/LandingNavbar.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "landing",
        style: {
            background: "#0A0A0A",
            color: "#F2EDE4"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$LandingNavbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LandingNavbar"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$Ticker$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Ticker"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$ConceptSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConceptSection"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$BenefitsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BenefitsSection"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$PortfolioSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PortfolioSection"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$CalendarSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CalendarSection"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$PricingSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PricingSection"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$FAQSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FAQSection"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$FooterCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FooterCTA"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$components$2f$LandingFooter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LandingFooter"], {}, void 0, false, {
                fileName: "[project]/landing-standalone/app/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing-standalone/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/landing-standalone/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/landing-standalone/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07h2pju._.js.map