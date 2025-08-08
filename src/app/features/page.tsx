import { Metadata } from "next";
import ServicesPage from "./features";

export const metadata: Metadata = {
  title: "Features | InfiniMorph Consulting",
  description:
    "Learn about InfiniMorph Consulting, a dynamic team offering comprehensive digital and business solutions, including web design, development, accounting, graphic design, logo creation, and trademark services.",
  keywords: "web development, mobile apps, branding, graphic design, accounting, trademark services, InfiniMorph Consulting",
};

export default function page() {
  return <ServicesPage />;
}