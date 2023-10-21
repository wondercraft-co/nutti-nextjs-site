import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutti - Cremas de nueces",
  description:
    "Cremas de nueces 100% naturales libres de sal, azúcar, endulzantes artificiales, conservantes, aceites añadidos y aditivos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://www.nutti.co/seo.png" />
        <meta name="twitter:image" content="https://www.nutti.co/seo.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`font-sans antialiased bg-b-back`}>{children}</body>
    </html>
  );
}
