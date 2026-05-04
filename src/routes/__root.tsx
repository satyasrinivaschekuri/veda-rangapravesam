import { Outlet, createRootRoute, Link } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-primary">404</h1>
        <p className="mt-2 text-muted-foreground">Page not found.</p>
        <Link to="/" className="btn-maroon inline-block mt-6">Go home</Link>
      </div>
    </div>
  );
}

function RootLayout() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Veda Chekuri — Kuchipudi Rangapravesam</title>
        <meta name="description" content="Join us in celebrating Veda Chekuri's Kuchipudi Rangapravesam on August 2, 2026 at the Richard J. Ernst Community Cultural Center, Annandale, VA." />
        <meta property="og:title" content="Veda Chekuri — Kuchipudi Rangapravesam" />
        <meta property="og:description" content="A solo classical debut. August 2, 2026 — Annandale, VA." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Lora:wght@400;500;600&family=Great+Vibes&display=swap" />
      </head>
      <body>
        <Outlet />
      </body>
    </>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundComponent,
});
