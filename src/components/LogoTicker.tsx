// import acmeLogo from "../assets/images/acme.png";
// import quantumLogo from "../assets/images/quantum.png";
// import echoLogo from "../assets/images/echo.png";
// import celestialLogo from "../assets/images/celestial.png";
// import pulseLogo from "../assets/images/pulse.png";
// import apexLogo from "../assets/images/apex.png";
// import Image from 'next/image';
import LogoCarousel from "./companylogos";

// const images = [
//   { src: acmeLogo, alt: "Acme Logo" },
//   { src: quantumLogo, alt: "Quantum Logo" },
//   { src: echoLogo, alt: "Echo Logo" },
//   { src: celestialLogo, alt: "Celestial Logo" },
//   { src: pulseLogo, alt: "Pulse Logo" },
//   { src: apexLogo, alt: "Apex Logo" },
// ];

export const LogoTicker = () => {
  return(
    <div className="text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="md:text-lg text-center text-white/70 mb-2">Trusted Digital Partner for 100+ Businesses</h2>
        <p className="md:text- text-center text-white/70 mb-10 md:mb-16">From startups to enterprises, brands trust us for scalable websites, powerful apps, and growth-focused marketing.</p>
        <LogoCarousel/>      
      </div>

    </div>
  )
};
