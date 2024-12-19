import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes to exclude from authentication checks
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)", // Allow sign-in route and any children
  "/sign-up(.*)", // Allow sign-up route and any children
]);

export default clerkMiddleware({
  publicRoutes: isPublicRoute, // Set sign-in and sign-up routes as public
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
