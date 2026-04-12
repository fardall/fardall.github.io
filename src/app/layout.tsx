import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ENGINEER_PORTFOLIO | Technical Monolith",
  description: "High-performance mobile application architecture and development.",
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
