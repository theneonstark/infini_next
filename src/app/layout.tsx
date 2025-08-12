import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import Script from "next/script";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingBubbles from "@/components/FloatingBubbles";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Development Service In NCR Dehli  All In One Bussines And Tech service-Infinimorph consulting",
  description:
    "2000+ World Class Websites made. 1k+ Satisfied Clients. Contact the Top Web Development Company in Delhi-NCR for Best Web Designing Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.infinimorphconsulting.com" />
        <meta name="keywords" content="web development company India, ecommerce development, SEO services, UI UX design agency, mobile app development, startup branding, Infinimorph Consulting" />
        <meta name="description" content="Empowering startups and businesses with web development, mobile apps, branding, design, marketing, and business consulting — all under one roof." />

        {/* Facebook & Google Site Verification */}
        <meta name="facebook-domain-verification" content="ckrm6ng9qs91ukp9qxhgo7yy08tdxb" />
        <meta name="google-site-verification" content="PUA7PODP-QIn6ZTVvPWEXyBQ6mYjxoHBrNf5BmnZOiU" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Web Development Company In Delhi NCR" />
        <meta property="og:site_name" content="InfiniMorph Consulting" />
        <meta property="og:url" content="https://www.infinimorphconsulting.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/492063890_2097305934029009_3821675367376804443_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oyGVoeQeg5YQ7kNvwFo0-ES&_nc_oc=AdnCmo7_-i93WEasuF45RxiD-psIJFshRrn7dDp_K-ZQIQNW5q14b_G8rbxr6f34XOOv5oBtohJqBfLJeq3LUeAl&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=KigyIyPXUlXgfgFYBJE2Jw&oh=00_AfQfO3dl5X0Kj6LC-L5tb2LniAzSgImVD9_kZpa5_DxIYQ&oe=688FAC77" />

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GJKYFVG71S"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GJKYFVG71S');
            `,
          }}
        />
      </head>
      <body className={clsx(dmSans.className, "antialiased", "bg-black")}>
        <Navbar />
        {children}
        <Footer />
        {/* Floating bubbles placed after main layout to avoid blocking layout paint */}
        <FloatingBubbles />
      </body>
    </html>
  );
}
