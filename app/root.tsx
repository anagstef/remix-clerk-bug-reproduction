import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LoaderFunction } from "@vercel/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";

export const loader: LoaderFunction = args => rootAuthLoader(args);
export const CatchBoundary = ClerkCatchBoundary();

function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

export default ClerkApp(App);
