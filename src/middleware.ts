import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// SET TO true TO PAUSE WEBSITE, false TO UNPAUSE / GO LIVE
const IS_PAUSED = true;

export function middleware(request: NextRequest) {
  if (!IS_PAUSED) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow static files, internal assets, images, and api health check
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/projects") ||
    pathname === "/paused" ||
    pathname === "/favicon.ico" ||
    pathname === "/api/health"
  ) {
    return NextResponse.next();
  }

  // Redirect / rewrite any visitor to the paused screen
  const url = request.nextUrl.clone();
  url.pathname = "/paused";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
