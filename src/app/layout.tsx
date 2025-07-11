import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingBubbles from "@/components/FloatingBubbles";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InfiniMorph Consulting",
  description: "You Build company We grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased", "bg-black")}>
        <FloatingBubbles/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
