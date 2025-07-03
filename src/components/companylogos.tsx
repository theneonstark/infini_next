import Image from 'next/image'

export default function LogoCarousel() {

  const logos = [
  { src: '/assets/images/acme.png', alt: "Acme Logo" },
  { src: '/assets/images/quantum.png', alt: "Quantum Logo" },
  { src: '/assets/images/echo.png', alt: "Echo Logo" },
  { src: '/assets/images/celestial.png', alt: "Celestial Logo" },
  { src: '/assets/images/pulse.png', alt: "Pulse Logo" },
  { src: '/assets/images/apex.png', alt: "Apex Logo" },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={100} height={100}/>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={100} height={100}/>
          </li>
        ))}
      </ul>
    </div>
  )
}