import Link from 'next/link';
import dex from '../../public/images/dex.svg';
import eth from '../../public/images/eth.svg';
import Image from 'next/image';

const Banner = () => {
  return (
    <>
      <div className='pt-9 pb-20 relative overflow-hidden max-lg:pt-11'>
        <div className='custom-container'>
          <div className='relative z-10'> 
            <h2 className='font-bold text-[75px] w-[45%] leading-20 font-clash max-lg:text-center max-lg:w-full max-lg:text-[65px] max-md:text-[55px] max-md:leading-16'>Empowering Security. Unleashing Utility.</h2>
            <p className='text-secondary font-normal text-lg leading-7 w-[28%] py-10 max-lg:w-[60%] max-lg:mx-auto max-md:w-[95%]'>Introducing Squidgrow, ultimate secure utility-meme token on Ethereum. Our goal is to rise to the top, providing unparalleled technology and fun.</p>
            <div className='flex items-center gap-5 flex-wrap max-lg:justify-center'>
              <Link className='flex items-center gap-2 border border-white py-3 px-5 rounded-[50px]' href="#"> <Image src={eth} alt='eth' /> ETH Contract</Link>
              <Link className='flex items-center gap-2 border border-white py-3 px-5 rounded-[50px]' href="#"> <Image src={dex} alt='eth' /> DEXTools</Link>
            </div>
          </div>
        </div>
        <div>
         <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute -bottom-20 left-[27vw] w-[1838px] h-[1034px] rotate-180 max-lg:left-0 max-lg:right-0 max-lg:mx-auto max-lg:w-[1060px] max-lg:object-cover"          
        >
          <source src="/images/banner-video.mp4" type="video/mp4" />
        </video>


        </div>
      </div>
      
    </>
  );
};

export default Banner;