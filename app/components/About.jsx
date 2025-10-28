import Link from "next/link";

const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="custom-container">
        <div className="bg-[url(/images/about.png)] rounded-[64px] bg-cover bg-no-repeat bg-center max-w-[1407px] mx-auto py-12">
            <span className="text-primary font-bold text-[25px] leading-5 mb-5 inline-block">HOT</span>
            <h2 className='font-bold text-[45px] w-[45%] leading-14 font-clash max-lg:text-[55px] max-lg:w-full max-md:text-[40px]'>Introducing SilentSwap: The Ultimate Privacy.</h2>
            <p className='text-secondary font-normal text-lg leading-7 w-[35%] py-10 max-lg:w-[70%] max-md:w-[95%]'>Seamless swaps, ultimate privacy, and cross-chain freedom. Unlock the future of trading now. Seamless swaps, ultimate privacy, and cross-chain freedom. Unlock the future of trading now.</p>

            <Link className='mt-16 inline-block py-3.5 px-9 font-semibold text-[14px] font-atyp-text bg-primary rounded-[50px] hover:bg-white hover:text-black transition duration-700 ease-in-out' href="#"> Visit Website</Link>
        </div>
      </div>
    </div>
  );
};

export default About;