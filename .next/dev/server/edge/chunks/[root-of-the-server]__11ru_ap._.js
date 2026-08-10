(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__11ru_ap._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing-standalone/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
;
;
const AUTH_ROUTES = [
    "/login",
    "/",
    "/register",
    "/confirm-email",
    "/reset-password"
];
async function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const requestId = crypto.randomUUID();
    // 1. EXCEPCIÓN PARA MERCADO PAGO
    // Permitimos que esta ruta pase sin verificar usuario ni sesión
    if (pathname.startsWith("/api/webhooks/mercadopago")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Inicializar respuesta permitiendo que la request continúe
    let supabaseResponse = __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request
    });
    // Crear cliente Supabase con soporte de cookies para refrescar la sesión
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createServerClient"])(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
        cookies: {
            getAll () {
                return request.cookies.getAll();
            },
            setAll (cookiesToSet) {
                cookiesToSet.forEach(({ name, value })=>request.cookies.set(name, value));
                supabaseResponse = __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                    request
                });
                cookiesToSet.forEach(({ name, value, options })=>supabaseResponse.cookies.set(name, value, options));
            }
        }
    });
    // IMPORTANTE: no usar getSession() — getUser() valida el token contra el servidor
    const { data: { user } } = await supabase.auth.getUser();
    if (user && AUTH_ROUTES.includes(pathname)) {
        // Usuario autenticado en ruta de auth → redirigir al dashboard
        return __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dashboard", request.url));
    }
    if (!user && !AUTH_ROUTES.includes(pathname)) {
        // Usuario no autenticado en ruta protegida → redirigir al login
        return __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", request.url));
    }
    // Email no confirmado → forzar confirmación antes de acceder a rutas protegidas
    if (user && !AUTH_ROUTES.includes(pathname) && !user.email_confirmed_at) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/confirm-email", request.url));
    }
    // Verificar role=admin para rutas /admin/* y /api/admin/*
    const isAdminRoute = pathname.startsWith("/admin") || pathname.startsWith("/api/admin");
    if (user && isAdminRoute) {
        // Usar service role key para bypassear RLS y leer el rol del usuario
        const adminClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        });
        const { data: profile, error: profileError } = await adminClient.from("profiles").select("role").eq("id", user.id).single();
        if (profileError) {
            console.error("[middleware] Error fetching profile:", profileError.message);
        }
        if (!profile || profile.role !== "admin") {
            // API routes: devolver 403 en vez de redirect HTML
            if (pathname.startsWith("/api/")) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Forbidden"
                }, {
                    status: 403
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dashboard", request.url));
        }
        // Pasar el rol verificado como request header para que el layout
        // no necesite hacer otra query a la DB
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-pathname", pathname);
        requestHeaders.set("x-user-role", "admin");
        requestHeaders.set("x-request-id", requestId);
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
            request: {
                headers: requestHeaders
            }
        });
        response.headers.set("x-request-id", requestId);
        // Preservar las cookies de sesión que Supabase pudo haber refrescado
        for (const { name, value, ...options } of supabaseResponse.cookies.getAll()){
            response.cookies.set(name, value, options);
        }
        return response;
    }
    // Para el resto de rutas, también inyectar el pathname
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", pathname);
    requestHeaders.set("x-request-id", requestId);
    const finalResponse = __TURBOPACK__imported__module__$5b$project$5d2f$landing$2d$standalone$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: requestHeaders
        }
    });
    finalResponse.headers.set("x-request-id", requestId);
    for (const { name, value, ...options } of supabaseResponse.cookies.getAll()){
        finalResponse.cookies.set(name, value, options);
    }
    return finalResponse;
}
const config = {
    matcher: [
        "/",
        "/login",
        "/register",
        "/confirm-email",
        "/reset-password",
        "/update-password",
        "/dashboard/:path*",
        "/subir-cancion/:path*",
        "/perfil/:path*",
        "/cursos/:path*",
        "/sorteos/:path*",
        "/promos/:path*",
        "/seleccion/:path*",
        "/suscripcion/:path*",
        "/admin/:path*",
        "/api/admin/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__11ru_ap._.js.map