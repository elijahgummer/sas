import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect everything except these public/auth/static routes:
    "/((?!api/|_next/|favicon.ico|logo.png|sign-in|sign-in/.*|sign-up|sign-up/.*|sso-callback|_clerk/).*)",
  ],
};