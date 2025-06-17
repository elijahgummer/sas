import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  // Protect all routes except the public ones
  matcher: [
    /*
      Exclude static files, api, sign-in, sign-up, etc.
      Adjust as needed for your app's public routes.
    */
    "/((?!api|_next/static|_next/image|favicon.ico|logo.png|sign-in|sign-up|.*\\..*).*)",
  ],
};