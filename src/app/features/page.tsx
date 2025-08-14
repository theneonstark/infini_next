import { Metadata } from "next";
import ServicesPage from "./features";

export const metadata: Metadata = {
  title: "Our Features – Infinimorph Consulting’s Edge in Digital",
  description:
    "Explore the powerful features of Infinimorph Consulting that set us apart in web development, app design, e-commerce solutions, branding, and digital marketing. Delivering innovation and results for your business growth.",
  keywords: "web development, mobile apps, branding, graphic design, accounting, trademark services, InfiniMorph Consulting",
};

export default function page() {
  return <ServicesPage />;
}