// app/about/page.tsx
import { Metadata } from "next";
import AboutPage from "./about";

export const metadata: Metadata = {
  title: "About Infinimorph Consulting – Your Growth in Digital",
  description:
    "Discover Infinimorph Consulting, your trusted partner in web design, app development, e-commerce, branding, and digital marketing. We create innovative solutions that drive growth and transform your online presence.",
  keywords: "web development, mobile apps, branding, graphic design, accounting, trademark services, InfiniMorph Consulting",
};

export default function page() {
  return <AboutPage />;
}