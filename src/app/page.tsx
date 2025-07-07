import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";
import { Weare } from "@/components/Weare";
import OurService from "@/components/OurService";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden bg-black">
      <Hero />
      <LogoTicker />
      <Weare/>
      <OurService/>    
      <Features /> 
      <WhyChooseUs/>
      <Testimonials/>
      {/* <Pricing/>      */}
      <FAQs />
      <CallToAction />
      </div>
    </>
  );
}
