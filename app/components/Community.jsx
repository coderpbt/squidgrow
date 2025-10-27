import Link from "next/link";

const Community = () => {
    return (
        <div className="overflow-hidden py-14">
            <div className='custom-container'>
                <div className='text-center relative z-20'> 
                    <h2 className='font-bold lg:text-[81px] leading-20 font-clash mb-7'>The Community</h2>
                    <p className='text-secondary font-normal text-lg leading-7 w-[49%] mx-auto py-10'>Empowering our community is at the heart of SquidGrows philosophy.Through a user-centric approach, we prioritize your needs, ideas, and feedback, cultivating a dynamic community that propels the platforms evolution in the ever-changing crypto landscape </p>

                    <Link className='mt-16 inline-block py-3.5 px-9 font-semibold text-[14px] font-atyp-text bg-primary rounded-[50px] hover:bg-white hover:text-black transition duration-700 ease-in-out' href="#">Join The Community</Link>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-16">
                    <div className="text-center">
                        <h2 className="text-primary font-bold lg:text-[70px] leading-20 font-clash">+23k</h2>
                        <h4 className="text-3xl font-semibold leading-16 text-white">Holders</h4>
                    </div>
                    <div className="text-center">
                        <h2 className="text-primary font-bold lg:text-[70px] leading-20 font-clash">+500k</h2>
                        <h4 className="text-3xl font-semibold leading-16 text-white">Transactions</h4>
                    </div>
                    <div className="text-center">
                        <h2 className="text-primary font-bold lg:text-[70px] leading-20 font-clash">70.3M</h2>
                        <h4 className="text-3xl font-semibold leading-16 text-white">Market Cap</h4>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Community;