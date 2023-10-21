import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const hkGrotesk = localFont({
  src: [
    {
      path: "../fonts/HKGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/HKGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/HKGrotesk-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/HKGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hk-grotesk",
});

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
      <body className={`${hkGrotesk.variable} font-sans antialiased bg-b-back`}>{children}</body>
    </html>
  );
}
