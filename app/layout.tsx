import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/provider";
import Navbar from "@/components/site/Navbar";
import { Toaster } from "@/components/ui/sonner";

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
      <body className="bg-background text-foreground antialiased">
        <Providers>
          <Navbar />
          {children}
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
