import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { createProtectedClient } from "@repo/utils/createProtectedClient";
import { cookies } from "next/headers";
import { PROTECTED_PATHS } from "@/protected/constants/paths";
import { SafeObject } from "@repo/utils/safeObject";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

const PUBLIC_API = ["trpc", "auth"].map((api) => `^/api/${api}(/.*)?$`);

const WIDGET_API = new RegExp(`^/api/trpc/widget(.*)?$`);

const PUBLIC_ROUTES = new RegExp(["^/$", ...PUBLIC_API].join("|"));

const PROTECTED_ROUTES = new RegExp(
  SafeObject.keys(PROTECTED_PATHS)
    .map((path) => {
      switch (path) {
        case "/profile":
          return `^${path}$`;
        default:
          return `^${path}(/.*)?$`;
      }
    })
    .join("|")
);

const PROTECTED_DEFAULT: keyof typeof PROTECTED_PATHS = "/feedbacks";

const SIGN_IN = "/login";

export const middleware = async (request: NextRequest) => {
  const result =
    (await preflightCheck(request)) ??
    (await publicPageCheck(request)) ??
    (await sessionCheck(request));

  return result ?? NextResponse.redirect(new URL("/", request.nextUrl));
};

const getCORSHeaders = (request: NextRequest): HeadersInit => {
  const headers: HeadersInit = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, x-trpc-source",
  };

  const origin = request.headers.get("origin");

  const isLocalhost = origin?.startsWith("http://localhost") ?? false;

  const isWidgetRequest = WIDGET_API.test(request.nextUrl.pathname);

  if (origin && (isWidgetRequest || isLocalhost)) {
    headers["Access-Control-Allow-Origin"] = "*";
  }

  return headers;
};

const preflightCheck: MiddlewareType = async (request) => {
  const isPreflight = request.method === "OPTIONS";

  if (!isPreflight) return;

  const headers = getCORSHeaders(request);

  return NextResponse.json({}, { headers });
};

const publicPageCheck: MiddlewareType = async (request) => {
  const { pathname } = request.nextUrl;

  const isPublicPath = PUBLIC_ROUTES.test(pathname);

  if (!isPublicPath) return;

  const headers = getCORSHeaders(request);

  return NextResponse.next({ headers });
};

const sessionCheck: MiddlewareType = async (request) => {
  try {
    const { pathname } = request.nextUrl;
    const cookieStore = await cookies();
    const db = createProtectedClient({ cookies: cookieStore });
    const session = (await db.auth.getSession()).data?.session;
    if (session) {
      if (pathname === SIGN_IN || !PROTECTED_ROUTES.test(pathname))
        return NextResponse.redirect(
          new URL(PROTECTED_DEFAULT, request.nextUrl)
        );
      return NextResponse.next();
    } else if (pathname === SIGN_IN) return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL(PROTECTED_DEFAULT, request.nextUrl));
  }
};

type MiddlewareType<
  T extends NextRequest = NextRequest,
  R = NextResponse | undefined,
> = (_req: T) => Promise<R>;
