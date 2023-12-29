"use client";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme/theme-provider";
import AuthProvider from "@/components/AuthProvider";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <Suspense fallback={<Loader />}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              {/* <Header2/> */}
              {children}
            </AuthProvider>
            {/* <Footer/> */}
            {/* <Footer2/> */}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
