import Image from "next/image";
import Link from "next/link";

const Marketplace = () => {
  return (
      <div className="overflow-hidden py-14">
            <div className='custom-container'>
                <div className='text-center'> 
                  <h2 className='font-bold text-[55px] leading-20 font-clash max-lg:text-[40px] max-md:leading-10'>SquidGrow Ecosystem</h2>
                  <p className='text-secondary font-normal text-lg leading-7 w-[46%] mx-auto py-7 max-lg:w-[65%] max-md:w-[95%]'> SquidGrows Ecosystem has multiple products including a DEX, NFT Marketplace, & Liquidity Locker.</p>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-7 max-lg:grid-cols-2 max-md:grid-cols-1">

                  <div className="bg-[#151515] pt-5 pb-8 rounded-[28px] hover:shadow-[0px_4px_69px_0px_#6015ec] transition duration-300 group">
                     <span className="pl-10 pb-3.5 pr-10 text-sm font-normal block">SWAP</span>
                     <hr className="border-[#646464]" />
                     <h2 className='pl-10 pb-3.5 pr-10 font-bold text-[42px] leading-20 font-clash max-xl:text-[42px]'>SilentSwap</h2>
                     <p className='text-secondary pl-10 pb-3.5 pr-10 font-normal text-lg leading-7  mx-auto py-7'> Seamless swaps, ultimate privacy, and cross-chain freedom. Unlock the future of trading now.</p>                     
                     <Image
                        src="/images/mobile.png"
                        alt="mobile"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="transition-transform duration-300 group-hover:translate-y-[-7px]"
                      />
                      <Link className='ml-10 mb-3.5 mr-10 mt-16 inline-block py-3.5 px-9 font-semibold text-[14px] font-atyp-text bg-primary rounded-[50px] hover:bg-white hover:text-black transition duration-700 ease-in-out' href="#"> Visit Website</Link>
                  </div>

                  <div className="bg-[#151515] pt-5 pb-8 rounded-[28px] hover:shadow-[0px_4px_69px_0px_#6015ec] transition duration-300 group">
                     <span className="pl-10 pb-3.5 pr-10 text-sm font-normal block">DECENTRALIZED EXCHANGE</span>
                     <hr className="border-[#646464]" />
                     <h2 className='pl-10 pb-3.5 pr-10 font-bold text-[42px] leading-20 font-clash max-xl:text-[42px]'>SGS</h2>
                     <p className='text-secondary pl-10 pb-3.5 pr-10 font-normal text-lg leading-7  mx-auto py-7'> Trade smarter, faster, and safer with SGS. Experience the decentralized exchange redefined.</p>                     
                     <Image
                        src="/images/mobile2.png"
                        alt="mobile"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="transition-transform duration-300 group-hover:translate-y-[-7px]"
                      />
                      <Link className='ml-10 mb-3.5 mr-10 mt-16 inline-block py-3.5 px-9 font-semibold text-[14px] font-atyp-text bg-primary rounded-[50px] hover:bg-white hover:text-black transition duration-700 ease-in-out' href="#"> Visit Website</Link>
                  </div>

                  <div className="bg-[#151515] pt-5 pb-8 rounded-[28px] hover:shadow-[0px_4px_69px_0px_#6015ec] transition duration-300 group">
                     <span className="pl-10 pb-3.5 pr-10 text-sm font-normal block">NFT MARKETPLACE</span>
                     <hr className="border-[#646464]" />
                     <h2 className='pl-10 pb-3.5 pr-10 font-bold text-[42px] leading-20 font-clash max-xl:text-[42px]'>Inkubate</h2>
                     <p className='text-secondary pl-10 pb-3.5 pr-10 font-normal text-lg leading-7  mx-auto py-7'> Discover, trade, and thrive on Inkubate Net – the marketplace where ideas come to life.</p>                     
                     <Image
                        src="/images/mobile3.png"
                        alt="mobile"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="transition-transform duration-300 group-hover:translate-y-[-7px]"
                      />
                      <Link className='ml-10 mb-3.5 mr-10 mt-16 inline-block py-3.5 px-9 font-semibold text-[14px] font-atyp-text bg-primary rounded-[50px] hover:bg-white hover:text-black transition duration-700 ease-in-out' href="#"> Visit Website</Link>
                  </div>

                </div>
          </div>
      </div>
  );
};

export default Marketplace;