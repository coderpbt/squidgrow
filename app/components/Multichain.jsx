import Link from "next/link";

const Multichain = () => {
    return (
         <div className="overflow-hidden py-14 relative">
            <div className="relative text-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mx-auto w-[1096px] h-[1158px] object-cover"
                    >
                    <source src="/images/video.mp4" type="video/mp4" />
                </video>
            </div>       
            <div className='text-center absolute z-20 top-[145px] bottom-0 mx-auto flex justify-center flex-col items-center w-[580px] left-0 right-0 max-md:w-full'> 
                <h2 className='font-bold text-[81px] leading-20 font-clash max-lg:text-[75px] max-md:text-[55px] max-md:leading-12'>Multichain Capabilities</h2>
                <p className='text-white font-normal text-lg leading-7 mx-auto py-10 max-md:w-[95%]'>SquidGrow is a revolutionary new type of token: a Utility-Meme multichain project - the best of both worlds and allows smooth transactions across different blockchains. Its Multi-Chain Capabilities create a harmonious crypto ecosystem, thanks to the power of interoperability. </p>

                <Link className='mt-16 inline-block py-3.5 px-9 font-semibold text-[14px] font-atyp-text bg-primary rounded-[50px] hover:bg-white hover:text-black transition duration-700 ease-in-out' href="#">Launch Swap</Link>
            </div>            
        </div>
    );
};

export default Multichain;