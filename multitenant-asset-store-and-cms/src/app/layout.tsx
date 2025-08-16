import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('relative h-full font-sans antialiased')}
      >
        <main className='realtive flex flex-col min-h-screen'>
          <Navbar />
          <div className="flex-grow flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
