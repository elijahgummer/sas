import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Exclude static files, Clerk routes, and all variations of sign-in/sign-up
    "/((?!api|_next/static|_next/image|favicon.ico|logo.png|sign-in(.*)|sign-up(.*)|sso-callback|_clerk|.*\\..*).*)",
  ],
};