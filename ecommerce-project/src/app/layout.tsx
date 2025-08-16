import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/contants";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <html lang="en" >
        <body
          suppressHydrationWarning
          className={` ${inter.className} antialiased`}
        >
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </ThemeProvider>
  );
}
