import Image from 'next/image';

export const Footer = () => {
  return(
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
    <div className="container">
      <div className='flex flex-col gap-5 sm:flex-row sm:justify-between'>
        <div className="text-center"> 2024 Eldora UI All rights are reserved</div>
        <ul className='flex justify-center gap-2.5'>
          <li><Image src={'/assets/icons/x-social.svg'} width={100} height={100} alt='x-icon'/></li>
          <li><Image src={'/assets/icons/linkedin.svg'} width={100} height={100} alt='linkedin-icon'/></li>
          <li><Image src={'/assets/icons/youtube.svg'} width={100} height={100} alt='youtube-icon'/></li>
          <li><Image src={'/assets/icons/insta.svg'} width={100} height={100} alt='instagram-icon'/></li>
        </ul>
      </div>

    </div>
    </footer>
  )
};
