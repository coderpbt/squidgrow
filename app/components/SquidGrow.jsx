import Image from "next/image";
import Link from "next/link";

const SquidGrow = () => {
    return (
        <div className="overflow-hidden py-14">
            <div className='custom-container'>
                <div className="relative flex items-center h-[1060px] max-w-[1728px] mx-auto overflow-hidden max-lg:flex-col">
                    <div className='ml-40 w-[55%] relative z-20 max-lg:ml-0 max-lg:w-full max-lg:text-center'> 
                        <h2 className='font-bold text-[81px] leading-20 font-clash w-[70%] max-lg:mx-auto max-md:text-[40px] max-md:leading-10'>SquidGrow Utility Token</h2>
                        <p className='text-secondary font-normal text-lg leading-7 w-[55%] py-7 max-lg:w-[75%] max-lg:mx-auto max-md:w-[95%] '> Dont miss out! Token is available on numerous renowned crypto platforms to make sure new holders have easy access to it.</p>

                        <Link className='mt-16 inline-block py-3.5 px-9 font-semibold text-[14px] font-atyp-text bg-primary rounded-[50px] hover:bg-white hover:text-black transition duration-700 ease-in-out' href="#">Buy on ETH</Link>
                    </div>
                    <div className="absolute z-30 w-[918px] h-[873px] object-cover top-[95px] right-32 max-lg:w-full max-lg:right-8 max-lg:top-[390px] max-md:top-[490px]">
                        <Image
                            src='/images/token.png'
                            alt="token"
                            width={918}
                            height={900}
                            className="max-lg:w-[660px]"
                        />
                    </div>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute right-0 top-0 w-[960px] h-[1060px] object-cover max-lg:top-0 max-lg:right-0 max-lg:h-[660px] max-lg:object-cover max-lg:relative max-md:w-[660px]"
                        >
                        <source src="/images/token.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>    
    );
};

export default SquidGrow;