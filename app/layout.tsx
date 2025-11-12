import type { Metadata } from "next";
import "./globals.css";
import Providers  from "@/app/provider";
import Navbar from "@/components/site/Navbar";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Built with Next.js 16 and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-background text-foreground"
      >
      <Providers>
        <Navbar />
        {children}
      </Providers>
      </body>
    </html>
  );
}
