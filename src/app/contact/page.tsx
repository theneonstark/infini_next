import { Metadata } from "next";
import ContactPage from "./contact";

export const metadata: Metadata = {
  title: "Contact Us | InfiniMorph Consulting",
  description:
    "Learn about InfiniMorph Consulting, a dynamic team offering comprehensive digital and business solutions, including web design, development, accounting, graphic design, logo creation, and trademark services.",
  keywords: "web development, mobile apps, branding, graphic design, accounting, trademark services, InfiniMorph Consulting",
};

export default function page() {
  return <ContactPage />;
}