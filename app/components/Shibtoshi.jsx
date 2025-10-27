import Image from "next/image";

const Shibtoshi = () => {
  return (
    <div className="overflow-hidden py-14">
      <div className='custom-container'>
          <div className="bg-[#151515] pt-[55px] pr-[50px] pb-[86px] pl-[136px] rounded-[71px]">
            <div className="grid grid-cols-2 gap-8">
              <div>
                    <h2 className='font-bold lg:text-[62px] leading-16 font-clash mb-7'>Shibtoshi: an open letter from the owner.</h2>
                    <p className='text-white font-normal text-lg leading-7  py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Duis aute irurefugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <div className="relative flex justify-end ">
                      <Image 
                        src='/images/signature.png'
                        alt="signature"
                        width={208}
                        height={0}
                      />
                    </div>
              </div>
              <div>
                 <Image 
                    src='/images/owner.png'
                    alt="signature"
                    width={622}
                    height={622}
                  />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Shibtoshi;