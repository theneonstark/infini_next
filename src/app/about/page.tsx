// app/about/page.tsx
import { Metadata } from "next";
import AboutPage from "./about";

export const metadata: Metadata = {
  title: "About Us | InfiniMorph Consulting",
  description:
    "Learn about InfiniMorph Consulting, a dynamic team offering comprehensive digital and business solutions, including web design, development, accounting, graphic design, logo creation, and trademark services.",
  keywords: "web development, mobile apps, branding, graphic design, accounting, trademark services, InfiniMorph Consulting",
};

export default function page() {
  return <AboutPage />;
}