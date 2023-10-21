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
      <body className={`font-sans antialiased bg-b-back`}>{children}</body>
    </html>
  );
}
