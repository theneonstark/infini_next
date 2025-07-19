import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingBubbles from "@/components/FloatingBubbles";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinimorph Consulting | All-in-One Digital, Branding & Tech Solutions",
  description: "Empowering startups and businesses with web development, mobile apps, branding, design, marketing, and business consulting — all under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="facebook-domain-verification" content="ckrm6ng9qs91ukp9qxhgo7yy08tdxb" />
      <meta name="google-site-verification" content="PUA7PODP-QIn6ZTVvPWEXyBQ6mYjxoHBrNf5BmnZOiU" />
      <body className={clsx(dmSans.className, "antialiased", "bg-black")}>
        <FloatingBubbles/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
