import type { Metadata } from "next";
import "./globals.css";
import FinalThemeProvider from "./components/theme-provider";
import DisplayMode from "./components/display-mode";
import { ReactNode } from "react";
import {Analytics} from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Trevor Evans Portfolio",
  description: "Website showcasing background & development skills",
};

interface RootLayoutProps {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <FinalThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <DisplayMode className="absolute top-20 right-20 z-10" />
          {children}
          <Analytics />
        </FinalThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
