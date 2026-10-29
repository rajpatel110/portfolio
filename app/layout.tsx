import type { Metadata } from "next";
import "./globals.css";

const title = "Raj Patel — Full-stack Developer · Class of 2027";
const description = "Raj Patel, Computer Science & Cyber Security student graduating in 2027. Explore full-stack projects and connect about internships or entry-level roles.";
// Set only after the real public portfolio origin is selected. Never infer localhost.
const configuredUrl = process.env.PORTFOLIO_SITE_URL?.trim();
const publicUrl = configuredUrl ? new URL(configuredUrl) : undefined;
if (publicUrl && (publicUrl.protocol !== "https:" || ["localhost", "127.0.0.1", "[::1]"].includes(publicUrl.hostname) || publicUrl.username || publicUrl.password || publicUrl.pathname !== "/" || publicUrl.search || publicUrl.hash)) {
  throw new Error("PORTFOLIO_SITE_URL must be the public HTTPS portfolio origin, without credentials, path, query, or fragment.");
}

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Raj Patel Portfolio",
  ...(publicUrl ? { metadataBase: publicUrl, alternates: { canonical: "/" } } : {}),
  openGraph: {
    title, description, type: "website", siteName: "Raj Patel Portfolio",
    ...(publicUrl ? { url: publicUrl.href, images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Raj Patel — Full-stack Developer, Class of 2027; open to internships and entry-level roles" }] } : {}),
  },
  twitter: {
    card: publicUrl ? "summary_large_image" : "summary", title, description,
    ...(publicUrl ? { images: [{ url: "/social-preview.png", alt: "Raj Patel — Full-stack Developer, Class of 2027" }] } : {}),
  },
  icons: { icon: { url: "/icon.svg", type: "image/svg+xml" }, apple: "/apple-touch-icon.png" },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
