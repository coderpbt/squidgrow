import Image from 'next/image';
import React from 'react';

const Platforms = () => {
  return (
      <div className="overflow-hidden py-14">
        <div className='custom-container'>
            <div className='text-center relative z-20'> 
                <h2 className='font-bold lg:text-[81px] leading-20 w-[80%] mx-auto font-clash mb-7'>We Can Be Found on the Following Platforms</h2>
                <p className='text-secondary font-normal text-lg leading-7 py-10'>Our token is now listed on several renowned crypto platforms, ensuring easy access for new holders:</p>

                <div className='flex justify-around gap-5 py-5'>
                  <div className='text-center'>
                     <Image 
                        src='/images/b1.png'
                        alt="signature"
                        width={208}
                        height={0}
                      />
                  </div>
                   <div className='text-center'>
                     <Image 
                        src='/images/b2.png'
                        alt="signature"
                        width={135}
                        height={0}
                      />
                  </div>
                   <div className='text-center'>
                     <Image 
                        src='/images/b3.png'
                        alt="signature"
                        width={157}
                        height={0}
                      />
                  </div>
                   <div className='text-center'>
                     <Image 
                        src='/images/b4.png'
                        alt="signature"
                        width={197}
                        height={0}
                      />
                  </div>

                </div>
            </div>
      </div>
    </div>
  );
};

export default Platforms;