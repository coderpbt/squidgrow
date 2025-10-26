import Link from 'next/link';
import React from 'react';
import dex from '../../public/images/dex.svg';
import eth from '../../public/images/eth.svg';
import Image from 'next/image';

const Banner = () => {
  return (
    <>
      <div className='pt-36 pb-20 relative overflow-hidden'>
        <div className='custom-container'>
          <div className='relative z-10'> 
            <h2 className='font-bold lg:text-[75px] w-[45%] leading-20 font-clash'>Empowering Security. Unleashing Utility.</h2>
            <p className='text-secondary font-normal text-lg leading-7 w-[28%] py-10'>Introducing Squidgrow, ultimate secure utility-meme token on Ethereum. Our goal is to rise to the top, providing unparalleled technology and fun.</p>
            <div className='flex items-center gap-5 flex-wrap'>
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
          className="absolute -bottom-20 left-[27vw] w-[1838px] h-[1034px] rotate-180"
        >
          <source src="/images/banner-video.mp4" type="video/mp4" />
        </video>


        </div>
      </div>
      
    </>
  );
};

export default Banner;