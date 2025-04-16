import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waves Review Platform",
  description: "A modern web application for reviewing and rating products",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
