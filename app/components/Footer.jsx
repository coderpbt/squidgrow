import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
      <div className="overflow-hidden py-14 bg-[#0d0d0d]">
        <div className='custom-container'>
            <div className="grid grid-cols-[8fr_2fr_2fr] max-md:grid-cols-1">
              <div>
                <Link className='outline-none' href='/'>
                  <Image 
                    src='/images/logo.png'
                    alt="signature"
                    width={231}
                    height={0}
                  />
                </Link>
                   <p className='text-secondary font-normal text-sm leading-7 py-10 mt-16 w-[28%] max-lg:w-[50%]'>SquidGrow is the ultimate secure utility token. Our goal is to rise to the top, providing unparalleled security for your investment.</p>                
              </div>
              <div className="flex justify-center gap-7">
                <div>
                  <Link href="#">
                    <Image 
                      src='/images/envolpe.svg'
                      alt="signature"
                      width={20}
                      height={0}
                    />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <Image 
                      src='/images/twitter.svg'
                      alt="signature"
                      width={20}
                      height={0}
                    />
                  </Link>
                </div>
              </div>

              <div>
                  <ul className='flex flex-col gap-3.5'>
                    <li><Link className="text-lg" href='#'>Home</Link></li>
                    <li><Link className="text-lg" href='#'>About US</Link></li>
                    <li><Link className="text-lg" href='#'>SGS</Link></li>
                    <li><Link className="text-lg" href='#'>Inkubate</Link></li>
                    <li><Link className="text-lg" href='#'>SilentSwap</Link></li>
                    <li><Link className="text-lg" href='#'>Bridge</Link></li>
                    <li><Link className="text-lg" href='#'>Knox Locker</Link></li>
                  </ul>
              </div>

            </div>
        </div>
    </div>
  );
};

export default Footer;