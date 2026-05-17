import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-header"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "NITHIN S — Data Analyst",
  description: "A minimal, aesthetic portfolio powered by Three.js and Framer Motion.",
  icons: {
    icon: '/ns-logo-round.png?v=3',
  }
};

import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="scanline" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
