import {NextResponse} from "next/server"

const PUBLIC_ROUTES = ["/login"];

export function proxy(request) {
    const {pathname} = request.nextUrl;
    const isPublicRoute = PUBLIC_ROUTES.includes(pathname)
    const isAuthApi = pathname.startsWith("/api/login") || pathname.startsWith("/api/logout")

    if (isPublicRoute || isAuthApi){
        return NextResponse.next();
    }

    const token = request.cookies.get("auth_token")
    if(!token){
        const loginUrl = new URL("/", request.url);
        loginUrl.searchParams.set("from", pathname);

        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}

export const config ={
    matcher : ["/((?!_next/static|_next/image|favicon.ico).*)"]
}